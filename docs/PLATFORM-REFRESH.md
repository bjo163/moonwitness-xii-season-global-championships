# MOONWITNESS XII — Platform Migration

**Decision date:** 2026-10-21  
**Status:** Next.js App Router on `main`; static archive scope.

## Accepted stack
- Next.js App Router, React, TypeScript/TSX
- Static, version-controlled registry and content
- Vercel deployment
- No PostgreSQL, ORM, database credentials, or server-side mutations in this phase

## Archive and provenance rules
Keep all 33 indexed slots and their current status distinctions. Do not infer external delivery or approval from a chat submission; keep unresolved numbering conflicts unresolved; distinguish summaries, recovered outlines, editorial proposals, and verified source material.

## Migration implementation
The Vite entrypoint has been replaced by Next.js App Router. UI route and component implementations are TSX; lightweight JSX re-export shims preserve older import paths while the registry/data layer remains static JS/TS. Browser-dependent interactions remain client components. The ecosystem map remains a route, and legacy HTML aliases redirect to canonical routes. Content-integrity, TypeScript, and poster-manifest checks run before production build.

## Release gates
1. `npm run test` passes.
2. `npm run typecheck` passes.
3. `npm run audit:posters` reports the actual manifest state; an empty manifest is not proof of asset completeness.
4. `npm run build` passes on the deployed runtime.
5. Desktop and mobile browser tests pass, including deep links and legacy aliases.
6. Verify Vercel recognizes Next.js and production route behavior before declaring release complete.

A build or deployment status alone does not verify every editorial claim or prove every requested poster asset exists.
