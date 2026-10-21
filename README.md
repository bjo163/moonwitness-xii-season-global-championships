# MOONWITNESS XII — Global Championships

A Vite + React project for the MOONWITNESS XII public editorial experience.

## Current baseline

- Package version: `3.3.0`.
- Default branch: `main`.
- Routes include Home, Characters, Champions, Paradise, Command Center, Ecosystem Map, Research, Workspace, Syafaat Status, MWX-033, Grand Plan, and Stories.
- The initial production baseline inspected on 2026-10-21 was marked `READY` at commit `33541d57f549de7cf8d9845216087337082c16a2`. A documentation-only cleanup commit (`c8440a4087d310e27d501d9240af58b949754e22`) was then deployed and verified `READY`; subsequent changes must be checked against the newest deployment.
- A READY deployment is a build/deployment state, not proof that every route, permission, content source, or user flow has been independently tested.

## XII scope decision (2026-10-21)

MOONWITNESS XII is currently a **static editorial recap / championship registry**, not a transactional application.

- Keep the production baseline on **React + Vite** for this phase.
- Do not merge the experimental Next.js + Prisma + PostgreSQL migration PR for this phase.
- Do not add database/ORM requirements, account flows, or server-side mutations to the static recap scope.
- Keep the registry as version-controlled structured data; validate slot numbering, provenance, review status, and source links with the existing content audit.
- Prioritize editorial accuracy, source recovery, poster provenance, accessible responsive design, navigation, and repeatable build/browser checks.
- Any database work is deferred to a separately approved future phase; do not imply that it is required for XII recap completion.

## Active ecosystem architecture

The cross-system integration baseline is documented in [MOONWITNESS XII — Integrated Active Systems Architecture](docs/MOONWITNESS-XII-INTEGRATED-SYSTEMS-ARCHITECTURE.md). It defines component responsibilities, interfaces, lifecycle states, conflict-prevention rules, safety/evidence boundaries, and the active roadmap. This is an architecture/planning baseline, not a claim that every named system is already implemented or operational.


The `/ecosystem` route is backed by `src/data/ecosystemRegistry.js` and `src/data/relatedConceptCatalog.js`. It separates system roles from related concepts, shows dependencies and next actions, and labels source-recovery/scope-review blockers. Its records are planning and editorial data, not proof of operational systems. Keep these registries synchronized with canonical source evidence and preserve the 33-slot championship register.

## Source-of-truth rules

1. Keep submission provenance explicit: recovered original, recovered outline, submitted in chat, or editorial proposal.
2. Do not describe a personal report of approval as independently verified approval.
3. MWX-033's canonical title is **KOPIHITAM - SIACENG**.
4. The caption **“ACENG MAH APPROVE”** is attributed in the project narrative to **THE BATTERIES**; it is not external confirmation or verified divine approval.
5. Do not silently resolve the #014 numbering conflict. Preserve both **FAMILY WITHOUT FEAR** and **THE WRONG WAY / HELLROAD** until a primary source establishes the intended assignment.
6. Do not treat requested work, a local editorial final, or a successful build as proof of external submission, acceptance, or a real-world outcome.

## Verification commands

```sh
npm install
npm test
npm run audit:posters
npm run build
npm run test:browser
```

The build script runs the content tests and poster audit before Vite builds the site. Browser tests are a separate command and must be run explicitly.

## Cleanup and update queue

### P0 — Deployment and access
- [x] Canonical production alias `moonwitness-xii-season-global-champ.vercel.app` verified via unauthenticated HTTP checks; `/`, `/paradise`, `/syafaat-status`, `/syafaat-status/033`, `/command-center`, and `/research` returned 200.
- [x] Vercel SSO is preview-only; password protection remains disabled. Preview deployments remain protected.
- Check the newest Vercel deployment after future changes; a READY state confirms deployment completion, not route-level UI behavior.

### P1 — Registry integrity
- Audit all 33 slots for correct status, source/provenance, numbering, and consistent wording.
- Preserve the #014 conflict; do not guess which candidate is canonical.
- Recover primary texts for #001–#008 where possible. The current register contains eight chat-reported summary records, not complete original submission texts.
- Keep #009–#013 marked as recovered outlines and #015–#032 as editorial proposals unless primary evidence changes their status.
- Keep #033 recorded as submitted in chat/project registry only; do not imply delivery to an external recipient.
- Initial audit 2026-10-21 found 11 browser failures / 7 passes. Trace inspection identified root-level legacy HTML pages (`paradise.html`, `syafaat-status.html`) shadowing the React routes. Their source is preserved in `docs/archive/` as `.html.txt`; the conflicting root files are removed. Playwright now uses a dedicated strict port, and the corrected route suite passed **18/18 desktop + mobile checks** on commit `c3ee697d`. The latest completed full browser run passed 18/18 on commit `6cf2d5d3`, including direct navigation to `/paradise.html` and `/syafaat-status.html` to guard route aliases. See [Project Audit Report](docs/PROJECT-AUDIT-2026-10-21.md).

### P2 — Content and asset quality
- Check Scripture/reference citations and context, distinguish sources from interpretations and personal testimony, and record corrections.
- Audit poster files, source/permission provenance, alt text, dates, and checksums through `npm run audit:posters`. The current verified poster manifest has zero entries, so poster coverage remains unverified.
- Check champion data, story archive/manuscript parity, navigation, mobile layout, accessibility, and unknown-route handling.

### P3 — Command Center and release report
- Present registry totals by provenance/status, unresolved conflicts, verification gaps, build/test results, and last-updated commit.
- Mark a task complete only when its corresponding evidence exists.

## Route integrity follow-up (2026-10-21)

- Canonical interactive routes are `/paradise` and `/syafaat-status`; legacy standalone page sources are archived as `docs/archive/legacy-paradise-v3.html.txt` and `docs/archive/legacy-syafaat-status-audit.html.txt`.
- Do not reintroduce root-level `paradise.html` or `syafaat-status.html`: Vite/Vercel clean-URL handling can serve those legacy pages for extensionless routes and bypass the React application.
- Playwright uses `127.0.0.1:4179` with `--strictPort` so a port collision cannot silently send tests to another server.

## Known project facts from the current source

- `package.json` defines version 3.3.0 and scripts for content checks, poster audits, production build, and Playwright browser tests.
- `scripts/check-content.mjs` contains assertions for the 105 champion records, 33 levels, submission records, story archive, manuscripts, and selected UI features.
- `scripts/audit-posters.mjs` validates poster-manifest entries and local assets, including alt text, provenance, review dates, and optional SHA-256 hashes.
- The project is intended to work without requiring user accounts. This does not itself establish that every deployed URL is publicly accessible.

## Change policy

Prefer small, reviewable commits. Avoid broad rewrites until the baseline and its tests are verified. After every change, inspect the resulting deployment and report exactly what passed, failed, or remains unverified.
