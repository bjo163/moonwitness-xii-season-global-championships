# MoonWitness XII × XI — Integration Status

## What is implemented in this branch

- The Command Center includes an XI-styled backend readiness panel.
- `VITE_MW_API_BASE_URL` optionally points the browser to an XI API base URL; the panel checks its public `/readyz` endpoint.
- The check does not send credentials, submission notes, review drafts, or workspace backups.
- An unset endpoint is explicitly shown as `NOT CONFIGURED`; failed readiness and unreachable API states are distinguished.
- `.env.example` documents the optional configuration.

## What this does not mean

This is a connection/readiness probe, **not** a data persistence integration. The current XII workspace, checklists, bookmarks, and source-review drafts still use browser `localStorage`. A healthy `/readyz` response confirms the XI API reports its database as ready; it does not prove XII records exist in PostgreSQL.

Do not claim XII is database-backed until the server-side addon/models, authenticated routes, access policy, migrations/seed strategy, and integration tests are implemented and deployed.

## Configure the readiness panel

1. Set `VITE_MW_API_BASE_URL` in the frontend build environment to the XI API origin, without a trailing slash or `/readyz` suffix.
2. Configure the XI API's CORS allowlist to include the exact public XII origin. Do not use wildcard CORS for credentialed requests.
3. Redeploy the frontend and open Command Center. The panel checks `/readyz` and shows the API's database status and count of registered models.
4. If the API is not deployed or publicly reachable, leave the variable unset. The UI will accurately show `NOT CONFIGURED`.

Never place `DATABASE_URL`, `JWT_SECRET`, `SUPERADMIN_PASSWORD`, or other server secrets in `VITE_*` variables. Vite exposes these values to every browser visitor.

## Production data integration plan

1. **Audit XI addon conventions:** model fields, stable external IDs, actor/audit behavior, company scope, generic API access and role policies.
2. **Implement the XII addon in the XI monorepo:** submissions and immutable revisions; review events; character profiles and asset provenance; research source records; workspace snapshots only if multi-device sync is required.
3. **Define API contract:** authenticated endpoints or generic-model operations, validation, pagination, idempotency, authorization and conflict behavior. Keep public read-only content separate from privileged editorial mutations.
4. **Add migrations/seed and tests:** preserve the existing Master 33 registry exactly; make import idempotent; reject ambiguous provenance and inferred approval; test PostgreSQL, permissions, rollback and concurrency.
5. **Add a typed XII client:** explicit login/session handling, refresh/logout, safe error states, no secret storage in source code, and a deliberate local-only mode.
6. **Migrate data after review:** dry-run import, compare all 33 slot records and source/provenance metadata, require operator approval, then record an audit event. Never silently overwrite local records.
7. **Deploy backend first, then frontend:** validate `/readyz`, CORS, auth, CRUD and browser smoke tests in staging before enabling writes in production.

## Current framework decision

XII remains React + Vite + React Router. XI's backend is Fastify + PostgreSQL + `@moonwitness/orm`. A Next.js rewrite is not needed to use a database; the API is the service boundary. Keep this split until there is a measured SSR or server-component requirement.
