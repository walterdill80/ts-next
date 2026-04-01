import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TeamSection from "@/components/landing/TeamSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ErrorBoundary>
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TestimonialsSection />
          <TeamSection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
