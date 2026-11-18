import recircle from "@/assets/ht-recircle.png.asset.json";
import preseden from "@/assets/ht-preseden.png.asset.json";
import facicheck from "@/assets/ht-facicheck.png.asset.json";
import studiLab from "@/assets/ht-studiolab.png.asset.json";

export const projects = [
  {
    name: "ReCircle",
    category: "Web Fullstack",
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
    title: "Eksperimen Alur Kerja Kreatif",
    description: "Contoh konsep dashboard kreatif yang menghubungkan ide dan alur AI.",
    price: "Custom",
    image: studiLab.url,
    icon: "✳",
    features: ["Alur AI", "Eksplorasi UI", "Dashboard", "Konsep Produk"],
  },
] as const;

export const prices = [
  { name: "Web Statis", price: "Rp90k", note: "Landing page & profil bisnis", points: ["Tampilan responsif", "Satu halaman utama", "Revisi 3x"] },
  { name: "Web Sistem Fullstack", price: "Rp400k", note: "Website dengan alur dan data", points: ["Login & pengelolaan data", "Alur sesuai kebutuhan", "Panduan starter"] },
  { name: "Mobile App Android", price: "Rp500k", note: "Aplikasi Android sesuai ide", points: ["Rancangan alur", "Fitur inti aplikasi", "Panduan penggunaan"] },
  { name: "Desain UI/UX Figma", price: "Rp150k", note: "Rancangan layar dan alur", points: ["Wireframe", "Desain antarmuka", "File Figma"] },
  { name: "Paket Eksklusif", price: "Rp2,5jt+", note: "Kebutuhan khusus, dirancang bersama", points: ["Konsultasi kebutuhan", "Lingkup fleksibel", "Penawaran khusus"], featured: true },
] as const;

export const projectCategories = prices.map(({ name }) => name);