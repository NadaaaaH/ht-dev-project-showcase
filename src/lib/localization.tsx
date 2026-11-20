import { Children, cloneElement, isValidElement, type ReactNode } from "react";

export type Language = "id" | "en";

const english: Record<string, string> = {
  Portofolio: "Portfolio",
  Beranda: "Home",
  "Harga & Order": "Pricing & Order",
  "Harga dan Order": "Pricing & Order",
  "Studio digital independen": "Independent digital studio",
  Aplikasi: "Apps",
  Mulai: "From",
  "Ganti bahasa ke Indonesia": "Switch language to Indonesian",
  "Change language to English": "Switch language to English",
  "HT Dev, ke beranda": "HT Dev, home",
  "Navigasi utama": "Main navigation",
  "Keunggulan HT Dev": "Why HT Dev",
  untuk: "for",
  "Web Fullstack": "Full-Stack Web",
  "Web Sistem": "Web System",
  "Aplikasi Android": "Android App",
  "AI & UI/UX": "AI & UI/UX",
  "Terbuka untuk proyek baru": "Open for new projects",
  "Web, aplikasi, UI/UX & AI": "Web, apps, UI/UX & AI",
  "STUDIO DIGITAL INDEPENDEN": "INDEPENDENT DIGITAL STUDIO",
  "Solusi Digital": "Digital Solutions",
  "Cepat & Rapi": "Fast & Thoughtful",
  " untuk": " for",
  "Bisnis, Tugas, dan Ide Kreatifmu.": "Your Business, Projects, and Creative Ideas.",
  "HT Dev membantu mewujudkan website, aplikasi Android, hingga integrasi AI dengan kode yang bersih, alur jelas, dan harga masuk akal.":
    "HT Dev brings websites, Android apps, and AI integrations to life with clean code, clear workflows, and fair pricing.",
  "Lihat harga & order": "View pricing & order",
  "Intip portofolio": "Explore portfolio",
  Web: "Web",
  App: "Apps",
  "UI/UX": "UI/UX",
  "Integrasi AI": "AI integration",
  "01 / CARA KAMI BEKERJA": "01 / HOW WE WORK",
  "Rapi dari awal, sampai selesai.": "Thoughtful from the first step to the finish.",
  "Pengerjaan Cepat & Terukur": "Fast, focused delivery",
  "Pilihan durasi fleksibel mulai dari standar hingga mendesak.":
    "Flexible timelines, from standard to expedited.",
  "Code + Starter Guide": "Code + starter guide",
  "Setiap proyek dilengkapi panduan alur sistem agar mudah dikembangkan.":
    "Every project includes a system guide that makes future development easier.",
  "Konsultasi Santai & Transparan": "Friendly, transparent consultation",
  "Bebas diskusi kebutuhan di awal tanpa biaya tersembunyi.":
    "Discuss your needs upfront, with no hidden fees.",
  "Diskon Portofolio Rp25k": "Rp25k portfolio discount",
  "Potongan harga langsung jika hasil karya diizinkan untuk showcase.":
    "Get a direct discount when you let us showcase the finished work.",
  "Mulai dari ide kecil, lalu kita rancang langkah terbaik bersama.":
    "Start with a small idea, and we’ll plan the best next steps together.",
  "Mulai diskusi": "Start a conversation",
  "PILIHAN KARYA": "SELECTED WORK",
  "Hal yang pernah": "Things we’ve",
  "kami buat.": "made.",
  "Setiap proyek dimulai dari cerita yang berbeda. Ini beberapa di antaranya.":
    "Every project starts with a different story. Here are a few of them.",
  "Galeri proyek": "Project gallery",
  "Pilih proyek": "Choose a project",
  "Proyek sebelumnya": "Previous project",
  "Proyek berikutnya": "Next project",
  Lihat: "View",
  "Tampilan proyek": "Project preview",
  Tampilkan: "Show",
  "Marketplace Barang Preloved": "Pre-loved Marketplace",
  "Ruang jual-beli preloved dengan alur yang aman, ringkas, dan mudah dipercaya.":
    "A trusted, streamlined place to buy and sell pre-loved goods.",
  "Arsip Riset Putusan Hukum": "Legal Decision Research Archive",
  "Pencarian putusan dan arsip hukum dalam satu ruang kerja yang teratur.":
    "Search decisions and legal archives in one organized workspace.",
  "Inspeksi Fasilitas Lapangan": "Field Facility Inspections",
  "Checklist kondisi fasilitas yang praktis dipakai langsung di lapangan.":
    "Practical facility checklists designed for use in the field.",
  "Eksperimen Alur Kerja Kreatif": "Creative Workflow Experiments",
  "Contoh konsep dashboard kreatif yang menghubungkan ide dan alur AI.":
    "A creative dashboard concept connecting ideas with AI workflows.",
  "Pencarian Dokumen": "Document Search",
  "Klasifikasi Putusan": "Decision Classification",
  "Ruang Admin": "Admin Workspace",
  "Checklist Digital": "Digital Checklist",
  "Catatan Temuan": "Findings Log",
  "Riwayat Inspeksi": "Inspection History",
  "Eksplorasi UI": "UI Exploration",
  "Konsep Produk": "Product Concept",
  "Alur AI": "AI Workflow",
  "Pesan yang serupa": "Order a similar project",
  "Lihat gambar penuh": "View full image",
  "Punya ide sendiri? Kita bisa mulai dari sana.": "Have your own idea? Let’s start there.",
  "Ceritakan idemu": "Tell us your idea",
  "Tutup gambar": "Close image",
  "Gambar proyek": "Project image",
  "Tampilan penuh proyek": "Full project preview",
  "JELAS SEJAK AWAL": "CLARITY FROM THE START",
  "Pilih layanan,": "Choose a service,",
  "lalu mulai.": "then get started.",
  "Harga dasar untuk kebutuhan standar. Total akhir disesuaikan dengan lingkup, fitur, dan tenggat proyek.":
    "Starting prices for standard needs. Final pricing depends on scope, features, and timeline.",
  "PILIH YANG SESUAI": "FIND YOUR FIT",
  "Layanan utama": "Main services",
  "Harga dasar": "Starting price",
  "Web Statis": "Static Website",
  "Website Static": "Static Website",
  "Website Full-Stack": "Full-Stack Website",
  "Mobile App (Android)": "Mobile App (Android)",
  "UI/UX Design (Figma)": "UI/UX Design (Figma)",
  "Paket Eksklusif": "Custom Package",
  "Machine Learning / Computer Vision": "Machine Learning / Computer Vision",
  "Mockup UI/UX Figma — tanpa verifikasi": "Figma UI/UX Mockup — no review",
  "Mockup UI/UX Figma — dengan verifikasi": "Figma UI/UX Mockup — with review",
  "Verifikasi & persetujuan sebelum coding": "Review & approval before coding",
  "Bundle dokumen sistem": "System document bundle",
  "Satu dokumen sistem": "Single system document",
  "Revisi tambahan": "Additional revision",
  "Integrasi deteksi objek, klasifikasi, pengenalan gambar, atau rekomendasi.":
    "Object detection, classification, image recognition, or recommendation integration.",
  "Desain langsung dilanjutkan ke proses pengerjaan.": "Design proceeds directly to development.",
  "Desain disetujui terlebih dahulu sebelum proses coding.":
    "Design is approved before coding begins.",
  "Sesi review alur atau desain sebelum pengembangan dimulai.":
    "A workflow or design review session before development.",
  "SRS/DPPL, Class Diagram, ERD, dan Use Case Diagram.":
    "SRS/DPPL, class diagram, ERD, and use case diagram.",
  "SRS/DPPL, Class Diagram, ERD, atau Use Case Diagram.":
    "SRS/DPPL, class diagram, ERD, or use case diagram.",
  "Biaya mengikuti tingkat kompleksitas revisi.": "Pricing depends on revision complexity.",
  "Portofolio, company profile, landing page, undangan digital, website event tanpa server dan backend.":
    "Portfolios, company profiles, landing pages, digital invitations, and event sites without a server or backend.",
  "Tampilan responsif": "Responsive design",
  "Website sederhana tanpa backend": "Simple website, no backend",
  "Sistem web dengan frontend, backend, database, dan konfigurasi deployment.":
    "A web system with frontend, backend, database, and deployment setup.",
  "Alur dan data sesuai kebutuhan": "Custom workflows and data",
  "Source code dan panduan": "Source code and guide",
  "CRUD Produk": "Product CRUD",
  "Aplikasi Android siap pakai dalam bentuk file installer APK.":
    "A ready-to-use Android app delivered as an APK installer.",
  "Penyimpanan lokal atau cloud": "Local or cloud storage",
  "Fitur inti sesuai ide": "Core features tailored to your idea",
  "Satu halaman mencakup Wireframe Lo-Fi dan Desain Hi-Fi.":
    "Each page includes a low-fidelity wireframe and high-fidelity design.",
  "Desain baru Rp20.000/halaman": "New design Rp20,000/page",
  "Redesign Rp15.000/halaman": "Redesign Rp15,000/page",
  "Rp15.000–20.000/halaman": "Rp15,000–20,000/page",
  "Untuk website bisnis inti berskala besar dengan trafik tinggi, banyak pengguna, dan kebutuhan operasional penting.":
    "For large-scale core business websites with high traffic, many users, and critical operational needs.",
  "Rincian biaya disepakati di awal": "Costs agreed upfront",
  "Menyesuaikan fitur dan kompleksitas": "Tailored to features and complexity",
  "Lihat Detail Add-On": "View add-on details",
  "TERMASUK DI SETIAP PROYEK": "INCLUDED WITH EVERY PROJECT",
  "Syarat & Ketentuan": "Terms & Conditions",
  "Masih bingung pilih paket? Kita bantu cari yang pas.":
    "Not sure which package to choose? We’ll help you find the right fit.",
  "Diskon Rp25.000 jika proyek diizinkan tampil sebagai portofolio dan media promosi HT Dev.":
    "Rp25,000 off when you allow your project to be featured in the HT Dev portfolio and promotions.",
  "Starter Guide PDF tentang alur sistem dan kode, beserta README.md untuk instalasi dan deployment mandiri.":
    "A PDF starter guide to the system and code, plus a README.md for independent setup and deployment.",
  "Akses repository GitHub dengan source code yang bersih dan terstruktur.":
    "Access to a GitHub repository with clean, organized source code.",
  "Bantuan deployment awal melalui layanan free-tier selama sekitar satu bulan.":
    "Initial deployment assistance on a free tier for about one month.",
  "Tiga kali revisi minor gratis setelah proyek selesai.":
    "Three free minor revisions after project completion.",
  "Garansi perbaikan bug selama 14 hari setelah serah terima, selama kode belum diubah mandiri.":
    "A 14-day bug-fix warranty after handoff, provided the code has not been modified independently.",
  "Harga paket adalah harga minimum untuk spesifikasi dasar; domain dan hosting berbayar belum termasuk.":
    "Package prices are minimums for basic specifications; paid domains and hosting are not included.",
  "Deployment awal memakai layanan free-tier sekitar satu bulan. Biaya perpanjangan dibayar klien dari akun pribadi; HT Dev siap membantu setup.":
    "Initial deployment uses a free-tier service for about one month. The client pays renewals from their own account; HT Dev can help with setup.",
  "DP 50% dibayar sebelum pengerjaan dan tidak dapat dikembalikan bila proyek dibatalkan sepihak. Pelunasan 50% dibayar setelah proyek selesai dan revisi ditutup.":
    "A 50% deposit is due before work begins and is non-refundable if the project is cancelled unilaterally. The remaining 50% is due after completion and revisions.",
  "Biaya tambahan berdasarkan kompleksitas, jumlah halaman, fitur, dan tenggat disepakati secara transparan sebelum DP.":
    "Additional costs based on complexity, page count, features, and deadlines are agreed transparently before the deposit.",
  "Sampaikan poin revisi dengan terperinci saat proyek selesai agar penyesuaian tetap sesuai kesepakatan awal.":
    "Share detailed revision notes at project completion so changes stay within the original agreement.",
  "Kedua pihak menjaga kerahasiaan data, kredensial akun, dan informasi sensitif selama maupun setelah proyek.":
    "Both parties keep data, account credentials, and sensitive information confidential during and after the project.",
  "Garansi bug 14 hari otomatis gugur apabila klien mengubah kode secara mandiri.":
    "The 14-day bug warranty is void if the client independently changes the code.",
  "CERITAKAN IDEMU": "TELL US YOUR IDEA",
  "Mulai konsultasi & pemesanan": "Start a consultation & order",
  "Isi kebutuhanmu di bawah ini. Tim HT Dev akan menghubungimu dalam waktu kurang dari 24 jam.":
    "Tell us what you need below. The HT Dev team will get back to you within 24 hours.",
  "Nama lengkap / panggilan": "Full name / preferred name",
  "Masukkan namamu atau nama brand/instansi...": "Enter your name or your brand/organization...",
  "Pilih skema layanan": "Choose a service",
  "Target tenggat waktu": "Target deadline",
  "Contoh: 25 November 2026 atau 7 hari kerja": "Example: November 25, 2026 or 7 business days",
  "Butuh add-on?": "Need add-ons?",
  "Tidak perlu add-on": "No add-ons",
  "Ya, pilih add-on": "Yes, choose add-ons",
  "Pilih add-on": "Choose add-ons",
  "Penjelasan desain & alur sistem": "Design and system workflow details",
  "Ceritakan gambaran proyek, fitur utama, referensi desain, atau pertanyaan lainnya...":
    "Describe your project, key features, design references, or any questions...",
  "Saya mengizinkan proyek ditampilkan sebagai portofolio HT Dev":
    "I allow my project to be featured in the HT Dev portfolio",
  "(diskon Rp25.000)": "(Rp25,000 discount)",
  "harga akhir menyesuaikan kompleksitas proyek.": "Final pricing depends on project complexity.",
  "Tampil rapi di HP dan desktop · Siap diterbitkan online":
    "Polished on mobile and desktop · Ready to publish online",
  "Fitur seperti login, kelola data, dan dashboard · Source code + Starter Guide":
    "Features like login, data management, and dashboards · Source code + Starter Guide",
  "Fitur inti sesuai ide · File APK + source code":
    "Core features tailored to your idea · APK + source code",
  "Desain baru atau redesain · Siap dilanjutkan ke coding":
    "New design or redesign · Ready for development",
  "Kirim via WhatsApp": "Send via WhatsApp",
  "Respon cepat, kurang dari 24 jam kerja.": "Fast response, within one business day.",
  "© 2026 HT Dev. Dibuat dengan perhatian pada detail.":
    "© 2026 HT Dev. Made with attention to detail.",
  "Web · Aplikasi · UI/UX · AI": "Web · Apps · UI/UX · AI",
};

