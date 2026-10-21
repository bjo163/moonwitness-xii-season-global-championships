import type { ReactNode } from "react";

type CardProps = { children?: ReactNode; className?: string };
type HeadProps = { eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode };
type NoticeProps = { children?: ReactNode };
type HeroProps = { label: ReactNode; lines: ReactNode; description: ReactNode; children?: ReactNode };

function Card({ children, className = "" }: CardProps) {
  return <article className={"card " + className}>{children}</article>;
}
function Head({ eyebrow, title, sub }: HeadProps) {
  return <div className="head">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{sub && <p className="sub">{sub}</p>}</div>;
}
function Notice({ children }: NoticeProps) {
  return <div className="notice">{children}</div>;
}
function Hero({ label, lines, description, children }: HeroProps) {
  return <section className="hero container"><span className="eyebrow">{label}</span><h1>{lines}</h1><p className="lead">{description}</p>{children}</section>;
}
export { Card, Head, Notice, Hero };
