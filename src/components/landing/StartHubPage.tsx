"use client";

import { useState } from "react";
// useState wird von YoutubeConsent verwendet

// ── Links anpassen ────────────────────────────────────────────────
const VIDEO_ID        = "e4I4UDAiMPk";
const DISCORD_FREE    = "https://discord.gg/t6dJrGKuxH";
const DISCORD_VIP     = "https://discord.com/channels/1482663175395479646/1506287530872410253";
const TELEGRAM        = "https://t.me/tradingsignaleSP500";
const URL_VELGO       = "https://velgo.ai/";
const URL_MASTERCLASS = "/start/manual";
const URL_MASTERPLAN  = "https://fk-masterplan.com/";
const URL_TSAPP       = "https://tsapp.trading-strategen.com/";
// ─────────────────────────────────────────────────────────────────

const premiumProducts = [
  {
    href: URL_VELGO,
    badge: "KI · EA Builder",
    title: "Velgo.AI",
    desc: "Erstelle eigene Expert Advisors mit KI – ohne eine Zeile Code. Strategie beschreiben, EA exportieren.",
    highlight: { label: "Kein Programmierwissen nötig", sub: "Strategie eingeben → fertiger MT5 EA in Minuten." },
    tags: ["MT5", "Kein Code", "Backtest"],
    cta: "Mehr erfahren →",
    featured: false,
    external: true,
    comingSoon: false,
  },
  {
    href: DISCORD_VIP,
    badge: "VIP",
    title: "VIP Discord",
    desc: "Exklusive Signale, Live-Setups und direkte Analyse im geschlossenen Bereich.",
    highlight: { label: "Tägliche Setups & Signale", sub: "Setups & Signale in Echtzeit – direkt im VIP-Bereich." },
    tags: ["Signale", "Live-Setups"],
    cta: "Zugang holen →",
    featured: false,
    external: true,
    comingSoon: false,
  },
  {
    href: URL_MASTERCLASS,
    badge: "Kurs",
    title: "Masterclass",
    desc: "Manuelles Trading systematisch lernen. Technische Analyse und eigene Strategie entwickeln.",
    highlight: { label: "Einmalzahlung · Lebenslanger Zugang", sub: "Einmal kaufen, dauerhaft nutzen – inkl. Updates." },
    tags: ["Manual Trading", "Strategie"],
    cta: "Kursinhalt ansehen →",
    featured: false,
    comingSoon: false,
  },
  {
    href: URL_MASTERPLAN,
    badge: "⭐ EMPFOHLEN",
    title: "FK-Masterplan",
    desc: "Der vollständige Weg vom Hobby-Trader zum profitablen Prop Trader. Strategie, System, Skalierung.",
    highlight: { label: "Inkl. Masterclass – GRATIS", sub: "Du bekommst beide Kurse zum Preis eines." },
    tags: ["Prop Firm", "Skalierung", "FK"],
    cta: "FK-Masterplan entdecken →",
    featured: true,
    external: true,
    comingSoon: false,
  },
];

const forWhomItems = [
  { icon: "📈", title: "Du ein klares System brauchst", desc: "Kein Raten, kein Bauchgefühl – du willst regelbasiert handeln und endlich wissen warum ein Trade funktioniert." },
  { icon: "🏦", title: "Du Funded Accounts bestehen willst", desc: "Prop Firm Challenges scheitern an Risk Management. Hier lernst du genau das – praxisnah und regelkonform." },
  { icon: "📊", title: "Du langfristig mit FK skalieren möchtest", desc: "Einen Funded Account bestehen ist Schritt eins. Wir zeigen dir, wie du daraus ein skalierbares System aufbaust – von einem auf mehrere Konten." },
  { icon: "⚙️", title: "Du automatisieren oder manuell handeln willst", desc: "Ob EA-Builder, Copy-Trading oder manuelles Chart-Lesen – du findest deinen Weg in unserem Ökosystem." },
];

