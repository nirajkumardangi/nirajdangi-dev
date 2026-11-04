"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";

function getSnapshot(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);

  return () => {
    observer.disconnect();
    mediaQuery.removeEventListener("change", callback);
  };
}

export function ThemeToggle() {
  const theme = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative w-11 h-11 md:w-9 md:h-9 rounded-md border border-[var(--color-border)] bg-surface text-ink hover:text-accent hover:border-accent/40 flex items-center justify-center transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform duration-300" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300" />
      )}
    </button>
  );
}
