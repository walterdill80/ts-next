/**
 * Zentrales Einwilligungsmanagement (DSGVO)
 * Alle Einwilligungen werden in localStorage gespeichert.
 * Kein Drittanbieter-Inhalt wird geladen, bevor die Einwilligung erteilt wurde.
 */

export type ConsentKey = "youtube";

const STORAGE_KEY = "ts-consents";

export interface ConsentEntry {
  granted: boolean;
  grantedAt: string; // ISO timestamp
}

export type ConsentStore = Partial<Record<ConsentKey, ConsentEntry>>;

function readStore(): ConsentStore {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function writeStore(store: ConsentStore): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function hasConsent(key: ConsentKey): boolean {
  const store = readStore();
  return store[key]?.granted === true;
}

export function grantConsent(key: ConsentKey): void {
  const store = readStore();
  store[key] = { granted: true, grantedAt: new Date().toISOString() };
  writeStore(store);
  // Legacy-Cookie entfernen
  if (key === "youtube") {
    document.cookie = "yt-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

export function revokeConsent(key: ConsentKey): void {
  const store = readStore();
  delete store[key];
  writeStore(store);
}

export function revokeAllConsents(): void {
  writeStore({});
  // Legacy-Cookies entfernen
  document.cookie = "yt-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getAllConsents(): ConsentStore {
  return readStore();
}

export const CONSENT_LABELS: Record<ConsentKey, { name: string; purpose: string; provider: string }> = {
  youtube: {
    name: "YouTube (Videos)",
    purpose: "Einbettung von Lehrvideos über YouTube Privacy-Enhanced Mode (youtube-nocookie.com).",
    provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
  },
};
