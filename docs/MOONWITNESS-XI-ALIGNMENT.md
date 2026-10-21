# MOONWITNESS XII — XI Platform Alignment

Status: implementation proposal accompanying the first visual-system pass. This document is not evidence that XII is already connected to a production database.

## Decision

Use `bjo163/moonwitness-xi` as the reference for visual language and backend conventions.

- **Frontend today:** React 19 + Vite 7 + React Router 7 in `moonwitness-xii-season-global-championships`.
- **XI backend:** Fastify API, PostgreSQL, and the existing `@moonwitness/orm` / addon model system.
- **XI admin UI:** React + Vite, shared UI tokens, Tailwind CSS 4, and a data-driven client.
- **Recommended integration:** retain XII's current Vite frontend for the public storyverse in the first migration phase, and connect its data features to the XI API. Do not introduce a second ORM or duplicate database schema in XII.
- **Next.js:** not required solely to obtain a modern UI or a database. Reconsider only if XII develops a concrete SSR, server-component, or framework-specific need.

This avoids a high-risk framework rewrite while allowing the UI and data layer to become coherent. A future framework migration can be evaluated separately using measured needs.

## Visual direction from XI

Reference tokens: `packages/ui/src/styles/tokens.css` in `bjo163/moonwitness-xi`.

- Warm paper background, ink-black typography and borders.
- Acid-lime for primary action and active state; signal-pink as a secondary highlight.
- Anton-style display typography, Space Grotesk body, Space Mono for labels and metadata.
- Squared, editorial cards with clear hierarchy and deliberate hard shadows.
- Responsive navigation, visible keyboard focus, reduced-motion support, and a consistent layout rhythm.
- Keep the XII storyverse hero cinematic and character-forward; use the XI design language for the surrounding interface instead of making every surface identical.

The first pass is in `src/moonwitness-xi-system.css`, imported after the legacy stylesheet so it can normalize the existing routes without deleting the current page implementations.

## Data architecture target

XII should treat the XI API/database as the source of truth for operational data. Browser local storage may remain an optional user convenience, never the canonical registry.

Suggested domain models/addons, subject to an implementation audit before schema changes:

| Domain | Purpose | Key integrity requirements |
|---|---|---|
| `xii.submission` | Master 33 and future submissions | Stable slot/code, title, status, provenance class, current revision |
| `xii.submission_revision` | Immutable revision history | Submission relation, revision number, source note, created-by and timestamps |
| `xii.review_event` | Approval/rejection/review history | Actor, decision, rationale, timestamp; no inferred approval |
| `xii.character` | Character profile and approved design | Stable slug, name, role, visual brief, asset reference, review state |
| `xii.champion_profile` | Champion editorial profile | Source references, claim status, reviewer status, last reviewed date |
| `xii.story` | Story/episode/page metadata | Stable slug, sequence, draft/published status, revision reference |
| `xii.poster_asset` | Poster and image manifest | Storage key, checksum, dimensions, alt text, provenance, review state |

Prefer additive schema changes and explicit backfills. Do not silently rewrite existing Master 33 records, promote an editorial proposal to a verified submission, or infer external approval from a chat quote. In particular, keep distinctions between user-reported records, recovered outlines, editorial proposals, unresolved conflicts, and independently verified evidence.

## Integration phases

1. **Visual normalization (this branch):** add XI-aligned tokens and consistent surface/navigation styles; preserve current routes and content.
2. **Contract and API audit:** inspect XI API availability, auth/CORS policy, deployment topology, and the supported addon registration process. Add typed API contracts and validation before changing persistence.
3. **Model and seed design:** map existing XII data to stable external IDs; generate a dry-run import report; require explicit review of conflicts and duplicates.
4. **API integration:** move operational reads/writes behind the API. Use React Query or a typed client, loading/error/empty states, and server-side authorization. Never place database credentials in browser code.
5. **Migration and verification:** import reviewed data transactionally, compare counts and checksums, run API and browser tests, and keep a rollback path.
6. **Release:** deploy the backend and database first, verify health and access control, configure the public frontend's API origin, then promote after smoke tests pass.

## Release guardrails

- Do not claim a database is connected until a real API request succeeds against the intended environment.
- Do not put `DATABASE_URL`, JWT signing keys, or other server secrets in Vite variables prefixed with `VITE_`.
- Keep user-submitted text separate from verified claims and source citations.
- Do not delete or overwrite the current public route/data implementation during migration.
- Run the existing build, content checks, Playwright smoke tests, and a mobile visual review before production promotion.
- Treat UI redesign and data migration as separate reviewable changes so regressions can be isolated.
