-- MOONWITNESS V3 / future backend schema. NOT yet connected to production.
create table if not exists champion_sources (
  id bigint generated always as identity primary key,
  champion_id integer not null check (champion_id between 1 and 105),
  source_url text not null,
  source_kind text not null check(source_kind in ('primary_video','transcript','editorial')),
  citation_note text,
  evidence_status text not null default 'unverified' check(evidence_status in ('unverified','documented','externally_verified')),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);
create table if not exists bug_submissions (
  id text primary key,
  title text not null,
  summary text not null,
  evidence_status text not null default 'submitted_in_chat' check(evidence_status in ('documented','personal_testimony','submitted_in_chat','externally_verified','unverified')),
  approval_status text not null default 'not_verified' check(approval_status in ('not_verified','approved_with_evidence','rejected_with_evidence')),
  approval_evidence_url text,
  reviewer_note text,
  created_at timestamptz not null default now(),
  constraint approval_evidence_required check(approval_status='not_verified' or nullif(trim(approval_evidence_url),'') is not null)
);
create table if not exists mission_progress (
  user_id uuid not null,
  level_id integer not null check(level_id between 1 and 33),
  completed_at timestamptz not null default now(),
  primary key(user_id,level_id)
);
-- Never expose mission_progress or sensitive requests without auth + RLS.
-- Public submission intake and moderation deliberately remain disabled.
