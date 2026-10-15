# MOONWITNESS XII — Account-free Website Decision
Date: 2026-10-16
Status: **ACTIVE architecture decision; previous backend/auth plan retired.**

## User decision
MoonWitness XII is an ordinary public website. There is **no login, registration, account profile, cloud sync, or user database**. Do not make identity providers, PostgreSQL/Neon deployment, user permissions, or server-side accounts prerequisites for continued development.

## Current website
- React + Vite public site hosted on Vercel.
- Character Universe with original SVG designs; Stories; 105-Champions editorial catalogue; Paradise 100-level voluntary challenges; Command Center; source audit.
- Optional checkmarks, event bookmarks, and private source-review drafts are **browser-local only**. They are not shared with the website owner.
- Manual JSON export/import under `/workspace` is the only transfer mechanism. This is not an account system or cloud synchronization.
- All source content, poster manifests, tests and editorial updates are maintained in the GitHub repository.
- No public intake of visitor submissions, moderation queues, or account registration is implemented.

## Removal from the application (2026-10-16)
Deleted unused server endpoint `api/health.js` and unused SQL design files `db/schema.sql`, `db/001_secure_foundation.sql` to keep the deploy static-oriented. Historical versions remain recoverable through Git history if ever needed, but they are not part of the current roadmap.

## Next priorities — Website-only
1. Homepage and episode-gallery polish, mobile/keyboard accessibility and tested visual layouts.
2. Approved original story artwork and poster asset ingestion, with credit, licensing and provenance.
3. Recover and check storyteller source wording, original manuscripts and scripture references without mislabeling editorial reconstructions.
4. Review 105 Champion editorial profiles, individual attributions and references.
5. Enhance the public Paradise / Command Center interactive views locally without user accounts.
6. Improve static site SEO, share metadata, loading performance, lightweight offline behavior and automated accessibility checks.

The project is **a public site, not a membership platform**. Personal testimony, religious references and speculative worldbuilding are clearly distinguished from independent verification.
