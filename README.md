# MOONWITNESS XII — Global Championships

A static editorial archive and championship registry built with **Next.js App Router, React, and TypeScript/TSX**.

## Platform baseline
- Package version: `3.4.0`
- Repository: `bjo163/moonwitness-xii-season-global-championships`
- Deployment branch: `main`
- Framework: Next.js App Router
- UI implementation: App Router pages and UI components are TSX; legacy JSX UI shims have been removed
- Data: version-controlled static files; **no database and no ORM**
- Deployment target: Vercel

## Archive integrity
The registry retains all 33 indexed championship slots and their existing provenance distinctions. Indexed does not mean externally submitted, formally delivered, independently verified, or approved. Missing primary texts and unresolved numbering conflicts remain unresolved until evidence is recovered.

The content-integrity, TypeScript, and poster-manifest checks run as build gates. An empty verified-poster manifest does not prove that every expected poster asset is present.

## Routes
Home, Characters, Champions, Paradise, Command Center, Ecosystem Map, Research, Workspace, Syafaat Status, MWX-033, Grand Plan, and Stories. Legacy `.html` aliases redirect to canonical routes.

## Local development
```bash
npm install
npm run dev
npm run test
npm run typecheck
npm run build
npm run test:browser
```
No database credentials or migrations are required. Static registry changes are reviewed and versioned in Git.

## Migration policy
The Vite entrypoint has been replaced with Next.js App Router. UI route and component implementations are TSX; legacy JSX UI shims have been removed, while static content registries remain in JS/TS. Static content registries remain in JS/TS as appropriate and are not database-backed. Continue tightening prop types without changing archive meaning or approval/provenance labels.

A successful build/deployment is not by itself proof that every source, poster, route, or claim has been independently verified.
