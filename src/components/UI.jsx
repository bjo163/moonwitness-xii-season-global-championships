import React from 'react';
function Card({children,className=''}){return <article className={'card '+className}>{children}</article>}
function Head({eyebrow,title,sub}){return <div className="head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{sub&&<p className="sub">{sub}</p>}</div>}
function Notice({children}){return <div className="notice">{children}</div>}
function Hero({label,lines,description,children}){return <section className="hero container"><span className="eyebrow">{label}</span><h1>{lines}</h1><p className="lead">{description}</p>{children}</section>}
export {Card,Head,Notice,Hero};
