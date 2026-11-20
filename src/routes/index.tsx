import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Code2,
  ExternalLink,
  FileText,
  Flower2,
  Layers3,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveUpRight,
  Palette,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  addons,
  includedBenefits,
  prices,
  projectCategories,
  projects,
  serviceTerms,
} from "@/lib/ht-dev-data";
import { LocalizedContent, type Language } from "@/lib/localization";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HaifaTeam Dev | Jasa Pembuatan Proyek Software" },
      {
        name: "description",
        content:
          "HaifaTeam Dev menyediakan jasa pembuatan proyek software, website, aplikasi Android, UI/UX, dan integrasi AI dengan pengerjaan rapi dan harga transparan.",
      },
      { property: "og:title", content: "HaifaTeam Dev | Jasa Pembuatan Proyek Software" },
      {
        property: "og:description",
        content:
          "Jasa pembuatan proyek software, website, aplikasi Android, UI/UX, dan integrasi AI bersama HaifaTeam Dev.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HTDevSite,
});

const panels = [
  { id: "portofolio", label: "Portofolio" },
  { id: "beranda", label: "Beranda" },
  { id: "order", label: "Harga & Order" },
] as const;

const motionEase = [0.22, 1, 0.36, 1] as const;
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

function HTDevSite() {
  const [activePanel, setActivePanel] = useState(() => {
    if (typeof window === "undefined") return 1;
    const hash = window.location.hash.slice(1);
    const index = panels.findIndex((panel) => panel.id === hash);
    return index === -1 ? 1 : index;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>(
    projectCategories[0] ?? "Web Statis",
  );
  const [language, setLanguage] = useState<Language>("id");
  const touchStart = useRef<{ x: number; y: number; eligible: boolean } | null>(null);
  const reduceMotion = useReducedMotion();

  const changePanel = useCallback((nextPanel: number) => {
    const boundedIndex = Math.max(0, Math.min(panels.length - 1, nextPanel));
    setActivePanel(boundedIndex);
    const id = panels[boundedIndex]?.id;
    if (id) window.history.replaceState(null, "", `#${id}`);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const hashIndex = panels.findIndex((panel) => panel.id === window.location.hash.slice(1));
      if (hashIndex !== -1) setActivePanel(hashIndex);
    };
    if (!window.location.hash) window.history.replaceState(null, "", "#beranda");
    const onKeyDown = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return;
      if (event.key === "ArrowLeft") changePanel(activePanel - 1);
      if (event.key === "ArrowRight") changePanel(activePanel + 1);
    };
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePanel, changePanel]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const excluded = target.closest("button, a, input, textarea, select, [data-no-panel-swipe]");
    const point = event.touches[0];
    touchStart.current = point ? { x: point.clientX, y: point.clientY, eligible: !excluded } : null;
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    const point = event.changedTouches[0];
    touchStart.current = null;
    if (!start?.eligible || !point) return;
    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;
    if (Math.abs(dx) > 85 && Math.abs(dx) > Math.abs(dy) * 1.4)
      changePanel(activePanel + (dx < 0 ? 1 : -1));
  };

  return (
    <main className="site-backdrop min-h-screen px-0 py-0 sm:px-3 sm:py-3" lang={language}>
      <div className="site-shell mx-auto flex max-w-[1480px] flex-col overflow-hidden">
        <LocalizedContent language={language}>
          <header className="site-header items-center gap-3 px-4 py-4 sm:px-8 sm:py-5">
            <a
              className="brand-lockup min-w-0"
              href="#beranda"
              onClick={() => changePanel(1)}
              aria-label="HT Dev, ke beranda"
            >
              <span className="brand-name">
                HT Dev<span className="brand-period">.</span>
                <span className="brand-caption">
                  HaifaTeam Dev · Jasa Pembuatan Proyek Software
                </span>
              </span>
            </a>
            <nav className="panel-tabs" aria-label="Navigasi utama" role="tablist">
              {panels.map((panel, index) => (
                <button
                  key={panel.id}
                  type="button"
                  role="tab"
                  aria-selected={activePanel === index}
                  aria-controls={`panel-${panel.id}`}
                  className={`panel-tab ${activePanel === index ? "is-active" : ""}`}
                  onClick={() => changePanel(index)}
                >
                  {activePanel === index && (
                    <motion.span
                      layoutId="active-tab"
                      className="tab-indicator"
                      transition={{ duration: reduceMotion ? 0 : 0.32, ease: motionEase }}
                    />
                  )}
                  <span>{panel.label}</span>
                </button>
              ))}
            </nav>
            <button
              type="button"
              className="language-toggle"
              aria-label={
                language === "id" ? "Change language to English" : "Ganti bahasa ke Indonesia"
              }
              onClick={() => setLanguage((current) => (current === "id" ? "en" : "id"))}
            >
              <Languages size={16} aria-hidden="true" />
              <span>{language === "id" ? "EN" : "ID"}</span>
            </button>
          </header>
        </LocalizedContent>

        <div
          className="panel-window flex-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <LocalizedContent language={language}>
            <motion.div
              className="panel-track"
              initial={false}
              animate={{ x: `${activePanel * -33.333333}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.62, ease: motionEase }}
            >
              <section
                id="panel-portofolio"
                className="panel-slide"
                role="tabpanel"
                aria-label="Portofolio"
              >
                <PortfolioPanel
                  language={language}
                  onOrder={(category) => {
                    setSelectedCategory(category);
                    changePanel(2);
                  }}
                />
              </section>
              <section
                id="panel-beranda"
                className="panel-slide"
                role="tabpanel"
                aria-label="Beranda"
              >
                <HomePanel language={language} onPanelChange={changePanel} />
              </section>
              <section
                id="panel-order"
                className="panel-slide"
                role="tabpanel"
                aria-label="Harga dan Order"
              >
                <OrderPanel
                  language={language}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </section>
            </motion.div>
          </LocalizedContent>
        </div>

        <LocalizedContent language={language}>
          <footer className="site-footer flex flex-col gap-2 border-t border-border/70 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span>© 2026 HT Dev. Dibuat dengan perhatian pada detail.</span>
            <span className="footer-services">
              Web <i>·</i> Aplikasi <i>·</i> UI/UX <i>·</i> AI
            </span>
          </footer>
        </LocalizedContent>
      </div>
      <button
        className="edge-navigation edge-previous"
        aria-label="Buka panel sebelumnya"
        onClick={() => changePanel(activePanel - 1)}
        disabled={activePanel === 0}
      >
        <ArrowLeft size={17} />
      </button>
      <button
        className="edge-navigation edge-next"
        aria-label="Buka panel berikutnya"
        onClick={() => changePanel(activePanel + 1)}
        disabled={activePanel === panels.length - 1}
      >
        <ArrowRight size={17} />
      </button>
    </main>
  );
}

function HomePanel({
  language,
  onPanelChange,
}: {
  language: Language;
  onPanelChange: (index: number) => void;
}) {
  const features = [
    {
      icon: <Zap />,
      title: "Pengerjaan Cepat & Terukur",
      text: "Pilihan durasi fleksibel mulai dari standar hingga mendesak.",
    },
    {
      icon: <Code2 />,
      title: "Code + Starter Guide",
      text: "Setiap proyek dilengkapi panduan alur sistem agar mudah dikembangkan.",
    },
    {
      icon: <MessageCircle />,
      title: "Konsultasi Santai & Transparan",
      text: "Bebas diskusi kebutuhan di awal tanpa biaya tersembunyi.",
    },
    {
      icon: <Palette />,
      title: "Diskon Portofolio Rp25k",
      text: "Potongan harga langsung jika hasil karya diizinkan untuk showcase.",
    },
  ];
  return (
    <div className="home-panel content-wrap">
      <LocalizedContent language={language}>
        <div className="hero-intro">
          <Sparkles className="sparkle sparkle-one" aria-hidden="true" />
          <Sparkles className="sparkle sparkle-two" aria-hidden="true" />
          <p className="hero-headline">
            Solusi Digital
            <br className="desktop-break" />{" "}
            <span className="headline-highlight">Cepat &amp; Rapi</span> untuk
            <br className="desktop-break" /> Bisnis, Tugas, dan Ide Kreatifmu.
          </p>
          <h1 className="hero-copy">
            Jasa Pembuatan Website, Aplikasi Android, UI/UX Design, &amp; Machine Learning dengan
            kode yang bersih, alur jelas, dan harga masuk akal.
          </h1>
          <div className="hero-actions" />
          <div className="hero-proof" />
        </div>
        <section className="feature-section" aria-label="Keunggulan HT Dev">
          <div className="section-kicker">
            <span>01 / CARA KAMI BEKERJA</span>
            <span>Rapi dari awal, sampai selesai.</span>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className={`feature-card feature-tint-${index + 1}`}
                key={feature.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
                <span className="feature-number">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </section>
        <div className="home-note">
          <span className="note-star">✳</span>
          <p>Mulai dari ide kecil, lalu kita rancang langkah terbaik bersama.</p>
          <Button variant="ghost" className="text-link-button" onClick={() => onPanelChange(2)}>
            Mulai diskusi <MoveUpRight size={15} />
          </Button>
        </div>
      </LocalizedContent>
    </div>
  );
}

function PortfolioPanel({
  language,
  onOrder,
}: {
  language: Language;
  onOrder: (category: string) => void;
}) {
  const [activeProject, setActiveProject] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const project = projects[activeProject] ?? projects[0];
  const associatedCategory = project?.orderCategory ?? projectCategories[0] ?? "Website Static";

  useEffect(() => {
    if (!showLightbox) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowLightbox(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showLightbox]);

  return (
    <div className="portfolio-panel content-wrap">
      <LocalizedContent language={language}>
        <div className="page-heading-row">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> PILIHAN KARYA
            </p>
            <h1 className="page-title">
              Hal yang pernah <span className="title-underline">kami buat.</span>
            </h1>
            <p className="page-subtitle">
              Setiap proyek dimulai dari cerita yang berbeda. Ini beberapa di antaranya.
            </p>
          </div>
          <div className="gallery-counter">
            <span>0{activeProject + 1}</span> <i>/</i> 0{projects.length}
          </div>
        </div>
        <div className="portfolio-gallery" aria-label="Galeri proyek">
          {projects.map((item, index) => (
            <button
              key={item.name}
              className={`project-card ${activeProject === index ? "project-expanded" : "project-collapsed"}`}
              onClick={() => setActiveProject(index)}
              aria-label={`Lihat ${item.name}, ${item.category}`}
              aria-expanded={activeProject === index}
            >
              <img src={item.image} alt={`Tampilan proyek ${item.name}`} loading="lazy" />
              <span className="project-shade" />
              {activeProject === index ? (
                <span className="project-cover-copy">
                  <span className="project-logo">{item.icon}</span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.title}</small>
                  </span>
                  <span className="project-category-pill">{item.category}</span>
                </span>
              ) : (
                <span className="collapsed-project-mark">
                  <span>{item.icon}</span>
                  <small>{item.name}</small>
                </span>
              )}
              {activeProject === index && (
                <span className="project-expand-icon">
                  <ArrowUpRight size={18} />
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="gallery-pagination" aria-label="Pilih proyek">
          <button
            className="gallery-arrow"
            onClick={() =>
              setActiveProject((activeProject + projects.length - 1) % projects.length)
            }
            aria-label="Proyek sebelumnya"
          >
            <ChevronLeft size={18} />
          </button>
          {projects.map((item, index) => (
            <button
              key={item.name}
              className={`gallery-dot ${index === activeProject ? "dot-active" : ""}`}
              aria-label={`Tampilkan ${item.name}`}
              onClick={() => setActiveProject(index)}
            />
          ))}
          <button
            className="gallery-arrow"
            onClick={() => setActiveProject((activeProject + 1) % projects.length)}
            aria-label="Proyek berikutnya"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {project && (
            <motion.article
              className="project-details"
              key={project.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
            >
              <div className="project-detail-copy">
                <div className="detail-title-row">
                  <span className="detail-project-index">0{activeProject + 1}</span>
                  <h2>
                    {project.name} <span>—</span> {project.title}
                  </h2>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      <Check size={12} /> {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-detail-action">
                <span className="category-tag">{project.category}</span>
                <strong>Mulai {project.price}</strong>
                <div className="project-actions">
                  <Button
                    variant="outline"
                    className="small-pill-button"
                    onClick={() => onOrder(associatedCategory)}
                  >
                    Pesan yang serupa <ArrowUpRight />
                  </Button>
                  <Button
                    variant="ghost"
                    className="icon-button lightbox-trigger"
                    aria-label="Lihat gambar penuh"
                    title="Lihat gambar penuh"
                    onClick={() => setShowLightbox(true)}
                  >
                    <ExternalLink size={17} />
                  </Button>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
        <div className="portfolio-end-note">
          <span className="end-note-mark">✳</span>
          <span>Punya ide sendiri? Kita bisa mulai dari sana.</span>
          <Button
            variant="ghost"
            className="text-link-button"
            onClick={() => onOrder("Web Statis")}
          >
            Ceritakan idemu <ArrowUpRight size={15} />
          </Button>
        </div>
        {showLightbox && project && (
          <div
            className="lightbox-backdrop"
            role="presentation"
            onClick={() => setShowLightbox(false)}
          >
            <div
              className="lightbox-content"
              role="dialog"
              aria-modal="true"
              aria-label={`Gambar proyek ${project.name}`}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={project.image} alt={`Tampilan penuh proyek ${project.name}`} />
              <div className="lightbox-caption">
                <span>
                  <strong>{project.name}</strong>
                  <small>{project.category}</small>
                </span>
                <Button
                  variant="ghost"
                  className="lightbox-close icon-button"
                  onClick={() => setShowLightbox(false)}
                  aria-label="Tutup gambar"
                >
                  <X />
                </Button>
              </div>
            </div>
          </div>
        )}
      </LocalizedContent>
    </div>
  );
}

function OrderPanel({
  language,
  selectedCategory,
  setSelectedCategory,
}: {
  language: Language;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [includeAddons, setIncludeAddons] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Permintaan proyek baru — HT Dev");
    formData.append("from_name", "HT Dev — Situs");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success)
        throw new Error(result.message || "Pengiriman belum berhasil. Coba lagi sebentar, ya.");
      setStatus("success");
      form.reset();
      setSelectedCategory(projectCategories[0] ?? "Web Statis");
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Formulir belum terkirim. Silakan coba lagi.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="order-panel content-wrap">
      <LocalizedContent language={language}>
        <div className="page-heading-row order-heading-row">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> JELAS SEJAK AWAL
            </p>
            <h1 className="page-title">
              Pilih layanan, <span className="title-underline">lalu mulai.</span>
            </h1>
            <p className="page-subtitle">
              Harga dasar untuk kebutuhan standar. Total akhir disesuaikan dengan lingkup, fitur,
              dan tenggat proyek.
            </p>
          </div>
          <div className="order-heading-icon">
            <Layers3 />
          </div>
        </div>
        <div className="order-layout">
          <section className="price-column" aria-labelledby="price-list-heading">
            <div className="column-heading">
              <div>
                <span className="column-kicker">PILIH YANG SESUAI</span>
                <h2 id="price-list-heading">Layanan utama</h2>
              </div>
              <span className="price-note">Harga dasar</span>
            </div>
            <div className="price-list">
              {prices.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={`price-row ${item.featured ? "price-row-featured" : ""} ${selectedCategory === item.name ? "price-row-selected" : ""}`}
                  onClick={() => {
                    setSelectedCategory(item.name);
                    document
                      .getElementById("order-form")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  aria-pressed={selectedCategory === item.name}
                >
                  <span className="price-row-number">0{index + 1}</span>
                  <span className="price-row-copy">
                    <strong>{item.name}</strong>
                    <small>{item.note}</small>
                    <span className="price-points">{item.points.join(" · ")}</span>
                  </span>
                  <span className="price-value">{item.price}</span>
                  <span className="price-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              ))}
            </div>
            <div className={`terms-block ${addonsOpen ? "terms-open" : ""}`}>
              <button
                type="button"
                className="terms-toggle"
                onClick={() => setAddonsOpen(!addonsOpen)}
                aria-expanded={addonsOpen}
              >
                <span>
                  <FileText size={17} /> Lihat Detail Add-On
                </span>
                <ChevronDown size={17} />
              </button>
              {addonsOpen && (
                <div className="terms-copy addon-list">
                  {addons.map((addon) => (
                    <div className="addon-row" key={addon.name}>
                      <span>
                        <strong>{addon.name}</strong>
                        <small>{addon.note}</small>
                      </span>
                      <b>{addon.price}</b>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="benefits-block">
              <span className="column-kicker">TERMASUK DI SETIAP PROYEK</span>
              <ul className="benefits-list">
                {includedBenefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={14} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`terms-block ${termsOpen ? "terms-open" : ""}`}>
              <button
                type="button"
                className="terms-toggle"
                onClick={() => setTermsOpen(!termsOpen)}
                aria-expanded={termsOpen}
              >
                <span>
                  <FileText size={17} /> Syarat & Ketentuan
                </span>
                <ChevronDown size={17} />
              </button>
              {termsOpen && (
                <div className="terms-copy">
                  <ol className="terms-list">
                    {serviceTerms.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
            <div className="help-note">
              <CircleHelp size={17} />
              <span>Masih bingung pilih paket? Kita bantu cari yang pas.</span>
            </div>
          </section>

          <section className="order-form-card" id="order-form" aria-labelledby="order-form-heading">
            <div className="form-heading">
              <div>
                <span className="form-kicker">CERITAKAN IDEMU</span>
                <h2 id="order-form-heading">Mulai konsultasi & pemesanan</h2>
                <p>
                  Isi kebutuhanmu di bawah ini. Tim HT Dev akan menghubungimu dalam waktu kurang
                  dari 24 jam.
                </p>
              </div>
              <div className="form-sparkle">
                <Flower2 />
              </div>
            </div>
            <form className="order-form" onSubmit={submitOrder}>
              <label className="form-field">
                <span>
                  Nama lengkap / panggilan <i>*</i>
                </span>
                <input
                  name="nama"
                  type="text"
                  placeholder="Masukkan namamu atau nama brand/instansi..."
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </label>
              <div className="form-field-grid">
                <label className="form-field">
                  <span>
                    Kontak yang bisa dihubungi <i>*</i>
                  </span>
                  <select name="platform_kontak" required defaultValue="Telegram (Diutamakan)">
                    <option>Telegram (Diutamakan)</option>
                    <option>WhatsApp</option>
                  </select>
                </label>
                <label className="form-field">
                  <span>
                    Username / nomor <i>*</i>
                  </span>
                  <input
                    name="kontak"
                    type="text"
                    placeholder="Contoh: @username atau 0812xxxxxxxx"
                    required
                  />
                </label>
              </div>
              <div className="form-field-grid">
                <label className="form-field">
                  <span>
                    Pilih skema layanan <i>*</i>
                  </span>
                  <select
                    name="kategori"
                    required
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                  >
                    {prices.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} ({item.price})
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-field">
                  <span>
                    Target tenggat waktu <i>*</i>
                  </span>
                  <input
                    name="deadline"
                    type="text"
                    placeholder="Contoh: 25 November 2026 atau 7 hari kerja"
                    required
                  />
                </label>
              </div>
              <fieldset className="addon-choice">
                <legend>Butuh layanan tambahan?</legend>
                <label>
                  <input
                    type="radio"
                    name="pilih_addon"
                    value="Tidak ada tambahan"
                    checked={!includeAddons}
                    onChange={() => setIncludeAddons(false)}
                  />
                  <span>Tidak ada tambahan</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="pilih_addon"
                    value="Ya, pilih layanan tambahan"
                    checked={includeAddons}
                    onChange={() => setIncludeAddons(true)}
                  />
                  <span>Ya, pilih layanan tambahan</span>
                </label>
              </fieldset>
              {includeAddons && (
                <fieldset className="addon-options">
                  <legend>Pilih layanan tambahan</legend>
                  {addons.map((addon) => (
                    <label className="addon-option" key={addon.name}>
                      <input
                        type="checkbox"
                        name="layanan_tambahan"
                        value={`${addon.name} (${addon.price})`}
                      />
                      <span>
                        <strong>{addon.name}</strong>
                        <small>{addon.price}</small>
                      </span>
                    </label>
                  ))}
                </fieldset>
              )}
              <label className="form-field">
                <span>
                  Penjelasan desain & alur sistem <i>*</i>
                </span>
                <textarea
                  name="deskripsi"
                  placeholder="Ceritakan gambaran proyek, fitur utama, referensi desain, atau pertanyaan lainnya..."
                  rows={4}
                  required
                  minLength={10}
                />
              </label>
              <label className="portfolio-consent">
                <input name="izin_portofolio" type="checkbox" value="Ya, dengan diskon Rp25.000" />
                <span className="consent-check">
                  <Check size={13} />
                </span>
                <span>
                  Saya mengizinkan proyek ditampilkan sebagai portofolio HT Dev{" "}
                  <strong>(diskon Rp25.000)</strong>
                </span>
              </label>
              {status === "success" ? (
                <div className="form-success" role="status">
                  <span>
                    <Sparkles />
                  </span>
                  <div>
                    <strong>Pesanmu berhasil dikirim!</strong>
                    <small>
                      Terima kasih sudah menghubungi HT Dev. Kami akan segera menyapa lewat kontak
                      pilihanmu.
                    </small>
                  </div>
                </div>
              ) : (
                status && (
                  <p className="form-error" role="alert">
                    {status}
                  </p>
                )
              )}
              <Button type="submit" className="pill-button form-submit" disabled={submitting}>
                {submitting ? "Sedang mengirim..." : "Kirim permintaan via email"}
                <span className="button-icon">
                  <ArrowUpRight />
                </span>
              </Button>
              <p className="response-note">Respon cepat, kurang dari 24 jam kerja.</p>
            </form>
            <div className="form-divider">
              <span>atau, langsung menyapa</span>
            </div>
            <div className="quick-contact">
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                <Send size={15} /> Atau langsung order via Telegram <ArrowUpRight size={14} />
              </a>
              <span>
                <a href="mailto:hello@htdev.id" aria-label="Email HT Dev">
                  <Mail size={15} />
                </a>
                <a
                  href="https://www.threads.net/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Threads HT Dev"
                >
                  <Menu size={15} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram HT Dev"
                >
                  <MonitorSmartphone size={15} />
                </a>
              </span>
            </div>
          </section>
        </div>
      </LocalizedContent>
    </div>
  );
}
