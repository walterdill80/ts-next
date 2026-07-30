export default function HeroVisual() {
  return (
    <div className="relative animate-slide-up ts-mobile-static-motion">
      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-[var(--ts-border-base)] bg-[var(--ts-surface-card)] overflow-hidden shadow-2xl">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--ts-border-faint)]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--ts-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--ts-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--ts-border-strong)]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-[var(--ts-surface-item)] text-[11px] text-[var(--ts-text-ghost)]">
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
                    ? "bg-[hsl(43_48%_59%/0.1)] text-[var(--gold-bright)]"
                    : "text-[var(--ts-text-ghost)]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <div className="flex-1 rounded-xl bg-[var(--ts-surface-item)] p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[var(--ts-text-dim)] font-medium">
                  Performance
                </span>
                <div className="flex gap-2">
                  {["1W", "1M", "3M", "1Y"].map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        t === "3M"
                          ? "bg-[hsl(43_48%_59%/0.1)] text-[var(--gold-bright)]"
                          : "text-[var(--ts-text-trace)]"
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
                  className="rounded-lg bg-[var(--ts-surface-item)] p-3 text-center"
                >
                  <div className="text-[10px] text-[var(--ts-text-ghost)] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-[var(--ts-text-strong)]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-3 hidden lg:flex flex-col gap-3">
            <div className="rounded-xl bg-[var(--ts-surface-item)] p-4 flex-1">
              <span className="text-[10px] text-[var(--ts-text-ghost)] font-medium">
                Active EAs
              </span>
              <div className="mt-3 space-y-2.5">
                {["Range-Breakout", "Trend-Follow", "Scalper V2"].map((ea, i) => (
                  <div key={ea} className="flex items-center justify-between">
                    <span className="text-[11px] text-[var(--ts-text-subtle)]">{ea}</span>
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
              <p className="text-[11px] text-[var(--ts-text-ghost)] mt-2 leading-relaxed">
                3 Projekte aktiv
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow below */}
      <div
        className="ts-mobile-glow-medium absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-40 blur-[100px] rounded-full pointer-events-none"
        style={{ background: "hsl(43 48% 59% / 0.04)" }}
      />
    </div>
  );
}
