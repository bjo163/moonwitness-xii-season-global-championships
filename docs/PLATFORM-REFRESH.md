# MOONWITNESS XII — Platform Migration

**Decision date:** 2026-10-21  
**Status:** Next.js migration on `main`; static archive scope.

## Accepted stack
- Next.js App Router, React, TypeScript/TSX
- Static, version-controlled registry and content
- Vercel deployment
- No PostgreSQL, ORM, database credentials, or server-side mutations in this phase

## Archive and provenance rules
Keep all 33 indexed slots and their current status distinctions. Do not infer external delivery or approval from a chat submission; keep unresolved numbering conflicts unresolved; distinguish summaries, recovered outlines, editorial proposals, and verified source material.

## Migration implementation
Existing page modules remain client components where they rely on browser state or interactions. App Router provides the shell and route resolution. The ecosystem map remains a route. Legacy HTML aliases redirect to canonical routes. Content-integrity and poster-audit checks remain in the production build command.

## Release gates
1. `npm run test` passes.
2. `npm run audit:posters` passes with the manifest's actual evidence status accurately reported.
3. `npm run build` passes on the deployed runtime.
4. Desktop and mobile browser tests pass, including deep links and legacy aliases.
5. Verify Vercel recognizes Next.js and production route behavior before declaring release complete.

A build or deployment status alone does not verify every editorial claim or prove every requested poster asset exists.
