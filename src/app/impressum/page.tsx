import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/TS_Logo_White.png";

export const metadata: Metadata = {
  title: "Impressum — Trading Strategen",
  description: "Impressum von Trading Strategen.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Nav */}
      <header className="border-b border-[hsl(0_0%_10%)] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/">
            <Image src={logo} alt="Trading Strategen" height={36} />
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full">
        <h1 className="text-3xl font-bold text-[hsl(0_0%_90%)] mb-10">
          Impressum
        </h1>

        <div className="prose-custom space-y-8 text-[hsl(0_0%_60%)] text-sm leading-relaxed">
          {/* Angaben */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Trading Strategen
              <br />
              Walter Dill
              <br />
              Schönebeck 16
              <br />
              31241 Ilsede
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: +49 176 43437275
              <br />
              E-Mail:{" "}
              <a
                href="mailto:trading.strategen@gmail.com"
                className="text-[hsl(43_48%_59%)] hover:underline"
              >
                trading.strategen@gmail.com
              </a>
            </p>
          </section>

          {/* Umsatzsteuer */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE267058861
            </p>
          </section>

          {/* Verantwortlich */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Walter Dill
              <br />
              Schönebeck 16
              <br />
              31241 Ilsede
            </p>
          </section>

          {/* EU Streitschlichtung */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(43_48%_59%)] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-lg font-semibold text-[hsl(0_0%_80%)] mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[hsl(0_0%_10%)] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 items-center justify-between">
          <Link
            href="/"
            className="text-xs text-[hsl(0_0%_40%)] hover:text-[hsl(0_0%_65%)] transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="text-xs text-[hsl(43_48%_59%)]"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-[hsl(0_0%_40%)] hover:text-[hsl(0_0%_65%)] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
