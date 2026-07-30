"use client";

import { useState, useEffect } from "react";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import { hasConsent, grantConsent } from "@/lib/consent";

const TELEGRAM_URL = "https://t.me/tradingsignaleSP500";
const COURSE_URL = "https://tsapp.trading-strategen.com/courses/learn";
const MASTERCLASS_URL = "https://tsapp.trading-strategen.com/c/daytrading-masterclass";
const VIDEO_ID = "vK4z94caDv4";

// ── Pricing phases ─────────────────────────────────────────────────────────
const PHASE_1_END = new Date("2026-06-14T23:59:59"); // bis 14.06 → 149 €
const PHASE_2_END = new Date("2026-06-21T23:59:59"); // bis 21.06 → 199 €
// ab 21.06 → 249 € (kein Countdown)

interface PriceInfo {
  price: number;
  label: string;
  deadlineEnd: Date | null;
}

function getPriceInfo(): PriceInfo {
  const now = new Date();
  if (now < PHASE_1_END) {
    return { price: 149, label: "Frühbucher-Preis", deadlineEnd: PHASE_1_END };
  }
  if (now < PHASE_2_END) {
    return { price: 199, label: "Einführungspreis", deadlineEnd: PHASE_2_END };
  }
  return { price: 249, label: "Standardpreis", deadlineEnd: null };
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(deadline: Date): Countdown {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const modules = [
  {
    nr: "01",
    title: "Einführung",
    desc: "Dein persönlicher Start in die Masterclass. Lerne den Aufbau kennen und bekomme realistische Erwartungen für den Weg zur Profitabilität.",
    items: ["Lucas Weg zur Profitabilität", "Was dich in der Masterclass erwartet", "Realistische Trading-Vorstellungen"],
  },
  {
    nr: "02",
    title: "Grundlagen",
    desc: "Das technische und mentale Fundament — alles, was du brauchst, bevor es ans Charten geht.",
    items: ["Software & Analysewerkzeuge", "Umgang mit Wirtschaftsnachrichten", "Eigenkapital vs. Fremdkapital", "Kerzendiagramme verstehen", "Sessions & Trading-Zeiten"],
  },
  {
    nr: "03",
    title: "Marktverständnis – Grundlagen",
    desc: "Die Sprache des Marktes lesen — Marktphasen, Strukturelemente, Fair Value Gaps und Liquidität.",
    items: ["Marktphasen & Trendanalyse", "BOS, CHoCH & Liquiditätsabgriff", "Fair Value Gaps", "Fibonacci Retracement", "Valide & schwache Zonen", "Liquidität, Flipzonen & Traps"],
  },
  {
    nr: "04",
    title: "Marktverständnis – erweitert",
    desc: "Die nächste Tiefe: Makro vs. Mikrostruktur, valide Strukturen und Orderflow-Analyse für maximale Chart-Klarheit.",
    items: ["Makro & Mikrostruktur", "Valide Strukturen erkennen", "Liquiditätsanalyse & Orderflow (2 Teile)", "Tägliche Marktanalyse-Routine"],
  },
  {
    nr: "05",
    title: "Strategie",
    desc: "Lucas vollständiges Setup-System mit konkreten Trade-Beispielen — Trend, Counter-Trend und Invalidierung.",
    items: ["Limit Setup – klassisches Setup", "Pro-Trend-Einstiegsmodell", "Counter-Trend-Setup", "Trade-Beispiele im EUR/USD", "Setup-Invalidierung & Regeln"],
  },
  {
    nr: "06",
    title: "Zusatz",
    desc: "Über die Strategie hinaus: Setup-Ranking, persönliches Risk Management und eine vollständige Backtesting-Session.",
    items: ["Einstiegstypen: Quantität vs. CRV", "Setup-Ranking & Qualität", "Persönliches Risikomanagement (EK & FK)", "Backtesting-Session live"],
  },
];

const includes = [
  "33 HD Video-Lektionen",
  "6 strukturierte Module",
  "2 Std. 57 Min. geballtes Trading-Wissen",
  "Lucas vollständige Daytrading-Strategie",
  "Detailliertes Risikomanagement (EK & FK)",
  "Backtesting-Session: Strategie live im Einsatz",
  "Setup-Ranking & Qualitäts-Filter",
  "Sofortiger Zugang nach Stripe-Zahlung",
];

// ── SalesCard ──────────────────────────────────────────────────────────────
function SalesCard() {
  const [priceInfo, setPriceInfo] = useState<PriceInfo>(getPriceInfo);
  const [countdown, setCountdown] = useState<Countdown | null>(
    priceInfo.deadlineEnd ? getCountdown(priceInfo.deadlineEnd) : null
  );

  useEffect(() => {
    const tick = () => {
      const info = getPriceInfo();
      setPriceInfo(info);
      setCountdown(info.deadlineEnd ? getCountdown(info.deadlineEnd) : null);
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const hasCountdown = countdown !== null && priceInfo.deadlineEnd !== null;

  return (
    <div style={{ textAlign: "center" }}>
      <p className="mf-section-label" style={{ marginBottom: 20 }}>Dein nächster Schritt</p>
      <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: "uppercase", marginBottom: 16, lineHeight: 1.1 }}>
        Hier direkt starten.
      </h2>
      <p style={{ fontSize: 16, color: "var(--ts-text-muted)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
        Lucas vollständige Daytrading-Strategie. Sofortiger Zugang nach Zahlung — sichere Abwicklung über Stripe.
      </p>

      <div style={{
        background: "var(--ts-surface-card)",
        border: "2px solid var(--gold)",
        borderRadius: 8,
        padding: "44px 36px 32px",
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
        textAlign: "left",
        boxShadow: "0 0 0 1px color-mix(in srgb, var(--gold) 15%, transparent)",
      }}>
        {/* Badge */}
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
          <span style={{
            background: "var(--gold)",
            color: "var(--primary-foreground)",
            fontSize: 11,
            fontWeight: 700,
            padding: "5px 16px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>★ Daytrading Masterclass</span>
        </div>

        {/* Preis */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ marginBottom: 4 }}>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}>{priceInfo.label}</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 8 }}>
            <span style={{
              fontSize: 64,
              fontWeight: 700,
              fontFamily: "'Barlow Condensed',sans-serif",
              color: "var(--ts-heading)",
              lineHeight: 1,
            }}>{priceInfo.price} €</span>
            <span style={{ fontSize: 15, color: "var(--ts-text-ghost)" }}>einmalig</span>
          </div>
        </div>

        {/* Countdown */}
        {hasCountdown && countdown && (
          <div style={{
            background: "color-mix(in srgb, var(--gold) 6%, transparent)",
            border: "1px solid color-mix(in srgb, var(--gold) 22%, transparent)",
            borderRadius: 6,
            padding: "14px 16px",
            marginBottom: 24,
            textAlign: "center",
          }}>
            <p style={{ fontSize: 11, color: "var(--ts-text-muted)", marginBottom: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Preis steigt in
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              {[
                { val: countdown.days,    label: "Tage" },
                { val: countdown.hours,   label: "Std" },
                { val: countdown.minutes, label: "Min" },
                { val: countdown.seconds, label: "Sek" },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: "center", minWidth: 44 }}>
                  <div style={{
                    fontSize: 28,
                    fontWeight: 700,
                    fontFamily: "'Barlow Condensed',sans-serif",
                    color: "var(--gold)",
                    lineHeight: 1,
                    background: "var(--ts-surface-item)",
                    borderRadius: 4,
                    padding: "6px 8px",
                    minWidth: 44,
                    display: "inline-block",
                  }}>{pad(val)}</div>
                  <div style={{ fontSize: 10, color: "var(--ts-text-ghost)", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preisstufenleiste */}
        <div style={{
          marginBottom: 24,
          paddingTop: 20,
          borderTop: "1px solid var(--ts-border-base)",
        }}>
          <p style={{ fontSize: 11, color: "var(--ts-text-ghost)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14, textAlign: "center" }}>
            Preisentwicklung
          </p>
          <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
            {[
              { price: "149 €", date: "Jetzt",   until: "bis 14.06.", active: priceInfo.price === 149, done: priceInfo.price > 149 },
              { price: "199 €", date: "ab 14.06.", until: "bis 21.06.", active: priceInfo.price === 199, done: priceInfo.price > 199 },
              { price: "249 €", date: "ab 21.06.", until: "dauerhaft",  active: priceInfo.price === 249, done: false },
            ].map((step, i) => (
              <div key={i} style={{ flex: 1, position: "relative" }}>
                {/* Verbindungslinie zwischen den Stufen */}
                {i < 2 && (
                  <div style={{
                    position: "absolute",
                    top: 14,
                    right: -1,
                    width: 2,
                    height: 28,
                    background: "var(--ts-border-base)",
                    zIndex: 1,
                  }} />
                )}
                <div style={{
                  margin: "0 4px",
                  padding: "10px 8px",
                  borderRadius: 6,
                  border: step.active
                    ? "1px solid color-mix(in srgb, var(--gold) 50%, transparent)"
                    : "1px solid var(--ts-border-faint)",
                  background: step.active
                    ? "color-mix(in srgb, var(--gold) 8%, transparent)"
                    : step.done
                    ? "transparent"
                    : "var(--ts-surface-item)",
                  textAlign: "center",
                  opacity: step.done ? 0.4 : 1,
                }}>
                  {step.active && (
                    <div style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: "var(--gold)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}>← Du bist hier</div>
                  )}
                  <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    fontFamily: "'Barlow Condensed',sans-serif",
                    color: step.active ? "var(--gold)" : step.done ? "var(--ts-text-trace)" : "var(--ts-text-muted)",
                    lineHeight: 1,
                    textDecoration: step.done ? "line-through" : "none",
                  }}>{step.price}</div>
                  <div style={{ fontSize: 10, color: step.active ? "var(--ts-text-body)" : "var(--ts-text-muted)", marginTop: 4, lineHeight: 1.3 }}>
                    {step.date}
                  </div>
                  <div style={{ fontSize: 9, color: step.active ? "var(--ts-text-subtle)" : "var(--ts-text-dim)", marginTop: 2 }}>
                    {step.until}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inhalte */}
        <div style={{ marginBottom: 28 }}>
          <div className="mf-check-item">Lucas vollständige Daytrading-Strategie</div>
          <div className="mf-check-item">6 Module · 33 HD Video-Lektionen</div>
          <div className="mf-check-item">2 Std. 57 Min. Trading-Wissen</div>
          <div className="mf-check-item">Risikomanagement & Backtesting-Session</div>
          <div className="mf-check-item">Sofortiger Zugang nach Zahlung</div>
        </div>

        {/* CTA */}
        <a
          href={MASTERCLASS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mf-btn-primary"
          style={{ width: "100%", justifyContent: "center", padding: "16px 0", fontSize: 16, fontWeight: 600 }}
        >
          Jetzt zur Masterclass →
        </a>

        <p style={{ fontSize: 12, color: "var(--ts-text-ghost)", textAlign: "center", marginTop: 16, lineHeight: 1.5 }}>
          Sichere Zahlung über Stripe · Sofortiger Zugang nach erfolgreicher Zahlung
        </p>
      </div>
    </div>
  );
}

// ── YoutubeConsent ──────────────────────────────────────────────────────────
function YoutubeConsent({ videoId, title }: { videoId: string; title: string }) {
  const [consented, setConsented] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    setConsented(hasConsent("youtube"));
  }, []);

  function handleConsent() {
    grantConsent("youtube");
    setConsented(true);
  }

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: 8, overflow: "hidden", border: "1px solid var(--ts-border-base)" }}>
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
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "24px 20px",
            textAlign: "center",
            backgroundImage: `linear-gradient(rgba(8,8,8,0.58), rgba(8,8,8,0.68)), url('${thumbnail}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <p style={{ fontSize: 13, color: "#F0EDE6", maxWidth: 380, lineHeight: 1.6, textShadow: "0 1px 3px rgba(0,0,0,0.8)", margin: 0 }}>
            Dieses Video wird von <strong>YouTube (Google LLC)</strong> bereitgestellt. Beim Laden werden Daten an Google-Server übermittelt und ggf. Cookies gesetzt.
          </p>
          <p style={{ fontSize: 11, color: "#C8C4BB", maxWidth: 360, lineHeight: 1.5, textShadow: "0 1px 3px rgba(0,0,0,0.8)", margin: 0 }}>
            Weitere Infos in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A962", textDecoration: "underline" }}>
              Google Datenschutzerklärung
            </a>{" "}
            und unserer{" "}
            <a href="/datenschutz" style={{ color: "#C9A962", textDecoration: "underline" }}>
              Datenschutzerklärung
            </a>.
          </p>
          <button
            onClick={handleConsent}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--gold)", color: "var(--primary-foreground)",
              fontSize: 14, fontWeight: 500, padding: "11px 22px",
              borderRadius: 4, border: "none", cursor: "pointer",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            Video laden & zustimmen
          </button>
          <p style={{ fontSize: 11, color: "#A09880", textShadow: "0 1px 2px rgba(0,0,0,0.9)", margin: 0 }}>
            Einwilligung speicherbar und jederzeit widerrufbar unter{" "}
            <a href="/datenschutz#einwilligungen" style={{ color: "#C9A962", textDecoration: "underline" }}>Datenschutz</a>.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ManualFunnelPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--ts-surface-page)] text-[var(--ts-heading)]" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Barlow+Condensed:wght@600;700&display=swap');

        .mf-hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(44px, 6vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .mf-section-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
        }
        .mf-gold-line {
          display: inline-block;
          width: 40px;
          height: 2px;
          background: var(--gold);
          vertical-align: middle;
          margin-right: 10px;
        }
        .mf-module-nr {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 64px;
          font-weight: 700;
          line-height: 1;
          color: var(--ts-border-base);
        }
        .mf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gold);
          color: var(--primary-foreground);
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .mf-btn-primary:hover { opacity: 0.88; }

        .mf-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--ts-heading);
          font-size: 15px;
          font-weight: 500;
          padding: 13px 28px;
          border-radius: 4px;
          border: 1px solid var(--ts-border-medium);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .mf-btn-secondary:hover {
          border-color: var(--gold);
          background: color-mix(in srgb, var(--gold) 6%, transparent);
        }

        .mf-btn-discord {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #5865F2;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .mf-btn-discord:hover { opacity: 0.88; }

        .mf-divider {
          border: none;
          border-top: 1px solid var(--ts-border-faint);
        }

        .mf-pill {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 20px;
          background: color-mix(in srgb, var(--gold) 12%, transparent);
          color: var(--gold);
          border: 1px solid color-mix(in srgb, var(--gold) 25%, transparent);
        }

        .mf-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--ts-text-muted);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .mf-check-item::before {
          content: '';
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          margin-top: 1px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3 8l3.5 3.5L13 4' stroke='%23C9A962' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/contain no-repeat;
        }

        .mf-tag-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: var(--ts-border-base);
          border: 1px solid var(--ts-border-base);
          border-radius: 8px;
          overflow: hidden;
        }
        .mf-tag-cell {
          background: var(--ts-surface-page);
          padding: 20px 24px;
        }
        .mf-tag-cell-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--ts-text-ghost);
          margin-bottom: 8px;
        }
        .mf-tag-cell-val {
          font-size: 15px;
          color: var(--ts-heading);
        }

        .mf-faq-btn {
          width: 100%;
          background: none;
          border: none;
          border-top: 1px solid var(--ts-border-base);
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
          color: var(--ts-heading);
          font-size: 15px;
          font-weight: 400;
          font-family: inherit;
          gap: 16px;
        }
        .mf-faq-btn:last-of-type { border-bottom: 1px solid var(--ts-border-base); }
        .mf-faq-icon {
          width: 20px; height: 20px; flex-shrink: 0;
          border: 1px solid var(--ts-border-medium);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: var(--gold);
        }
        .mf-card {
          background: var(--ts-surface-card);
          border: 1px solid var(--ts-border-base);
          border-radius: 8px;
          padding: 28px;
          text-align: left;
        }
        .mf-card-featured { border-color: var(--gold); }

        /* Im Aufbau overlay */
        .mf-coming-soon-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }
        .mf-coming-soon-blur {
          filter: blur(3px);
          opacity: 0.5;
          pointer-events: none;
          user-select: none;
        }
        .mf-coming-soon-badge {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 2;
        }
        .mf-coming-soon-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ts-heading);
          background: color-mix(in srgb, var(--ts-surface-page) 90%, transparent);
          border: 1px solid var(--ts-border-medium);
          border-radius: 4px;
          padding: 12px 28px;
        }
        .mf-coming-soon-sub {
          font-size: 13px;
          color: var(--ts-text-muted);
          background: color-mix(in srgb, var(--ts-surface-page) 90%, transparent);
          padding: 6px 16px;
          border-radius: 4px;
        }

        /* Hero two-column */
        .mf-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .mf-hero-video { order: 0; }
        .mf-hero-text  { order: 0; }

        /* Free-CTA grid: Discord + Kurs nebeneinander */
        .mf-free-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }
        .mf-free-cta-grid > * {
          display: flex;
          flex-direction: column;
        }
        .mf-free-cta-cta-row {
          margin-top: auto;
        }

        /* Discord highlight section */
        .mf-discord-section {
          background: color-mix(in srgb, #5865F2 8%, transparent);
          border: 1px solid color-mix(in srgb, #5865F2 30%, transparent);
          border-radius: 8px;
          padding: 40px 32px;
          text-align: center;
        }

        /* Free-Course highlight section */
        .mf-course-section {
          background: color-mix(in srgb, var(--gold) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
          border-radius: 8px;
          padding: 40px 32px;
          text-align: center;
        }
        .mf-btn-course {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--gold);
          color: var(--primary-foreground);
          font-size: 16px;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .mf-btn-course:hover { opacity: 0.88; }

        @media (max-width: 768px) {
          .mf-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px;
          }
          /* Video zuerst auf Mobile */
          .mf-hero-video { order: -1; }
          .mf-hero-text  { order:  0; }
        }
        @media (max-width: 860px) {
          .mf-free-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 980px) and (min-width: 641px) {
          .mf-modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .mf-cta-row { flex-direction: column; }
          .mf-cta-row a { width: 100%; justify-content: center; }
          .mf-modules-grid { grid-template-columns: 1fr !important; }
          .mf-includes-grid { grid-template-columns: 1fr !important; }
          .mf-dual-cta-grid { grid-template-columns: 1fr !important; }
          .mf-discord-section,
          .mf-course-section { padding: 32px 24px; }
        }
      `}</style>

      {/* HERO — Video links oben auf Mobile, Text daneben auf Desktop */}
      <section style={{ padding: "112px 24px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="mf-hero-grid">

          {/* Text + CTAs */}
          <div className="mf-hero-text">
            <div style={{ marginBottom: 24 }}>
              <span className="mf-pill">Manuelles Trading · Ausbildung</span>
            </div>
            <h1 className="mf-hero-title" style={{ marginBottom: 28 }}>
              Lerne, wie<br />
              <span style={{ color: "var(--gold)" }}>Profis</span> wirklich<br />
              handeln.
            </h1>
            <p style={{ fontSize: 17, color: "var(--ts-text-muted)", lineHeight: 1.7, marginBottom: 36 }}>
              Kein Glück. Kein Raten. Technische Analyse, eine eigene Strategie und Live-Sessions – systematisch zum profitablen Trader.
            </p>
            <p style={{ fontSize: 13, color: "var(--ts-text-ghost)" }}>
              Schau das Video rechts – oder starte direkt kostenlos auf Telegram.
            </p>
          </div>

          {/* Video */}
          <div className="mf-hero-video">
            <YoutubeConsent videoId={VIDEO_ID} title="Trading Strategen – Manual Trading Ausbildung" />
            <p style={{ fontSize: 13, color: "var(--ts-text-ghost)", marginTop: 10, lineHeight: 1.5 }}>
              Ich erkläre dir persönlich, für wen der Kurs gemacht ist und was wir gemeinsam aufbauen.
            </p>
          </div>
        </div>
      </section>

      {/* FÜR WEN — ausgeblendet, Inhalte bleiben erhalten */}
      {false && (
        <>
          <hr className="mf-divider" />
          <section style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>
            <p className="mf-section-label" style={{ marginBottom: 32 }}>
              <span className="mf-gold-line" />Für wen ist dieser Kurs?
            </p>
            <div className="mf-tag-grid">
              <div className="mf-tag-cell"><div className="mf-tag-cell-label">Dein Level</div><div className="mf-tag-cell-val">Grundkenntnisse vorhanden – du kennst Charts, hast aber noch keine konsistente Strategie</div></div>
              <div className="mf-tag-cell"><div className="mf-tag-cell-label">Dein Ziel</div><div className="mf-tag-cell-val">Ein eigenes, regelbasiertes System entwickeln und profitabel handeln – manuell und bewusst</div></div>
              <div className="mf-tag-cell"><div className="mf-tag-cell-label">Prop Trader</div><div className="mf-tag-cell-val">Du willst Prop Firm Challenges bestehen und weißt, dass Risk Management der entscheidende Faktor ist</div></div>
              <div className="mf-tag-cell"><div className="mf-tag-cell-label">Nicht für dich wenn</div><div className="mf-tag-cell-val">Du absolute Grundlagen brauchst oder ausschließlich automatisiert handeln möchtest – EA-Seite</div></div>
            </div>
          </section>
        </>
      )}

      {/* MODULE · INHALTE · PREISE · FAQ */}
      <hr className="mf-divider" />
      <section style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>

        {/* MODULE */}
        <div style={{ marginBottom: 64 }}>
          <p className="mf-section-label" style={{ marginBottom: 12 }}><span className="mf-gold-line" />Kurs-Inhalte</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: "uppercase", marginBottom: 16, letterSpacing: "-0.01em" }}>
            6 Module. 33 Lektionen.
          </h2>
          <p style={{ fontSize: 16, color: "var(--ts-text-muted)", lineHeight: 1.7, marginBottom: 48, maxWidth: 640 }}>
            Lucas vollständige Daytrading-Strategie — vom technischen Fundament über Marktstruktur, Liquidität und Orderflow bis zur Backtesting-Session. <strong style={{ color: "var(--ts-heading)" }}>2 Std. 57 Min.</strong> komplettes System.
          </p>
          <div className="mf-modules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {modules.map((m) => (
              <div key={m.nr} style={{ borderTop: "2px solid var(--gold)", paddingTop: 24 }}>
                <div className="mf-module-nr">{m.nr}</div>
                <h3 style={{ fontSize: 18, fontWeight: 500, margin: "12px 0 10px", lineHeight: 1.3 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ts-text-muted)", lineHeight: 1.6, marginBottom: 20 }}>{m.desc}</p>
                <div>{m.items.map((item) => <div key={item} className="mf-check-item">{item}</div>)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* WAS DU BEKOMMST */}
        <div style={{ marginBottom: 64 }}>
          <div className="mf-includes-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <p className="mf-section-label" style={{ marginBottom: 16 }}><span className="mf-gold-line" />Im Kurs enthalten</p>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1 }}>
                Alles, was du<br />brauchst – nichts,<br />was du nicht brauchst.
              </h2>
            </div>
            <div>{includes.map((item) => <div key={item} className="mf-check-item">{item}</div>)}</div>
          </div>
        </div>

        {/* SALES — direkter Kurs-Start */}
        <div id="kauf">
          <SalesCard />
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <TestimonialsSection />

      {/* DUAL FREE-CTA — Telegram + Kostenloser Kurs */}
      <hr className="mf-divider" style={{ marginTop: 0 }} />
      <section style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="mf-free-cta-grid">

          {/* Telegram */}
          <div style={{
            background: "color-mix(in srgb, #29A9EB 8%, transparent)",
            border: "1px solid color-mix(in srgb, #29A9EB 30%, transparent)",
            borderRadius: 8,
            padding: "40px 32px",
            textAlign: "center",
          }}>
            <p className="mf-section-label" style={{ marginBottom: 16, color: "#6ec6f5" }}>
              <span style={{ display: "inline-block", width: 40, height: 2, background: "#29A9EB", verticalAlign: "middle", marginRight: 10 }} />
              Community
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 16 }}>
              Starte kostenlos<br />auf unserem Telegram.
            </h2>
            <p style={{ fontSize: 15, color: "var(--ts-text-muted)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 28px" }}>
              Trading-Signale, Chart-Analysen und Community-Updates – gratis und dauerhaft.
            </p>
            <div className="mf-free-cta-cta-row">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#29A9EB", color: "#fff",
                fontSize: 16, fontWeight: 500, padding: "16px 32px",
                borderRadius: 4, border: "none", cursor: "pointer",
                textDecoration: "none", transition: "opacity 0.2s", whiteSpace: "nowrap",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.845l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.714z" />
                </svg>
                Telegram beitreten
              </a>
              <p style={{ fontSize: 12, color: "var(--ts-text-ghost)", marginTop: 14 }}>
                Sofortiger Zugang · Kein Kauf nötig
              </p>
            </div>
          </div>

          {/* Kostenloser Videokurs */}
          <div className="mf-course-section">
            <p className="mf-section-label" style={{ marginBottom: 16 }}>
              <span className="mf-gold-line" />
              Kostenloser Videokurs
            </p>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 16 }}>
              Daytrading<br />Starter Kurs.
            </h2>
            <p style={{ fontSize: 15, color: "var(--ts-text-muted)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 28px" }}>
              In 12 Videos zeigt Luca dir die Strategie, die er täglich am Markt nutzt – Strategien verstehen, Chancen erkennen, Risiken managen.
            </p>
            <div className="mf-free-cta-cta-row">
              <a href={COURSE_URL} className="mf-btn-course" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Jetzt kostenlos starten
              </a>
              <p style={{ fontSize: 12, color: "var(--ts-text-ghost)", marginTop: 14 }}>
                12 Videos · Sofort verfügbar · Kostenfrei
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
