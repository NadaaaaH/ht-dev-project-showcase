import recircle from "@/assets/ht-recircle.png.asset.json";
import preseden from "@/assets/ht-preseden.png.asset.json";
import facicheck from "@/assets/ht-facicheck.png.asset.json";
import studiLab from "@/assets/ht-studiolab.png.asset.json";

export const projects = [
  {
    name: "ReCircle",
    category: "Web Fullstack",
    orderCategory: "Website Full-Stack",
    title: "Marketplace Barang Preloved",
    description: "Ruang jual-beli preloved dengan alur yang aman, ringkas, dan mudah dipercaya.",
    price: "Rp400k",
    image: recircle.url,
    icon: "◉",
    features: ["Auth & Multi-Role", "CRUD Produk", "Cloud Storage", "Responsive UI"],
  },
  {
    name: "Preseden",
    category: "Web Sistem",
    orderCategory: "Website Full-Stack",
    title: "Arsip Riset Putusan Hukum",
    description: "Pencarian putusan dan arsip hukum dalam satu ruang kerja yang teratur.",
    price: "Rp400k",
    image: preseden.url,
    icon: "⌘",
    features: ["Pencarian Dokumen", "Klasifikasi Putusan", "Ruang Admin", "Responsive UI"],
  },
  {
    name: "FaciCheck",
    category: "Aplikasi Android",
    orderCategory: "Mobile App (Android)",
    title: "Inspeksi Fasilitas Lapangan",
    description: "Checklist kondisi fasilitas yang praktis dipakai langsung di lapangan.",
    price: "Rp500k",
    image: facicheck.url,
    icon: "✓",
    features: ["Checklist Digital", "Catatan Temuan", "Riwayat Inspeksi", "Android"],
  },
  {
    name: "Studio Lab",
    category: "AI & UI/UX",
    orderCategory: "UI/UX Design (Figma)",
    title: "Eksperimen Alur Kerja Kreatif",
    description: "Contoh konsep dashboard kreatif yang menghubungkan ide dan alur AI.",
    price: "Custom",
    image: studiLab.url,
    icon: "✳",
    features: ["Alur AI", "Eksplorasi UI", "Dashboard", "Konsep Produk"],
  },
] as const;

export const prices = [
  {
    name: "Website Static",
    price: "Mulai Rp90.000",
    note: "Portofolio, company profile, landing page, undangan digital, website event tanpa server dan backend.",
    points: ["Tampil rapi di HP dan desktop · Siap diterbitkan online"],
    featured: false,
  },
  {
    name: "Website Full-Stack",
    price: "Mulai Rp400.000",
    note: "Sistem web dengan frontend, backend, database, dan konfigurasi deployment.",
    points: ["Fitur seperti login, kelola data, dan dashboard · Source code + Starter Guide"],
    featured: true,
  },
  {
    name: "Mobile App (Android)",
    price: "Mulai Rp700.000",
    note: "Aplikasi Android siap pakai dalam bentuk file installer APK.",
    points: ["Fitur inti sesuai ide · File APK + source code"],
    featured: false,
  },
  {
    name: "UI/UX Design (Figma)",
    price: "Rp15.000–20.000/halaman",
    note: "Satu halaman mencakup Wireframe Lo-Fi dan Desain Hi-Fi.",
    points: ["Desain baru atau redesain · Siap dilanjutkan ke coding"],
    featured: false,
  },
  {
    name: "Paket Eksklusif",
    price: "Custom / Rp2.500.000+",
    note: "Untuk website bisnis inti berskala besar dengan trafik tinggi, banyak pengguna, dan kebutuhan operasional penting.",
    points: ["Rincian biaya disepakati di awal", "Menyesuaikan fitur dan kompleksitas"],
    featured: true,
  },
] as const;

export const projectCategories = prices.map(({ name }) => name);

