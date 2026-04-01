"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Was ist Trading Strategen?",
    answer:
      "Trading Strategen ist ein umfassendes Ökosystem für modernes Trading. Es verbindet KI-gestützte Entwicklung, Expert Advisors, Analytics, Copy-Trading, Ausbildung und Community in einer integrierten Plattform.",
  },
  {
    question: "Brauche ich Programmierkenntnisse?",
    answer:
      "Nein. Mit Velgo.AI kannst du Expert Advisors ohne Programmierkenntnisse erstellen. Der KI-gestützte Editor übersetzt deine Strategien direkt in ausführbare Handelslogik.",
  },
  {
    question: "Welche Broker und Plattformen werden unterstützt?",
    answer:
      "Trading Strategen arbeitet mit MetaTrader 5 (MT5). Die Expert Advisors und der Copy-Master sind vollständig auf MT5 optimiert.",
  },
  {
    question: "Kann ich den Service kostenlos testen?",
    answer:
      "Ja. Der Free-Plan gibt dir kostenlosen Zugang zu grundlegenden Features wie dem TS Trade-Calculator, dem Range-Breakout Light EA, Analytics und der Community.",
  },
  {
    question: "Was ist der Copy-Master?",
    answer:
      "Der Copy-Master ermöglicht es dir, mehrere Handelskonten zentral von einer Oberfläche zu steuern und Positionen zu synchronisieren — ohne VPS, direkt in der Cloud.",
  },
  {
    question: "Kann ich jederzeit upgraden oder kündigen?",
    answer:
      "Ja. Du kannst jederzeit zwischen den Plänen wechseln oder kündigen. Es gibt keine langfristigen Vertragsbindungen.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[hsl(43_48%_59%)] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(0_0%_90%)]">
            Häufig gestellte Fragen
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[hsl(43_48%_59%/0.3)] bg-[hsl(43_48%_59%/0.03)]"
                    : "border-[hsl(0_0%_12%)] bg-[hsl(0_0%_4%)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[hsl(0_0%_82%)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[hsl(0_0%_40%)] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[hsl(43_48%_59%)]" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-48" : "max-h-0"
                  }`}
                  style={{ transition: "max-height 400ms ease" }}
                >
                  <p className="px-5 pb-5 text-sm text-[hsl(0_0%_55%)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
