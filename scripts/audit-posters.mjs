import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {verifiedPosterAssets} from '../src/data/posterManifest.js';
import {archiveEpisodes} from '../src/data/storyArchive.js';
import {episodeManuscripts} from '../src/data/episodeManuscripts.js';
const names=new Set(archiveEpisodes.map(x=>x.slug));const seen=new Set();
for(const a of verifiedPosterAssets){
 assert.ok(names.has(a.slug),'Unknown episode: '+a.slug);
 const script=episodeManuscripts.find(x=>x.slug===a.slug);
 assert.ok(script,'Missing manuscript for '+a.slug);
 assert.ok(Number.isInteger(a.page)&&a.page>0&&a.page<=script.pages.length,'Invalid page');
 assert.ok(/^\/posters\/[a-z0-9-]+\/page-\d{2}\.(webp|png|jpg)$/.test(a.src),'Only approved local image paths allowed');
 assert.ok(a.alt?.trim().length>=12,'Meaningful alt text is required');
 assert.ok(a.source?.trim().length>=4,'Source and permission provenance required');
 assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(a.reviewedAt||''),'Reviewed date required');
 const key=a.slug+'/'+a.page;assert.ok(!seen.has(key),'Duplicate poster page: '+key);seen.add(key);
 const local='public'+a.src;assert.ok(existsSync(local),'Missing image: '+local);
 if(a.sha256){assert.match(a.sha256,/^[0-9a-f]{64}$/);const sha=createHash('sha256').update(readFileSync(local)).digest('hex');assert.equal(sha,a.sha256,'Image hash mismatch: '+local);}
}
if(verifiedPosterAssets.length===0){
 console.warn('POSTER INVENTORY: 0 verified poster files are registered. The manifest audit passed, but poster completeness is NOT verified; editorial placeholders remain until original assets and publication rights are reviewed.');
}else{
 console.log('Poster manifest audit PASS: '+verifiedPosterAssets.length+' reviewed image assets. This validates registered assets only; it does not prove every expected poster exists.');
}
