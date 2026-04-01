import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "hsl(43 48% 59% / 0.06)" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[hsl(0_0%_90%)]">
            Bereit für ein{" "}
            <span className="text-gradient-gold">
              professionelleres Trading-System?
            </span>
          </h2>

          <p className="text-[hsl(0_0%_50%)] max-w-md leading-relaxed">
            Schließe dich Tradern an, die auf ein durchdachtes Gesamtsystem
            setzen.
          </p>

          <a
            href="#preise"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold bg-[hsl(43_48%_59%)] text-[hsl(0_0%_2%)] hover:bg-[hsl(43_48%_65%)] transition-colors duration-200"
          >
            Jetzt starten
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
