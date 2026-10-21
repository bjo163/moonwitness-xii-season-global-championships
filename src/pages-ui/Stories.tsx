"use client";
import React,{useMemo,useState,useEffect} from 'react';
import Link from 'next/link';
import {useParams,useSearchParams,useRouter} from 'next/navigation';
import {archiveEpisodes} from '../data/storyArchive.js';
import {episodeManuscripts} from '../data/episodeManuscripts.js';
import {checkedReferenceLinks} from '../data/sourceAudit.js';
import {verifiedPosterAssets,getPosterAsset} from '../data/posterManifest.js';
import {Card,Head,Notice} from '../components/UI.tsx';
const manuscriptRecords = episodeManuscripts as any[];
export function StoryArchive(){const[q,setQ]=useState('');const[genre,setGenre]=useState('All');const genres=['All',...new Set(archiveEpisodes.map(x=>x.collection))];const shown=useMemo(()=>archiveEpisodes.filter(x=>(genre==='All'||x.collection===genre)&&[x.title,x.summary,x.chapter,x.references,...x.tags].join(' ').toLowerCase().includes(q.toLowerCase())),[q,genre]);return <main className="container page"><Head eyebrow="// MOONWITNESS XII • STORY ARCHIVE" title="WHERE MYTH FADES TO LEGEND." sub="Kesaksian pribadi, studi kitab, dan semesta narasi — dipisahkan secara jelas. Poster manga faceless akan ditambahkan setelah aset asli tersedia."/><div className="stats"><div><b>{archiveEpisodes.length}</b> INDEXED EPISODES</div><div><b>{shown.length}</b> MATCHING</div><div><b>{verifiedPosterAssets.length}</b> IMAGE ASSETS VERIFIED</div></div><Notice><b>ARCHIVE STATUS:</b> Entri saat ini adalah sinopsis editorial yang dipulihkan dari rangkuman percakapan, bukan naskah asli lengkap. Kisah supernatural dicatat sebagai kesaksian pengaju dan tidak dinyatakan sebagai fakta terverifikasi. Referensi kitab bersifat tematis kecuali dinyatakan lain.</Notice><p><Link className="btn" href="/research">CHECK SOURCE EVIDENCE ↗</Link></p><div className="filters"><input aria-label="Cari episode" placeholder="Cari episode, ayat, tema..." value={q} onChange={e=>setQ(e.target.value)}/><select aria-label="Filter kategori" value={genre} onChange={e=>setGenre(e.target.value)}>{genres.map(g=><option key={g} value={g}>{g}</option>)}</select></div><section className="section"><Head eyebrow="// EPISODES" title="THE WITNESS LIBRARY."/><div className="grid three">{shown.map((e,i)=><Card key={e.slug}><small>ARCHIVE {String(archiveEpisodes.indexOf(e)+1).padStart(2,'0')} • {e.collection}</small><div style={{minHeight:100,margin:'14px 0',padding:16,border:'1px dashed currentColor',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',opacity:.7}}>MANGA FRAME {String(archiveEpisodes.indexOf(e)+1).padStart(2,'0')}<br/>FACeless • Artwork pending</div><h3>{e.title}</h3><p>{e.summary}</p><small>{e.kind} • {e.chapter}</small><p><Link href={'/stories/'+e.slug} className="textlink">OPEN EPISODE ↗</Link></p></Card>)}</div>{shown.length===0&&<Notice>No matching episodes. Try another keyword.</Notice>}</section></main>}
export function StoryDetail(){
 const routeParams=useParams(); const rawSlug=routeParams?.slug; const slug=Array.isArray(rawSlug)?rawSlug[rawSlug.length-1]:rawSlug;
 const params=useSearchParams(); const router=useRouter();
 const [readingMode,setReadingMode]=useState(false);
 const [copyStatus,setCopyStatus]=useState('');
 const [page,setPage]=useState(()=>Math.max(0,(Number(params.get('page'))||1)-1));
 const e=archiveEpisodes.find(x=>x.slug===slug);
 const index=archiveEpisodes.findIndex(x=>x.slug===slug);
 // Keep React hook order stable even when a story slug is missing.
 useEffect(()=>{const value=Math.max(0,(Number(params.get('page'))||1)-1);setPage(value);},[slug,params.get('page')]);
 if(!e)return <main className="container page"><Head title="EPISODE NOT FOUND."/><Link href="/stories" className="btn">BACK TO ARCHIVE</Link></main>;
 const restored=manuscriptRecords.find(x=>x.slug===slug);
 const fallbackPanels=[
  {label:"01 / COVER · OPENING SIGNAL",title:e.title,body:e.summary,sub:"EDITORIAL ARCHIVE COVER — not a recovered original poster."},
  {label:"02 / THE WITNESS · CONTEXT",title:"WHAT WAS REPORTED?",body:e.kind==="Personal Testimony"?"Pengalaman atau keyakinan pribadi yang diceritakan dalam riwayat MOONWITNESS: "+e.summary:e.summary,sub:"This is a curated summary; original complete storyteller has not yet been restored."},
  {label:"03 / SCRIPTURE · RESEARCH",title:"CHECK THE REFERENCES",body:e.references,sub:"Rujukan tematis. Keterkaitan tafsir dan kutipan harus dicek pada sumber primer; tidak membuktikan pengalaman supranatural."},
  {label:"04 / CONTINUED · PATCH NOTES",title:"HONEST FIRST. MERCY ALWAYS.",body:e.note,sub:"Original manga art / full narration pending. This is the last editorial draft page."}
 ];
 const panels: Array<{label:string;title:string;body:string;sub:string;artworkPath?:string|null;sourceType?:string;verification?:string}> = restored ? restored.pages.map((p:any)=>({label:String(p.number).padStart(2,'0')+' / EDITORIAL',title:p.title,body:p.text,sub:restored.provenance,artworkPath:p.artworkPath,sourceType:p.sourceType,verification:p.verification})) : fallbackPanels;
 const safePage=Math.min(Math.max(page,0),panels.length-1);
 const current=panels[safePage];
 const posterAsset=getPosterAsset(slug,safePage+1);
 const goPage=n=>{const next=Math.max(0,Math.min(panels.length-1,n));setPage(next);router.replace(next===0?'/stories/'+slug:'/stories/'+slug+'?page='+String(next+1),{scroll:false});};
 const shareUrl=()=>window.location.origin+'/stories/'+slug+'?page='+(safePage+1);
 const copyPage=async()=>{try{await navigator.clipboard.writeText(shareUrl());setCopyStatus('LINK COPIED');}catch{setCopyStatus('COPY NOT AVAILABLE');}};
 
 return <main className="container page">
  <Link href="/stories" className="textlink">← BACK TO STORY ARCHIVE</Link>
  <Head eyebrow={'// '+e.collection+' • '+e.kind} title={e.title} sub={e.chapter}/>
  <Notice><b>EDITORIAL PAGE SET:</b> Expanded storyboard from conversation outlines where available; not verbatim original poster text. Original full text and actual image assets are still pending. Reported experiences are not independently verified.</Notice>
  <div className="stats"><div><b>{String(safePage+1).padStart(2,'0')}/{String(panels.length).padStart(2,'0')}</b> PAGE</div><div><b>{index+1}/{archiveEpisodes.length}</b> EPISODE</div><div><b>{verifiedPosterAssets.filter(a=>a.slug===slug).length}</b> VERIFIED POSTERS</div></div>
  <div className="filters" style={{marginTop:16}}><button aria-pressed={readingMode} onClick={()=>setReadingMode(v=>!v)}>{readingMode?'EXIT FOCUS MODE':'FOCUS READING MODE'}</button><button onClick={copyPage}>COPY PAGE LINK</button><button onClick={()=>{if(navigator.share)navigator.share({title:e.title,url:shareUrl()}).catch(()=>{});else copyPage();}}>SHARE ↗</button><span role="status">{copyStatus}</span></div>
 <section className="section" style={{maxWidth:readingMode?680:900,margin:'0 auto'}}>
   <article aria-live="polite" style={{border:'3px solid currentColor',borderRadius:readingMode?5:18,padding:'clamp(20px,5vw,54px)',minHeight:430,display:'flex',flexDirection:'column',justifyContent:'space-between',background:readingMode?'var(--surface, #16141b)':'repeating-linear-gradient(135deg,transparent 0px,transparent 19px,#8881 20px,#8881 21px)',boxShadow:'8px 8px 0 #8883'}}>
    <small style={{letterSpacing:2}}>{current.label}</small>
    <div><h2 style={{fontSize:'clamp(26px,5vw,52px)',lineHeight:1.1,margin:'22px 0'}}>{current.title}</h2><p style={{fontSize:'clamp(16px,2.2vw,22px)',lineHeight:1.65,whiteSpace:'pre-wrap'}}>{current.body}</p></div>
    <div>{posterAsset?<img src={posterAsset.src} alt={posterAsset.alt} loading="lazy" style={{maxWidth:'100%',maxHeight:540,objectFit:'contain'}}/>:<p style={{border:'1px dashed currentColor',borderRadius:10,padding:12,opacity:.7}}>POSTER IMAGE PENDING · No original image file linked</p>}<p><small>Page source: {current.sourceType||'editorial_reconstruction'} · {current.verification||'original_text_pending'}</small></p><p><small>Episode references: {e.references}</small></p>{(slug==='digimon-jogress'?checkedReferenceLinks.filter(x=>x.id==='quran-7-46'):slug==='kalautidaksalah'?checkedReferenceLinks.filter(x=>x.id==='daniel-5-22-23'):[]).map(ref=><p key={ref.id}><a className="textlink" href={ref.url} target="_blank" rel="noopener noreferrer">CHECK ORIGINAL PASSAGE: {ref.label} ↗</a></p>)}<hr style={{opacity:.25}}/><small>{current.sub}</small><p><strong>MOONWITNESS XII • ROCKSOUL × THE BATTERIES</strong></p></div>
   </article>
   <div className="filters" style={{justifyContent:'space-between',marginTop:22}}>
    <button disabled={safePage===0} onClick={()=>goPage(safePage-1)}>← PREVIOUS PAGE</button>
    <span aria-label="Page count">PAGE {safePage+1} / {panels.length}</span>
    <button disabled={safePage===panels.length-1} onClick={()=>goPage(safePage+1)}>NEXT PAGE →</button>
   </div>
   <div className="grid four" style={{marginTop:14}}>{panels.map((x,i)=><button key={x.label} onClick={()=>goPage(i)} aria-pressed={safePage===i} className={'mission '+(page===i?'complete':'')}><small>PAGE {String(i+1).padStart(2,'0')}</small><strong>{x.title}</strong></button>)}</div>
  </section>
  <section className="section"><Head eyebrow="// POSTER GALLERY" title="MANGA PANEL INVENTORY." sub="Each original poster has its own page slot. Only reviewed and committed files appear as images."/><div className="grid four">{panels.map((panel,i)=>{const art=getPosterAsset(slug,i+1);return <button key={'poster-'+i} className={'mission '+(safePage===i?'complete':'')} onClick={()=>goPage(i)} aria-label={'Open poster panel '+(i+1)}>{art?<img src={art.src} alt={art.alt} loading="lazy" style={{width:'100%',height:150,objectFit:'cover',borderRadius:8}}/>:<div style={{height:130,display:'flex',alignItems:'center',justifyContent:'center',border:'1px dashed currentColor',borderRadius:8,opacity:.65}}>NO ORIGINAL ART YET</div>}<small>PAGE {String(i+1).padStart(2,'0')} · {art?'VERIFIED ASSET':'AWAITING ASSET'}</small></button>})}</div></section>
 <section className="section"><div className="grid two"><Card><h3>EPISODE EVIDENCE</h3><p><Link href="/research" className="textlink">OPEN RESEARCH DESK ↗</Link></p><p>{e.contentStatus}</p><p>{e.posterStatus}</p><p><b>Tags:</b> {e.tags.join(' · ')}</p></Card><Card><h3>CONTINUE THE ARCHIVE</h3><p>Navigate without losing your place in the episode library.</p><p><Link className="textlink" href={'/stories/'+archiveEpisodes[(index+1)%archiveEpisodes.length].slug} onClick={()=>setPage(0)}>NEXT EPISODE →</Link></p><p><Link className="textlink" href={'/stories/'+archiveEpisodes[(index-1+archiveEpisodes.length)%archiveEpisodes.length].slug} onClick={()=>setPage(0)}>← PREVIOUS EPISODE</Link></p></Card></div></section>
 </main>;
}
export default StoryArchive;
