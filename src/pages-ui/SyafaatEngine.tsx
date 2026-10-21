"use client";

import React, { useMemo, useState } from "react";
import { Head, Notice } from "../components/UI";
import { calculateSyafaatMetrics } from "../data/syafaatMetrics.js";
import type { SyafaatMetrics } from "../data/syafaatMetrics.js";

type SubmissionStatus = "pending" | "approved" | "rejected";
type PatchStatus =
  | "draft"
  | "approved"
  | "in_implementation"
  | "implemented_pending_verification"
  | "verified_success"
  | "verified_partial"
  | "verified_failure";

type Submission = { id: string; title: string; status: SubmissionStatus };
type Patch = { id: string; title: string; status: PatchStatus };

const percent = (value: SyafaatMetrics["submissions"]["approvalRate"]["percent"]) =>
  value === null ? "N/A" : value.toFixed(1) + "%";

export default function SyafaatEngine() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [patches, setPatches] = useState<Patch[]>([]);
  const [submissionTitle, setSubmissionTitle] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("pending");
  const [patchTitle, setPatchTitle] = useState("");
  const [patchStatus, setPatchStatus] = useState<PatchStatus>("draft");

  const metrics = useMemo(
    () => calculateSyafaatMetrics({ submissions, patches }),
    [submissions, patches]
  );

  const addSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = submissionTitle.trim();
    if (!title) return;
    setSubmissions((current) => [
      ...current,
      { id: "S-" + String(current.length + 1).padStart(3, "0"), title, status: submissionStatus },
    ]);
    setSubmissionTitle("");
  };

  const addPatch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = patchTitle.trim();
    if (!title) return;
    setPatches((current) => [
      ...current,
      { id: "P-" + String(current.length + 1).padStart(3, "0"), title, status: patchStatus },
    ]);
    setPatchTitle("");
  };

  const clearSession = () => {
    setSubmissions([]);
    setPatches([]);
    setSubmissionTitle("");
    setPatchTitle("");
    setSubmissionStatus("pending");
    setPatchStatus("draft");
  };

  return (
    <main className="container page">
      <Head
        eyebrow="// SYAFAAT • LOCAL PROTOTYPE"
        title="SUBMISSION & IMPACT LAB."
        sub="Prototipe lokal untuk menguji definisi status dan metrik. Semua data hanya berada di state halaman ini dan akan hilang saat halaman dimuat ulang."
      />
      <Notice>
        <b>PROTOTYPE ONLY:</b> Ini bukan pengiriman submission yang nyata, bukan approval resmi, bukan sistem akun, dan bukan penyimpanan permanen. Gunakan data uji, bukan data pribadi atau sensitif. Metrik mengukur status yang dimasukkan, bukan iman, pahala, penerimaan ilahi, atau kepastian syafaat.
      </Notice>

      <section className="section" aria-labelledby="metric-heading">
        <Head eyebrow="// REPRODUCIBLE COUNTS" title="LIVE SESSION METRICS." sub="Angka dihitung ulang dari entri pada sesi halaman ini dengan aturan denominator yang terdokumentasi." />
        <div className="grid three">
          <article className="card">
            <small>SUBMISSIONS</small>
            <h3>{metrics.submissions.totalUnique} UNIQUE</h3>
            <p>{metrics.submissions.decided} decided · {metrics.submissions.invalidRecords} invalid · {metrics.submissions.duplicateIdRecords} duplicate IDs</p>
          </article>
          <article className="card">
            <small>APPROVAL RATE</small>
            <h3>{percent(metrics.submissions.approvalRate.percent)}</h3>
            <p>{metrics.submissions.approved} approved / {metrics.submissions.decided} decided. Pending submissions are excluded; zero decided returns N/A.</p>
          </article>
          <article className="card">
            <small>PATCH IMPLEMENTATION</small>
            <h3>{percent(metrics.patches.implementationRate.percent)}</h3>
            <p>{metrics.patches.implemented} implemented / {metrics.patches.eligibleForImplementation} implementation-eligible patches.</p>
          </article>
          <article className="card">
            <small>VERIFIED SUCCESS</small>
            <h3>{percent(metrics.patches.verifiedSuccessRate.percent)}</h3>
            <p>{metrics.patches.verifiedSuccess} verified successes / {metrics.patches.evaluated} evaluated patches. Unverified patches are excluded.</p>
          </article>
          <article className="card">
            <small>PATCH INVENTORY</small>
            <h3>{metrics.patches.totalUnique} UNIQUE</h3>
            <p>{metrics.patches.invalidRecords} invalid · {metrics.patches.duplicateIdRecords} duplicate IDs · {metrics.patches.evaluated} evaluated</p>
          </article>
          <article className="card">
            <small>DATA BOUNDARY</small>
            <h3>SESSION ONLY</h3>
            <p>No backend, database, ORM, login, external dispatch, or persistent storage is connected.</p>
          </article>
        </div>
      </section>

      <section className="section alt syafaat-engine" aria-labelledby="entry-heading">
        <Head eyebrow="// TEST RECORDS" title="ADD LOCAL TEST RECORDS." sub="Pakai entri contoh untuk memeriksa denominator dan transisi status. Tidak ada entri yang dikirim ke luar halaman." />
        <div className="grid two">
          <article className="card">
            <h3>Submission Registry</h3>
            <form onSubmit={addSubmission}>
              <label htmlFor="submission-title">Judul submission</label>
              <input id="submission-title" value={submissionTitle} onChange={(event) => setSubmissionTitle(event.target.value)} maxLength={160} required placeholder="Contoh: audit duplikasi data" />
              <label htmlFor="submission-status">Status keputusan</label>
              <select id="submission-status" value={submissionStatus} onChange={(event) => setSubmissionStatus(event.target.value as SubmissionStatus)}>
                <option value="pending">Pending — belum diputuskan</option>
                <option value="approved">Approved — contoh uji</option>
                <option value="rejected">Rejected — contoh uji</option>
              </select>
              <button type="submit" className="btn">ADD SESSION RECORD</button>
            </form>
            <ul>
              {submissions.map((item) => <li key={item.id}><b>{item.id}</b> — {item.title} <span className="pill">{item.status}</span></li>)}
            </ul>
            {submissions.length === 0 && <p>Belum ada submission dalam sesi ini.</p>}
          </article>

          <article className="card">
            <h3>Patch Registry</h3>
            <form onSubmit={addPatch}>
              <label htmlFor="patch-title">Judul patch</label>
              <input id="patch-title" value={patchTitle} onChange={(event) => setPatchTitle(event.target.value)} maxLength={160} required placeholder="Contoh: perbaiki validasi ID" />
              <label htmlFor="patch-status">Status implementasi/evaluasi</label>
              <select id="patch-status" value={patchStatus} onChange={(event) => setPatchStatus(event.target.value as PatchStatus)}>
                <option value="draft">Draft — belum disetujui</option>
                <option value="approved">Approved — siap dipertimbangkan</option>
                <option value="in_implementation">In implementation</option>
                <option value="implemented_pending_verification">Implemented — menunggu verifikasi</option>
                <option value="verified_success">Verified success</option>
                <option value="verified_partial">Verified partial</option>
                <option value="verified_failure">Verified failure</option>
              </select>
              <button type="submit" className="btn">ADD SESSION PATCH</button>
            </form>
            <ul>
              {patches.map((item) => <li key={item.id}><b>{item.id}</b> — {item.title} <span className="pill">{item.status}</span></li>)}
            </ul>
            {patches.length === 0 && <p>Belum ada patch dalam sesi ini.</p>}
          </article>
        </div>
        <p><button type="button" className="btn secondary" onClick={clearSession}>CLEAR SESSION DATA</button></p>
      </section>

      <section className="section" aria-labelledby="rules-heading">
        <Head eyebrow="// METRIC RULES" title="WHAT THE NUMBERS MEAN." />
        <div className="card">
          <ul>
            <li>Approval rate = approved / (approved + rejected). Pending is excluded.</li>
            <li>Implementation rate counts implemented or evaluated states against implementation-eligible patches.</li>
            <li>Verified success rate = verified_success / (verified_success + verified_partial + verified_failure).</li>
            <li>Duplicate IDs use the first valid occurrence; malformed or missing IDs are reported as invalid.</li>
            <li>When a denominator is zero, the result is N/A—not 0%.</li>
            <li>These are software workflow metrics only; real-world impact requires a separately designed pilot, baseline, and evidence review.</li>
          </ul>
        </div>
        <p><a className="textlink" href="https://github.com/bjo163/moonwitness-xii-season-global-championships/blob/main/docs/SYAFAAT_UNIFIED_REGISTRY_AND_IMPACT_ENGINE.md" target="_blank" rel="noopener noreferrer">READ THE SYAFAAT SPECIFICATION ↗</a></p>
      </section>
    </main>
  );
}
