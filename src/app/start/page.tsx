import type { Metadata } from "next";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import StartHubPage from "@/components/landing/StartHubPage";

export const metadata: Metadata = {
  title: "Starten — Trading Strategen",
  description:
    "Wähle deinen Weg: Manuelles Trading, automatisierte EAs mit Velgo.AI, VIP-Signale oder der FK-Masterplan. Alles in einem Ökosystem.",
  metadataBase: new URL("https://trading-strategen.com"),
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    type: "website",
    url: "https://trading-strategen.com/start",
    title: "Starten — Trading Strategen",
    description:
      "Strategie. Software. Automation. Education. Wähle deinen Weg im Trading-Ökosystem.",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starten — Trading Strategen",
    description:
      "Strategie. Software. Automation. Education. Wähle deinen Weg im Trading-Ökosystem.",
  },
};

export default function StartPage() {
  return (
    <>
      <Navigation />
      <main>
        <StartHubPage />
      </main>
      <Footer />
    </>
  );
}
