// MOONWITNESS XII — 33 Real-World Bug Patch master register.
// Only #001–#008 are recovered from the existing submission-in-chat register.
// #009–#013 are recovered outlines (NOT authenticated submission texts).
// #014 remains a genuine numbering conflict; both proposals preserved.
// #015–#033 are editorial proposals, NOT claimed submissions or divine approvals.
import {knownSubmissions,realWorldBugTarget} from './bugSubmissions.ts';
import {faithToAction} from './faithToAction.js';

export const registryCandidates=[
  {
    "id": "009",
    "title": "WE ARE SAVAGES",
    "scope": "Faith / Ethics",
    "summary": "Rancangan standar minimum perilaku orang beriman: tidak menyekutukan Allah, mengakui kesalahan dan bertobat, menghormati keluarga, serta membiasakan sedekah.",
    "benefit": "Refleksi pribadi tentang kejujuran, kepedulian keluarga, dan kebiasaan berbagi.",
    "references": "QS. Al-A'raf 7:52 (rujukan yang disebut; konteks perlu ditinjau)",
    "recordStatus": "recovered_draft",
    "note": "Tema dan judul ada dalam diskusi, tetapi tidak ditemukan teks submission lengkap atau bukti pengesahan.",
    "reviewNeeded": "Harus diperiksa apakah syarat-syarat ini berupa refleksi pribadi atau proposal publik.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only"
  },
  {
    "id": "010",
    "title": "HAVE A NICE DAY",
    "scope": "Life / Ethics",
    "summary": "Gagasan standarisasi perjalanan hidup agar lebih aman, baik, dan bertanggung jawab.",
    "benefit": "Panduan refleksi kehidupan yang dapat dipahami lintas latar.",
    "references": "QS. Ali 'Imran 3:62 (rujukan tematis dari diskusi)",
    "recordStatus": "recovered_draft",
    "note": "Judul dan arah konsep muncul di riwayat; rincian standar final belum dapat dipastikan.",
    "reviewNeeded": "Pulihkan versi naskah utama sebelum mencantumkan kriteria normatif.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only"
  },
  {
    "id": "011",
    "title": "KARMA — THE BUG IS ME",
    "scope": "Accountability / Self",
    "summary": "Narasi tanggung jawab sebab-akibat: perbuatan memiliki konsekuensi dan setiap orang dapat memperbaiki dirinya.",
    "benefit": "Mendorong koreksi diri dan menghentikan siklus menyalahkan orang lain.",
    "references": "QS. Az-Zalzalah 99:7–8 (rujukan tematis)",
    "recordStatus": "recovered_draft",
    "note": "Dikaitkan dengan storyteller THEY CALL IT KARMA; judul patch dan nomor membutuhkan konfirmasi sumber asli.",
    "reviewNeeded": "Bedakan kisah refleksi karma dari proposal Bug Patch formal.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only"
  },
  {
    "id": "012",
    "title": "THE PRIME DIRECTIVE",
    "scope": "Responsibility / Community",
    "summary": "Rancangan prinsip utama untuk bertindak dengan amanah, tanpa mengorbankan hak pihak lain.",
    "benefit": "Pedoman kehati-hatian, keselamatan, dan tanggung jawab.",
    "references": "REFERENCES PENDING — rujukan primer belum ditemukan",
    "recordStatus": "recovered_draft",
    "note": "Disebut sebagai konsep standar tanggung jawab; teks asli dan rumusan formal belum tersedia.",
    "reviewNeeded": "Perlu pulihkan apakah ini pernah dinyatakan sebagai submission tersendiri.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only"
  },
  {
    "id": "013",
    "title": "SAFE FROM DAY ONE",
    "scope": "Children / Safety",
    "summary": "Usulan perlindungan anak sejak awal kehidupan dengan audit terhadap rancangan terkait dan prioritas keselamatan nyata.",
    "benefit": "Hak, kesejahteraan, dan perlindungan anak yang dapat diterapkan dalam praktik.",
    "references": "REFERENCES PENDING — rujukan primer belum ditemukan",
    "recordStatus": "recovered_draft",
    "note": "Tema pernah dibahas sebagai perbaikan penting, termasuk audit #009/#012. Tidak ada bukti proposal telah diajukan secara formal.",
    "reviewNeeded": "Butuh kriteria usia, safeguard anak, dan naskah sumber asli.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only"
  },
  {
    "id": "014",
    "title": "FAMILY WITHOUT FEAR",
    "scope": "Family / Safety",
    "summary": "Kandidat judul pertama untuk slot #014: keluarga yang aman tanpa intimidasi, serta dukungan sukarela bagi anggota keluarga.",
    "benefit": "Lingkungan keluarga lebih aman dengan penghormatan dan bantuan yang sesuai kebutuhan.",
    "references": "REFERENCES PENDING — rujukan primer belum ditemukan",
    "recordStatus": "number_conflict",
    "note": "Konflik penomoran: judul FAMILY WITHOUT FEAR dan THE WRONG WAY / HELLROAD pernah dikaitkan dengan #014. Keduanya tidak dinyatakan setara.",
    "reviewNeeded": "Jangan memutuskan judul final atau memindahkan nomor tanpa sumber primer.",
    "provenance": "previous_conversation_summary",
    "origin": "recovered_outline_only",
    "conflictingCandidate": {
      "title": "THE WRONG WAY / HELLROAD",
      "summary": "Konsep jalan yang keliru dan konsekuensi moral; pernah disebut sebagai kandidat berbeda untuk nomor yang sama.",
      "provenance": "prior_narrative_brainstorm",
      "status": "UNASSIGNED_NUMBER_CONFLICT"
    }
  },
  {
    "id": "015",
    "title": "FAIR WORK, FAIR LIFE",
    "scope": "Work / Fairness",
    "summary": "Rancangan untuk perlakuan adil, keselamatan, dan penghormatan dalam pekerjaan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "016",
    "title": "BREAK THE DEBT LOOP",
    "scope": "Finance / Wellbeing",
    "summary": "Rancangan pendidikan keuangan dan bantuan sukarela untuk memutus siklus utang yang merugikan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "017",
    "title": "THE SECOND CHANCE",
    "scope": "Restoration / Growth",
    "summary": "Rancangan kesempatan memperbaiki kesalahan melalui tindakan nyata.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "018",
    "title": "JUSTICE FOR EVERYONE",
    "scope": "Justice / Ethics",
    "summary": "Rancangan proses adil dan dapat ditinjau tanpa diskriminasi.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "019",
    "title": "THE HONEST WITNESS",
    "scope": "Truth / Evidence",
    "summary": "Rancangan membedakan kesaksian, pendapat, catatan, dan fakta yang diverifikasi.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "020",
    "title": "NO ONE DIES ALONE",
    "scope": "Care / Dignity",
    "summary": "Rancangan pendampingan manusiawi dan dukungan kepada orang yang membutuhkan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "021",
    "title": "THE MERCY NETWORK",
    "scope": "Community / Mutual Aid",
    "summary": "Rancangan jaringan bantuan sukarela yang menjaga privasi dan persetujuan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "022",
    "title": "CLEAN WATER FOR ALL",
    "scope": "Environment / Public Health",
    "summary": "Rancangan akses air bersih serta pengelolaan lingkungan berkelanjutan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "023",
    "title": "NO ONE GOES HUNGRY",
    "scope": "Nutrition / Mutual Aid",
    "summary": "Rancangan upaya berbagi makanan secara aman, adil, dan sukarela.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "024",
    "title": "HEALTH WITHOUT BARRIERS",
    "scope": "Health / Accessibility",
    "summary": "Rancangan mengurangi hambatan informasi dan akses layanan kesehatan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "025",
    "title": "LEARN FOR LIFE",
    "scope": "Education / Opportunity",
    "summary": "Rancangan akses pembelajaran sepanjang hayat dan berbagi keterampilan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "026",
    "title": "NO ONE LEFT BEHIND",
    "scope": "Inclusion / Accessibility",
    "summary": "Rancangan kegiatan sosial dan layanan yang inklusif bagi kebutuhan berbeda.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "027",
    "title": "CRISIS READY",
    "scope": "Safety / Preparedness",
    "summary": "Rancangan kesiapsiagaan darurat dan rujukan pada sumber bantuan resmi.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "028",
    "title": "EARTH STEWARDSHIP",
    "scope": "Environment / Stewardship",
    "summary": "Rancangan menjaga alam dan memperbaiki dampak lingkungan yang terukur.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "029",
    "title": "SAFE DIGITAL WORLD",
    "scope": "Digital / Safety",
    "summary": "Rancangan privasi, keamanan informasi, dan perilaku digital yang sehat.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "030",
    "title": "FAIR GOVERNANCE",
    "scope": "Governance / Transparency",
    "summary": "Rancangan keputusan yang transparan, bertanggung jawab, dan dapat diajukan keberatan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "031",
    "title": "PEACE BUILDER",
    "scope": "Dialogue / Nonviolence",
    "summary": "Rancangan pemulihan dialog dan penyelesaian konflik tanpa kekerasan.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "032",
    "title": "A SAFE PLACE TO LIVE",
    "scope": "Housing / Safety",
    "summary": "Rancangan lingkungan tinggal yang lebih aman, layak, dan ramah semua orang.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "references": "REFERENCES PENDING — belum ditelusuri ke sumber primer",
    "recordStatus": "proposed",
    "note": "Judul dan tema berasal dari rancangan master registry sebelumnya, bukan bukti submission final.",
    "reviewNeeded": "Perlu naskah final, scope, rujukan dan persetujuan redaksional sebelum dinaikkan statusnya.",
    "provenance": "assistant_drafted_master_plan",
    "origin": "editorial_proposal_only"
  },
  {
    "id": "033",
    "title": "KOPIHITAM - SIACENG",
    "scope": "Dunia / Global Humanity / Religion / Education / Ethics / Technology",
    "summary": "Permohonan agar umat manusia dimudahkan memahami, mengingat, dan mengamalkan tuntunan kebaikan sesuai tradisi masing-masing melalui pembelajaran, alat bantu teknologi dan tindakan sukarela yang dapat dievaluasi.",
    "benefit": "Harapan kemudahan ibadah sesuai tradisi, literasi sumber agama, pendidikan, kasih sayang keluarga, perlindungan anak, kepedulian lingkungan, dan tanggung jawab digital. Manfaat yang terukur harus diuji secara nyata.",
    "references": "Al-Ma'idah 5:2; Ulangan 6:6–9; Mazmur 119:105; Yakobus 1:22 (rujukan tematis; tidak memerintahkan pembuatan aplikasi)",
    "recordStatus": "user_submitted_in_chat",
    "acengUserReportedCaption": "ACENG MAH APPROVE",
    "acengCaptionEvidence": "user_reported_in_chat_not_independently_verified",
    "editorialFinalVersion": "1.0",
    "editorialFinalizedAt": "2026-10-17",
    "note": "Pengguna secara eksplisit meminta SUBMIT pada 17 Oktober 2026. Permohonan #033 dicatat di arsip publik MOONWITNESS melalui percakapan ini; pengiriman eksternal, penerimaan Allah atau pengesahan otoritas tidak dinyatakan terjadi.",
    "reviewNeeded": "Arsipkan redaksi yang dipilih pengguna; verifikasi sumber dan pembangunan teknologi tetap pekerjaan lanjutan. Tidak ada bukti pengiriman ke penerima eksternal.",
    "provenance": "explicit_user_submission_request_in_chat_2026-10-17",
    "origin": "user_submission_request_recorded_in_chat_only",
    "detailKey": "FAITH_TO_ACTION",
    "submissionDate": "2026-10-17",
    "submissionChannel": "chat",
    "externalSubmission": "not_evidenced",
    "approvalStatus": "not_verified"
  }
];
export const registryStatusLabels={
registered:'REGISTERED / REPORTED IN CHAT',
recovered_draft:'RECOVERED DRAFT / REVIEW NEEDED',
number_conflict:'NUMBER CONFLICT / UNRESOLVED',
proposed:'EDITORIAL PROPOSAL / NOT SUBMITTED',
user_selected_draft:'USER SELECTED / DRAFT ONLY',
user_submitted_in_chat:'SUBMITTED IN CHAT • NO EXTERNAL DELIVERY'
};
export const registryEntries=[
 ...knownSubmissions.map(p=>({...p,recordStatus:'registered',origin:'submission_reported_in_chat',provenance:'earlier_chat_summary',reviewNeeded:'Original complete text and independent evaluation remain outstanding.'})),
 ...registryCandidates
].sort((a,b)=>Number(a.id)-Number(b.id));
export const registrySummary={
 total:registryEntries.length,
 target:realWorldBugTarget,
 registered:registryEntries.filter(p=>p.recordStatus==='registered').length,
 recovered:registryEntries.filter(p=>p.recordStatus==='recovered_draft').length,
 conflicted:registryEntries.filter(p=>p.recordStatus==='number_conflict').length,
 proposed:registryEntries.filter(p=>p.recordStatus==='proposed').length,
 selected:registryEntries.filter(p=>p.recordStatus==='user_selected_draft').length,
 submittedInChat:registryEntries.filter(p=>p.recordStatus==='user_submitted_in_chat').length,
 verifiedApprovals:registryEntries.filter(p=>p.approvalStatus==='approved_with_evidence').length
};
export const registryNote='Slot #033 KOPIHITAM - SIACENG (concept: FAITH TO ACTION) was explicitly requested for submission by the user and recorded IN THIS CHAT / PROJECT REGISTRY on 2026-10-17. No dispatch to a third party, divine receipt, approval, or real-world effect is verified. Having 33 indexed slots does NOT mean 33 formally delivered submissions.';

// User assigned #033 to the Faith to Action concept (now titled KOPIHITAM - SIACENG). Preserve displaced concept without reusing the slot.
export const displacedPatchConcepts=[
  {
    "archiveId": "EXTRA-CONCEPT-001",
    "title": "THE FINAL AUDIT",
    "formerSlot": "033",
    "recordStatus": "displaced_editorial_proposal",
    "scope": "Evaluation / Accountability",
    "summary": "Rancangan evaluasi akhir terhadap capaian nyata dan pekerjaan yang belum selesai.",
    "benefit": "Usulan manfaat sosial/etis yang perlu dirumuskan dan ditinjau; belum merupakan hasil yang terwujud.",
    "source": "former_033_proposal_in_master_registry_v2",
    "note": "Preserved as unnumbered historical proposal when the user assigned #033 to FAITH TO ACTION; it is not a second #033.",
    "provenance": "assistant_drafted_master_plan"
  }
];
export const selectedPatch=faithToAction;
