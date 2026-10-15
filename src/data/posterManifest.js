// Curated poster asset manifest. Only explicitly reviewed, committed assets belong here.
// Each entry: {slug, page, src, alt, source, reviewedAt}.
// Do not add guessed URLs or mark an image verified without checking repository assets.
export const verifiedPosterAssets = [];
export function getPosterAsset(slug,page){return verifiedPosterAssets.find(a=>a.slug===slug&&a.page===page)||null;}
export const posterAssetGuide={root:"public/posters/",naming:"<episode-slug>/page-01.webp",recommendedFormats:["webp","png","jpg"],reviewRequired:true};
