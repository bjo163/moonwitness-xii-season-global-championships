# MOONWITNESS XII — Global Championships

A static editorial archive and championship registry built with **Next.js App Router, React, and TypeScript/TSX**.

## Platform baseline
- Package version: `3.4.0`
- Repository: `bjo163/moonwitness-xii-season-global-championships`
- Deployment branch: `main`
- Framework: Next.js App Router
- Data: version-controlled static files; **no database and no ORM**
- Deployment target: Vercel

## Archive integrity
The registry retains all 33 indexed championship slots and their existing provenance distinctions. Indexed does not mean externally submitted, formally delivered, independently verified, or approved. Missing primary texts and unresolved numbering conflicts remain unresolved until evidence is recovered.

The existing content-integrity and poster-audit scripts remain part of the build gate. An empty verified-poster manifest does not prove that every expected poster asset is present.

## Routes
Home, Characters, Champions, Paradise, Command Center, Ecosystem Map, Research, Workspace, Syafaat Status, MWX-033, Grand Plan, and Stories. Legacy `.html` aliases redirect to canonical routes.

## Local development
```bash
npm install
npm run dev
npm run test
npm run build
npm run test:browser
```
No database credentials or migrations are required. Static registry changes are reviewed and versioned in Git.

## Migration policy
The Vite entrypoint has been replaced with Next.js App Router. Existing content data and quality checks are preserved; client-side interactions remain client components where needed. Continue converting UI components to TSX incrementally without changing archive meaning or approval/provenance labels.

A successful build/deployment is not by itself proof that every source, poster, route, or claim has been independently verified.
