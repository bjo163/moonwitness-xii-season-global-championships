import React from 'react';import{references}from'../data.js';import{Card,Head}from'./UI.tsx';
function Books(){return <section className="section"><div className="container"><Head eyebrow="// FOUR BOOKS" title="READ THE TEXT. CHECK THE CONTEXT." sub="Rujukan lintas tradisi dengan sejarah dan penafsiran berbeda. Jangan samakan interpretasi kreatif dengan klaim literal kitab."/><div className="grid four">{references.map(r=><Card key={r[0]}><h3>{r[0]}</h3><p>{r[1]}</p></Card>)}</div></div></section>}
export default Books;
