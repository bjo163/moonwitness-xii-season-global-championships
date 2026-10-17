import React,{useMemo,useState} from 'react';
import {Link} from 'react-router-dom';
import {Card,Head,Notice} from '../components/UI.jsx';
import {registryEntries,registrySummary,registryStatusLabels,registryNote,displacedPatchConcepts} from '../data/bugPatchRegistry.js';
import {unnumberedReports,wildYouthReport} from '../data/bugSubmissions.ts';

const reportLabel={approved:'APPROVED — PERSONAL REPORT ONLY',approved_with_condition:'CONDITIONAL APPROVAL — PERSONAL REPORT ONLY',submitted:'SUBMITTED IN CHAT — PERSONAL REPORT'};
const options=[['all','ALL 33'],['registered','REGISTERED'],['recovered_draft','RECOVERED DRAFTS'],['number_conflict','CONFLICT'],['user_submitted_in_chat','SUBMITTED IN CHAT'],['proposed','PROPOSALS']];
export default function Syafaat(){
 const [filter,setFilter]=useState('all');
 const [q,setQ]=useState('');
 const visible=useMemo(()=>registryEntries.filter(e=>(filter==='all'||e.recordStatus===filter)&&[e.id,e.title,e.summary,e.scope,e.benefit,e.references,e.conflictingCandidate?.title||''].join(' ').toLowerCase().includes(q.trim().toLowerCase())),[filter,q]);
 return <main className="container page patch-register">
 <Head eyebrow="// THE BATTERIES • CHAOS MEDIC" title="PATCH IT BRO! — MASTER 33." sub="Satu peta 33 slot Bug Patch, dengan jejak asal-usul yang jujur: laporan yang tercatat, draf yang dipulihkan, konflik nomor, dan proposal baru."/>
 <div className="stats patch-stats" aria-label="Patch register completion">
 <div><b>{registrySummary.total}/{registrySummary.target}</b> SLOTS LISTED</div>
 <div><b>{registrySummary.registered}</b> REGISTERED IN CHAT</div>
 <div><b>{registrySummary.recovered}</b> RECOVERED DRAFTS</div>
 <div><b>{registrySummary.conflicted}</b> NUMBER CONFLICT</div>
 <div><b>{registrySummary.proposed}</b> EDITORIAL PROPOSALS</div>
 <div><b>{registrySummary.submittedInChat}</b> NEW CHAT SUBMISSION</div>
 </div>
 <div className="patch-meter" aria-label="Registry origin proportions">
  <div className="patch-meter-registered" style={{width:registrySummary.registered/registrySummary.target*100+'%'}} title="Registered"/>
  <div className="patch-meter-recovered" style={{width:registrySummary.recovered/registrySummary.target*100+'%'}} title="Recovered draft"/>
  <div className="patch-meter-conflict" style={{width:registrySummary.conflicted/registrySummary.target*100+'%'}} title="Number conflict"/>
  <div className="patch-meter-proposed" style={{width:registrySummary.proposed/registrySummary.target*100+'%'}} title="Proposed"/>
 <div className="patch-meter-selected" style={{width:registrySummary.submittedInChat/registrySummary.target*100+'%'}} title="Submitted in chat"/>
 </div>
 <Notice><b>HONEST FIRST:</b> {registryNote} Status APPROVED dalam arsip lama adalah klaim persetujuan menurut pengaju, bukan persetujuan Allah yang dapat diverifikasi. Tidak ada persetujuan ilahi yang diverifikasi secara independen. Entri #001–#005 pun masih berupa ringkasan dan membutuhkan naskah lengkap.</Notice>
 <section className="patch-featured" aria-labelledby="patch-featured-title">
 <div><small>WORLD SYSTEM PATCH • DUNIA / GLOBAL HUMANITY • #033</small><h2 id="patch-featured-title">KOPIHITAM - SIACENG</h2><p><b>FAITH TO ACTION — FROM SCRIPTURE TO SYSTEM</b></p><p className="aceng-inline"><strong>ACENG MAH APPROVE</strong> <small>— menurut pernyataan pengaju; bukan persetujuan independen atau ilahi yang terverifikasi</small></p><p>Memahami ajaran → memeriksa konteks → membangun alat bantu → melakukan kebaikan → mengukur manfaat nyata.</p><p><b>One global proposal • Five practical domains • No forced religion • No accounts.</b></p><p><b>SUBMISSION RECORDED IN CHAT • 17 OCT 2026 • NOT SENT EXTERNALLY</b></p></div>
 <Link className="btn" to="/syafaat-status/033">OPEN FULL #033 SPEC ↗</Link>
 </section>
 <section className="section" id="master-register"><Head eyebrow="// FINAL STRUCTURAL REGISTRY V2" title="33 SLOTS. ZERO GUESSWORK." sub="Tidak menambah submission atau ayat yang tidak memiliki sumber. Klik setiap patch untuk melihat scope, manfaat, rujukan, catatan, dan kebutuhan review."/>
 <div className="filters patch-filters">
  <input aria-label="Cari nomor, judul atau topik patch" placeholder="CARI #009, SAFE, FAMILY, HELLROAD..." value={q} onChange={e=>setQ(e.target.value)}/>
  {options.map(([id,label])=><button key={id} type="button" aria-pressed={filter===id} onClick={()=>setFilter(id)}>{label}</button>)}
  <button type="button" onClick={()=>{setFilter('all');setQ('')}}>RESET FILTERS</button>
 </div>
 <p className="patch-count" role="status">{visible.length} dari {registrySummary.total} slot ditampilkan</p>
 <div className="patch-grid">{visible.map(e=><article className={'patch-item patch-'+e.recordStatus} key={e.id} id={'patch-'+e.id}>
  <div className="patch-item-head"><span className="patch-number">#{e.id}</span><span className="patch-state">{registryStatusLabels[e.recordStatus]}</span></div>
  <h3>{e.title}</h3>
  {e.id==='033'&&<p><Link to="/syafaat-status/033" className="textlink">READ COMPLETE GLOBAL PATCH / FIVE DOMAINS ↗</Link></p>}
  <p className="patch-scope">{e.scope}</p>
  <p>{e.summary}</p>
  {e.recordStatus==='number_conflict'&&<div className="patch-conflict"><b>ANOTHER #014 CANDIDATE</b><p>{e.conflictingCandidate.title}</p><p>{e.conflictingCandidate.summary}</p><small>Konflik tetap terbuka; kedua konsep tidak otomatis digabung.</small></div>}
  <details><summary>DETAILS / SOURCES / REVIEW ↓</summary>
   <div className="patch-detail"><p><b>Proposed benefit:</b> {e.benefit}</p><p><b>Scripture / source references:</b> {e.references}</p><p><b>Documentation note:</b> {e.note}</p><p><b>Origin:</b> {e.provenance}</p><p><b>Next review:</b> {e.reviewNeeded}</p>
   {e.reportedApproval&&<p><b>Reported status:</b> {reportLabel[e.reportedApproval]} — NOT INDEPENDENTLY VERIFIED</p>}
   <p className="patch-unverified"><b>Independent approval:</b> NOT VERIFIED</p></div>
  </details>
 </article>)}</div>
 {visible.length===0&&<Notice>No matching patches. Clear your filters to see all 33 slots.</Notice>}
 </section>
 <section className="section"><Head eyebrow="// PRESERVED OUTSIDE THE 33 SLOTS" title="DON'T LOSE THE EXTRAS." sub="Tambahan berikut punya asal sendiri. Tidak diam-diam mengambil nomor #009–#033."/>
  <div className="grid two"><Card><small>SEPARATE PRAYER REPORT • {wildYouthReport.id}</small><h3>{wildYouthReport.title}</h3><p>{wildYouthReport.summary}</p><p><b>Benefits requested:</b> {wildYouthReport.benefit}</p><p><b>References:</b> {wildYouthReport.references}</p><p><b>Status:</b> {wildYouthReport.status}</p><p>{wildYouthReport.note}</p></Card>
  <Card><small>ADDITIONAL NARRATIVE NOTES</small><h3>UNNUMBERED / REVIEW QUEUE</h3>{unnumberedReports.map(e=><p key={e.id}><b>{e.title}</b> — {e.note}</p>)}<p><b>THE WRONG WAY / HELLROAD</b> remains a separate competing candidate for #014, preserved in its conflict card above, not relabelled as a confirmed submission.</p>{displacedPatchConcepts.map(x=><p key={x.archiveId}><b>{x.title} — ARCHIVED EDITORIAL CONCEPT</b> (formerly slot #{x.formerSlot}). {x.summary} This remains unnumbered after #033 was assigned to KOPIHITAM - SIACENG.</p>)}</Card></div>
 </section>
 <section className="section"><Head eyebrow="// KEEP THE SYSTEMS SEPARATE" title="NOT ALL 33s ARE THE SAME."/><div className="grid three">
 <Card><h3>33 BUG PATCH SLOTS</h3><p>8 laporan + 5 recovered drafts + 1 konflik + 18 proposal editorial + 1 pengajuan #033 tercatat melalui chat, bukan pengiriman eksternal.</p></Card>
 <Card><h3>33 ORIGINAL SELF AURA</h3><p>Latihan pribadi yang sudah ada di Paradise. Bukan daftar 33 Bug Patch.</p></Card>
 <Card><h3>100 AETHERION LEVELS</h3><p>33 level awal serta 67 level pembelajaran lanjutan dalam konsep dunia kreatif.</p></Card>
 </div><p><Link className="btn" to="/paradise">EXPLORE PARADISE LEVELS ↗</Link></p></section>
 </main>;
}
