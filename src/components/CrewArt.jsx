"use client";

import React from "react";

const configs = {
  ROCKSOUL: { a: "#82e4d1", b: "#b9b2ff", coat: "#14283a", hair: "#17202d", mark: "◈", role: "THE WITNESS" },
  ISROCKFEEL: { a: "#8ad8ff", b: "#a5b4fc", coat: "#1a2b43", hair: "#161a2a", mark: "ϟ", role: "FIELD MENTOR" },
  WALTERWHITE: { a: "#f3b8dc", b: "#f2d49a", coat: "#30263d", hair: "#1a1a29", mark: "✳", role: "IDEA ENGINEER" },
  "4-LAH / THE BATTERIES": { a: "#d0c4ff", b: "#f5a9d6", coat: "#302943", hair: "#171526", mark: "✦", role: "SIGNAL QUEEN" },
};

export default function CrewArt({ name, hero = false, cap = "green" }) {
  const c = configs[name] || configs.ROCKSOUL;
  const punk = name === "ISROCKFEEL";
  const queen = name === "4-LAH / THE BATTERIES";
  const rocksoul = name === "ROCKSOUL"; // cap==='black' selects the resolve palette for the witness.
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg className={hero ? "crew-svg crew-svg-hero" : "crew-svg"} viewBox="0 0 360 450" role="img" aria-label={name + " faceless original vector portrait"} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={"back" + uid} x1="0" y1="0" x2="1" y2="1"><stop stopColor={c.a} stopOpacity=".16"/><stop offset=".56" stopColor="#142237" stopOpacity=".2"/><stop offset="1" stopColor={c.b} stopOpacity=".06"/></linearGradient>
        <linearGradient id={"skin" + uid} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#25354b"/><stop offset=".48" stopColor="#0d1727"/><stop offset="1" stopColor="#1b273b"/></linearGradient>
        <linearGradient id={"coat" + uid} x1="0" y1="0" x2="1" y2="1"><stop stopColor={c.coat}/><stop offset=".58" stopColor="#111b2b"/><stop offset="1" stopColor="#080f1c"/></linearGradient>
        <linearGradient id={"metal" + uid} x1="0" y1="0" x2="1" y2="0"><stop stopColor={c.a}/><stop offset=".5" stopColor="#f4f8ff"/><stop offset="1" stopColor={c.b}/></linearGradient>
        <radialGradient id={"halo" + uid}><stop stopColor={c.a} stopOpacity=".22"/><stop offset="1" stopColor={c.a} stopOpacity="0"/></radialGradient>
        <filter id={"softGlow" + uid} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter>
        <clipPath id={"portraitClip" + uid}><rect x="8" y="8" width="344" height="434" rx="24"/></clipPath>
      </defs>
      <g clipPath={"url(#portraitClip" + uid + ")"}>
        <rect x="8" y="8" width="344" height="434" rx="24" fill={"url(#back" + uid + ")"} />
        <circle cx="180" cy="166" r="145" fill={"url(#halo" + uid + ")"} />
        <circle cx="180" cy="166" r="118" fill="none" stroke={c.a} strokeOpacity=".3" strokeWidth="1.2"/>
        <circle cx="180" cy="166" r="128" fill="none" stroke={c.b} strokeOpacity=".25" strokeDasharray="2 9" strokeWidth="1.5"/>
        <path d="M34 160H84M276 160H326M48 220H86M274 220H312" stroke={c.a} strokeOpacity=".4" strokeWidth="1.2"/>
        <circle cx="180" cy="166" r="93" fill={c.a} opacity=".13" filter={"url(#softGlow" + uid + ")"} />
        <path d="M28 450L45 357Q57 302 111 278L145 265H215L249 278Q303 302 315 357L332 450Z" fill={"url(#coat" + uid + ")"} stroke={c.a} strokeOpacity=".8" strokeWidth="1.5"/>
        <path d="M114 292L149 268L180 302L211 268L246 292L226 450H134Z" fill="#0a1422" stroke={c.b} strokeOpacity=".6" strokeWidth="1.3"/>
        <path d="M148 266L180 304L212 266L202 332L180 352L158 332Z" fill={"url(#metal" + uid + ")"} opacity=".88"/>
        <path d="M179 305V421" stroke={c.a} strokeOpacity=".6" strokeWidth="1.5"/>
        <path d="M78 345L127 316M282 345L233 316" stroke={c.a} strokeOpacity=".65" strokeWidth="2"/>
        <path d="M96 369L133 349M264 369L227 349" stroke={c.b} strokeOpacity=".7" strokeWidth="1.5"/>
        <path d="M112 140Q108 85 180 77Q252 85 248 140L236 222Q222 263 180 271Q138 263 124 222Z" fill={"url(#skin" + uid + ")"} stroke={c.a} strokeOpacity=".8" strokeWidth="1.7"/>
        <path d="M126 171Q180 188 234 171" stroke={c.b} strokeOpacity=".5" strokeWidth="1.5" fill="none"/>
        <path d="M135 200H225" stroke={c.a} strokeOpacity=".3" strokeWidth="1.2"/>
        <path d="M180 145V225" stroke={c.a} strokeOpacity=".22" strokeWidth="1"/>
        {punk ? (
          <g>
            <path d="M112 158L111 111L137 128L143 82L166 108L183 61L202 108L226 83L234 128L250 112L248 163L224 143L202 150L181 132L158 151L136 142Z" fill={c.hair} stroke={c.a} strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M144 104L157 119M183 79L188 111M220 105L210 123" stroke={c.b} strokeWidth="3" strokeLinecap="round"/>
            <path d="M74 326L112 299L132 318L158 301M286 326L248 299L228 318L202 301" stroke={c.a} strokeWidth="3" fill="none"/>
            <path d="M132 355L150 371M228 355L210 371" stroke={c.b} strokeWidth="2"/>
          </g>
        ) : queen ? (
          <g>
            <path d="M111 183Q84 78 180 65Q277 78 249 183L239 260L219 279L229 154Q180 125 131 154L141 279L121 260Z" fill={c.hair} stroke={c.b} strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M111 186Q104 121 139 93M249 186Q256 121 221 93" stroke={c.a} strokeWidth="2" strokeOpacity=".8" fill="none"/>
            <path d="M63 352Q86 293 143 277L180 314L217 277Q274 293 297 352L314 450H46Z" fill={"url(#coat" + uid + ")"} stroke={c.b} strokeWidth="1.8"/>
            <path d="M141 292L180 326L219 292" stroke={c.a} strokeWidth="2.5" fill="none"/>
            <circle cx="180" cy="346" r="8" fill={c.b}/><circle cx="180" cy="346" r="3" fill="#fff"/>
          </g>
        ) : (
          <path d="M112 161Q104 84 180 76Q256 84 248 161L225 140Q193 146 171 123Q145 151 112 161Z" fill={c.hair} stroke={c.b} strokeWidth="2.2" strokeLinejoin="round"/>
        )}
        {rocksoul ? (
          <g>
            <path d="M103 123Q111 77 183 78Q241 79 254 123L246 143H110Z" fill={cap === "black" ? "#151521" : "#77d95b"} stroke={cap === "black" ? "#cad0df" : "#e8ff9c"} strokeWidth="3.5" strokeLinejoin="round"/>
            <path d="M120 109Q181 89 248 114L264 126Q213 145 155 136Z" fill={cap === "black" ? "#070b12" : "#213a26"} stroke={cap === "black" ? "#c9d0de" : "#9ffc74"} strokeWidth="2.8" strokeLinejoin="round"/>
            <path d="M179 89L179 106M170 96H188" stroke="#f5f7fa" strokeOpacity=".7" strokeWidth="1.4"/>
          </g>
        ) : null}
        <path d="M150 230Q180 244 210 230" stroke={c.a} strokeOpacity=".3" strokeWidth="1.4" fill="none"/>
        <path d="M161 329L180 345L199 329" stroke={c.b} strokeWidth="1.5" fill="none"/>
        <text x="24" y="35" fill={c.a} fontSize="10" fontFamily="ui-monospace,monospace" letterSpacing="2.2">MWX / XII</text>
        <text x="336" y="35" textAnchor="end" fill="#c2d0e2" fontSize="9" fontFamily="ui-monospace,monospace" letterSpacing="1.2">ORIGINAL CAST</text>
        <text x="24" y="420" fill="#f1f5fb" fontWeight="800" fontSize={name === "4-LAH / THE BATTERIES" ? "18" : "21"} letterSpacing=".3">{name === "4-LAH / THE BATTERIES" ? "4-LAH" : name}</text>
        <text x="24" y="435" fill={c.b} fontSize="8" fontFamily="ui-monospace,monospace" letterSpacing="1.5">{c.role}</text>
      </g>
      <rect x="8.5" y="8.5" width="343" height="433" rx="23.5" fill="none" stroke="#d9e7fa" strokeOpacity=".22"/>
    </svg>
  );
}
