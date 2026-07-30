"use client";

import { useState, useEffect } from "react";
import {
  getAllConsents,
  revokeConsent,
  revokeAllConsents,
  CONSENT_LABELS,
  type ConsentKey,
  type ConsentStore,
} from "@/lib/consent";

export default function ConsentManager() {
  const [store, setStore] = useState<ConsentStore>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setStore(getAllConsents());
    setMounted(true);
  }, []);

  const granted = Object.entries(store).filter(([, v]) => v?.granted) as [ConsentKey, { granted: boolean; grantedAt: string }][];

  function handleRevoke(key: ConsentKey) {
    revokeConsent(key);
    setStore(getAllConsents());
  }

  function handleRevokeAll() {
    revokeAllConsents();
    setStore(getAllConsents());
  }

  if (!mounted) return null;

  return (
    <section id="einwilligungen" className="mt-12 scroll-mt-8">
      <h2 className="text-xl font-semibold text-[hsl(0_0%_80%)] mb-2">
        Einwilligungsverwaltung
      </h2>
      <p className="text-sm text-[hsl(0_0%_55%)] mb-6 leading-relaxed">
        Hier sehen Sie alle Einwilligungen, die Sie für diese Website erteilt haben. Sie können einzelne Einwilligungen oder alle auf einmal widerrufen. Nach einem Widerruf werden die betreffenden Drittanbieter-Inhalte nicht mehr geladen, bis Sie erneut zustimmen.
      </p>

      {granted.length === 0 ? (
        <div className="rounded-lg border border-[hsl(0_0%_12%)] bg-[hsl(0_0%_6%)] px-5 py-4 text-sm text-[hsl(0_0%_45%)]">
          Keine aktiven Einwilligungen vorhanden.
        </div>
      ) : (
        <div className="space-y-3">
          {granted.map(([key, entry]) => {
            const label = CONSENT_LABELS[key];
            return (
              <div
                key={key}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 rounded-lg border border-[hsl(0_0%_14%)] bg-[hsl(0_0%_6%)] px-5 py-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-[hsl(0_0%_82%)]">{label.name}</span>
                  </div>
                  <p className="text-xs text-[hsl(0_0%_50%)] leading-relaxed mb-1">{label.purpose}</p>
                  <p className="text-xs text-[hsl(0_0%_38%)]">Anbieter: {label.provider}</p>
                  <p className="text-xs text-[hsl(0_0%_35%)] mt-1">
                    Erteilt am: {new Date(entry.grantedAt).toLocaleString("de-DE")}
                  </p>
                </div>
                <button
                  onClick={() => handleRevoke(key)}
                  className="flex-shrink-0 text-xs px-4 py-2 rounded border border-red-800 text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
                >
                  Widerrufen
                </button>
              </div>
            );
          })}

          <div className="pt-2">
            <button
              onClick={handleRevokeAll}
              className="text-xs px-4 py-2 rounded border border-red-700 text-red-400 hover:bg-red-900/20 transition-colors cursor-pointer"
            >
              Alle Einwilligungen widerrufen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
