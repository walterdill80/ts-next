import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trading Strategen — Strategie. Software. Automation. Education.",
  description:
    "Trading Strategen verbindet Trading-Ausbildung, Expert Advisors, MT5-Automation und eine starke Community. Strategie. Software. Automation. Education.",
  metadataBase: new URL("https://trading-strategen.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://trading-strategen.com/",
    title: "Trading Strategen — Strategie. Software. Automation. Education.",
    description:
      "Trading Strategen verbindet Trading-Ausbildung, Expert Advisors, MT5-Automation und eine starke Community. Strategie. Software. Automation. Education.",
    locale: "de_DE",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fee4bca6-ad47-477c-a0ba-44af7d0cd0ad/id-preview-e98d313d--14455d88-bb61-45b7-be93-d79b73a24eac.lovable.app-1773739816556.png",
        width: 1200,
        height: 630,
        alt: "Trading Strategen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Strategen — Strategie. Software. Automation. Education.",
    description:
      "Trading Strategen verbindet Trading-Ausbildung, Expert Advisors, MT5-Automation und eine starke Community. Strategie. Software. Automation. Education.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fee4bca6-ad47-477c-a0ba-44af7d0cd0ad/id-preview-e98d313d--14455d88-bb61-45b7-be93-d79b73a24eac.lovable.app-1773739816556.png",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trading Strategen",
  url: "https://trading-strategen.com",
  logo: "https://trading-strategen.com/favicon.png",
  description:
    "Trading Strategen verbindet Technologie, Strategien, Analyse, Automatisierung und Ausbildung in einem professionellen Trading-Ökosystem.",
  sameAs: [
    "https://www.instagram.com/trading_strategen/",
    "https://www.youtube.com/@Trading-Strategen",
    "https://www.tiktok.com/@trading_strategen",
    "https://discord.com/invite/tradingstrategen",
    "https://t.me/tradingsignaleSP500",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Trading Strategen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading Strategen ist ein umfassendes Ökosystem für modernes Trading. Es verbindet KI-gestützte Entwicklung, Expert Advisors, Analytics, Copy-Trading, Ausbildung und Community in einer integrierten Plattform.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich Programmierkenntnisse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Mit Velgo.AI kannst du Expert Advisors ohne Programmierkenntnisse erstellen. Der KI-gestützte Editor übersetzt deine Strategien direkt in ausführbare Handelslogik.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Broker und Plattformen werden unterstützt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading Strategen arbeitet mit MetaTrader 5 (MT5). Die Expert Advisors und der Copy-Master sind vollständig auf MT5 optimiert.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich den Service kostenlos testen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Der Free-Plan gibt dir kostenlosen Zugang zu grundlegenden Features wie dem TS Trade-Calculator, dem Range-Breakout Light EA, Analytics und der Community.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Copy-Master?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Copy-Master ermöglicht es dir, mehrere Handelskonten zentral von einer Oberfläche zu steuern und Positionen zu synchronisieren — ohne VPS, direkt in der Cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich jederzeit upgraden oder kündigen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du kannst jederzeit zwischen den Plänen wechseln oder kündigen. Es gibt keine langfristigen Vertragsbindungen.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <head>
        {/* DEBUG: eruda mobile console — remove after debugging */}
        <script src="//cdn.jsdelivr.net/npm/eruda" />
        <script dangerouslySetInnerHTML={{ __html: "eruda.init();" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
