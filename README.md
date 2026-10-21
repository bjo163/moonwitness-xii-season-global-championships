# MOONWITNESS XII — Global Championships

A Vite + React project for the MOONWITNESS XII public editorial experience.

## Current baseline

- Package version: `3.3.0`.
- Default branch: `main`.
- Routes include Home, Characters, Champions, Paradise, Command Center, Research, Workspace, Syafaat Status, MWX-033, Grand Plan, and Stories.
- The latest Vercel production deployment inspected on 2026-10-21 is marked `READY`, built from commit `33541d57f549de7cf8d9845216087337082c16a2`.
- A READY deployment is a build/deployment state, not proof that every route, permission, content source, or user flow has been independently tested.

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
- Verify the intended public production domain and test it without an authenticated Vercel session.
- Review Vercel's SSO protection configuration: project metadata currently reports SSO enabled for all deployments except custom domains. Do not change access policy without confirming the intended audience and domain.
- Investigate the recent failed deployment attempts; keep the latest READY deployment as the baseline unless a newer verified build supersedes it.

### P1 — Registry integrity
- Audit all 33 slots for correct status, source/provenance, numbering, and consistent wording.
- Preserve the #014 conflict; do not guess which candidate is canonical.
- Recover primary texts for #001–#005 where possible. The current register labels them as summarized records, not complete original submissions.
- Keep #009–#013 marked as recovered outlines and #015–#032 as editorial proposals unless primary evidence changes their status.
- Keep #033 recorded as submitted in chat/project registry only; do not imply delivery to an external recipient.

### P2 — Content and asset quality
- Check Scripture/reference citations and context, distinguish sources from interpretations and personal testimony, and record corrections.
- Audit poster files, source/permission provenance, alt text, dates, and checksums through `npm run audit:posters`.
- Check champion data, story archive/manuscript parity, navigation, mobile layout, accessibility, and unknown-route handling.

### P3 — Command Center and release report
- Present registry totals by provenance/status, unresolved conflicts, verification gaps, build/test results, and last-updated commit.
- Mark a task complete only when its corresponding evidence exists.

## Known project facts from the current source

- `package.json` defines version 3.3.0 and scripts for content checks, poster audits, production build, and Playwright browser tests.
- `scripts/check-content.mjs` contains assertions for the 105 champion records, 33 levels, submission records, story archive, manuscripts, and selected UI features.
- `scripts/audit-posters.mjs` validates poster-manifest entries and local assets, including alt text, provenance, review dates, and optional SHA-256 hashes.
- The project is intended to work without requiring user accounts. This does not itself establish that every deployed URL is publicly accessible.

## Change policy

Prefer small, reviewable commits. Avoid broad rewrites until the baseline and its tests are verified. After every change, inspect the resulting deployment and report exactly what passed, failed, or remains unverified.
