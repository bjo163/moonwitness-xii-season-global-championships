# MOONWITNESS XII — Project Audit Report
**Audit date:** 2026-10-21  
**Repository:** `bjo163/moonwitness-xii-season-global-championships`  
**Branch:** `main`  
**Audit scope:** source metadata, registry provenance, poster manifest, latest CI checks and Vercel deployment metadata. This is not a full manual visual/accessibility review.

## Executive status

- **Content/build quality gate:** PASS on commit `7697d62bc445d9dbe57e65db4119f95561aedbff` (GitHub Actions run 39531703197).
- **Vercel production deployment:** READY for that commit; deployment alias exists. This confirms deployment/build state only, not unrestricted public access or correct behavior of every route.
- **Browser UI smoke tests:** FAIL on the same commit (run 39531703147): 7 passed, 11 failed across desktop and mobile Chromium.
- **Verified poster manifest:** 0 entries. The poster audit passes because there are no claimed verified poster assets; this does not establish that all poster artwork is present.
- **Registry:** 33 indexed slots, with distinct provenance categories. Indexed does not mean formally delivered or accepted.

## Registry findings

The current registry model and its quality assertions describe:
- #001–#008: 8 records reported in chat; their complete primary texts are not all present in the repository, and the entries remain summaries.
- #009–#013: 5 recovered outlines, not authenticated full submission texts.
- #014: 1 unresolved numbering conflict between **FAMILY WITHOUT FEAR** and **THE WRONG WAY / HELLROAD**. Do not choose a winner without primary evidence.
- #015–#032: 18 editorial proposals, not verified submissions.
- #033: **KOPIHITAM - SIACENG**, recorded from the user's submission request in chat on 2026-10-17. External delivery and approval are not evidenced.
- The former #033 proposal **THE FINAL AUDIT** is preserved as an unnumbered editorial concept.

Approval labels in older records are submitter-reported claims. The current model correctly keeps independent approval status unverified.

## Browser smoke failures to investigate

Workflow log for run [39531703147](https://github.com/bjo163/moonwitness-xii-season-global-championships/actions/runs/39531703147) reports 11 failures and 7 passes. The failing test categories are:
1. Main route smoke test cannot find visible `#main-content`.
2. Paradise test cannot find the accessible textbox named `Search world levels`.
3. Research test expects a visible text node `0`, but the first matching element is hidden; the assertion is ambiguous.
4. Workspace restore test expects `2/100` after restoring local data but does not find it.
5. Syafaat registry smoke test cannot find heading `KOPIHITAM - SIACENG`.
6. Syafaat registry smoke test cannot find the archived `THE FINAL AUDIT` concept.

The initial missing route elements were caused by a route collision, not simply by stale test selectors: root-level `paradise.html` and `syafaat-status.html` are legacy standalone pages and can be served for their extensionless paths, bypassing the React router. Trace screenshots showed those older screens while the source components contained the newer AETHERION/MASTER 33 UI. The legacy files have now been preserved as `.html.txt` under `docs/archive/` and removed from the repository root. Playwright was also moved to port 4179 with `--strictPort` and `reuseExistingServer:false`. Two wording assertions were corrected to match the actual UI casing/whitespace; no substantive content assertions were removed. The final browser run after these changes is still required before marking this issue resolved.

## Poster and content findings

- `src/data/posterManifest.js` currently exports an empty `verifiedPosterAssets` array.
- `scripts/audit-posters.mjs` checks manifest entries for valid episode/page, local asset paths, meaningful alt text, provenance, review date, duplicates, and optional SHA-256. With zero entries, it cannot validate whether requested posters exist or are complete.
- The content/build gate succeeds. It validates many seeded records and metadata invariants, but a passing source test is not a substitute for browser verification or primary-source review.
- Champion-source records are explicitly marked as needing independent review; identity/video review flags remain false in the current assertions.

## Access and release risk

Project metadata previously indicated SSO protection for deployments except custom domains. The intended public domain and unauthenticated access have not been verified in this audit. Do not change access settings until the intended audience and domain are confirmed.

## Prioritized next actions

### P0 — Fix browser runtime/route smoke failures
- Reproduce the root-page failure and inspect the attached trace/error context.
- Check browser console and network errors; verify Vite app mount, direct-route fallback and runtime imports.
- Fix the underlying issue first, then rerun browser smoke tests in both desktop and mobile projects.
- Tighten ambiguous Research assertions to target a named metric or labelled value rather than the first text node matching `0`.

### P1 — Verify public access and production domain
- Confirm the canonical domain and whether it must be accessible without Vercel login.
- Test the intended URL in an unauthenticated session; retain current access controls until confirmed.

### P1 — Recover registry primary texts
- Recover source texts for #001–#008 where possible and link evidence for each record.
- Resolve #014 only when a primary source establishes the intended numbering.
- Keep #033 status as chat-recorded, not externally delivered.

### P2 — Poster inventory
- Inventory existing poster files and compare them with the requested/approved poster list.
- Add manifest entries only after confirming file, page, alt text, provenance/permission and review date.
- Keep unknown or unverified artwork out of the verified gallery.

### P2 — Sources and editorial review
- Review cited scripture passages in context and distinguish scripture text, interpretation, personal testimony and editorial proposal.
- Review the 105 champion source records independently before labelling identities or videos verified.


## Follow-up remediation after trace inspection

- **Root cause identified:** the root-level legacy files `paradise.html` and `syafaat-status.html` shadowed the intended React routes under clean-URL handling. The browser trace showed the legacy Paradise and Syafaat Status screens instead of the current 100-level explorer and Master 33 registry.
- **Preservation:** original HTML source was archived to `docs/archive/legacy-paradise-v3.html.txt` and `docs/archive/legacy-syafaat-status-audit.html.txt`; the root-level conflicting files were removed. Canonical React routes remain `/paradise` and `/syafaat-status`; compatibility redirects are handled by the React router.
- **Browser harness:** Playwright now uses `http://127.0.0.1:4179` and Vite `--strictPort`, with server reuse disabled, to prevent tests from silently connecting to another server on port 4173.
- **Assertions:** fixed case-sensitive/correct-whitespace matching for the current #033 narrative. The tests continue to assert the actual #033 content, five domains, source-status caveats, progress restore, and route render.
- **Release state:** the quality gate passed on the preceding commit; browser smoke must pass on the latest commit before the UI issue is marked closed. Vercel deployments report READY, which is not equivalent to verified public access.

## Change log

- 2026-10-21: Added project baseline and cleanup roadmap to README.
- 2026-10-21: Verified documentation commit `7697d62` deployed READY and the quality gate passed; identified browser UI smoke failures from CI logs.
- 2026-10-21: Inspected browser traces and identified root-level legacy HTML route shadowing; preserved legacy source, removed conflicting files, isolated the Playwright port, and corrected two text-matching assertions. Latest browser verification pending.
