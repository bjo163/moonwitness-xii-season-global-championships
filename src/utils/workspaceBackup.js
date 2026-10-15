import {communityEvents} from '../data/worldSystems.js';
import {championSourceRows,storySourceRows} from '../data/sourceAudit.js';

export const WORKSPACE_FORMAT='moonwitness-workspace-v1';
export const WORKSPACE_VERSION=1;
export const WORKSPACE_KEYS={
 progress:'moonwitness-xii-world-progress-v4',
 legacy:'moonwitness-xii-self-aura-v3',
 bookmarks:'moonwitness-xii-command-board-v1',
 reviews:'moonwitness-xii-review-drafts-v1'
};
export const WORKSPACE_EVENT='mwx:workspace-restored';
export const DRAFT_STATES=['needs_source','investigating','ready_for_independent_review'];
export const REVIEW_TARGETS=[
 ...championSourceRows.map(c=>({key:'champion:'+c.id,label:c.name,kind:'champion',subtitle:c.faith})),
 ...storySourceRows.map(e=>({key:'story:'+e.slug,label:e.title,kind:'story',subtitle:e.kind}))
];
const validTargets=new Set(REVIEW_TARGETS.map(x=>x.key));
const validEvents=new Set(communityEvents.map(x=>x.id));
const own=(v,key)=>Object.prototype.hasOwnProperty.call(v,key);
const isRecord=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const isSafeDate=v=>typeof v==='string'&&!Number.isNaN(Date.parse(v))&&v.length<=40;
export function cleanProgress(values){
 return [...new Set((Array.isArray(values)?values:[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=100))].sort((a,b)=>a-b);
}
export function cleanBookmarks(values){
 return [...new Set((Array.isArray(values)?values:[]).filter(v=>typeof v==='string'&&validEvents.has(v)))].slice(0,48);
}
export function cleanReviewDrafts(values){
 if(!Array.isArray(values))return [];
 const seen=new Set();
 return values.filter(isRecord).map(v=>{
  const key=typeof v.key==='string'?v.key:'';
  const state=DRAFT_STATES.includes(v.state)?v.state:'needs_source';
  const note=typeof v.note==='string'?v.note.slice(0,600):'';
  const candidate=typeof v.sourceUrl==='string'?v.sourceUrl.trim():'';
  const sourceUrl=/^https:\/\/[^\s<>"']{1,480}$/i.test(candidate)?candidate:'';
  return {key,state,note,sourceUrl};
 }).filter(v=>{if(!validTargets.has(v.key)||seen.has(v.key))return false;seen.add(v.key);return true;}).slice(0,120);
}
export function parseWorkspaceBackup(raw){
 if(typeof raw!=='string'||raw.length>512000)throw Error('Backup must be a JSON text file below 500 KB.');
 let doc;
 try{doc=JSON.parse(raw)}catch{throw Error('Invalid JSON. No data was changed.');}
 if(!isRecord(doc)||doc.format!==WORKSPACE_FORMAT||doc.version!==WORKSPACE_VERSION)throw Error('Unsupported workspace format or version.');
 if(!isSafeDate(doc.exportedAt))throw Error('Missing or invalid export date.');
 if(!isRecord(doc.data)||!Array.isArray(doc.data.completed)||!Array.isArray(doc.data.bookmarks)||!Array.isArray(doc.data.reviews))throw Error('Backup must contain completed, bookmarks, and reviews arrays.');
 if(doc.data.completed.length>500||doc.data.bookmarks.length>500||doc.data.reviews.length>500)throw Error('Backup contains too many records.');
 const data={completed:cleanProgress(doc.data.completed),bookmarks:cleanBookmarks(doc.data.bookmarks),reviews:cleanReviewDrafts(doc.data.reviews)};
 return {format:WORKSPACE_FORMAT,version:WORKSPACE_VERSION,exportedAt:doc.exportedAt,data};
}
function storedArray(storage,key){try{const parsed=JSON.parse(storage.getItem(key)||'[]');return Array.isArray(parsed)?parsed:[]}catch{return [];}}
export function captureWorkspace(storage){
 const progress=storage.getItem(WORKSPACE_KEYS.progress);
 const completed=progress===null?cleanProgress(storedArray(storage,WORKSPACE_KEYS.legacy)):cleanProgress(storedArray(storage,WORKSPACE_KEYS.progress));
 return {format:WORKSPACE_FORMAT,version:WORKSPACE_VERSION,exportedAt:new Date().toISOString(),data:{
  completed,
  bookmarks:cleanBookmarks(storedArray(storage,WORKSPACE_KEYS.bookmarks)),
  reviews:cleanReviewDrafts(storedArray(storage,WORKSPACE_KEYS.reviews))
 }};
}
export function restoreWorkspace(storage,backup){
 if(!isRecord(backup)||backup.format!==WORKSPACE_FORMAT||backup.version!==WORKSPACE_VERSION||!isRecord(backup.data))throw Error('Validated workspace backup required.');
 const clean=parseWorkspaceBackup(JSON.stringify(backup));
 // Capture all old keys first: if local storage quota is exceeded, restore them.
 const changes=[
  [WORKSPACE_KEYS.progress,JSON.stringify(clean.data.completed)],
  [WORKSPACE_KEYS.legacy,JSON.stringify(clean.data.completed.filter(n=>n<=33))],
  [WORKSPACE_KEYS.bookmarks,JSON.stringify(clean.data.bookmarks)],
  [WORKSPACE_KEYS.reviews,JSON.stringify(clean.data.reviews)]
 ];
 const previous=changes.map(([key])=>[key,storage.getItem(key)]);
 try{
  for(const [key,value] of changes)storage.setItem(key,value);
 }catch(err){
  for(const [key,value] of previous){try{value===null?storage.removeItem(key):storage.setItem(key,value)}catch{}}
  throw new Error('Local storage could not save the backup. Previous data was restored.');
 }
 if(typeof window!=='undefined')window.dispatchEvent(new CustomEvent(WORKSPACE_EVENT));
 return clean;
}
export function saveDrafts(storage,drafts){
 const value=cleanReviewDrafts(drafts);
 storage.setItem(WORKSPACE_KEYS.reviews,JSON.stringify(value));
 if(typeof window!=='undefined')window.dispatchEvent(new CustomEvent('mwx:reviews-updated'));
 return value;
}
