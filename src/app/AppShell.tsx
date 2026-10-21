"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function AppShell({ children }) {
  const [theme, setTheme] = useState("moonlit");
  useEffect(() => {
    try { setTheme(localStorage.getItem("moonwitness-theme") || "moonlit"); } catch {}
  }, []);
  useEffect(() => {
    document.body.dataset.theme = theme;
    try { localStorage.setItem("moonwitness-theme", theme); } catch {}
  }, [theme]);
  return <>
    <a className="skip-link" href="#main-content">SKIP TO MAIN CONTENT</a>
    <Header theme={theme} setTheme={setTheme} />
    <div id="main-content" tabIndex={-1}>{children}</div>
    <Footer />
  </>;
}
