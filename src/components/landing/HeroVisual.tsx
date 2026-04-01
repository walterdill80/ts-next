"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      className="relative"
    >
      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-[hsl(0_0%_12%/0.5)] bg-[hsl(0_0%_4%/0.8)] backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[hsl(0_0%_10%/0.5)]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0_0%_20%/0.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0_0%_20%/0.6)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0_0%_20%/0.6)]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-[hsl(0_0%_8%/0.5)] text-[11px] text-[hsl(0_0%_28%)]">
              app.trading-strategen.com
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 lg:p-8 grid grid-cols-12 gap-4 min-h-[300px] lg:min-h-[380px]">
          {/* Sidebar */}
          <div className="col-span-2 hidden lg:flex flex-col gap-3">
            {["Velgo.AI", "EAs", "Analytics", "Copy", "Learn"].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  i === 0
                    ? "bg-[hsl(43_48%_59%/0.1)] text-[hsl(43_48%_65%)]"
                    : "text-[hsl(0_0%_28%)]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <div className="flex-1 rounded-xl bg-[hsl(0_0%_8%/0.5)] p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[hsl(0_0%_38%)] font-medium">
                  Performance
                </span>
                <div className="flex gap-2">
                  {["1W", "1M", "3M", "1Y"].map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        t === "3M"
                          ? "bg-[hsl(43_48%_59%/0.1)] text-[hsl(43_48%_65%)]"
                          : "text-[hsl(0_0%_22%)]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 600 120" className="w-full h-24 lg:h-32">
                <defs>
                  <linearGradient id="heroChartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(43 48% 59%)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="hsl(43 48% 59%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,90 C50,85 80,70 120,65 C160,60 200,75 240,50 C280,25 320,40 360,30 C400,20 440,35 480,15 C520,5 560,20 600,10"
                  fill="none"
                  stroke="hsl(43 48% 59%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,90 C50,85 80,70 120,65 C160,60 200,75 240,50 C280,25 320,40 360,30 C400,20 440,35 480,15 C520,5 560,20 600,10 L600,120 L0,120 Z"
                  fill="url(#heroChartGrad)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Win Rate", value: "68.4%" },
                { label: "Profit Factor", value: "2.14" },
                { label: "Drawdown", value: "4.2%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-[hsl(0_0%_8%/0.5)] p-3 text-center"
                >
                  <div className="text-[10px] text-[hsl(0_0%_32%)] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-[hsl(0_0%_82%)]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-3 hidden lg:flex flex-col gap-3">
            <div className="rounded-xl bg-[hsl(0_0%_8%/0.5)] p-4 flex-1">
              <span className="text-[10px] text-[hsl(0_0%_30%)] font-medium">
                Active EAs
              </span>
              <div className="mt-3 space-y-2.5">
                {["Range-Breakout", "Trend-Follow", "Scalper V2"].map((ea, i) => (
                  <div key={ea} className="flex items-center justify-between">
                    <span className="text-[11px] text-[hsl(0_0%_45%)]">{ea}</span>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < 2
                          ? "bg-[hsl(120_50%_45%/0.6)]"
                          : "bg-[hsl(43_48%_59%/0.3)]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-[hsl(43_48%_59%/0.04)] border border-[hsl(43_48%_59%/0.1)] p-4">
              <span className="text-[10px] text-[hsl(43_48%_59%/0.6)] font-medium">
                Velgo.AI
              </span>
              <p className="text-[11px] text-[hsl(0_0%_30%)] mt-2 leading-relaxed">
                3 Projekte aktiv
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow below */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-40 blur-[100px] rounded-full pointer-events-none"
        style={{ background: "hsl(43 48% 59% / 0.04)" }}
      />
    </motion.div>
  );
}
