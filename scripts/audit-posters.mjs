import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {verifiedPosterAssets} from '../src/data/posterManifest.js';
import {archiveEpisodes} from '../src/data/storyArchive.js';
import {episodeManuscripts} from '../src/data/episodeManuscripts.js';
const names=new Set(archiveEpisodes.map(x=>x.slug));const seen=new Set();
const posterRoot='public/posters';
const diskPosterFiles=[];
function walkPosterDirectory(dir){
 for(const entry of readdirSync(dir,{withFileTypes:true})){
  const path=dir+'/'+entry.name;
  if(entry.isDirectory())walkPosterDirectory(path);
  else if(entry.isFile()&&/\.(webp|png|jpg)$/i.test(entry.name))diskPosterFiles.push(path);
 }
}
if(existsSync(posterRoot))walkPosterDirectory(posterRoot);
const manifestPaths=new Set(verifiedPosterAssets.map(a=>'public'+a.src));
for(const path of diskPosterFiles)assert.ok(manifestPaths.has(path),'Poster image exists on disk but is not registered/reviewed: '+path);
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
 console.warn('POSTER INVENTORY: '+diskPosterFiles.length+' poster image files found on disk; 0 verified poster files are registered. The audit can inventory committed files but cannot infer historical completeness; editorial placeholders remain until original assets, provenance and publication rights are reviewed.');
}else{
 console.log('Poster manifest audit PASS: '+verifiedPosterAssets.length+' reviewed image assets; '+diskPosterFiles.length+' image files found on disk. Every image under public/posters must be registered, but this does not prove every expected historical poster exists.');
}
