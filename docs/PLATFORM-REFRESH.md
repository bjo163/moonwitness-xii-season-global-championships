# MOONWITNESS XII — Platform Refresh Decision

**Status:** implementation branch; not yet promoted to production.

## Design reference

Use MOONWITNESS IX (repository bjo163/moonwitness) as the reference for compositional discipline, semantic design tokens, calm typography, accessible focus states, responsive layout, and clean navigation. XII keeps its own Global Championships identity and character canon. This is a visual/architectural adaptation, not a blind copy of IX's business logic.

### Visual direction

- Deep observatory navy as the canvas, moonstone teal as the primary action color, and lilac/soft amber as supporting accents.
- Strong editorial hierarchy, readable body copy, stable spacing scale, rounded panels, restrained borders, and responsive bento grids.
- No dense neon borders around every element; no uncontrolled oversized headings; avoid emoji as a substitute for character artwork.
- Character cards retain fictional/faceless symbolism and explicit non-literal canon notes. Better visual hierarchy is not evidence that any supernatural claim is factual.
- All interactive states require visible focus, mobile-friendly targets, and reduced-motion support.

## Application architecture

- Next.js App Router serves the app shell and route entrypoints.
- Existing interactive modules are retained as client components during the first migration pass to reduce content/functionality loss. Replace the remaining client-side router assumptions with native App Router navigation in a later route-by-route pass.
- PostgreSQL is the target persistence layer; Prisma provides the schema, migration history, and type-safe data access.
- registry_entries is the initial source-aware data model for the 33-slot register. slot is unique; provenance, record status, and review notes are explicit. #033 seed data records the user's chat statement and does not assert external submission or approval.
- Additional models reserve clear boundaries for character profiles, champion-source records, poster provenance, workspace records, and audit events.
- The public registry API is read-only. No unauthenticated mutation endpoints are exposed.
- Production DB credentials are intentionally not assumed. A dedicated XII database/branch must be configured before applying the migration or enabling persistent data.

## Release gates

1. Build and content checks pass.
2. Browser tests pass on desktop and mobile, including direct route navigation and legacy aliases.
3. Verify GET /api/health and database-backed GET /api/registry in a configured environment.
4. Verify migrations on a dedicated database branch before promoting to production.
5. Only merge/deploy after a human review of route behavior, design quality, accessibility, and database connection configuration.
