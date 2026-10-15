# Poster Asset Intake — MOONWITNESS XII
Status: 0 original poster image files verified as of 2026-10-16.

## Why galleries show placeholders
The 63 storyboard pages are editorial reconstructions; their original illustrated posters are not present in the verified manifest. **Do not claim historical source artwork is recovered when it is not.**

## Procedure
1. Obtain the actual raster file and confirm permission to publish. For user-authored content, record source/ownership and any consent.
2. Place a quality-controlled image in `public/posters/<slug>/page-01.webp` (or .png/.jpg).
3. Add `{ slug, page, src, alt, source, reviewedAt, sha256 }` to `verifiedPosterAssets` in `src/data/posterManifest.js`. `sha256` is strongly recommended.
4. Execute `npm run audit:posters` and `npm run build`.
5. Check aspect ratio, text readability, responsive display, alt text, spelling and sensitive information before merging.
6. Each verified entry appears automatically on the reader and thumbnail grid. Adding data does not require changing the React component.

## Protection
- Only vetted local /posters/ paths are accepted.
- Reject duplicate episode/page keys, missing files, unknown episode slugs and missing provenance.
- Do not scrape/copy copyrighted artwork without rights.
- Do not make an uploaded image evidence of a supernatural event, divine authority or endorsement.
- Generated *new* artwork, if requested, must be distinguished from original historical poster assets.
