import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/TS_Logo_White.png";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Trading Strategen",
  description: "Datenschutzerklärung von Trading Strategen.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-[hsl(0_0%_60%)] text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Allgemeine Hinweise
            </h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mb-3">
              <strong className="text-[hsl(0_0%_75%)]">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p className="mb-3">
              <strong className="text-[hsl(0_0%_75%)]">
                Wie erfassen wir Ihre Daten?
              </strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
              in ein Kontaktformular eingeben.
              <br />
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="mb-3">
              <strong className="text-[hsl(0_0%_75%)]">
                Wofür nutzen wir Ihre Daten?
              </strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p>
              <strong className="text-[hsl(0_0%_75%)]">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn
              Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              Außerdem haben Sie das Recht, unter bestimmten Umständen die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* 2 Hosting */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              2. Hosting
            </h2>
            <p className="mb-3">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Alfahosting
            </h3>
            <p className="mb-3">
              Anbieter ist die Alfahosting GmbH, Ankerstraße 3b, 06108 Halle
              (Saale) (nachfolgend Alfahosting). Wenn Sie unsere Website
              besuchen, erfasst Alfahosting verschiedene Logfiles inklusive
              Ihrer IP-Adressen.
            </p>
            <p className="mb-3">
              Details entnehmen Sie der Datenschutzerklärung von Alfahosting:{" "}
              <a
                href="https://alfahosting.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(43_48%_59%)] hover:underline"
              >
                https://alfahosting.de/datenschutz/
              </a>
              .
            </p>
            <p className="mb-3">
              Die Verwendung von Alfahosting erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
              einer möglichst zuverlässigen Darstellung unserer Website. Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit.
              a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem
              oben genannten Anbieter geschlossen.
            </p>
          </section>

          {/* 3 Allgemeine Hinweise */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Datenschutz
            </h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind
              Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
              <br />
              <br />
              Walter Dill
              <br />
              Schönebeck 16
              <br />
              31241 Ilsede
              <br />
              <br />
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
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Speicherdauer
            </h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
              für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
              Gründe.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Widerspruch gegen Werbe-E-Mails
            </h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          {/* 4 Datenerfassung */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Server-Log-Dateien
            </h3>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p className="mb-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der technisch fehlerfreien Darstellung und der
              Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Anfrage per E-Mail oder Telefon
            </h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
          </section>

          {/* 5 Soziale Medien */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              5. Soziale Medien
            </h2>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Links zu sozialen Netzwerken
            </h3>
            <p className="mb-4">
              Auf dieser Website sind Links zu folgenden sozialen Netzwerken
              eingebunden: Instagram, YouTube, TikTok, Telegram, Discord und
              Spotify. Die Links sind durch die jeweiligen Icons der Anbieter
              gekennzeichnet.
            </p>
            <p>
              Beim Aufrufen unserer Website werden durch diese Links keine
              Daten an die Betreiber der sozialen Netzwerke übertragen. Eine
              Datenübertragung findet erst statt, wenn Sie aktiv auf einen der
              Links klicken und zur jeweiligen Plattform weitergeleitet werden.
            </p>
          </section>

          {/* 6 Plugins */}
          <section>
            <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-4">
              6. Plugins und Tools
            </h2>
            <h3 className="text-base font-semibold text-[hsl(0_0%_72%)] mb-2">
              Google Fonts (lokales Hosting)
            </h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts, die von Google bereitgestellt werden.
              Die Google Fonts sind lokal installiert. Eine Verbindung zu
              Servern von Google findet dabei nicht statt.
            </p>
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(43_48%_59%)] hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(43_48%_59%)] hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-[hsl(0_0%_30%)] pt-4 border-t border-[hsl(0_0%_10%)]">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(43_48%_59%)] transition-colors"
            >
              https://www.e-recht24.de
            </a>
          </p>
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
              className="text-xs text-[hsl(0_0%_40%)] hover:text-[hsl(0_0%_65%)] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-[hsl(43_48%_59%)]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
