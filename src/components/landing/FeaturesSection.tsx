"use client";

import { motion } from "framer-motion";
import {
  Bot,
  TrendingUp,
  BarChart3,
  Copy,
  GraduationCap,
  Users,
} from "lucide-react";

const features = [
  {
    id: "velgo",
    label: "KI-GESTÜTZTE ENTWICKLUNG",
    title: "Velgo.AI",
    description:
      "Erstelle, optimiere und teste Expert Advisors mit einem KI-gestützten Editor. Strategien werden direkt in ausführbare Handelslogik übersetzt — ohne Programmierkenntnisse.",
    icon: Bot,
    visual: <VelgoVisual />,
  },
  {
    id: "ea",
    label: "AUTOMATISIERTER HANDEL",
    title: "TS Expert Advisors",
    description:
      "Professionelle EAs für MetaTrader 5. Entwickelt, getestet und optimiert innerhalb des TS-Ökosystems. Vom Range-Breakout bis zum vollautomatisierten Trend-Follower.",
    icon: TrendingUp,
    visual: <EAVisual />,
  },
  {
    id: "analytics",
    label: "DATENBASIERTE ENTSCHEIDUNGEN",
    title: "Strategie & Analytics",
    description:
      "Monte-Carlo-Simulationen, Portfolio-Analysen und Performance-Tracking. Fundierte Strategieentscheidungen auf Basis echter Daten — nicht auf Bauchgefühl.",
    icon: BarChart3,
    visual: <AnalyticsVisual />,
  },
  {
    id: "copy",
    label: "ZENTRALES ACCOUNT-MANAGEMENT",
    title: "Copy-Master",
    description:
      "Steuere mehrere Handelskonten von einer Oberfläche. Synchronisiere Positionen und Strategien über Konten hinweg — ohne VPS, direkt in der Cloud.",
    icon: Copy,
    visual: <CopyVisual />,
  },
  {
    id: "education",
    label: "STRUKTURIERTES WISSEN",
    title: "Education",
    description:
      "Masterclasses und Module zu Trading-Strategien, EA-Entwicklung und technischer Analyse. Praxisnah, systematisch aufgebaut und jederzeit abrufbar.",
    icon: GraduationCap,
    visual: <EducationVisual />,
  },
  {
    id: "community",
    label: "PROFESSIONELLER AUSTAUSCH",
    title: "Community",
    description:
      "Vernetze dich mit Tradern und Entwicklern im TS-Ökosystem. Erfahrungsaustausch, Support und gemeinsames Wachstum auf professionellem Niveau.",
    icon: Users,
    visual: <CommunityVisual />,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="plattform"
      className="py-24 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-[hsl(43_48%_59%)] uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(0_0%_90%)] mb-4">
            Alles integriert. Alles verbunden.
          </h2>
          <p className="text-[hsl(0_0%_55%)] max-w-xl mx-auto leading-relaxed">
            Entdecke die Bausteine des Trading Strategen Ökosystems — abgestimmt,
            integriert und professionell.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-24">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={!isEven ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-[hsl(43_48%_59%/0.1)] border border-[hsl(43_48%_59%/0.2)]">
                      <Icon className="w-4 h-4 text-[hsl(43_48%_59%)]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[hsl(43_48%_55%)] uppercase tracking-widest">
                      {feature.label}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[hsl(0_0%_90%)] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[hsl(0_0%_55%)] leading-relaxed text-base max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Visual */}
                <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="rounded-xl border border-[hsl(0_0%_12%)] bg-[hsl(0_0%_4%)] p-5 overflow-hidden">
                    {feature.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Feature Visuals ─────────────────────────────────────── */

function VelgoVisual() {
  const steps = [
    "Strategie definieren",
    "Parameter setzen",
    "Backtest starten",
    "EA exportieren",
  ];
  return (
    <div className="space-y-2">
      <p className="text-[10px] text-[hsl(0_0%_35%)] mb-3 uppercase tracking-widest">
        Velgo.AI Workflow
      </p>
      {steps.map((step, i) => (
        <div
          key={step}
          className="flex items-center gap-3 p-3 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
        >
          <div className="w-5 h-5 rounded-full bg-[hsl(43_48%_59%/0.15)] border border-[hsl(43_48%_59%/0.3)] flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-bold text-[hsl(43_48%_65%)]">
              {i + 1}
            </span>
          </div>
          <span className="text-xs text-[hsl(0_0%_65%)]">{step}</span>
          {i < steps.length - 1 && (
            <div className="ml-auto w-3 h-0.5 bg-[hsl(0_0%_18%)]" />
          )}
        </div>
      ))}
    </div>
  );
}

function EAVisual() {
  const eas = [
    { name: "Range-Breakout Pro", pair: "XAUUSD", status: "Aktiv", pnl: "+4.2%" },
    { name: "Trend-Follower MT5", pair: "EURUSD", status: "Aktiv", pnl: "+1.8%" },
    { name: "Scalper v2.3", pair: "GBPJPY", status: "Aktiv", pnl: "+2.9%" },
    { name: "Grid-Logic", pair: "USDJPY", status: "Pause", pnl: "+0.0%" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[10px] text-[hsl(0_0%_35%)] mb-3 uppercase tracking-widest">
        Aktive Expert Advisors
      </p>
      {eas.map((ea) => (
        <div
          key={ea.name}
          className="flex items-center justify-between p-3 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                ea.status === "Aktiv"
                  ? "bg-[hsl(120_50%_50%)]"
                  : "bg-[hsl(0_0%_30%)]"
              }`}
            />
            <div>
              <p className="text-xs text-[hsl(0_0%_75%)]">{ea.name}</p>
              <p className="text-[10px] text-[hsl(0_0%_35%)]">{ea.pair}</p>
            </div>
          </div>
          <span
            className={`text-xs font-medium ${
              ea.status === "Aktiv"
                ? "text-[hsl(120_50%_55%)]"
                : "text-[hsl(0_0%_35%)]"
            }`}
          >
            {ea.pnl}
          </span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="space-y-3">
      <p className="text-[10px] text-[hsl(0_0%_35%)] uppercase tracking-widest">
        Monte-Carlo Simulation
      </p>
      {/* Chart area */}
      <div className="h-28 rounded-lg bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_10%)] p-3 relative overflow-hidden">
        <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
          {/* Multiple simulation curves */}
          {[
            "M0,70 L40,55 L80,45 L120,38 L180,25 L240,18 L300,10",
            "M0,70 L40,58 L80,50 L120,42 L180,30 L240,22 L300,14",
            "M0,70 L40,62 L80,55 L120,48 L180,38 L240,30 L300,22",
            "M0,70 L40,65 L80,60 L120,55 L180,48 L240,40 L300,35",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={`hsl(43 48% 59% / ${0.8 - i * 0.15})`}
              strokeWidth="1"
              fill="none"
            />
          ))}
          {/* Worst case */}
          <path
            d="M0,70 L40,68 L80,65 L120,62 L180,58 L240,55 L300,52"
            stroke="hsl(0 60% 55% / 0.5)"
            strokeWidth="1"
            strokeDasharray="4 2"
            fill="none"
          />
        </svg>
      </div>
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Median", value: "+38.4%", color: "hsl(43 48% 65%)" },
          { label: "Best Case", value: "+62.1%", color: "hsl(120 50% 55%)" },
          { label: "Worst Case", value: "-12.3%", color: "hsl(0 60% 55%)" },
        ].map((m) => (
          <div
            key={m.label}
            className="p-2 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
          >
            <p className="text-[9px] text-[hsl(0_0%_35%)]">{m.label}</p>
            <p className="text-xs font-semibold mt-0.5" style={{ color: m.color }}>
              {m.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyVisual() {
  return (
    <div className="space-y-3">
      <p className="text-[10px] text-[hsl(0_0%_35%)] uppercase tracking-widest">
        Copy-Master Konten
      </p>
      {/* Master account */}
      <div className="p-3 rounded-lg bg-[hsl(43_48%_59%/0.08)] border border-[hsl(43_48%_59%/0.2)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[hsl(43_48%_65%)]">
              Master Account
            </p>
            <p className="text-[10px] text-[hsl(0_0%_40%)] mt-0.5">
              #102847 · MT5
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(120_50%_50%)] animate-pulse" />
            <span className="text-[10px] text-[hsl(120_50%_55%)]">Sync</span>
          </div>
        </div>
      </div>
      {/* Copy accounts */}
      <div className="space-y-2">
        {[
          { id: "#204921", label: "Copy Account 1", sync: true },
          { id: "#305812", label: "Copy Account 2", sync: true },
          { id: "#411023", label: "Copy Account 3", sync: false },
        ].map((acc) => (
          <div
            key={acc.id}
            className="flex items-center justify-between p-2.5 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  acc.sync ? "bg-[hsl(120_50%_50%)]" : "bg-[hsl(0_0%_30%)]"
                }`}
              />
              <span className="text-xs text-[hsl(0_0%_65%)]">{acc.label}</span>
            </div>
            <span className="text-[10px] text-[hsl(0_0%_35%)]">{acc.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationVisual() {
  const courses = [
    { name: "Trading Grundlagen", progress: 100 },
    { name: "EA-Entwicklung", progress: 65 },
    { name: "Technische Analyse", progress: 30 },
  ];
  return (
    <div className="space-y-3">
      <p className="text-[10px] text-[hsl(0_0%_35%)] uppercase tracking-widest">
        Masterclass Fortschritt
      </p>
      {courses.map((course) => (
        <div
          key={course.name}
          className="p-3 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[hsl(0_0%_70%)]">{course.name}</span>
            <span className="text-[10px] text-[hsl(43_48%_59%)]">
              {course.progress}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[hsl(0_0%_12%)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[hsl(43_48%_59%)]"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CommunityVisual() {
  const posts = [
    {
      user: "TW",
      name: "Thomas W.",
      text: "Mein Range-Breakout EA läuft jetzt seit 3 Wochen profitabel 📈",
      time: "vor 2h",
    },
    {
      user: "SK",
      name: "Stefan K.",
      text: "Die Monte-Carlo Analyse hat meine Strategie wirklich optimiert",
      time: "vor 4h",
    },
    {
      user: "MR",
      name: "Maria R.",
      text: "Velgo.AI ist ein Game-Changer für EA-Entwicklung ohne Code",
      time: "vor 6h",
    },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[10px] text-[hsl(0_0%_35%)] uppercase tracking-widest mb-3">
        Community Feed
      </p>
      {posts.map((post, i) => (
        <div
          key={i}
          className="p-3 rounded-lg bg-[hsl(0_0%_7%)] border border-[hsl(0_0%_11%)]"
        >
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[hsl(43_48%_59%/0.15)] border border-[hsl(43_48%_59%/0.3)] flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-[hsl(43_48%_65%)]">
                {post.user}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-[hsl(0_0%_65%)]">
                  {post.name}
                </span>
                <span className="text-[9px] text-[hsl(0_0%_30%)]">
                  {post.time}
                </span>
              </div>
              <p className="text-[10px] text-[hsl(0_0%_50%)] leading-relaxed">
                {post.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
