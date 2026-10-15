-- Proposal migration: DO NOT run against an unrelated Neon project.
-- Needs verified server JWT, separate least-privilege runtime DB role,
-- transactional SET LOCAL app.user_sub/app.role, consent and moderation review.
CREATE SCHEMA IF NOT EXISTS mwx;
CREATE TABLE IF NOT EXISTS mwx.members (subject text PRIMARY KEY,display_name text NOT NULL,joined_at timestamptz DEFAULT now());
CREATE TABLE IF NOT EXISTS mwx.consents (id uuid PRIMARY KEY DEFAULT gen_random_uuid(),member_sub text NOT NULL REFERENCES mwx.members(subject),purpose text NOT NULL,version text NOT NULL,granted_at timestamptz DEFAULT now(),revoked_at timestamptz);
CREATE TABLE IF NOT EXISTS mwx.progress (member_sub text REFERENCES mwx.members(subject),level_id integer CHECK (level_id BETWEEN 1 AND 100),practiced_at timestamptz DEFAULT now(),PRIMARY KEY(member_sub,level_id));
CREATE TABLE IF NOT EXISTS mwx.reviews (id uuid PRIMARY KEY DEFAULT gen_random_uuid(),item_kind text CHECK(item_kind IN ('champion','story','reference','poster')),item_key text NOT NULL,reviewer_sub text REFERENCES mwx.members(subject),status text NOT NULL CHECK(status IN ('pending','needs_correction','source_checked','approved_for_publication')),note text DEFAULT '',source_url text,updated_at timestamptz DEFAULT now());
CREATE TABLE IF NOT EXISTS mwx.poster_assets (id uuid PRIMARY KEY DEFAULT gen_random_uuid(),episode_slug text NOT NULL,page_number integer NOT NULL CHECK(page_number>0),object_key text UNIQUE NOT NULL,sha256 text NOT NULL CHECK(sha256 ~ '^[0-9a-f]{64}$'),alt_text text NOT NULL,license_note text NOT NULL,contributor_sub text REFERENCES mwx.members(subject),review_state text DEFAULT 'pending' CHECK(review_state IN ('pending','accepted','rejected')),created_at timestamptz DEFAULT now(),UNIQUE(episode_slug,page_number));
CREATE TABLE IF NOT EXISTS mwx.moderation_reports (id uuid PRIMARY KEY DEFAULT gen_random_uuid(),reporter_sub text REFERENCES mwx.members(subject),object_key text NOT NULL,reason text NOT NULL,status text DEFAULT 'pending' CHECK(status IN ('pending','reviewing','resolved','dismissed')),created_at timestamptz DEFAULT now());
CREATE TABLE IF NOT EXISTS mwx.audit_log (id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,actor_sub text,event_type text NOT NULL,resource_kind text NOT NULL,resource_id text NOT NULL,created_at timestamptz DEFAULT now());
ALTER TABLE mwx.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.poster_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.moderation_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE mwx.audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY members_self ON mwx.members USING (subject=nullif(current_setting('app.user_sub',true),'')) WITH CHECK(subject=nullif(current_setting('app.user_sub',true),''));
CREATE POLICY consents_self ON mwx.consents USING (member_sub=nullif(current_setting('app.user_sub',true),'')) WITH CHECK(member_sub=nullif(current_setting('app.user_sub',true),''));
CREATE POLICY progress_self ON mwx.progress USING (member_sub=nullif(current_setting('app.user_sub',true),'')) WITH CHECK(member_sub=nullif(current_setting('app.user_sub',true),''));
CREATE POLICY reviewers_only ON mwx.reviews USING (current_setting('app.role',true)='reviewer') WITH CHECK (current_setting('app.role',true)='reviewer' AND reviewer_sub=nullif(current_setting('app.user_sub',true),''));
CREATE POLICY poster_owners_or_reviewers ON mwx.poster_assets USING (contributor_sub=nullif(current_setting('app.user_sub',true),'') OR current_setting('app.role',true)='reviewer') WITH CHECK(contributor_sub=nullif(current_setting('app.user_sub',true),''));
CREATE POLICY reports_self ON mwx.moderation_reports USING (reporter_sub=nullif(current_setting('app.user_sub',true),'')) WITH CHECK(reporter_sub=nullif(current_setting('app.user_sub',true),''));
-- No user-facing audit_log policy. Always use separately granted runtime DB roles.
-- RLS alone is insufficient; table owner can bypass it. Do not run as superuser.
