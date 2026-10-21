"use client";
import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navigation=[
  ['/', 'HOME'],
  ['/characters','CHARACTERS'],
  ['/champions','105 CHAMPIONS'],
  ['/paradise','PARADISE'],
  ['/command-center','COMMAND CENTER'],
  ['/workspace','LOCAL TOOLS'],
  ['/research','RESEARCH DESK'],
  ['/stories','STORIES'],
  ['/syafaat-status','SYAFAAT'],
  ['/syafaat-engine','SYAFAAT LAB'],
  ['/grand-plan','GRAND PLAN']
];

export default function Header({theme,setTheme}){
  const pathname=usePathname();
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>setMenuOpen(false),[pathname]);
  useEffect(()=>{
    if(!menuOpen)return;
    const closeOnEscape=e=>{if(e.key==='Escape')setMenuOpen(false);};
    document.addEventListener('keydown',closeOnEscape);
    return ()=>document.removeEventListener('keydown',closeOnEscape);
  },[menuOpen]);
  return <header className="nav" role="banner">
    <Link href="/" className="brand" aria-label="MoonWitness XII, back to homepage">MOON<span>WITNESS</span> XII</Link>
    <button type="button" className="nav-menu-toggle" aria-controls="site-navigation" aria-expanded={menuOpen} aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} onClick={()=>setMenuOpen(open=>!open)}>
      <span aria-hidden="true">{menuOpen?'✕':'☰'}</span><span>MENU</span>
    </button>
    <nav id="site-navigation" className={'navlinks'+(menuOpen?' is-open':'')} aria-label="Main navigation">
      {navigation.map(([href,label])=><Link key={href} href={href} className={(pathname===href || (href!=='/' && pathname.startsWith(href+'/')))?'active':''} aria-current={pathname===href?'page':undefined} onClick={()=>setMenuOpen(false)}>{label}</Link>)}
    </nav>
    <div className="themes" role="group" aria-label="Color theme">
      {['riot','moonlit'].map(t=><button type="button" key={t} className={theme===t?'active':''} onClick={()=>setTheme(t)} aria-pressed={theme===t}>{t.toUpperCase()}</button>)}
    </div>
  </header>;
}
