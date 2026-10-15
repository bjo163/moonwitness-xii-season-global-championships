import {levels as selfAura} from '../data.js';
export const worldPhases=[
{id:'self',name:'SELF AURA',start:1,end:33,description:'Kebiasaan pribadi dan pembelajaran'},
{id:'surrounding',name:'SURROUNDING AURA',start:34,end:67,description:'Pelayanan dan hubungan sosial yang sukarela'},
{id:'ultimate',name:'ULTIMATE AURA',start:68,end:100,description:'Kepemimpinan yang akuntabel'}
];
const expanded=[
  {
    "id": 34,
    "name": "Neighbor Check-in",
    "mission": "Tanyakan kebutuhan tetangga tanpa memaksa",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 35,
    "name": "Listening Practice",
    "mission": "Dengarkan seseorang lima menit tanpa menyela",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 36,
    "name": "Clean Shared Space",
    "mission": "Rapikan satu area bersama dengan izin",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 37,
    "name": "Accessibility Lens",
    "mission": "Temukan satu hambatan akses yang bisa dilaporkan",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 38,
    "name": "Resource Map",
    "mission": "Catat layanan publik tepercaya di sekitar",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 39,
    "name": "Consent First",
    "mission": "Minta izin sebelum membagikan cerita orang",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 40,
    "name": "Food Care",
    "mission": "Bantu merencanakan berbagi makanan yang aman",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 41,
    "name": "Peer Support",
    "mission": "Temani teman menyusun rencana belajar",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 42,
    "name": "Conflict Pause",
    "mission": "Tunda respons saat emosi memanas",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 43,
    "name": "Respectful Dialogue",
    "mission": "Tanyakan sudut pandang berbeda tanpa mengejek",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 44,
    "name": "Volunteer Hour",
    "mission": "Sisihkan waktu sukarela yang realistis",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 45,
    "name": "Truth Check",
    "mission": "Periksa sumber sebelum meneruskan kabar",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 46,
    "name": "Local Green Patch",
    "mission": "Kurangi satu sumber sampah sehari",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 47,
    "name": "Fair Trade",
    "mission": "Dukung transaksi transparan dan sukarela",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 48,
    "name": "Health Boundaries",
    "mission": "Hormati ruang pribadi dan kebutuhan istirahat",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 49,
    "name": "Quiet Kindness",
    "mission": "Lakukan bantuan tanpa mencari pengakuan",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 50,
    "name": "Story With Permission",
    "mission": "Catat kisah baik setelah memperoleh izin",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 51,
    "name": "Welcome Newcomer",
    "mission": "Sambut orang baru tanpa menghakimi",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 52,
    "name": "Skill Swap",
    "mission": "Bagikan keterampilan secara sukarela",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 53,
    "name": "Safety Walk",
    "mission": "Catat area berisiko tanpa memasuki bahaya",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 54,
    "name": "Reliable Promise",
    "mission": "Tepati satu janji kecil kepada orang lain",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 55,
    "name": "Digital Civility",
    "mission": "Perbaiki nada diskusi daring",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 56,
    "name": "Community Listening",
    "mission": "Kumpulkan saran tanpa data sensitif",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 57,
    "name": "Inclusive Language",
    "mission": "Ubah frasa yang menyingkirkan orang",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 58,
    "name": "Reconciliation Offer",
    "mission": "Tawarkan dialog tanpa menuntut maaf",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 59,
    "name": "Shared Learning",
    "mission": "Rancang diskusi lintas perspektif",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 60,
    "name": "Fair Distribution",
    "mission": "Buat aturan pembagian tugas yang jelas",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 61,
    "name": "Emergency Readiness",
    "mission": "Tinjau jalur bantuan dan nomor darurat",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 62,
    "name": "Local Creativity",
    "mission": "Adakan sesi ide kecil yang terbuka",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 63,
    "name": "Repair Together",
    "mission": "Bantu merawat barang bersama dengan izin",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 64,
    "name": "Mentor Someone",
    "mission": "Tawarkan bantuan belajar tanpa kontrol",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 65,
    "name": "Practice Accountability",
    "mission": "Akui dan perbaiki dampak satu kesalahan",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 66,
    "name": "Community Gratitude",
    "mission": "Sampaikan terima kasih secara spesifik",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 67,
    "name": "Service Reflection",
    "mission": "Evaluasi manfaat dan batas bantuan",
    "reward": "Community Practice",
    "phase": "SURROUNDING AURA",
    "prototype": true
  },
  {
    "id": 68,
    "name": "Ethical Leadership",
    "mission": "Tulis kode etik kepemimpinan yang bisa diuji",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 69,
    "name": "Decision Log",
    "mission": "Catat alasan dan risiko keputusan",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 70,
    "name": "Transparent Budget",
    "mission": "Buat contoh anggaran kegiatan tanpa uang nyata",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 71,
    "name": "Data Minimization",
    "mission": "Hapus data pribadi yang tidak perlu",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 72,
    "name": "Access Review",
    "mission": "Evaluasi siapa saja yang boleh mengubah catatan",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 73,
    "name": "Volunteer Safety",
    "mission": "Susun protokol perlindungan relawan",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 74,
    "name": "Evidence Standard",
    "mission": "Bedakan klaim, kesaksian, dan sumber independen",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 75,
    "name": "Facilitated Meeting",
    "mission": "Rancang rapat dengan giliran bicara adil",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 76,
    "name": "Conflict Resolution",
    "mission": "Buat alur mediasi sukarela",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 77,
    "name": "Inclusive Design",
    "mission": "Uji rancangan dengan kebutuhan berbeda",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 78,
    "name": "Emergency Escalation",
    "mission": "Tentukan kapan harus meminta bantuan profesional",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 79,
    "name": "Governance Charter",
    "mission": "Tulis hak, kewajiban, dan batas wewenang",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 80,
    "name": "Right to Appeal",
    "mission": "Siapkan proses banding keputusan",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 81,
    "name": "Audit Trail",
    "mission": "Catat perubahan tanpa mempermalukan orang",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 82,
    "name": "Mental Wellbeing",
    "mission": "Rancang kegiatan yang tidak memaksa orang",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 83,
    "name": "Youth Safeguards",
    "mission": "Susun batas interaksi aman bagi remaja",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 84,
    "name": "Fair Recognition",
    "mission": "Apresiasi kontribusi tanpa ranking spiritual",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 85,
    "name": "Learning Council",
    "mission": "Buat forum meninjau kesalahan bersama",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 86,
    "name": "Community Resilience",
    "mission": "Pilih satu risiko lokal dan mitigasinya",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 87,
    "name": "Environment Stewardship",
    "mission": "Rencanakan proyek lingkungan yang terukur",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 88,
    "name": "Accessible Information",
    "mission": "Terjemahkan aturan ke bahasa yang mudah",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 89,
    "name": "Privacy Review",
    "mission": "Periksa persetujuan dan masa simpan informasi",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 90,
    "name": "False Claim Repair",
    "mission": "Tuliskan cara mengoreksi informasi salah",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 91,
    "name": "Safe Experiment",
    "mission": "Definisikan percobaan rendah risiko dan evaluasi",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 92,
    "name": "Healthy Boundaries",
    "mission": "Batasi beban tugas agar tidak burnout",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 93,
    "name": "Peaceful Debate",
    "mission": "Latih menyampaikan ketidaksetujuan dengan hormat",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 94,
    "name": "Public Accountability",
    "mission": "Publikasikan contoh laporan kerja yang netral",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 95,
    "name": "Long-term Maintenance",
    "mission": "Susun jadwal perawatan sistem",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 96,
    "name": "Independent Review",
    "mission": "Undang kritik yang konstruktif dan sukarela",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 97,
    "name": "Success Metrics",
    "mission": "Tetapkan indikator dampak nyata, bukan klaim gaib",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 98,
    "name": "Handover Plan",
    "mission": "Siapkan alih peran dan dokumentasi",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 99,
    "name": "Community Feedback",
    "mission": "Dengarkan dan tindaklanjuti saran",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  },
  {
    "id": 100,
    "name": "Closing Reflection",
    "mission": "Rangkum pelajaran dan langkah perbaikan",
    "reward": "Stewardship Practice",
    "phase": "ULTIMATE AURA",
    "prototype": true
  }
];
export const worldLevels=[...selfAura.map(x=>({...x,phase:'SELF AURA',prototype:false})),...expanded];
export const guilds=[
  {
    "id": "G01",
    "name": "Witness Archive",
    "mandate": "Dokumentasi, provenance dan koreksi",
    "domain": "archive"
  },
  {
    "id": "G02",
    "name": "Mercy & Care",
    "mandate": "Bantuan sukarela, privasi dan kesejahteraan",
    "domain": "care"
  },
  {
    "id": "G03",
    "name": "Community Mediation",
    "mandate": "Dialog, kesepakatan dan pemulihan",
    "domain": "dialog"
  },
  {
    "id": "G04",
    "name": "Creative Studio",
    "mandate": "Cerita, musik dan ilustrasi dengan izin",
    "domain": "creative"
  },
  {
    "id": "G05",
    "name": "Learning Lab",
    "mandate": "Literasi, sumber primer dan pembelajaran",
    "domain": "learning"
  },
  {
    "id": "G06",
    "name": "Green Guardians",
    "mandate": "Kepedulian lingkungan dan layanan bersama",
    "domain": "green"
  },
  {
    "id": "G07",
    "name": "Civic Operations",
    "mandate": "Acara, aksesibilitas dan logistik",
    "domain": "operations"
  },
  {
    "id": "G08",
    "name": "Safety & Ethics",
    "mandate": "Moderasi, banding dan pencegahan risiko",
    "domain": "safety"
  },
  {
    "id": "G09",
    "name": "Technical Crew",
    "mandate": "Keandalan perangkat lunak dan data",
    "domain": "tech"
  },
  {
    "id": "G10",
    "name": "Joy Guild",
    "mandate": "Komedi ramah, kreativitas dan rasa syukur",
    "domain": "joy"
  }
];
const eventTemplates=[
  {
    "title": "Kindness Sprint",
    "description": "Lakukan bantuan kecil yang disetujui penerimanya",
    "domain": "care"
  },
  {
    "title": "Fact Check Jam",
    "description": "Pelajari cara memeriksa satu klaim publik",
    "domain": "learning"
  },
  {
    "title": "Quiet Hour",
    "description": "Latihan jeda digital dan istirahat sehat",
    "domain": "care"
  },
  {
    "title": "Green Walk",
    "description": "Amati masalah lingkungan dari area aman",
    "domain": "green"
  },
  {
    "title": "Open Sketch",
    "description": "Gambar sesuatu yang membawa harapan",
    "domain": "creative"
  },
  {
    "title": "Comedy Without Targets",
    "description": "Tulis humor yang tidak menyerang kelompok",
    "domain": "joy"
  },
  {
    "title": "Listening Circle",
    "description": "Latihan mendengar tanpa paksaan",
    "domain": "dialog"
  },
  {
    "title": "Document Repair",
    "description": "Perbaiki satu catatan yang tidak akurat",
    "domain": "archive"
  },
  {
    "title": "Accessibility Pass",
    "description": "Tinjau keterbacaan satu halaman",
    "domain": "operations"
  },
  {
    "title": "Safety Drill",
    "description": "Bahas respons terhadap masalah secara hipotetis",
    "domain": "safety"
  },
  {
    "title": "Code Hygiene",
    "description": "Tinjau tes dan ketahanan fitur",
    "domain": "tech"
  },
  {
    "title": "Thank-you Relay",
    "description": "Kirim ucapan terima kasih yang spesifik",
    "domain": "joy"
  }
];
const cycles=[{"name":"Spark","focus":"Memulai dari diri sendiri"},{"name":"Bridge","focus":"Melibatkan orang lain dengan persetujuan"},{"name":"Bloom","focus":"Memperbaiki proses secara berkelanjutan"},{"name":"Renew","focus":"Mengevaluasi dampak dan mengambil pelajaran"}];
export const communityEvents=cycles.flatMap((cycle,cycleIdx)=>eventTemplates.map((event,eventIdx)=>({id:`EVT-${String(cycleIdx*12+eventIdx+1).padStart(3,'0')}`,title:`${cycle.name} / ${event.title}`,description:`${event.description}. Fokus: ${cycle.focus}.`,domain:event.domain,cycle:cycle.name,status:'suggested_only',isScheduled:false})));
export const governanceRules=[
'Perlakukan semua orang dengan hormat, terlepas dari keyakinan atau latar.',
'Partisipasi selalu sukarela dan dapat dihentikan.',
'Minta persetujuan sebelum menyimpan, membagikan, atau menerbitkan data seseorang.',
'Bedakan kesaksian, pendapat, dan informasi yang diverifikasi.',
'Hindari intimidasi, diskriminasi, dan pemaksaan.',
'Catat alasan keputusan dan sediakan jalur koreksi atau banding.',
'Jangan klaim otoritas spiritual atau kepastian akhirat atas anggota.',
'Utamakan keselamatan, aksesibilitas, dan bantuan profesional jika diperlukan.'
];
