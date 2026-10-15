# MOONWITNESS XII — Secure Backend & Auth Integration Plan
Updated: 2026-10-16. Status: **schema and public health route built; authentication and DB integration NOT enabled**.

## Current safe posture
- Published React website is a static/Vite SPA.
- Personal 100-level progress, saved event ideas and mode selections are **browser-local**, not synchronized or uploaded.
- `/api/health` is a public read-only route with intentionally honest `database: not_connected` and `authentication: not_configured` values.
- `db/001_secure_foundation.sql` is a reviewed draft in source control; it has **not** been applied to Neon.
- The account has other Neon projects, but no explicit mapping to this XII repository has been established. Never repurpose or migrate a different app's database merely because it has "moonwitness" in the name.

## Before enabling a real database
1. Confirm the exact target project/database name and ownership; create a dedicated project/branch if needed after reviewing costs and user data requirements.
2. Select an identity provider (e.g. verified OIDC/JWT); define logout, revocation, age rules, email confirmation and account deletion.
3. Establish a least-privilege DB runtime role. Do not use the schema owner in application API connections; schema owner can bypass RLS.
4. Issue server-side verified identity claims, then transaction-scoped `SET LOCAL app.user_sub` and `SET LOCAL app.role`. Never take these from an untrusted browser request field.
5. Implement parameterized queries, request body limits, rate limiting, origin policy, CSRF/cookie protections where applicable, immutable admin audit and monitoring.
6. Apply migrations first to a staging branch and test deny-by-default RLS for cross-user access, reviewer grants and consent revocation.
7. Implement user-facing privacy notice and data deletion/export, moderation appeals and security incident procedures.
8. Only enable sync/upload APIs after passing the above and ensuring unreviewed posts/assets never publish automatically.

## API contract (planned, NOT shipped)
- `GET /api/health` — shipped, no private data
- `GET /api/me` — needs authenticated provider, not shipped
- `GET/PUT /api/me/progress` — needs auth and DB, not shipped
- `POST /api/poster-intake` — needs rights/consent/moderation and private object storage, not shipped
- `POST /api/reviews` — needs reviewer role and moderation, not shipped

Never claim cloud sync, real accounts, reviews or moderation until a working authenticated backend is verified. Existing `db/schema.sql` is a legacy *design file*; the new `db/001_secure_foundation.sql` is a separate migration proposal, not a modification to the other service's database.
