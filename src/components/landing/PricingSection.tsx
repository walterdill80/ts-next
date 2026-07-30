"use client";

import { useState } from "react";

const plans = [
  { id: "free", name: "Free", price: 0, popular: false },
  { id: "essential", name: "Essential", price: 29, popular: false },
  { id: "plus", name: "Plus", price: 59, popular: true },
  { id: "premium", name: "Premium", price: 99, popular: false },
];

type Val = string | boolean;

const featureSections: {
  title: string;
  rows: { label: string; values: Val[] }[];
}[] = [
  {
    title: "Velgo.AI – EA Builder KI",
    rows: [
      { label: "Projekte", values: ["–", "1 Projekt", "5 Projekte", "Unbegrenzt"] },
      { label: "Credits", values: ["–", "100", "200", "300"] },
      { label: "Tutorials & Vorlagen", values: [false, true, true, true] },
      { label: ".ex5-Datei export", values: [false, true, true, true] },
      { label: ".mq5 & .mqh export", values: [false, false, true, true] },
      { label: "Erweiterter Editor", values: [false, false, true, true] },
      { label: "Individuelles Branding", values: [false, false, false, true] },
      { label: "Velgo.AI Community", values: [false, true, true, true] },
    ],
  },
  {
    title: "TS – Expert Advisor MT5",
    rows: [
      { label: "TS Trade-Calculator", values: [true, true, true, true] },
      { label: "TS Range-Breakout", values: ["Light", "Pro", "Pro", "Pro"] },
      { label: "Alle vollautom. EAs", values: [false, false, true, true] },
      { label: "Alle halbautom. EAs", values: [false, false, true, true] },
    ],
  },
  {
    title: "Strategie & Analytics",
    rows: [
      { label: "Historyimport & Analyse", values: [true, true, true, true] },
      { label: "Analytics teilen", values: [true, true, true, true] },
      { label: "Montecarlo Simulator", values: [true, true, true, true] },
      { label: "Portfoliotrading-Simulator", values: [false, false, true, true] },
    ],
  },
  {
    title: "Copy-Master",
    rows: [
      { label: "Konten", values: ["–", "2", "6", "12"] },
      { label: "Kein VPS nötig", values: [false, true, true, true] },
      { label: "Online MT5 bedienen", values: [false, true, true, true] },
      { label: "Weitere Konten hinzubuchen", values: [false, false, false, true] },
    ],
  },
  {
    title: "Education",
    rows: [
      { label: "Trading Masterclass", values: [true, true, true, true] },
      { label: "EA Masterclass", values: [true, true, true, true] },
    ],
  },
  {
    title: "Community",
    rows: [{ label: "TS Discord Community", values: [true, true, true, true] }],
  },
];

