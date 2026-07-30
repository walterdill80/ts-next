import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/TS_Logo_White.png";
import ThemeToggle from "@/components/landing/ThemeToggle";
import ManualFunnelPage from "@/components/landing/ManualFunnelPage";

export const metadata: Metadata = {
  title: "Manual Trading Ausbildung — Trading Strategen",
  description:
    "Lerne manuelles Trading von Grund auf: Technische Analyse, regelbasierte Strategie-Entwicklung und Live-Sessions. Einmaliger Kauf, lebenslanger Zugang.",
  metadataBase: new URL("https://trading-strategen.com"),
  alternates: {
    canonical: "/start/manual",
  },
  openGraph: {
    type: "website",
    url: "https://trading-strategen.com/start/manual",
    title: "Manual Trading Ausbildung — Trading Strategen",
    description:
      "Technische Analyse, eigene Strategie und Live-Sessions – systematisch zum profitablen Trader.",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manual Trading Ausbildung — Trading Strategen",
    description:
      "Technische Analyse, eigene Strategie und Live-Sessions – systematisch zum profitablen Trader.",
  },
};

export default function ManualPage() {
  return (
    <>
      {/* Minimale Navigation — Logo, ThemeToggle, Jetzt starten */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--ts-border-faint)]"
        style={{ backgroundColor: "var(--ts-nav-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Image src={logo} alt="Trading Strategen" height={40} priority className="ts-logo w-auto" />
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#kauf"
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "#000",
                }}
              >
                Jetzt starten
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ManualFunnelPage />
      </main>
      {/* Footer — wie Startseite, ohne Nav-Links */}
      <footer className="border-t border-[var(--ts-border-faint)] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top: Logo + Social */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-10">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <Image src={logo} alt="Trading Strategen" height={48} className="ts-logo w-auto" />
              <p className="text-xs text-[var(--ts-text-ghost)]">
                Strategie. Software. Automation. Education.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { label: "Telegram", href: "https://t.me/tradingsignaleSP500", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.845l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.714z" /></svg> },
                { label: "Discord", href: "https://discord.gg/tradingstrategen", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.013.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg> },
                { label: "Instagram", href: "https://www.instagram.com/trading_strategen/", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg> },
                { label: "TikTok", href: "https://www.tiktok.com/@trading_strategen", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.43a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1-.81z" /></svg> },
                { label: "YouTube", href: "https://www.youtube.com/@Trading-Strategen", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="text-[var(--ts-text-ghost)] hover:text-[var(--gold)] transition-colors duration-200">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Risikohinweis */}
          <div className="mb-8 pt-8 border-t border-[var(--ts-border-faint)]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--ts-text-ghost)] mb-3">
              Risikohinweis
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--ts-text-trace)]">
              Der Handel mit Finanzinstrumenten, insbesondere Derivaten, Hebelprodukten und CFDs, ist mit erheblichen Risiken verbunden und kann zum vollständigen Verlust des eingesetzten Kapitals führen. Vergangene Ergebnisse und Renditen sind keine Garantie für zukünftige Wertentwicklungen. Jeder Anleger trägt das Risiko seiner eigenen Entscheidungen.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--ts-text-trace)] mt-2">
              Die auf dieser Seite angebotenen Inhalte dienen ausschließlich der allgemeinen Information und Bildung. Sie stellen keine individuelle Anlageberatung, Vermögensverwaltung oder Aufforderung zum Kauf oder Verkauf von Finanzinstrumenten dar. Alle Inhalte wurden mit größter Sorgfalt erstellt, ersetzen jedoch nicht die Beratung durch einen zugelassenen Finanzberater.
            </p>
            <p className="text-[11px] leading-relaxed text-[var(--ts-text-trace)] mt-2">
              Traden Sie nur mit Kapital, dessen Verlust Sie sich leisten können. Informieren Sie sich vor dem Handel über die steuerlichen und rechtlichen Rahmenbedingungen in Ihrem Land.
            </p>
          </div>

          {/* Bottom: Legal + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--ts-border-faint)]">
            <div className="flex items-center gap-5">
              <Link href="/impressum" className="text-xs text-[var(--ts-text-subtle)] hover:text-[var(--ts-text-nav)] transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-xs text-[var(--ts-text-subtle)] hover:text-[var(--ts-text-nav)] transition-colors">Datenschutz</Link>
            </div>
            <p className="text-xs text-[var(--ts-text-ghost)]">
              © {new Date().getFullYear()} Trading Strategen. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
