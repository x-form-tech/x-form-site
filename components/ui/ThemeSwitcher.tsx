"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Moon, Palette, Sparkles, Sun, SunMoon } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "brand" | "brand-light" | "dark" | "light";

const THEMES: { id: Theme; label: string; hint: string; Icon: typeof Sun }[] = [
  { id: "brand", label: "Бренд", hint: "Айдентика, тёмная", Icon: Sparkles },
  {
    id: "brand-light",
    label: "Бренд светлая",
    hint: "Айдентика, светлая",
    Icon: SunMoon,
  },
  { id: "dark", label: "Тёмная", hint: "Технологичная", Icon: Moon },
  { id: "light", label: "Светлая", hint: "Воздушная", Icon: Sun },
];

/**
 * Switches between the three visual versions by setting `data-theme` on <html>.
 * Choice persists in localStorage and is applied before paint by the inline
 * script in `app/layout.tsx`. Default = brand.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("brand");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute("data-theme");
    if (THEMES.some((t) => t.id === current)) {
      setThemeState(current as Theme);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(t: Theme) {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* persistence unavailable */
    }
    setOpen(false);
  }

  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0];
  const TriggerIcon = mounted ? active.Icon : Palette;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Сменить тему оформления"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Тема оформления"
        className="inline-grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel/60 text-ink-soft backdrop-blur transition hover:border-brand-400/40 hover:text-ink"
      >
        <TriggerIcon className="h-5 w-5" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-line bg-panel/95 p-1.5 shadow-lift backdrop-blur-xl"
        >
          {THEMES.map(({ id, label, hint, Icon }) => {
            const isActive = id === theme;
            return (
              <button
                key={id}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => pick(id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                  isActive
                    ? "bg-brand-500/15 text-ink"
                    : "text-ink-soft hover:bg-panel-strong hover:text-ink"
                )}
              >
                <Icon className="h-4 w-4 shrink-0 text-brandink" />
                <span className="flex-1">
                  <span className="block text-sm font-medium leading-tight">
                    {label}
                  </span>
                  <span className="block text-xs text-ink-muted">{hint}</span>
                </span>
                {isActive && <Check className="h-4 w-4 shrink-0 text-brandink" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
