import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {faithToAction as patch} from '../data/faithToAction.js';
import {Head,Notice,Card} from '../components/UI.jsx';

const makeSubmission=()=>[
 'MOONWITNESS — BUG PATCH #033 / FAITH TO ACTION',
 'REALM: DUNIA / EARTH',
 'SCOPE: GLOBAL HUMANITY — VOLUNTARY',
 'CATEGORY: EDUCATION • FAITH PRACTICE • TECHNOLOGY • ETHICS',
 '',
 'BUG: '+patch.problem,
 '',
 'PATCH REQUEST: '+patch.objective,
 '',
 'EXPECTED BENEFIT: '+patch.intendedBenefit,
 '',
 'FIVE DOMAINS:',
 ...patch.domains.map((d,i)=>String(i+1)+'. '+d.name+': '+d.what),
 '',
 'SAFETY RULES:',
 ...patch.safetyRules.map((v,i)=>String(i+1)+'. '+v),
 '',
 'THEMATIC SCRIPTURE REFERENCES:',
 ...patch.references.map(v=>v.book+': '+v.label+' — '+v.theme),
 '',
 'DOA:',
 patch.prayer,
 '',
 'STATUS: USER-SELECTED DRAFT; NOT EXTERNALLY SUBMITTED; NO INDEPENDENTLY VERIFIED DIVINE APPROVAL.'
].join('\n');

export default function Patch033(){
 const [copied,setCopied]=useState(false);
 const copy=async()=>{try{await navigator.clipboard.writeText(makeSubmission());setCopied(true)}catch{setCopied(false)}};
 return <main className="container page faith033">
 <Head eyebrow="// CHAOS MEDIC / GLOBAL WORLD PATCH" title="#033 — FAITH TO ACTION." sub={patch.tagline}/>
 <div className="stats">
 <div><b>033</b> PATCH SLOT</div>
 <div><b>05</b> IMPLEMENTATION DOMAINS</div>
 <div><b>07</b> PROCESS STAGES</div>
 <div><b>00</b> VERIFIED APPROVALS</div>
 </div>
 <Notice><b>EARTH / GLOBAL HUMANITY:</b> Ini permohonan dan rancangan peningkatan pendidikan/praktik manusia. Bukan sistem yang memerintah agama, mengubah kitab, mengontrol ibadah, atau menjamin hasil gaib. Statusnya draf pilihan pengguna; belum ada bukti submission eksternal.</Notice>
 <section className="section"><Head eyebrow="// THE REAL BUG" title="KNOWLEDGE IS NOT YET ACTION." sub="Jangan mengubah ajaran agama menjadi kode mentah. Pelajari konteks, lalu rancang bantuan yang tepat."/>
 <div className="grid two"><Card><small>PROBLEM / BUG</small><h3>THE KNOWLEDGE–ACTION GAP</h3><p>{patch.problem}</p><p><b>Scope:</b> {patch.realm} • {patch.scope}</p></Card>
 <Card><small>PATCH REQUEST</small><h3>HELP HUMANITY LEARN & DO GOOD</h3><p>{patch.objective}</p><p><b>Expected benefit:</b> {patch.intendedBenefit}</p></Card></div>
 <div className="grid three">{patch.bugClasses.map(x=><Card key={x.name}><small>GAP CLASS</small><h3>{x.name}</h3><p>{x.fix}</p></Card>)}</div>
 </section>
 <section className="section"><Head eyebrow="// FIVE HUMAN DOMAINS" title="ONE PATCH. MULTIPLE BENEFITS." sub="Berbagai kebutuhan dibantu sesuai latar agama, kebutuhan dan persetujuan manusia, tanpa paksaan."/>
 <div className="grid two">{patch.domains.map((d,i)=><Card key={d.name}><small>DOMAIN {String(i+1).padStart(2,'0')}</small><h3>{d.name}</h3><p>{d.what}</p><p><b>Technology:</b> {d.tools}</p><p className="patch-unverified"><b>Safety:</b> {d.guard}</p></Card>)}</div>
 </section>
 <section className="section alt"><Head eyebrow="// OPERATING MODEL" title="FROM SOURCE TO HUMAN ACTION." sub="Tujuh tahap editorial untuk merancang sistem yang benar-benar membantu."/>
 <div className="grid three">{patch.stages.map(s=><Card key={s.id}><small>STAGE {s.id}</small><h3>{s.name}</h3><p>{s.detail}</p></Card>)}</div></section>
 <section className="section"><Head eyebrow="// FOUR BOOKS / SOURCE CHECK" title="REFERENCES, NOT MAGIC COMMANDS." sub={patch.interpretationNote}/>
 <div className="grid two">{patch.references.map(s=><Card key={s.label}><small>{s.book}</small><h3>{s.label}</h3><p>{s.theme}</p><a className="textlink" href={s.url} target="_blank" rel="noopener noreferrer">READ ORIGINAL TEXT ↗</a><p><small>Basic passage checked; this is a thematic link, not a direct instruction to build apps.</small></p></Card>)}</div></section>
 <section className="section alt"><Head eyebrow="// SAFETY PROTOCOL" title="THE PATCH MUST HAVE BRAKES."/>
 <div className="grid two">{patch.safetyRules.map((rule,i)=><Card key={i}><small>RULE {String(i+1).padStart(2,'0')}</small><p>{rule}</p></Card>)}</div>
 <Notice><b>CONFLICT GUARD:</b> Proposal QIBLAT UTARA (#006) tidak otomatis menjadi arah kiblat baru untuk aplikasi shalat Islam. Aplikasi harus mengikuti aturan ibadah yang relevan, memisahkan klaim pribadi dari aturan agama yang berlaku, serta menyebut QS. Al-Baqarah 2:144 sesuai konteksnya.</Notice></section>
 <section className="section"><Head eyebrow="// IMPACT REVIEW" title="MEASURE HELP, NOT FAITH." sub="Indikator yang bisa diuji tidak menilai kesalehan seseorang."/>
 <div className="grid three">{patch.metrics.map(x=><Card key={x.name}><h3>{x.name}</h3><p>{x.metric}</p></Card>)}</div></section>
 <section className="section alt"><Head eyebrow="// PATCH RELATIONSHIPS" title="LINK THE WORLD SYSTEM." sub="Tautan tematis ke patch lain, bukan dependency otomatis yang sudah diterapkan."/>
 <div className="grid three">{patch.links.filter(x=>x.patch!=='033').map(x=><Card key={x.patch}><small>RELATED BUG PATCH #{x.patch}</small><p>{x.why}</p><Link className="textlink" to={'/syafaat-status#patch-'+x.patch}>VIEW IN MASTER REGISTER ↗</Link></Card>)}</div></section>
 <section className="section"><Head eyebrow="// PERSONAL REQUEST / OPTIONAL" title="THE PRAYER DRAFT."/>
 <Card><small>YA ALLAH • BIIZNILLAH • AAMIIN</small><p className="faith033-prayer">{patch.prayer}</p><p><b>Intended role:</b> permohonan pribadi, bukan hasil persetujuan atau keajaiban yang dapat dinyatakan telah terjadi.</p></Card>
 <div className="filters"><button type="button" onClick={copy}>COPY #033 DRAFT ↗</button><Link className="btn" to="/syafaat-status#patch-033">BACK TO MASTER 33 ↗</Link></div><p role="status" aria-live="polite">{copied?'Teks draft tersalin. Belum ada pengajuan eksternal.':''}</p>
 </section></main>;
}
