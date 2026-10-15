import React from 'react';
const configs={
  'ROCKSOUL':{a:'#e7ff68',b:'#66f7dc',coat:'#151b29',hair:'#1e2636',mark:'★',role:'THE WITNESS'},
  'ISROCKFEEL':{a:'#56edff',b:'#85a2ff',coat:'#203154',hair:'#182232',mark:'⚡',role:'FIELD MENTOR'},
  'WALTERWHITE':{a:'#ff74b6',b:'#ffb45e',coat:'#482846',hair:'#181b2b',mark:'✚',role:'CHAOS ENGINEER'},
  '4-LAH / THE BATTERIES':{a:'#d2a2ff',b:'#ff78d3',coat:'#27213e',hair:'#141526',mark:'◆',role:'COMMAND CENTER'}
};
export default function CrewArt({name,hero=false}){const c=configs[name]||configs.ROCKSOUL;const punk=name==='ISROCKFEEL';const queen=name==='4-LAH / THE BATTERIES';const rocksoul=name==='ROCKSOUL';const uid=name.replace(/[^a-zA-Z]/g,'').toLowerCase()+(hero?'hero':'card');return <svg className={hero?'crew-svg crew-svg-hero':'crew-svg'} viewBox="0 0 360 450" role="img" aria-label={name+' faceless original vector portrait'} xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id={'sky'+uid} x1="0" x2="1" y1="0" y2="1"><stop stopColor={c.a} stopOpacity=".18"/><stop offset="1" stopColor={c.b} stopOpacity=".03"/></linearGradient><linearGradient id={'coat'+uid} x1="0" x2="1" y1="0" y2="1"><stop stopColor={c.coat}/><stop offset=".75" stopColor="#080d19"/></linearGradient><filter id={'glow'+uid}><feGaussianBlur stdDeviation="5"/></filter></defs>
<rect x="4" y="4" width="352" height="442" rx="18" fill="#101325" stroke={c.a} strokeWidth="2"/>
<path d="M0 84L360 0M0 185L360 60M0 450L360 260" stroke={c.a} strokeOpacity=".17" strokeWidth="17"/>
<circle cx="180" cy="163" r="120" fill={c.a} opacity=".16" filter={'url(#glow'+uid+')'}/>
<circle cx="180" cy="163" r="115" fill={'url(#sky'+uid+')'} stroke={c.a} strokeOpacity=".7" strokeWidth="2"/>
<path d="M75 87H285M49 163H311M74 238H285" stroke={c.b} strokeWidth="1" strokeOpacity=".35" strokeDasharray="5 9"/>
<path d="M4 445L50 313Q95 257 156 257H205Q268 256 312 322L357 445Z" fill={'url(#coat'+uid+')'} stroke={c.a} strokeWidth="2"/>
<path d="M93 335L141 277L181 332L219 278L275 338" fill="none" stroke={c.b} strokeOpacity=".8" strokeWidth="5"/>
<path d="M150 246V296L181 329L209 297V246Z" fill="#252333" stroke={c.a} strokeWidth="2"/>
<path d="M123 166Q116 103 180 93Q245 102 239 165L231 230Q220 265 180 273Q141 266 130 231Z" fill="#0a0d1a" stroke={c.a} strokeWidth="3"/>
{punk?<><path d="M113 173L117 114L141 130L149 72L172 101L189 55L211 107L243 90L250 175L223 143L178 129L139 152Z" fill="#121018" stroke="#fb4b6d" strokeWidth="5"/><path d="M87 315L124 285L139 313L175 295L206 311L237 287L274 322" stroke="#ff526d" fill="none" strokeWidth="8"/></>:queen?<><path d="M106 183Q82 75 181 67Q277 73 258 187L237 269L212 271L231 155Q186 123 143 160L151 272L120 270Z" fill="#17131e" stroke="#ff81d5" strokeWidth="4"/><path d="M79 335Q90 284 151 267L181 306L212 267Q278 285 287 338L308 445H55Z" fill="#452344" stroke="#f9a5e1" strokeWidth="4"/></>:<path d="M114 165Q109 80 180 77Q246 79 249 162L226 141Q188 146 169 125Q143 152 114 165Z" fill={c.hair} stroke={c.b} strokeWidth="3"/>}
{rocksoul?<><path d="M101 122Q111 76 183 77Q241 78 254 123L246 143H110Z" fill="#77d95b" stroke="#e8ff9c" strokeWidth="4"/><path d="M120 109Q181 89 248 114L264 126Q213 145 155 136Z" fill="#213a26" stroke="#9ffc74" strokeWidth="3"/></>:null}
<path d="M119 176Q179 204 240 176" stroke={c.a} strokeOpacity=".26" strokeWidth="2" fill="none"/>
<path d="M130 201H227" stroke={c.a} strokeOpacity=".35" strokeWidth="2"/>
<path d="M94 333L160 432M274 333L205 432" stroke={c.a} strokeWidth="2" strokeOpacity=".75"/>
<path d="M163 330H197L212 365L181 399L150 365Z" fill={c.a} stroke="#0b1020" strokeWidth="6"/>
<text x="181" y="372" textAnchor="middle" fontSize="26" fill="#101325" fontWeight="900">{c.mark}</text>
<text x="24" y="39" fill={c.a} fontSize="13" fontFamily="monospace" letterSpacing="3">MWX / XII</text>
<text x="337" y="39" textAnchor="end" fill={c.b} fontSize="15" fontFamily="monospace">NO FACE</text>
<text x="24" y="62" fill={c.b} fontSize="10" fontFamily="monospace">{punk?'PUNK ROCK / FIELD ACTION':queen?'SIGNAL QUEEN':rocksoul?'HOODIE / BACKWARD CAP':'WILD IDEA ENGINEER'}</text>
<text x="20" y="420" fill="#ffffff" fontWeight="900" fontSize="23" letterSpacing="1">{name==='4-LAH / THE BATTERIES'?'4-LAH':name}</text>
</svg>}
