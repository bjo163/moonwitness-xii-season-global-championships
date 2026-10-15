import React,{useMemo,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {archiveEpisodes} from '../data/storyArchive.js';
import {episodeManuscripts} from '../data/episodeManuscripts.js';
import {Card,Head,Notice} from '../components/UI.jsx';
export function StoryArchive(){const[q,setQ]=useState('');const[genre,setGenre]=useState('All');const genres=['All',...new Set(archiveEpisodes.map(x=>x.collection))];const shown=useMemo(()=>archiveEpisodes.filter(x=>(genre==='All'||x.collection===genre)&&[x.title,x.summary,x.chapter,x.references,...x.tags].join(' ').toLowerCase().includes(q.toLowerCase())),[q,genre]);return <main className="container page"><Head eyebrow="// MOONWITNESS XII • STORY ARCHIVE" title="WHERE MYTH FADES TO LEGEND." sub="Kesaksian pribadi, studi kitab, dan semesta narasi — dipisahkan secara jelas. Poster manga faceless akan ditambahkan setelah aset asli tersedia."/><div className="stats"><div><b>{archiveEpisodes.length}</b> INDEXED EPISODES</div><div><b>{shown.length}</b> MATCHING</div><div><b>0</b> IMAGE ASSETS VERIFIED</div></div><Notice><b>ARCHIVE STATUS:</b> Entri saat ini adalah sinopsis editorial yang dipulihkan dari rangkuman percakapan, bukan naskah asli lengkap. Kisah supernatural dicatat sebagai kesaksian pengaju dan tidak dinyatakan sebagai fakta terverifikasi. Referensi kitab bersifat tematis kecuali dinyatakan lain.</Notice><div className="filters"><input aria-label="Cari episode" placeholder="Cari episode, ayat, tema..." value={q} onChange={e=>setQ(e.target.value)}/><select aria-label="Filter kategori" value={genre} onChange={e=>setGenre(e.target.value)}>{genres.map(g=><option key={g} value={g}>{g}</option>)}</select></div><section className="section"><Head eyebrow="// EPISODES" title="THE WITNESS LIBRARY."/><div className="grid three">{shown.map((e,i)=><Card key={e.slug}><small>ARCHIVE {String(archiveEpisodes.indexOf(e)+1).padStart(2,'0')} • {e.collection}</small><div style={{minHeight:100,margin:'14px 0',padding:16,border:'1px dashed currentColor',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',opacity:.7}}>MANGA FRAME {String(archiveEpisodes.indexOf(e)+1).padStart(2,'0')}<br/>FACeless • Artwork pending</div><h3>{e.title}</h3><p>{e.summary}</p><small>{e.kind} • {e.chapter}</small><p><Link to={'/stories/'+e.slug} className="textlink">OPEN EPISODE ↗</Link></p></Card>)}</div>{shown.length===0&&<Notice>No matching episodes. Try another keyword.</Notice>}</section></main>}
export function StoryDetail(){
 const {slug}=useParams();
 const [page,setPage]=useState(0);
 const e=archiveEpisodes.find(x=>x.slug===slug);
 const index=archiveEpisodes.findIndex(x=>x.slug===slug);
 if(!e)return <main className="container page"><Head title="EPISODE NOT FOUND."/><Link to="/stories" className="btn">BACK TO ARCHIVE</Link></main>;
 const restored=episodeManuscripts.find(x=>x.slug===slug);
 const fallbackPanels=[
  {label:"01 / COVER · OPENING SIGNAL",title:e.title,body:e.summary,sub:"EDITORIAL ARCHIVE COVER — not a recovered original poster."},
  {label:"02 / THE WITNESS · CONTEXT",title:"WHAT WAS REPORTED?",body:e.kind==="Personal Testimony"?"Pengalaman atau keyakinan pribadi yang diceritakan dalam riwayat MOONWITNESS: "+e.summary:e.summary,sub:"This is a curated summary; original complete storyteller has not yet been restored."},
  {label:"03 / SCRIPTURE · RESEARCH",title:"CHECK THE REFERENCES",body:e.references,sub:"Rujukan tematis. Keterkaitan tafsir dan kutipan harus dicek pada sumber primer; tidak membuktikan pengalaman supranatural."},
  {label:"04 / CONTINUED · PATCH NOTES",title:"HONEST FIRST. MERCY ALWAYS.",body:e.note,sub:"Original manga art / full narration pending. This is the last editorial draft page."}
 ];
 const panels=restored?restored.pages.map(p=>({label:String(p.number).padStart(2,'0')+' / EDITORIAL',title:p.title,body:p.text,sub:restored.provenance})):fallbackPanels;
 const current=panels[Math.min(page,panels.length-1)];
 return <main className="container page">
  <Link to="/stories" className="textlink">← BACK TO STORY ARCHIVE</Link>
  <Head eyebrow={'// '+e.collection+' • '+e.kind} title={e.title} sub={e.chapter}/>
  <Notice><b>EDITORIAL PAGE SET:</b> Expanded storyboard from conversation outlines where available; not verbatim original poster text. Original full text and actual image assets are still pending. Reported experiences are not independently verified.</Notice>
  <div className="stats"><div><b>{String(page+1).padStart(2,'0')}/{String(panels.length).padStart(2,'0')}</b> PAGE</div><div><b>{index+1}/{archiveEpisodes.length}</b> EPISODE</div><div><b>0</b> VERIFIED POSTERS</div></div>
  <section className="section" style={{maxWidth:900,margin:'0 auto'}}>
   <article aria-live="polite" style={{border:'2px solid currentColor',borderRadius:18,padding:'clamp(20px,5vw,54px)',minHeight:430,display:'flex',flexDirection:'column',justifyContent:'space-between',background:'linear-gradient(145deg,transparent,#9991)',boxShadow:'8px 8px 0 #8883'}}>
    <small style={{letterSpacing:2}}>{current.label}</small>
    <div><h2 style={{fontSize:'clamp(26px,5vw,52px)',lineHeight:1.1,margin:'22px 0'}}>{current.title}</h2><p style={{fontSize:'clamp(16px,2.2vw,22px)',lineHeight:1.65,whiteSpace:'pre-wrap'}}>{current.body}</p></div>
    <div><hr style={{opacity:.25}}/><small>{current.sub}</small><p><strong>MOONWITNESS XII • ROCKSOUL × THE BATTERIES</strong></p></div>
   </article>
   <div className="filters" style={{justifyContent:'space-between',marginTop:22}}>
    <button disabled={page===0} onClick={()=>setPage(n=>Math.max(0,n-1))}>← PREVIOUS PAGE</button>
    <span aria-label="Page count">PAGE {page+1} / {panels.length}</span>
    <button disabled={page===panels.length-1} onClick={()=>setPage(n=>Math.min(panels.length-1,n+1))}>NEXT PAGE →</button>
   </div>
   <div className="grid four" style={{marginTop:14}}>{panels.map((x,i)=><button key={x.label} onClick={()=>setPage(i)} aria-pressed={page===i} className={'mission '+(page===i?'complete':'')}><small>PAGE {String(i+1).padStart(2,'0')}</small><strong>{x.title}</strong></button>)}</div>
  </section>
  <section className="section"><div className="grid two"><Card><h3>EPISODE EVIDENCE</h3><p>{e.contentStatus}</p><p>{e.posterStatus}</p><p><b>Tags:</b> {e.tags.join(' · ')}</p></Card><Card><h3>CONTINUE THE ARCHIVE</h3><p>Navigate without losing your place in the episode library.</p><p><Link className="textlink" to={'/stories/'+archiveEpisodes[(index+1)%archiveEpisodes.length].slug} onClick={()=>setPage(0)}>NEXT EPISODE →</Link></p><p><Link className="textlink" to={'/stories/'+archiveEpisodes[(index-1+archiveEpisodes.length)%archiveEpisodes.length].slug} onClick={()=>setPage(0)}>← PREVIOUS EPISODE</Link></p></Card></div></section>
 </main>;
}
export default StoryArchive;
