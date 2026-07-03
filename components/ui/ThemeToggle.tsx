"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Toggles between the dark (v2, default) and light (previous) themes by
 * flipping the `light` class on <html>. Choice is persisted in localStorage
 * and applied before paint by the inline script in `app/layout.tsx`.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* localStorage unavailable — theme just won't persist */
    }
  }

  const goingLight = !light; // icon shows the theme you switch TO

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={goingLight ? "Включить светлую тему" : "Включить тёмную тему"}
      title={goingLight ? "Светлая тема" : "Тёмная тема"}
      className={cn(
        "inline-grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel/60 text-ink-soft backdrop-blur transition hover:border-brand-400/40 hover:text-ink",
        className
      )}
    >
      {mounted && !goingLight ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