function CellValue({ value, popular }: { value: Val; popular?: boolean }) {
  if (typeof value === "string") {
    return (
      <span
        className={`text-[13px] font-medium ${
          value === "–"
            ? "text-[var(--ts-text-trace)]"
            : popular
            ? "text-[var(--gold-bright)]"
            : "text-[var(--ts-text-body)]"
        }`}
      >
        {value}
      </span>
    );
  }
  if (value) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mx-auto">
        <circle cx="8" cy="8" r="7.5" stroke="var(--gold)" strokeWidth="1" />
        <path
          d="M4.5 8l2.5 2.5 4.5-4.5"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mx-auto">
      <circle cx="8" cy="8" r="7.5" stroke="var(--ts-border-strong)" strokeWidth="1" />
      <path
        d="M5.5 10.5l5-5M10.5 10.5l-5-5"
        stroke="var(--ts-border-strong)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openMobile, setOpenMobile] = useState<string | null>("plus");

  const getPrice = (p: number) =>
    p === 0 ? 0 : billing === "yearly" ? Math.round(p * 0.83) : p;

  return (
    <section id="preise" className="py-32 lg:py-48">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-[var(--gold)] tracking-[0.15em] uppercase">
            Preise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--ts-heading)] mt-4">
            Einfache Preise.
          </h2>
          <p className="text-[var(--ts-text-subtle)] mt-2 text-[15px]">
            Jederzeit upgraden oder kündigen.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-[var(--ts-surface-item)] border border-[var(--ts-border-base)] rounded-full p-1 gap-1 mt-7">
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-[7px] rounded-full text-[13px] font-medium transition-all duration-200 ${
                  billing === b
                    ? "bg-[var(--gold)] text-[hsl(0_0%_98%)]"
                    : "text-[var(--ts-text-subtle)] hover:text-[var(--ts-text-nav)]"
                }`}
              >
                {b === "monthly" ? "Monatlich" : "Jährlich"}
                {b === "yearly" && (
                  <span
                    className={`ml-1.5 text-[11px] font-bold ${
                      billing === "yearly"
                        ? "text-[hsl(0_0%_98%)]"
                        : "text-[var(--gold)]"
                    }`}
                  >
                    -17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 border ${
                plan.popular
                  ? "bg-[var(--ts-surface-card)] border-[var(--gold)]"
                  : "bg-[var(--ts-surface-card)] border-[var(--ts-border-base)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[hsl(0_0%_98%)] text-[10px] font-bold px-3 py-[3px] rounded-full tracking-[0.1em] uppercase whitespace-nowrap">
                  Beliebt
                </div>
              )}
              <div
                className={`text-[11px] font-bold tracking-[0.12em] uppercase mb-3 ${
                  plan.popular
                    ? "text-[var(--gold-bright)]"
                    : "text-[var(--ts-text-subtle)]"
                }`}
              >
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-[32px] font-bold ${
                    plan.popular
                      ? "text-[var(--gold-bright)]"
                      : "text-[var(--ts-heading)]"
                  }`}
                >
                  {plan.price === 0 ? "Gratis" : `${getPrice(plan.price)}€`}
                </span>
                {plan.price > 0 && (
                  <span className="text-[13px] text-[var(--ts-text-dim)]">/Mo</span>
                )}
              </div>
              {billing === "yearly" && plan.price > 0 && (
                <div className="text-[11px] text-[var(--gold)] mt-0.5">
                  statt {plan.price}€ /Mo
                </div>
              )}
              <button
                className={`w-full mt-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-[var(--gold)] text-[hsl(0_0%_98%)] hover:opacity-90"
                    : "border border-[var(--ts-border-medium)] text-[var(--ts-text-muted)] hover:text-[var(--ts-text-nav)] hover:border-[var(--ts-border-strong)]"
                }`}
              >
                {plan.price === 0 ? "Kostenlos starten" : "Jetzt starten"}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table — Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[700px]">
            {featureSections.map((section, si) => (
              <div key={si} className="mb-1">
                <div className="px-5 pt-5 pb-2">
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--gold)]">
                    {section.title}
                  </span>
                </div>
                {section.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className={`grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] gap-4 px-5 py-2.5 rounded-lg items-center ${
                      ri % 2 === 0 ? "bg-[var(--ts-surface-item)]" : ""
                    }`}
                  >
                    <div className="text-[13px] text-[var(--ts-text-muted)]">
                      {row.label}
                    </div>
                    {row.values.map((v, vi) => (
                      <div key={vi} className="flex justify-center items-center">
                        <CellValue value={v} popular={plans[vi].popular} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom price summary */}
            <div className="grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] gap-4 px-5 py-5 mt-4 border-t border-[var(--ts-border-faint)] items-center">
              <div />
              {plans.map((plan) => (
                <div key={plan.id} className="text-center">
                  <div
                    className={`text-lg font-bold ${
                      plan.popular
                        ? "text-[var(--gold-bright)]"
                        : "text-[var(--ts-text-strong)]"
                    }`}
                  >
                    {plan.price === 0 ? "Gratis" : `${getPrice(plan.price)}€`}
                  </div>
                  {plan.price > 0 && (
                    <div className="text-[11px] text-[var(--ts-text-ghost)]">
                      /Monat
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {plans.map((plan, planIndex) => {
            const isOpen = openMobile === plan.id;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl border overflow-hidden ${
                  plan.popular
                    ? "border-[var(--gold)] bg-[var(--ts-surface-card)]"
                    : "border-[var(--ts-border-base)] bg-[var(--ts-surface-card)]"
                }`}
              >
                <button
                  onClick={() => setOpenMobile(isOpen ? null : plan.id)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <div>
                    <span
                      className={`text-sm font-bold ${
                        plan.popular
                          ? "text-[var(--gold-bright)]"
                          : "text-[var(--ts-text-strong)]"
                      }`}
                    >
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="ml-2 text-[10px] font-bold bg-[hsl(43_48%_59%/0.15)] text-[var(--gold-bright)] px-2 py-0.5 rounded-full uppercase">
                        Beliebt
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg font-bold ${
                        plan.popular
                          ? "text-[var(--gold-bright)]"
                          : "text-[var(--ts-text-strong)]"
                      }`}
                    >
                      {plan.price === 0
                        ? "Gratis"
                        : `${getPrice(plan.price)}€/Mo`}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[var(--ts-text-dim)] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 space-y-1">
                    {featureSections.map((section, si) => (
                      <div key={si}>
                        <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--gold)] opacity-70 mb-2 mt-4 first:mt-0">
                          {section.title}
                        </div>
                        {section.rows.map((row, ri) => {
                          const value = row.values[planIndex];
                          const included =
                            value === true ||
                            (typeof value === "string" && value !== "–");
                          return (
                            <div
                              key={ri}
                              className={`flex items-center justify-between py-2 ${
                                !included ? "opacity-30" : ""
                              }`}
                            >
                              <span className="text-[12px] text-[var(--ts-text-muted)]">
                                {row.label}
                              </span>
                              <div className="ml-2 shrink-0">
                                <CellValue
                                  value={value}
                                  popular={plan.popular}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
