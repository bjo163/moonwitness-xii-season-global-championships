"use client";
import React,{useMemo,useState} from 'react';
import Link from 'next/link';
import {Head,Notice} from '../components/UI';
import {ecosystemSystems,ecosystemLifecycle,ecosystemRules} from '../data/ecosystemRegistry.js';
import {relatedConcepts,conceptStatusLabels} from '../data/relatedConceptCatalog.js';

const labels={planned:'PLANNED',proposed:'PROPOSED','partially-covered':'PARTIALLY COVERED','in-development':'IN DEVELOPMENT',validated:'VALIDATED',operational:'OPERATIONAL',blocked:'BLOCKED'};
export default function Ecosystem(){
 const [query,setQuery]=useState(''); const [status,setStatus]=useState('all'); const [domain,setDomain]=useState('all');
 const domains=useMemo(()=>['all',...new Set(ecosystemSystems.map(x=>x.domain))],[]);
 const filtered=useMemo(()=>ecosystemSystems.filter(x=>[x.id,x.title,...x.aliases,x.domain,x.purpose,x.nextAction].join(' ').toLowerCase().includes(query.toLowerCase())&&(status==='all'||x.status===status)&&(domain==='all'||x.domain===domain)),[query,status,domain]);
 const partial=ecosystemSystems.filter(x=>x.status==='partially-covered').length;
 const planned=ecosystemSystems.filter(x=>['planned','proposed'].includes(x.status)).length;
 const operational=ecosystemSystems.filter(x=>x.status==='operational').length;
 const inDevelopment=ecosystemSystems.filter(x=>x.status==='in-development').length;
 const validated=ecosystemSystems.filter(x=>x.status==='validated').length;
 return <main className="container page">
 <Head eyebrow="// ECOSYSTEM MAP / ACTIVE SYSTEM BLUEPRINT" title="ONE ECOSYSTEM. CLEAR ROLES." sub="Indeks sistem kanonis MoonWitness XII: fungsi, koneksi, batas, bukti yang tersedia, dan tindakan berikutnya."/>
 <div className="stats"><div><b>{ecosystemSystems.length}</b> SYSTEM RECORDS</div><div><b>{partial}</b> PARTIALLY COVERED</div><div><b>{planned}</b> PLANNED / PROPOSED</div><div><b>{operational}</b> OPERATIONAL</div></div>
 <Notice><b>STATUS HONESTY:</b> “Active” berarti ada peran dan langkah kerja dalam roadmap, bukan bukti bahwa sistem fisik atau AI sudah berjalan. XII memakai Next.js App Router + React + TypeScript/TSX dengan data statis berversi; tanpa backend, database, atau ORM pada fase ini. {inDevelopment} in development · {validated} validated · {operational} operational menurut status registry saat ini.</Notice>
 <section className="section"><Head eyebrow="// CANONICAL SYSTEM INDEX" title="FIND A SYSTEM."/>
 <div className="filters"><input aria-label="Search ecosystem systems" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search system, alias, purpose..."/>
 <select aria-label="Filter by status" value={status} onChange={e=>setStatus(e.target.value)}><option value="all">ALL STATUSES</option>{Object.entries(labels).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select>
 <select aria-label="Filter by domain" value={domain} onChange={e=>setDomain(e.target.value)}>{domains.map(x=><option key={x} value={x}>{x==='all'?'ALL DOMAINS':x.toUpperCase()}</option>)}</select></div>
 <div className="grid two">{filtered.map(s=><article className="card ecosystem-card" key={s.id}>
 <small>{s.id} / {s.domain.toUpperCase()} / {labels[s.status]||s.status.toUpperCase()}</small><h3>{s.title}</h3><p><b>Aliases:</b> {s.aliases.join(' · ')}</p><p>{s.purpose}</p>
 <div className="ecosystem-subsection"><b>INPUTS</b><p>{s.inputs.join(' · ')}</p></div><div className="ecosystem-subsection"><b>OUTPUTS</b><p>{s.outputs.join(' · ')}</p></div>
 <div className="ecosystem-subsection"><b>DEPENDENCIES</b><p>{s.dependsOn.length?s.dependsOn.map(id=>ecosystemSystems.find(x=>x.id===id)?.title||id).join(' → '):'No upstream dependency recorded yet.'}</p></div>
 <div className="ecosystem-subsection"><b>GUARDRAILS</b><ul>{s.guardrails.map(x=><li key={x}>{x}</li>)}</ul></div>
 <div className="ecosystem-next"><b>NEXT ACTION</b><p>{s.nextAction}</p></div><small>Evidence / maturity: {s.evidence}</small>
 </article>)}</div>{!filtered.length&&<Notice>No system records match these filters.</Notice>}<p>{filtered.length} of {ecosystemSystems.length} system records shown.</p></section>
 <section className="section"><Head eyebrow="// RELATED CONCEPTS / SOURCE RECOVERY" title="COLLECT. RECONCILE. REBUILD." sub="Konsep lintas sistem, narasi, dan aset yang perlu dicocokkan dengan sumber asli. Catatan ini tidak otomatis menjadi slot championship atau bukti bahwa aset final tersedia."/>
 <div className="grid two">{relatedConcepts.map(x=><article className="card" key={x.id}><small>{x.id} / {x.type.toUpperCase()} / {conceptStatusLabels[x.status]||x.status.toUpperCase()}</small><h3>{x.title}</h3><p><b>Aliases:</b> {x.aliases.join(' · ')}</p><p>{x.scope}</p><div className="ecosystem-next"><b>NEXT ACTION</b><p>{x.nextAction}</p></div><small>{x.boundary}</small></article>)}</div>
 </section>
 <section className="section alt"><Head eyebrow="// SHARED LIFECYCLE" title="FROM IDEA TO OPERATION." sub="Tidak ada lompatan status hanya karena konsep sudah dibahas atau dokumen sudah dibuat."/><div className="grid three">{ecosystemLifecycle.map((x,i)=><article className="card" key={x.id}><small>STAGE {String(i+1).padStart(2,'0')}</small><h3>{x.label}</h3><p>{x.description}</p></article>)}</div></section>
 <section className="section"><Head eyebrow="// GLOBAL CONFLICT PREVENTION" title="RULES FOR EVERY MODULE."/><div className="grid two">{ecosystemRules.map((x,i)=><article className="card" key={x}><small>RULE {String(i+1).padStart(2,'0')}</small><p>{x}</p></article>)}</div>
 <Notice><b>CHAMPIONSHIP INTEGRITY:</b> Keep the existing 33-slot registry intact. System concepts are indexed separately. The #014 conflict remains unresolved until primary evidence settles it.</Notice></section>
 <section className="section"><Head eyebrow="// NEXT STEP" title="MAKE THE MAP OPERATIONAL."/><div className="grid two"><article className="card"><h3>01 / Source reconciliation</h3><p>Match each system to existing manuscripts, stories, posters and source files.</p><Link className="textlink" href="/research">OPEN EVIDENCE DESK ↗</Link></article><article className="card"><h3>02 / Command Center</h3><p>Use this registry for real counts, blockers, conflicts and next actions.</p><Link className="textlink" href="/command-center">OPEN COMMAND CENTER ↗</Link></article></div></section>
 </main>;
}
