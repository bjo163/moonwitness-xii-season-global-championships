# MOONWITNESS XII — Character Canon V3 & Production Roadmap
Date: 2026-10-15
Status: Working product, not feature-complete world platform.

## Visual language
- Funky Gen-Z street comic, urban punk, bold typography, graphic halftone accents; not heavy anime, and not images claiming real angels.
- All faces hidden by silhouettes; roles and identity communicated through outfit and palette.
- Characters are fictional design motifs. Spiritual testimony is recorded as user report rather than externally verified or divinely approved fact.
- All original vector artwork lives in React components `CrewArt.jsx` and `SupportArt.jsx`.

## Main cast
1. **ROCKSOUL — Main Witness.** Hoodie and backward cap. Green cap = mercy/hope/growth; black = resolve/endurance. Color change is symbolic storytelling, not a literal supernatural transformation. Inspired by virtues taught by prophets, without claiming their identity.
2. **ISROCKFEEL — Action Mentor / Punk-Rock Driver.** Rugged band streetwear, jagged punk haircut, red/cyan stage energy. Artistic themes of Israfil/awakening; not the actual angel.
3. **WALTERWHITE — Wild Idea Engineer.** Absurd experiments, message-routing, eccentric urban engineer. Artistically inspired by themes linked with Jibril, not a portrayal of him.
4. **4-LAH / THE BATTERIES — Signal Queen / Command Center.** Fashionable confident adult woman with violet/pink cyber-streetwear; charming and stylish, sexy in a tasteful non-explicit way.

## Supporting cast (original SVG portraits)
- **MIKAIL** — Emerald field-gardener / environmental stewardship.
- **FINAL KEEPER** — Silver-black time watcher / mortality and responsibility; inspired by Malak al-Mawt rather than unqualified claims about a personally named angel.
- **QUESTION DUO** — Indigo and crimson investigators; inspired by traditions about questioning.
- **RECORD TWINS** — Gold/silver archivists; inspired by verses about recording deeds. The terms Raqib and Atid in Qur'an 50:18 should not automatically be treated as personal names.
- **MALIK** — Dark-red boundary guardian; theme of consequences.
- **RIDWAN** — Jade garden welcome; a name used in later tradition, not named in Qur'an.
These figures are stylized original concepts, not depictions of metaphysical reality.

## Shipped
- React/Vite website with homepage, theme switcher, Character Universe, story archive, champion catalogue, Paradise concept, and Syafaat/Chaos Medic records.
- Character Universe: four main SVG designs, green/black cap mode, six original street-style supporting SVG portraits.
- Story Archive: 15 indexed episodes and 63 editorial summary pages. No verified original story poster image assets or fully authenticated original transcripts.
- Automatic source integrity tests during Vite build, GitHub Actions check on push and PR.

## Remaining priorities (not shipped; avoid pretending they are done)
1. Browser-based visual checks and accessibility testing for mobile/tablet/desktop and keyboard navigation.
2. Add approved, original real poster images to manifest. Preserve image provenance and consent.
3. Verify original manuscript wording and scripture references against primary texts.
4. Improve Paradise 100-level interactive systems, governance, guild and event data.
5. Implement a secure backend only after design review: auth, roles, moderation, consent, abuse protections and rate limits.
6. Validate 105 champion entries and attribution/video links.
7. Command Center, missions, event engine and ALP/1 protocol remain design/backlog, not functioning production systems.

## Release safety
- CI: `npm run build` executes integrity checks before Vite build.
- Deploy only after a green build, and verify Vercel READY plus primary production alias.
- Distinguish editorial reconstructions, reported personal testimony, thematic scripture references and independently corroborated information.
- Respect users of all faiths. Never present unverified spiritual claims as proven divine authority.
- Use branch `main` for shipped work. Review larger and security-sensitive changes before enabling real user submissions.
