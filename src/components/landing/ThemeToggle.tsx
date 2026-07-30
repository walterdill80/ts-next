"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ts-theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Design umschalten"
      className="ts-theme-toggle w-8 h-8 flex items-center justify-center rounded-full text-[var(--ts-text-nav)] hover:text-[var(--ts-heading)] hover:bg-[var(--ts-surface-hover)] transition-colors duration-200 cursor-pointer"
    >
      <Sun className="ts-theme-icon ts-theme-icon-sun w-4 h-4" />
      <Moon className="ts-theme-icon ts-theme-icon-moon w-4 h-4" />
    </button>
  );
}
