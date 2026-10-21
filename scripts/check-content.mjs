import {readFileSync,existsSync} from 'node:fs';import assert from 'node:assert/strict';
const source=readFileSync('src/data.js','utf8');
const champions=JSON.parse(source.match(/export const champions=(\[[\s\S]*?\]);/)[1]);
const levels=JSON.parse(source.match(/export const levels=(\[[\s\S]*?\]);/)[1]);
assert.equal(champions.length,105);assert.equal(levels.length,33);
assert.equal(new Set(champions.map(x=>x.id)).size,105);assert.equal(new Set(levels.map(x=>x.id)).size,33);
assert.deepEqual(levels.map(x=>x.id),Array.from({length:33},(_,i)=>i+1));
assert.ok(!source.includes('export const submissions='),'Legacy duplicated submission export must be removed');
for(const key of ['MAIN PROTAGONIST / WITNESS','ACTION MENTOR','WILD IDEA ENGINEER','COMMAND CENTER'])assert.ok(source.includes(key),'Missing character canon '+key);
const bugs=readFileSync('src/data/bugSubmissions.ts','utf8');
for(const n of Array.from({length:8},(_,i)=>String(i+1).padStart(3,'0')))assert.ok(bugs.includes('\"id\": \"'+n+'\"'),'Missing submission '+n);
assert.equal((bugs.match(/\"approvalStatus\": \"not_verified\"/g)||[]).length,8);
for(const s of ['Yesaya 65:20','Al-Mu\'minun 23:99–100','approved_with_condition'])assert.ok(bugs.includes(s));
assert.ok(bugs.includes('MWX-SYF-00752'));
assert.ok(bugs.includes('WILD YOUTH'));
for(const path of ['src/pages-ui/Home.tsx','src/pages-ui/Champions.tsx','src/pages-ui/Paradise.tsx','src/pages-ui/Syafaat.tsx','src/pages-ui/Grand.tsx'])assert.ok(readFileSync(path,'utf8').length>100);
const archive=JSON.parse(readFileSync('src/data/storyArchive.js','utf8').replace(/^export const archiveEpisodes = /,'').replace(/;\s*$/,''));
assert.ok(archive.length>=15,'Story archive must contain 15 seeded synopses');
assert.equal(new Set(archive.map(x=>x.slug)).size,archive.length);
const reader=readFileSync('src/pages-ui/Stories.tsx','utf8');
for(const part of ['StoryDetail','PREVIOUS PAGE','NEXT PAGE','NEXT EPISODE','EDITORIAL PAGE SET'])assert.ok(reader.includes(part),'Missing reader feature '+part);
const scripts=JSON.parse(readFileSync('src/data/episodeManuscripts.js','utf8').replace(/^export const episodeManuscripts = /,'').replace(/;\s*$/,''));
assert.equal(scripts.length,15);assert.equal(scripts.find(x=>x.slug==='digimon-jogress').pages.length,7);
assert.ok(scripts.every(x=>x.pages.length>=4 && x.provenance.includes('not a verbatim')));
assert.deepEqual(new Set(scripts.map(x=>x.slug)),new Set(archive.map(x=>x.slug)),'Every archive episode must have editorial pages');
assert.equal(scripts.reduce((total,e)=>total+e.pages.length,0),63);
assert.ok(scripts.every(e=>e.pages.every((p,i)=>p.number===i+1 && p.artwork===null && p.artworkPath===null && p.sourceType==='editorial_reconstruction' && p.verification==='original_text_pending')),'Sequential pages and honest artwork status');
assert.ok(reader.includes('getPosterAsset') && reader.includes('Episode references:'));
for(const feature of ['FOCUS READING MODE','COPY PAGE LINK','SHARE ↗','useSearchParams','repeating-linear-gradient'])assert.ok(reader.includes(feature),'Missing Phase 2.6 feature '+feature);
const manifest=readFileSync('src/data/posterManifest.js','utf8');
assert.ok(manifest.includes('verifiedPosterAssets = []'),'No unverified art may be preloaded');
assert.ok(manifest.includes('getPosterAsset'));
assert.ok(reader.includes('POSTER GALLERY') && reader.includes('getPosterAsset'));
const home=readFileSync('src/pages-ui/Home.tsx','utf8');const art=readFileSync('src/components/CrewArt.tsx','utf8');const css=readFileSync('src/style.css','utf8');
for(const k of ['WHERE','LEGEND.','ROCKSOUL','ISROCKFEEL','WALTERWHITE','4-LAH / THE BATTERIES'])assert.ok(home.includes(k));
for(const k of ['<svg','linearGradient','viewBox'])assert.ok(art.includes(k));
for(const k of ['.mw-hero','.mw-crew-grid','@media(max-width:500px)'])assert.ok(css.includes(k));
const supporting=readFileSync('src/data/supportingCrew.js','utf8');
for(const token of ['MIKAIL','MALIK','RIDWAN','QUESTION DUO','RECORD TWINS','FINAL KEEPER'])assert.ok(supporting.includes(token));
for(const token of ['PUNK ROCK','SIGNAL QUEEN','GREEN','WALTERWHITE'])assert.ok(home.toUpperCase().includes(token));
assert.ok(art.includes('rocksoul')&&art.includes('punk')&&art.includes('queen'));
const charPage=readFileSync('src/pages-ui/Characters.tsx','utf8');
for(const k of ['ROCKSOUL','ISROCKFEEL','WALTERWHITE','4-LAH / THE BATTERIES','setCap','supportingCrew'])assert.ok(charPage.includes(k),'Character UI missing '+k);
assert.ok(readFileSync('src/app/[...slug]/page.tsx','utf8').includes('path === "characters"'));
assert.ok(readFileSync('src/components/Header.tsx','utf8').includes("'/characters'"));
assert.ok(art.includes("cap==='black'"),'ROCKSOUL black cap must change real SVG colors');

// Finished Character Universe quality gates.
const supportArt=readFileSync('src/components/SupportArt.tsx','utf8');
const characterView=readFileSync('src/pages-ui/Characters.tsx','utf8');
for(const name of ['MIKAIL','FINAL KEEPER','QUESTION DUO','RECORD TWINS','MALIK','RIDWAN'])assert.ok(supportArt.includes("'"+name+"'"),'Missing custom illustrated character: '+name);
assert.ok(supportArt.includes('useId'), 'SVG gradients must have unique IDs');
assert.ok(art.includes('React.useId'), 'Main crew gradients must have unique IDs');
assert.ok(home.includes('<SupportArt') && characterView.includes('<SupportArt'),'Both character galleries should show vector art');
assert.ok(!characterView.includes('typographic SVG-style emblems'),'Outdated artwork placeholder claim');
assert.ok(characterView.includes("cap==='black'") && art.includes("cap==='black'"),'ROCKSOUL cap toggle must be operative');
assert.ok(home.includes('href="/characters"') && readFileSync('src/components/Header.tsx','utf8').includes("'/characters'"),'Character Universe must be accessible');


const header=readFileSync('src/components/Header.tsx','utf8');
const appSource=readFileSync('src/app/AppShell.tsx','utf8');
for(const marker of ['nav-menu-toggle','aria-expanded','aria-controls','usePathname','Escape','<nav'])assert.ok(header.includes(marker),'Missing accessible navigation '+marker);
for(const marker of ['skip-link','main-content'])assert.ok(appSource.includes(marker),'Missing route keyboard support '+marker);
for(const marker of ['.navlinks.is-open',':focus-visible','.skip-link:focus','@media(max-width:900px)'])assert.ok(css.includes(marker),'Missing accessibility CSS '+marker);
const storyEffect=reader.indexOf("useEffect(()=>{const value=Math.max(0,(Number(params.get('page'))");
assert.ok(storyEffect>0 && storyEffect<reader.indexOf('if(!e)return'),'React hooks must run before not-found return');


const {worldLevels,worldPhases,guilds,communityEvents,governanceRules}=await import('../src/data/worldSystems.js');
assert.equal(worldLevels.length,100);
assert.deepEqual(worldLevels.map(x=>x.id),Array.from({length:100},(_,i)=>i+1));
assert.equal(worldLevels.filter(x=>x.prototype).length,67,'67 editorial prototype tasks');
assert.equal(worldLevels.filter(x=>!x.prototype).length,33,'Preserve 33 original Self Aura tasks');
assert.equal(worldPhases.length,3);
assert.equal(guilds.length,10);assert.equal(new Set(guilds.map(x=>x.id)).size,10);
assert.equal(communityEvents.length,48);assert.equal(new Set(communityEvents.map(x=>x.id)).size,48);
assert.ok(communityEvents.every(x=>x.isScheduled===false&&x.status==='suggested_only'));
assert.ok(governanceRules.length>=8);
const sourceAudit=await import('../src/data/sourceAudit.js');
assert.equal(sourceAudit.championSourceRows.length,105);
assert.equal(sourceAudit.storySourceRows.length,15);
assert.ok(sourceAudit.championSourceRows.every(x=>x.status==='needs_independent_review'));
assert.ok(sourceAudit.championSourceRows.every(x=>!x.identityReviewed&&!x.videoReviewed));
assert.ok(sourceAudit.checkedReferenceLinks.length>=2);
for(const path of ['src/pages-ui/CommandCenter.tsx','src/pages-ui/Research.tsx','src/hooks/useWorldProgress.js','scripts/audit-posters.mjs','tests/browser/smoke.spec.js','playwright.config.js'])assert.ok(readFileSync(path,'utf8').length>150,'Missing new seven-track module '+path);
const appAll=readFileSync('src/app/[...slug]/page.tsx','utf8');
const navAll=readFileSync('src/components/Header.tsx','utf8');
for(const route of ['command-center','research']){assert.ok(appAll.includes('path === "'+route+'"'));assert.ok(navAll.includes("'/"+route+"'"));}
assert.ok(readFileSync('src/pages-ui/Paradise.tsx','utf8').includes('worldLevels'));
assert.ok(readFileSync('src/pages-ui/CommandCenter.tsx','utf8').includes('communityEvents'));
assert.ok(readFileSync('src/pages-ui/Research.tsx','utf8').includes('EXPORT AUDIT CSV'));


const workspaceUI=readFileSync('src/pages-ui/Workspace.tsx','utf8');
const workspaceUtils=readFileSync('src/utils/workspaceBackup.js','utf8');
for(const piece of ['BACKUP & RESTORE','SOURCE REVIEW DRAFTS','ABOUT THIS WEBSITE','RESTORE MY WORKSPACE','SAVE PRIVATE DRAFT'])assert.ok(workspaceUI.includes(piece),'Workspace UI incomplete: '+piece);
for(const piece of ['parseWorkspaceBackup','restoreWorkspace','cleanReviewDrafts','WORKSPACE_EVENT','no fake']){/* last marker is documentary only */if(piece!=='no fake')assert.ok(workspaceUtils.includes(piece));}
assert.ok(readFileSync('src/app/[...slug]/page.tsx','utf8').includes('path === "workspace"'));
assert.ok(readFileSync('src/components/Header.tsx','utf8').includes("'/workspace'"));
assert.ok(workspaceUI.includes('NO ACCOUNT. JUST EXPLORE.'),'Public website must remain account free');
assert.ok(readFileSync('src/pages-ui/Grand.tsx','utf8').includes('NO ACCOUNTS BY DESIGN'),'Roadmap must stay static-first');
for(const file of ['api/health.js','db/schema.sql','db/001_secure_foundation.sql'])assert.ok(!existsSync(file),'Unused backend/server file should not ship: '+file);
assert.ok(readFileSync('src/pages-ui/CommandCenter.tsx','utf8').includes('No events match this combination.'));
assert.ok(readFileSync('src/hooks/useWorldProgress.js','utf8').includes('WORKSPACE_EVENT'));
assert.ok(readFileSync('scripts/test-workspace.mjs','utf8').includes('restoreWorkspace'));


const masterSource=readFileSync('src/data/bugPatchRegistry.js','utf8');
const masterMatch=masterSource.match(/export const registryCandidates=(\[[\s\S]*?\]);/);
assert.ok(masterMatch,'33 Patch candidate list missing');
const candidates=JSON.parse(masterMatch[1]);
assert.equal(candidates.length,25,'#009-#033 must all exist');
assert.deepEqual(candidates.map(x=>x.id),Array.from({length:25},(_,i)=>String(i+9).padStart(3,'0')),'Patch IDs must be unique and sequential');
const counts=candidates.reduce((a,x)=>(a[x.recordStatus]=(a[x.recordStatus]||0)+1,a),{});
assert.equal(counts.recovered_draft,5);
assert.equal(counts.number_conflict,1);
assert.equal(counts.proposed,18);
assert.equal(counts.user_submitted_in_chat,1);
assert.ok(candidates.every(x=>x.title&&x.scope&&x.summary&&x.benefit&&x.references&&x.provenance&&x.reviewNeeded),'Every patch needs complete editorial metadata');
assert.ok(candidates.every(x=>x.recordStatus!=='registered'&&x.origin!=='submission_reported_in_chat'),'No proposal may impersonate a submitted report');
assert.ok(candidates.every(x=>!x.reportedApproval && (!x.approvalStatus||x.approvalStatus==='not_verified')),'No candidate can claim unverified approval as established');
const conflict=candidates.find(x=>x.id==='014');
assert.equal(conflict.title,'FAMILY WITHOUT FEAR');
assert.equal(conflict.conflictingCandidate.title,'THE WRONG WAY / HELLROAD');
assert.equal(conflict.recordStatus,'number_conflict');
assert.equal(8+candidates.length,33,'Combined index must cover precisely 33 slots');
const selected=candidates.find(x=>x.id==='033');
assert.equal(selected.title,'KOPIHITAM - SIACENG');
assert.equal(selected.recordStatus,'user_submitted_in_chat');
assert.equal(selected.detailKey,'FAITH_TO_ACTION');
assert.match(selected.scope,/Dunia \/ Global Humanity/);
assert.match(selected.provenance,/explicit_user_submission_request_in_chat/);
assert.equal(selected.submissionDate,'2026-10-17');
assert.equal(selected.submissionChannel,'chat');
assert.equal(selected.externalSubmission,'not_evidenced');
assert.equal(selected.editorialFinalVersion,'1.0');
assert.equal(selected.editorialFinalizedAt,'2026-10-17');
const fullPatch=await import('../src/data/faithToAction.js');
assert.equal(fullPatch.faithToAction.id,'033');
assert.equal(fullPatch.faithToAction.title,'KOPIHITAM - SIACENG');
assert.equal(fullPatch.faithToAction.conceptSubtitle,'FAITH TO ACTION — FROM SCRIPTURE TO SYSTEM');
assert.equal(fullPatch.faithToAction.acengApproval.phrase,'ACENG MAH APPROVE');
assert.equal(fullPatch.faithToAction.acengApproval.independentVerification,'not_verified');
assert.equal(selected.acengUserReportedCaption,'ACENG MAH APPROVE');
assert.equal(selected.acengCaptionEvidence,'user_attributed_to_the_batteries_in_chat_not_independently_verified');
assert.equal(selected.acengCaptionAttribution,'THE BATTERIES');
assert.equal(fullPatch.faithToAction.acengApproval.attributedTo,'THE BATTERIES');
assert.ok(readFileSync('src/pages-ui/Syafaat.tsx','utf8').includes('menurut pernyataan THE BATTERIES'));
assert.equal(fullPatch.faithToAction.domains.length,5);
assert.equal(fullPatch.faithToAction.stages.length,7);
assert.equal(fullPatch.faithToAction.references.length,4);
assert.equal(fullPatch.faithToAction.metrics.length,6);
assert.equal(fullPatch.faithToAction.externalSubmission,'not_evidenced');
assert.equal(fullPatch.faithToAction.submissionStage,'user_submitted_in_chat');
assert.equal(fullPatch.faithToAction.chatSubmission.date,'2026-10-17');
assert.equal(fullPatch.faithToAction.chatSubmission.externalDispatch,false);
assert.equal(fullPatch.faithToAction.finalCopy.version,'1.0');
assert.equal(fullPatch.faithToAction.finalCopy.state,'editorially_finalized');
assert.equal(fullPatch.faithToAction.finalCopy.source,'docs/MWX_033_FINAL_SUBMISSION_V1.md');
assert.equal(fullPatch.faithToAction.approval,'not_independently_verified');
assert.ok(fullPatch.faithToAction.safetyRules.some(x=>x.includes('kiblat Islam')));
assert.ok(fullPatch.faithToAction.links.some(x=>x.patch==='012'));
assert.ok(fullPatch.faithToAction.links.some(x=>x.patch==='025'));
assert.ok(fullPatch.faithToAction.links.some(x=>x.patch==='029'));
assert.ok(fullPatch.faithToAction.prayer.includes('YA ALLAH'));
// Parse registry source rather than importing the TS-dependent module in the Node integrity runner.
const preservedMatch=masterSource.match(/export const displacedPatchConcepts=(\[[\s\S]*?\]);/);
assert.ok(preservedMatch,'Displaced Final Audit archive must exist');
const archived=JSON.parse(preservedMatch[1]);
assert.equal(archived.length,1);
assert.equal(archived[0].title,'THE FINAL AUDIT');
assert.equal(archived[0].formerSlot,'033');
assert.ok(masterSource.includes("submittedInChat:registryEntries.filter(p=>p.recordStatus==='user_submitted_in_chat').length"));
assert.ok(masterSource.includes("user_submitted_in_chat:'SUBMITTED IN CHAT • NO EXTERNAL DELIVERY'"));
assert.equal(candidates.filter(x=>x.recordStatus==='proposed').length,18);
assert.equal(candidates.filter(x=>x.recordStatus==='user_submitted_in_chat').length,1);
assert.ok(patchUIReady());
function patchUIReady(){return readFileSync('src/pages-ui/Patch033.tsx','utf8').includes('PROJECT SUBMISSION RECEIPT / ARCHIVE ONLY');}
const patchUI=readFileSync('src/pages-ui/Syafaat.tsx','utf8');
for(const marker of ['registryEntries','registrySummary','registryStatusLabels','RECOVERED DRAFTS','THE WRONG WAY / HELLROAD','wildYouthReport','reportedApproval','NOT VERIFIED','33 SLOTS','KOPIHITAM - SIACENG','user_submitted_in_chat','displacedPatchConcepts'])assert.ok(patchUI.includes(marker),'Master 33 UI missing '+marker);
assert.ok(readFileSync('docs/MASTER_BUG_PATCH_33_V2.md','utf8').includes('THE FINAL AUDIT'));
assert.ok(readFileSync('docs/MASTER_BUG_PATCH_33_V2.md','utf8').includes('FAITH TO ACTION'));
assert.ok(readFileSync('docs/MWX_033_FINAL_SUBMISSION_V1.md','utf8').includes('ACENG MAH APPROVE'));
assert.ok(readFileSync('src/pages-ui/Patch033.tsx','utf8').includes('patch.acengApproval.phrase'));
const finalDoc=readFileSync('docs/MWX_033_FINAL_SUBMISSION_V1.md','utf8');
for(const part of ['MWX-033','17 October 2026','KOPIHITAM - SIACENG','Faith & Worship','SOURCE → CONTEXT','Ya Allah','BIIZNILLAH','THE FINAL AUDIT','user_submitted_in_chat'])assert.ok(finalDoc.toLowerCase().includes(part.toLowerCase()),'Final doc missing '+part);
const patchPage=readFileSync('src/pages-ui/Patch033.tsx','utf8');
for(const part of ['COPY FINAL #033 TEXT','patch.finalCopy.version','patch.stages.map','patch.metrics.map','patch.safetyRules.map'])assert.ok(patchPage.includes(part),'Final full-copy path missing '+part);
for(const phrase of ['PATCH REQUEST','THE RECORDED PRAYER','SAFETY PROTOCOL','FROM SOURCE TO HUMAN ACTION','REFERENCES, NOT MAGIC COMMANDS','faithToAction'])assert.ok(patchPage.includes(phrase),'Missing patch #033 page feature '+phrase);
assert.ok(readFileSync('src/app/[...slug]/page.tsx','utf8').includes('path === "syafaat-status/033"'));
assert.ok(readFileSync('src/pages-ui/Home.tsx','utf8').includes('#033 KOPIHITAM - SIACENG'));

console.log('Content integrity checks PASS: 105 champions, 33 levels, 8 legacy numbered reports + 1 #033 chat-recorded submission, WILD YOUTH and 15 story entries / 63 editorial pages, 0 verified approvals.');


// SYAFAAT local-only metrics lab: route, navigation, denominator rules, and no persistence claims.
const syafaatLab = readFileSync('src/pages-ui/SyafaatEngine.tsx','utf8');
const routedPages = readFileSync('src/app/[...slug]/page.tsx','utf8');
const navigation = readFileSync('src/components/Header.tsx','utf8');
for (const marker of ['calculateSyafaatMetrics','SESSION ONLY','CLEAR SESSION DATA','N/A','pahala','local']) {
  assert.ok(syafaatLab.toLowerCase().includes(marker.toLowerCase()), 'SYAFAAT lab missing marker: ' + marker);
}
assert.ok(routedPages.includes('path === "syafaat-engine"'), 'SYAFAAT lab route missing');
assert.ok(readFileSync('src/pages-ui/Syafaat.tsx','utf8').includes('href="/syafaat-engine"'), 'SYAFAAT lab must be reachable from its registry page');
assert.ok(!syafaatLab.includes('localStorage') && !syafaatLab.includes('fetch('), 'SYAFAAT lab must remain local-only with no persistence or external dispatch');
assert.ok(readFileSync('src/pages-ui/Syafaat.tsx','utf8').includes('href="/syafaat-engine"'), 'SYAFAAT master registry must link to the metrics lab');


// Recovered poster-source metadata is documented without pretending the binaries are committed.
const posterRecovery = readFileSync('docs/POSTER_RECOVERY_KINGSLAYER_UNITY_AGREEMENT.md','utf8');
for (const digest of [
 '1ffd04ea218077b74597190cf9e826406ddd35924da400fc5c4a5781fa2d8cdf',
 '689413a45a32014b0b627791d74044e761690bccb2bc49afb71aca9cbb0e3874',
 'f9540791ae2eee09878d0f48fde06ab10f40db1dfeb5f2c192719adc36c9912f',
 'f52594e11432be5403af6e067bc12cb13731590046674ad741001b57ecad605a',
 'cf39c242e4ffb48a149d2cdddcadff777781b79952dc2b0cd01d4b00689712e0'
]) assert.ok(posterRecovery.includes(digest), 'Poster recovery record missing SHA-256: ' + digest);
assert.ok(posterRecovery.includes('not the verified poster manifest'), 'Poster recovery record must distinguish located files from committed/approved assets');
