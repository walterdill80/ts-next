import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "hsl(43 48% 59% / 0.03)" }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(43_48%_59%/0.2)] bg-[hsl(43_48%_59%/0.05)] mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(43_48%_59%)] animate-pulse" />
          <span className="text-xs font-medium text-[hsl(43_48%_65%)] tracking-wide">
            Dein Trading Ökosystem
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight">
          <span className="text-[hsl(0_0%_90%)]">Strategie. Software.</span>
          <br />
          <span className="text-gradient-gold">Automation. Education.</span>
        </h1>

        {/* Subline */}
        <p className="mt-8 text-lg sm:text-xl text-[hsl(0_0%_50%)] max-w-2xl mx-auto leading-relaxed">
          Tools, EAs, Analytics, Copy-Master, Education und Community — in einer
          abgestimmten Lösung.
        </p>

        <p className="mt-3 text-sm text-[hsl(0_0%_30%)]">
          Ein System. Eine Plattform.
        </p>

        {/* Single CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#preise"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[hsl(43_48%_59%)] text-[hsl(0_0%_2%)] font-semibold text-sm hover:bg-[hsl(43_48%_65%)] transition-all duration-300"
          >
            Preise ansehen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Dashboard Mockup — below headline */}
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 mt-20 relative z-10">
        <HeroVisual />
      </div>
    </section>
  );
}
