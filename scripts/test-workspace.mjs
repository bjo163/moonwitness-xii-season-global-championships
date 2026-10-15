import assert from 'node:assert/strict';
import {captureWorkspace,parseWorkspaceBackup,restoreWorkspace,saveDrafts,cleanProgress,cleanBookmarks,cleanReviewDrafts,WORKSPACE_KEYS,WORKSPACE_FORMAT} from '../src/utils/workspaceBackup.js';

function memoryStorage(initial={}){
 const data=new Map(Object.entries(initial));
 return {
  getItem:k=>data.has(k)?data.get(k):null,
  setItem:(k,v)=>data.set(k,String(v)),
  removeItem:k=>data.delete(k),
  dump:()=>Object.fromEntries(data)
 };
}
const store=memoryStorage({
 [WORKSPACE_KEYS.legacy]:JSON.stringify([1,2,33,33,101,-1,'4']),
 [WORKSPACE_KEYS.bookmarks]:JSON.stringify(['EVT-001','EVT-001','EVT-999']),
 [WORKSPACE_KEYS.reviews]:JSON.stringify([{key:'champion:1',state:'investigating',note:'Reference pending',sourceUrl:'https://example.org/ref'}])
});
assert.deepEqual(cleanProgress([1,1,2,101,'3',NaN,-2]),[1,2]);
assert.deepEqual(cleanBookmarks(['EVT-001','EVT-001','EVT-999']),['EVT-001']);
const out=captureWorkspace(store);
assert.equal(out.format,WORKSPACE_FORMAT);
assert.deepEqual(out.data.completed,[1,2,33]);
assert.deepEqual(out.data.bookmarks,['EVT-001']);
assert.equal(out.data.reviews[0].key,'champion:1');
const validated=parseWorkspaceBackup(JSON.stringify(out));
assert.deepEqual(validated.data,out.data);
assert.throws(()=>parseWorkspaceBackup('{"version":1}'),/Unsupported workspace/);
assert.throws(()=>parseWorkspaceBackup('{bad'),/Invalid JSON/);
assert.throws(()=>parseWorkspaceBackup('x'.repeat(512001)),/below 500 KB/);
assert.throws(()=>parseWorkspaceBackup(JSON.stringify({...out,data:null})),/contain/);
const malicious={...out,data:{completed:[1,1,100,-3,999],bookmarks:['EVT-001','EVT-999'],reviews:[{key:'champion:1',state:'fake_approved',note:'a'.repeat(700),sourceUrl:'javascript:alert(1)'},{key:'story:unknown',state:'investigating',note:'spam'}]}};
const safe=parseWorkspaceBackup(JSON.stringify(malicious));
assert.deepEqual(safe.data.completed,[1,100]);
assert.deepEqual(safe.data.bookmarks,['EVT-001']);
assert.equal(safe.data.reviews.length,1);
assert.equal(safe.data.reviews[0].state,'needs_source');
assert.equal(safe.data.reviews[0].sourceUrl,'');
assert.equal(safe.data.reviews[0].note.length,600);
const destination=memoryStorage({[WORKSPACE_KEYS.progress]:JSON.stringify([99])});
restoreWorkspace(destination,safe);
assert.deepEqual(JSON.parse(destination.getItem(WORKSPACE_KEYS.progress)),[1,100]);
assert.deepEqual(JSON.parse(destination.getItem(WORKSPACE_KEYS.legacy)),[1]);
assert.equal(JSON.parse(destination.getItem(WORKSPACE_KEYS.reviews)).length,1);
const saved=saveDrafts(destination,[{key:'story:digimon-jogress',state:'ready_for_independent_review',note:'Needs a second reviewer',sourceUrl:'https://example.org'},{key:'champion:999',state:'investigating',note:'reject'}]);
assert.deepEqual(saved.map(x=>x.key),['story:digimon-jogress']);
assert.equal(cleanReviewDrafts([{key:'champion:1',sourceUrl:'http://insecure.example'}])[0].sourceUrl,'');
const failing=memoryStorage({[WORKSPACE_KEYS.progress]:'[99]'});
const old=failing.setItem;let thrown=false;
failing.setItem=(key,value)=>{if(key===WORKSPACE_KEYS.bookmarks&&!thrown){thrown=true;throw new Error('quota');}return old(key,value);};
assert.throws(()=>restoreWorkspace(failing,safe),/Previous data was restored/);
assert.equal(failing.getItem(WORKSPACE_KEYS.progress),'[99]');
console.log('Workspace tests PASS: 100-level migration, sanitization, untrusted JSON rejection, safe drafts, rollback, no fake approvals.');
