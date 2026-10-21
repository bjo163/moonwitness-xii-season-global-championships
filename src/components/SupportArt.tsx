import React,{useId} from 'react';
/**
 * Original SVG street-comic character studies.
 * Fictional, faceless characters inspired by themes in religious traditions.
 * They are NOT portraits or representations of actual angels.
 */
const palettes={
  'MIKAIL':{a:'#82f2a9',b:'#2f9579',coat:'#194e47',motif:'BOTANICAL'},
  'FINAL KEEPER':{a:'#d5dfed',b:'#748398',coat:'#29303e',motif:'TIME'},
  'QUESTION DUO':{a:'#ff8999',b:'#6368c9',coat:'#492536',motif:'INQUIRY'},
  'RECORD TWINS':{a:'#efd681',b:'#a9afcd',coat:'#3f3952',motif:'ARCHIVE'},
  'MALIK':{a:'#ff756e',b:'#d18c72',coat:'#4a222d',motif:'BOUNDARY'},
  'RIDWAN':{a:'#beffdc',b:'#75bcb0',coat:'#244d52',motif:'GARDEN'}
};
export default function SupportArt({name,compact=false}){
 const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
 const c=palettes[name]||palettes.MIKAIL;
 const duo=name==='QUESTION DUO'||name==='RECORD TWINS';
 const gardener=name==='MIKAIL',keeper=name==='FINAL KEEPER',guard=name==='MALIK',welcome=name==='RIDWAN';
 const person=(x,scale,accent,secondary=false)=><g transform={`translate(${x} 0) scale(${scale})`}>
  <path d="M38 397L55 270Q69 246 120 242H166Q219 243 238 283L256 397Z" fill={secondary?c.coat:'#151c2d'} stroke={accent} strokeWidth="4"/>
  <path d="M73 277L141 329L207 277" fill="none" stroke={accent} strokeWidth="5"/>
  <path d="M113 224V270L143 302L173 270V224" fill="#242d3a" stroke={accent} strokeWidth="3"/>
  <path d="M82 125Q82 80 143 70Q205 77 208 130L204 213Q193 247 143 259Q94 248 84 212Z" fill="#0c1421" stroke={accent} strokeWidth="3"/>
  <path d="M75 154L78 103L100 119L117 68L149 93L177 60L203 108L218 154L185 128L143 123L96 143Z" fill={gardener?'#1d3d35':keeper?'#252b36':guard?'#1c1b27':'#202439'} stroke={accent} strokeWidth="3"/>
  <path d="M91 164H197M98 185H190" stroke={accent} strokeWidth="2" opacity=".18"/>
  {gardener&&<><path d="M92 113Q152 77 217 117L223 143L79 145Z" fill="#24715f" stroke="#a4ffca" strokeWidth="4"/><path d="M120 296L126 373M171 288L174 365" stroke="#a4ffca" strokeWidth="2" strokeDasharray="8 8"/><path d="M140 351Q165 313 197 333Q176 355 140 351Z" fill="#a4ffca"/></>}
  {keeper&&<><path d="M61 269L103 246L138 338L120 398H38Z" fill="#151a24" stroke="#bbc9d9" strokeWidth="3"/><path d="M222 269L185 248L155 338L171 398H255Z" fill="#151a24" stroke="#bbc9d9" strokeWidth="3"/><path d="M125 330H163M125 359H163" stroke="#bbc9d9" strokeWidth="3"/></>}
  {guard&&<><path d="M64 280L124 266L136 309L76 330Z" fill="#67323e" stroke="#ff9889" strokeWidth="3"/><path d="M217 280L159 266L151 309L212 330Z" fill="#67323e" stroke="#ff9889" strokeWidth="3"/><path d="M124 327H160L177 354L142 379L107 354Z" fill="#f77968" stroke="#0b121e" strokeWidth="5"/></>}
  {welcome&&<><path d="M57 278Q142 294 233 278L247 397H42Z" fill="#22554d" opacity=".8"/><path d="M98 286Q142 335 191 285" fill="none" stroke="#ddfff0" strokeWidth="6"/><path d="M128 334L143 316L159 334L143 350Z" fill="#ceffee"/></>}
  {duo&&<><path d="M87 278L142 322L199 278" fill="none" stroke={secondary?'#a9acde':accent} strokeWidth="6"/><rect x="114" y="337" width="62" height="39" rx="3" fill={secondary?'#434963':'#25273c'} stroke={accent} strokeWidth="3"/>{name==='RECORD TWINS'?<path d="M123 348H166M123 358H154M123 367H162" stroke={accent} strokeWidth="3"/>:<path d="M140 345Q127 329 116 349M140 345Q149 331 158 348" fill="none" stroke={accent} strokeWidth="4"/>}</>}
 </g>;
 return <svg className={compact?'mw-support-art mw-support-art-compact':'mw-support-art'} viewBox="0 0 360 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={name+' original faceless street-comic character artwork'}>
 <defs>
  <linearGradient id={'back'+id} x1="0" x2="1" y1="0" y2="1"><stop stopColor="#0c1825"/><stop offset="1" stopColor="#25203b"/></linearGradient>
  <radialGradient id={'aura'+id}><stop stopColor={c.a} stopOpacity=".32"/><stop offset="1" stopColor={c.a} stopOpacity="0"/></radialGradient>
  <clipPath id={'crop'+id}><rect width="360" height="440" rx="14"/></clipPath>
 </defs>
 <g clipPath={'url(#crop'+id+')'}>
  <rect width="360" height="440" fill={'url(#back'+id+')'}/>
  <circle cx="184" cy="165" r="175" fill={'url(#aura'+id+')'}/>
  <circle cx="184" cy="162" r="127" stroke={c.a} strokeWidth="2" strokeDasharray="7 10" fill="none" opacity=".7"/>
  <path d="M0 111L360 16M0 278L360 175M0 432L360 333" stroke={c.b} strokeWidth="18" opacity=".1"/>
  <path d="M40 96H320M22 210H339M34 332H326" stroke={c.a} strokeWidth="1" opacity=".17"/>
  {duo?<>{person(-19,.75,c.a)}{person(153,.75,c.b,true)}</>:person(34,1,c.a)}
  {keeper&&<g transform="translate(266 274)" fill="none" stroke={c.a} strokeWidth="4"><path d="M0 0H52M0 90H52M6 6L46 43L6 83M46 6L6 43L46 83"/><path d="M14 17L40 17L26 37ZM14 72L40 72L26 55Z" fill={c.a} opacity=".5"/></g>}
  {gardener&&<g stroke={c.a} strokeWidth="4" fill="none"><path d="M292 173L291 220M315 196L315 237M276 246L276 265"/><path d="M272 146Q310 105 337 138Q306 156 272 146Z" fill={c.a} opacity=".6"/></g>}
  {guard&&<g stroke={c.a} strokeWidth="5" fill="none"><path d="M280 274L299 250L320 277L299 301Z"/><path d="M287 275H312"/></g>}
  {welcome&&<g fill={c.a} opacity=".65"><path d="M265 280Q282 249 323 266Q293 293 265 280Z"/><circle cx="298" cy="222" r="5"/><circle cx="318" cy="210" r="3"/></g>}
  {duo&&<path d="M170 73H196M183 61V86" stroke={c.a} strokeWidth="4" opacity=".8"/>}
  <rect x="8" y="8" width="344" height="424" rx="12" stroke={c.a} strokeWidth="2" fill="none" opacity=".85"/>
  <rect x="14" y="14" width="128" height="25" fill="#0b1322" stroke={c.a}/>
  <text x="24" y="32" fill={c.a} fontSize="11" letterSpacing="2" fontFamily="monospace">MWX / STREET</text>
  <rect x="16" y="398" width="328" height="30" rx="2" fill="#0b1120" opacity=".93"/>
  <text x="26" y="419" fontFamily="monospace" fontWeight="900" fill={c.a} fontSize={name.length>12?15:21}>{name}</text>
  <text x="335" y="32" textAnchor="end" fontSize="10" letterSpacing="1" fontFamily="monospace" fill={c.a}>{c.motif}</text>
 </g></svg>;
}