function YoutubeConsent({ videoId, title }: { videoId: string; title: string }) {
  const [consented, setConsented] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: 10, overflow: "hidden", border: "1px solid var(--ts-border-base)", marginBottom: 40 }}>
      {consented ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&color=white&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <div
          className="sh-consent-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,8,0.55), rgba(8,8,8,0.65)), url('${thumbnail}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* YouTube-Icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <p style={{ fontSize: 14, color: "#F0EDE6", maxWidth: 420, lineHeight: 1.6, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
            Dieses Video wird von <strong>YouTube (Google LLC)</strong> bereitgestellt. Beim Laden werden Daten an Google-Server übermittelt und ggf. Cookies gesetzt – auch ohne eingeloggten Account.
          </p>
          <p style={{ fontSize: 12, color: "#C8C4BB", maxWidth: 400, lineHeight: 1.5, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
            Weitere Infos in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A962", textDecoration: "underline" }}>
              Google Datenschutzerklärung
            </a>{" "}
            und unserer{" "}
            <a href="/datenschutz" style={{ color: "#C9A962", textDecoration: "underline" }}>
              Datenschutzerklärung
            </a>.
          </p>
          <button className="sh-consent-btn" onClick={() => setConsented(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video laden & zustimmen
          </button>
          <p style={{ fontSize: 11, color: "#A09880", textShadow: "0 1px 2px rgba(0,0,0,0.9)" }}>
            Mit Klick stimmst du der Datenübermittlung an Google/YouTube zu.
          </p>
        </div>
      )}
    </div>
  );
}

export default function StartHubPage() {
  return (
    <div
      className="overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: "var(--ts-heading)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Barlow+Condensed:wght@500;600;700&display=swap');

        .sh-display-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 0.95;
          letter-spacing: -0.01em;
        }
        .sh-section-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
        }
        .sh-gold-line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: var(--gold);
          vertical-align: middle;
          margin-right: 10px;
        }
        .sh-divider { border: none; border-top: 1px solid var(--ts-border-faint); }

        .sh-card {
          background: var(--ts-surface-card);
          border: 1px solid var(--ts-border-base);
          border-radius: 10px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s;
        }
        .sh-card:hover { border-color: var(--ts-border-strong); }

        .sh-card-featured {
          background: var(--ts-surface-card);
          border: 1px solid var(--gold);
          border-radius: 10px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          position: relative;
        }

        .sh-card-free {
          background: transparent;
          border: 1px solid var(--ts-border-base);
          border-radius: 10px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s, border-color 0.2s;
        }
        .sh-card-free:hover {
          background: var(--ts-surface-card);
          border-color: var(--ts-border-medium);
        }

        .sh-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .sh-badge-gold { background: var(--gold); color: var(--primary-foreground); }
        .sh-badge-free {
          background: color-mix(in srgb, var(--ts-heading) 7%, transparent);
          color: var(--ts-text-subtle);
        }
        .sh-badge-vip {
          background: color-mix(in srgb, var(--gold) 12%, transparent);
          color: var(--gold);
          border: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
        }

        .sh-tag {
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 20px;
          background: color-mix(in srgb, var(--ts-heading) 5%, transparent);
          color: var(--ts-text-ghost);
        }
        .sh-tag-gold {
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 20px;
          background: color-mix(in srgb, var(--gold) 8%, transparent);
          color: color-mix(in srgb, var(--gold) 60%, transparent);
        }

        .sh-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: var(--primary-foreground);
          background: var(--gold);
          border-radius: 5px;
          padding: 9px 0;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .sh-btn-primary:hover { opacity: 0.88; }

        .sh-btn-primary-featured {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-foreground);
          background: var(--gold);
          border-radius: 5px;
          padding: 10px 0;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .sh-btn-primary-featured:hover { opacity: 0.88; }

        .sh-btn-tg {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--ts-border-base);
          color: var(--ts-text-muted);
          font-size: 14px;
          font-weight: 400;
          padding: 12px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          font-family: inherit;
        }
        .sh-btn-tg:hover { border-color: var(--gold); color: var(--ts-heading); }

        .sh-highlight-box {
          background: color-mix(in srgb, var(--ts-heading) 3%, transparent);
          border: 1px solid var(--ts-border-base);
          border-radius: 6px;
          padding: 10px 14px;
          margin-bottom: 14px;
        }
        .sh-highlight-box-featured {
          background: color-mix(in srgb, var(--gold) 7%, transparent);
          border: 1px solid color-mix(in srgb, var(--gold) 20%, transparent);
          border-radius: 6px;
          padding: 10px 14px;
          margin-bottom: 14px;
        }

        .sh-for-whom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: var(--ts-border-faint);
          border: 1px solid var(--ts-border-faint);
          border-radius: 8px;
          overflow: hidden;
        }
        .sh-fwcell { background: var(--ts-surface-page); padding: 20px 22px; }

        .sh-consent-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px;
          background: var(--ts-surface-card);
          padding: 24px;
          text-align: center;
        }
        .sh-consent-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--gold); color: var(--primary-foreground);
          font-size: 14px; font-weight: 500;
          padding: 11px 22px; border-radius: 5px;
          border: none; cursor: pointer; font-family: inherit;
          transition: opacity 0.2s;
        }
        .sh-consent-btn:hover { opacity: 0.88; }

        .sh-coming-soon-wrapper {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }
        .sh-coming-soon-inner {
          filter: blur(2px);
          opacity: 0.4;
          pointer-events: none;
          user-select: none;
        }
        .sh-coming-soon-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .sh-coming-soon-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--ts-heading);
          background: color-mix(in srgb, var(--ts-surface-page) 88%, transparent);
          border: 1px solid var(--ts-border-medium);
          border-radius: 4px;
          padding: 8px 18px;
        }

        @media (max-width: 700px) {
          .sh-premium-grid { grid-template-columns: 1fr !important; }
          .sh-free-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* VIDEO + SLOGAN */}
      <section style={{ padding: "96px 24px 56px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <YoutubeConsent videoId={VIDEO_ID} title="Trading Strategen – Willkommen" />
        <h1 className="sh-display-title" style={{ fontSize: "clamp(42px, 7vw, 80px)", marginBottom: 16 }}>
          Strategie. Software.<br />
          <span style={{ color: "var(--gold)" }}>Automation. Education.</span>
        </h1>
        <p style={{ fontSize: 17, color: "var(--ts-text-muted)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          Wähle deinen Weg – ob manuelles Trading, automatisierte EAs oder KI-gestützte Strategie-Entwicklung. Alles in einem Ökosystem.
        </p>
      </section>

      <hr className="sh-divider" />

      {/* KOSTENLOS STARTEN */}
      <section style={{ padding: "56px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="sh-section-label" style={{ marginBottom: 20 }}>
          <span className="sh-gold-line" />
          Kostenlos starten
        </p>
        <div className="sh-free-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <a href={DISCORD_FREE} target="_blank" rel="noopener noreferrer" className="sh-card-free">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.944 19.944 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                <span style={{ fontSize: 15, fontWeight: 500 }}>Community Discord</span>
                <span className="sh-badge sh-badge-free">Gratis</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--ts-text-subtle)", lineHeight: 1.5 }}>Chart-Analysen, Trading-Ideen, Community-Support – offen für alle.</p>
            </div>
            <span style={{ fontSize: 13, color: "var(--ts-text-dim)", marginLeft: "auto", flexShrink: 0 }}>Beitreten →</span>
          </a>

          <a href={URL_TSAPP} target="_blank" rel="noopener noreferrer" className="sh-card-free">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span style={{ fontSize: 15, fontWeight: 500 }}>Free Kurs-Inhalte</span>
                <span className="sh-badge sh-badge-free">Gratis</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--ts-text-subtle)", lineHeight: 1.5 }}>
                Erste Lektionen & Grundlagen – nach kurzer, kostenloser Registrierung sofort verfügbar. Kein Kauf nötig.
              </p>
            </div>
            <span style={{ fontSize: 13, color: "var(--ts-text-dim)", marginLeft: "auto", flexShrink: 0 }}>Jetzt starten →</span>
          </a>
        </div>
      </section>

      <hr className="sh-divider" />

      {/* PREMIUM PRODUKTE */}
      <section style={{ padding: "56px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="sh-section-label" style={{ marginBottom: 20 }}>
          <span className="sh-gold-line" />
          Premium – wo findest du dich wieder?
        </p>
        <div className="sh-premium-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {premiumProducts.map((p) => {
            const cardContent = p.featured ? (
              <a href={p.href} className="sh-card-featured" style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }} {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)" }}>
                  <span className="sh-badge sh-badge-gold" style={{ whiteSpace: "nowrap" }}>{p.badge}</span>
                </div>
                <div style={{ flex: 1, marginTop: 8 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase", letterSpacing: "0.02em", color: "var(--gold)" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--ts-text-body)", lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                  <div className="sh-highlight-box-featured">
                    <p style={{ fontSize: 12, color: "var(--gold)", fontWeight: 500 }}>{p.highlight.label}</p>
                    <p style={{ fontSize: 12, color: "color-mix(in srgb, var(--gold) 50%, var(--ts-text-ghost))", marginTop: 2 }}>{p.highlight.sub}</p>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => <span key={t} className="sh-tag-gold">{t}</span>)}
                  </div>
                </div>
                <div style={{ marginTop: 20, borderTop: "1px solid color-mix(in srgb, var(--gold) 20%, transparent)", paddingTop: 16 }}>
                  <span className="sh-btn-primary-featured">{p.cta}</span>
                </div>
              </a>
            ) : (
              <a href={p.href} className="sh-card" style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }} {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <div style={{ flex: 1 }}>
                  <span className="sh-badge sh-badge-vip" style={{ marginBottom: 12, display: "inline-block" }}>{p.badge}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8, fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--ts-text-subtle)", lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                  <div className="sh-highlight-box">
                    <p style={{ fontSize: 12, color: "var(--ts-text-body)", fontWeight: 500 }}>{p.highlight.label}</p>
                    <p style={{ fontSize: 12, color: "var(--ts-text-ghost)", marginTop: 2 }}>{p.highlight.sub}</p>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => <span key={t} className="sh-tag">{t}</span>)}
                  </div>
                </div>
                <div style={{ marginTop: 20, borderTop: "1px solid var(--ts-border-base)", paddingTop: 16 }}>
                  <span className="sh-btn-primary">{p.cta}</span>
                </div>
              </a>
            );

            if (p.comingSoon) {
              return (
                <div key={p.title} className="sh-coming-soon-wrapper">
                  <div className="sh-coming-soon-inner" style={{ height: "100%" }}>{cardContent}</div>
                  <div className="sh-coming-soon-overlay">
                    <span className="sh-coming-soon-label">Coming Soon</span>
                  </div>
                </div>
              );
            }
            return <div key={p.title} style={{ position: "relative" }}>{cardContent}</div>;
          })}
        </div>
      </section>

      <hr className="sh-divider" />

      {/* FÜR WEN */}
      <section style={{ padding: "56px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="sh-section-label" style={{ marginBottom: 16 }}>
          <span className="sh-gold-line" />
          Für wen ist das hier?
        </p>
        <h2 className="sh-display-title" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", marginBottom: 32 }}>
          Du bist hier richtig, wenn...
        </h2>
        <div className="sh-for-whom-grid">
          {forWhomItems.map((item) => (
            <div key={item.title} className="sh-fwcell">
              <div style={{ fontSize: 18, marginBottom: 10 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "var(--ts-text-subtle)", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