function translateText(value: string, language: Language) {
  if (language === "id") return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const content = value.slice(leading.length, value.length - trailing.length || undefined);
  const projectButton = content.match(/^Lihat (.+), (.+)$/);
  const joinedItems = content.split(" · ");
  const translated =
    english[content] ??
    (joinedItems.length > 1
      ? joinedItems.map((item) => english[item] ?? item).join(" · ")
      : projectButton
        ? `View ${projectButton[1] ?? ""}, ${english[projectButton[2] ?? ""] ?? projectButton[2] ?? ""}`
        : content
            .replace(/^Tampilkan /, "Show ")
            .replace(/^Tampilan penuh proyek /, "Full project preview ")
            .replace(/^Tampilan proyek /, "Project preview ")
            .replace(/^Gambar proyek /, "Project image ")
            .replace(/^Mulai /, "From "));
  return `${leading}${translated}${trailing}`;
}

function localize(node: ReactNode, language: Language): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === "string") return translateText(child, language);
    if (!isValidElement(child)) return child;

    const props = child.props as Record<string, unknown>;
    const translatedProps = Object.fromEntries(
      Object.entries(props).map(([key, value]) => [
        key,
        ["aria-label", "title", "placeholder", "alt"].includes(key) && typeof value === "string"
          ? translateText(value, language)
          : key === "children"
            ? localize(value as ReactNode, language)
            : value,
      ]),
    );
    return cloneElement(child, translatedProps);
  });
}

export function LocalizedContent({
  language,
  children,
}: {
  language: Language;
  children: ReactNode;
}) {
  return <>{localize(children, language)}</>;
}
