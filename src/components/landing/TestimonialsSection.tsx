"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import AndyImg from "@/assets/testimonials/Andy_Ost.jpg";
import MichaelImg from "@/assets/testimonials/Michael_Brause.jpg";
import EduardImg from "@/assets/testimonials/Eduard_Wolmann.jpg";
import SandyImg from "@/assets/testimonials/Sandy_Kremer-Kuehn.jpg";
import DimiImg from "@/assets/testimonials/Dimi_Korman.jpg";
import MarkusImg from "@/assets/testimonials/Markus_Hentschel.jpg";
import ClaudiaImg from "@/assets/testimonials/Claudia_Pleus-Volckmann.jpg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  avatar?: StaticImageData;
  trustpilot?: boolean;
}

const testimonials: Testimonial[] = [
  { id: 1, quote: "Es ist fantastisch! Von Anfang an war ich begeistert von der hohen Qualität der Ausbildung. Die Coaches sind nicht nur extrem kompetent, sondern auch unglaublich motiviert und hilfsbereit.", name: "Andy", avatar: AndyImg },
  { id: 2, quote: "Die Ersten Live Tradings haben mich voll von euch überzeugt. Auch die guten Unterlagen zu den einzelnen Leveln und natürlich der Persönliche Kontakt zu jedem aus eurer Familie.", name: "Michael", avatar: MichaelImg },
  { id: 3, quote: "Ich bin seit 3 Monaten bei euch mit an Bord und kann nur sagen, dass sich meine Erwartungen in jeder Hinsicht übertroffen haben! Der Support ist erstklassig – jede meiner Fragen wurde schnell und kompetent beantwortet, sodass ich mich stets gut betreut fühle.", name: "Eduard", avatar: EduardImg },
  { id: 4, quote: "Egal ob Anfänger oder Fortgeschritten - jeder wird hier abgeholt! Auch wenn du dich als Profi fühlst, hier bekommst du trotzdem einzigartigen Mehrwert geliefert.", name: "Sandy", avatar: SandyImg },
  { id: 5, quote: "Was diese Coaches besonders auszeichnet, ist ihr Engagement für den Erfolg ihrer Schüler. Sie nehmen sich die Zeit, individuelle Fragen zu beantworten, Feedback zu geben und maßgeschneiderte Lösungen für meine spezifischen Herausforderungen anzubieten.", name: "Dimi", avatar: DimiImg },
  { id: 6, quote: "Das Live-Trading hat mich um vieles nach vorne gebracht! Ich habe durch die Trading Strategen viel Sicherheit bekommen und habe schon viele erfolgreiche Trades setzen können!", name: "Markus", avatar: MarkusImg },
  { id: 7, quote: "Obwohl ich noch am Anfang meiner Reise stehe, fühle ich mich hier äußerst wohl. Es ist offensichtlich, dass jeder Einzelne ernst genommen wird!", name: "Claudia", avatar: ClaudiaImg },
  { id: 8, quote: "Der Gamechanger im Trading. Ein absolut geniales Team, wo man wirklich mit allen in Kontakt steht, und von denen niemand alleine gelassen wird, auf eine Art und Weise, die ich so noch nicht kennengelernt habe.", name: "Chris", trustpilot: true },
  { id: 9, quote: "Die Trading Strategen sind mehr als nur ein Team – sie sind eine echte Unterstützung auf meinem Weg. Sie kümmern sich aufrichtig um ihre Schüler, stehen immer an unserer Seite und führen uns Schritt für Schritt zum Erfolg.", name: "Swetlana", trustpilot: true },
  { id: 10, quote: "Hier ist man rundum super aufgehoben. Ich bin jetzt seit einem halben Jahr bei den Trading Strategen und muss sagen, dass dies definitiv eine der besten - wenn nicht die beste Entscheidung meines Lebens war.", name: "Mirjam", trustpilot: true },
];

function getVisibleCount(width: number): number {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isHovered) setIsAutoPlaying(true);
    }, 8000);
  }, [isHovered]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) { setDirection(-1); return Math.max(0, prev - 1); }
      setDirection(1);
      return Math.min(prev + 1, maxIndex);
    });
    pauseAutoPlay();
  }, [maxIndex, pauseAutoPlay]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) { setDirection(1); return Math.min(1, maxIndex); }
      setDirection(-1);
      return Math.max(prev - 1, 0);
    });
    pauseAutoPlay();
  }, [maxIndex, pauseAutoPlay]);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) { setDirection(-1); return Math.max(0, prev - 1); }
        if (prev <= 0 && direction === -1) { setDirection(1); return Math.min(1, maxIndex); }
        return prev + direction;
      });
    }, 4000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, isHovered, maxIndex, direction]);

  useEffect(() => () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  }, []);

  const cardWidthPct = 100 / visibleCount;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40 && currentIndex < maxIndex) goNext();
    else if (diff < -40 && currentIndex > 0) goPrev();
    touchStartX.current = null;
  };

  return (
    <section
      id="bewertungen"
      className="py-32 lg:py-48"
      onMouseEnter={() => { setIsHovered(true); setIsAutoPlaying(false); }}
      onMouseLeave={() => { setIsHovered(false); setIsAutoPlaying(true); }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header + Nav buttons */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs font-medium text-[hsl(43_48%_59%)] tracking-widest uppercase">
              Bewertungen
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[hsl(0_0%_90%)] mt-5">
              Was unsere Mitglieder sagen
            </h2>
          </div>

          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-[hsl(0_0%_14%)] flex items-center justify-center hover:bg-[hsl(0_0%_8%)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Zurück"
            >
              <ChevronLeft className="w-5 h-5 text-[hsl(0_0%_65%)]" />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-[hsl(0_0%_14%)] flex items-center justify-center hover:bg-[hsl(0_0%_8%)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Weiter"
            >
              <ChevronRight className="w-5 h-5 text-[hsl(0_0%_65%)]" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPct}%)`,
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="px-2.5 shrink-0"
                style={{ width: `${cardWidthPct}%` }}
              >
                <div className="rounded-2xl border border-[hsl(0_0%_10%)] bg-[hsl(0_0%_3%)] p-8 h-full flex flex-col justify-between select-none">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[hsl(43_48%_59%/0.1)] border border-[hsl(43_48%_59%/0.2)] flex items-center justify-center mb-6">
                      <Quote className="w-5 h-5 text-[hsl(43_48%_59%)]" />
                    </div>
                    <p className="text-base text-[hsl(0_0%_72%)] leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    {t.trustpilot && (
                      <a
                        href="https://www.trustpilot.com/review/trading-strategen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[hsl(43_48%_59%)] hover:underline mt-3"
                      >
                        Weiterlesen auf Trustpilot
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[hsl(0_0%_9%)]">
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt={`${t.name} — Trading Strategen Mitglied`}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-12 h-12"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[hsl(43_48%_59%/0.15)] border border-[hsl(43_48%_59%/0.2)] flex items-center justify-center text-[hsl(43_48%_65%)] font-semibold text-lg flex-shrink-0">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <p className="text-sm font-semibold text-[hsl(0_0%_82%)]">
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center mt-10 gap-1.5">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); pauseAutoPlay(); }}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-5 h-2 bg-[hsl(43_48%_59%)]"
                  : "w-2 h-2 bg-[hsl(0_0%_18%)] hover:bg-[hsl(0_0%_30%)]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