export const addons = [
  {
    id: "machine-learning",
    name: "Machine Learning / Computer Vision",
    price: "+Rp300.000/fitur",
    note: "Integrasi deteksi objek, klasifikasi, pengenalan gambar, atau rekomendasi.",
  },
  {
    id: "figma",
    name: "Mockup UI/UX Figma",
    badge: "Lo-Fi + Hi-Fi",
    note: "Per halaman",
    options: [
      {
        id: "figma-parallel",
        name: "Tanpa verifikasi",
        price: "+Rp20.000/halaman",
        note: "Desain Figma dan pengembangan berjalan paralel. Semua hasil diserahkan di akhir, revisi dilakukan setelahnya.",
      },
      {
        id: "figma-review",
        name: "Dengan verifikasi",
        price: "+Rp25.000/halaman",
        note: "Alur formal bertahap. Desain Figma disetujui klien dulu sebelum coding dimulai.",
      },
    ],
  },
  {
    id: "system-documents",
    name: "Dokumen Formal Perancangan Sistem",
    note: "Dokumen formal untuk proyek yang butuh perancangan terdokumentasi, terdiri dari SRS/DPPL, Class Diagram, ERD, dan Use Case Diagram.",
    documents: ["SRS/DPPL", "Class Diagram", "ERD", "Use Case Diagram"],
    options: [
      {
        id: "docs-bundle",
        name: "Paket lengkap (4 dokumen)",
        price: "+Rp280.000",
        badge: "Bundle · Hemat Rp20.000",
      },
      { id: "docs-single", name: "Satuan", price: "+Rp75.000/dokumen" },
    ],
    verification: {
      id: "docs-verification",
      name: "Verifikasi bertahap",
      price: "+Rp50.000",
      note: "Dokumen dibuat berurutan dan disetujui klien di tiap tahap sebelum lanjut ke tahap berikutnya (termasuk sebelum coding dimulai).",
    },
  },
  {
    id: "additional-revisions",
    name: "Revisi Tambahan",
    price: "+Rp5.000-25.000/revisi",
    note: "Dipakai jika 3x revisi gratis sudah terpakai atau masa revisi 7 hari sudah lewat, tapi masih ada yang ingin diubah. Biaya mengikuti tingkat kompleksitas.",
  },
] as const;

export const includedBenefits = [
  "Diskon Rp25.000 jika proyek diizinkan tampil sebagai portofolio dan media promosi HT Dev.",
  "Starter Guide PDF tentang alur sistem dan kode, beserta README.md untuk instalasi dan deployment mandiri.",
  "Akses repository GitHub dengan source code yang bersih dan terstruktur.",
  "Bantuan deployment awal melalui layanan free-tier selama sekitar satu bulan.",
  "Tiga kali revisi minor gratis setelah proyek selesai.",
  "Garansi perbaikan bug selama 14 hari setelah serah terima, selama kode belum diubah mandiri.",
] as const;

export const serviceTerms = [
  "Harga paket adalah harga minimum untuk spesifikasi dasar; domain dan hosting berbayar belum termasuk.",
  "Deployment awal memakai layanan free-tier sekitar satu bulan. Biaya perpanjangan dibayar klien dari akun pribadi; HT Dev siap membantu setup.",
  "DP 50% dibayar sebelum pengerjaan dan tidak dapat dikembalikan bila proyek dibatalkan sepihak. Pelunasan 50% dibayar setelah proyek selesai dan revisi ditutup.",
  "Biaya tambahan berdasarkan kompleksitas, jumlah halaman, fitur, dan tenggat disepakati secara transparan sebelum DP.",
  "Sampaikan poin revisi dengan terperinci saat proyek selesai agar penyesuaian tetap sesuai kesepakatan awal.",
  "Kedua pihak menjaga kerahasiaan data, kredensial akun, dan informasi sensitif selama maupun setelah proyek.",
  "Garansi bug 14 hari otomatis gugur apabila klien mengubah kode secara mandiri.",
] as const;
