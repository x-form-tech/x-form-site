import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // ---- Theme tokens driven by CSS vars (light/dark switchable) ----
        // Channel-format vars (`R G B`) so Tailwind `/opacity` modifiers work.
        // `ink` = TEXT scale
        ink: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          soft: "rgb(var(--fg-soft) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
        },
        // `surface` = page + section backgrounds
        surface: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          muted: "rgb(var(--bg-muted) / <alpha-value>)",
          sunken: "rgb(var(--bg-sunken) / <alpha-value>)",
        },
        // `panel` = cards / elevated blocks
        panel: {
          DEFAULT: "rgb(var(--panel) / <alpha-value>)",
          soft: "rgb(var(--panel-soft) / <alpha-value>)",
          strong: "rgb(var(--panel-strong) / <alpha-value>)",
        },
        // theme-aware brand text/link color (lighter on dark, deeper on light)
        brandink: "rgb(var(--brand-ink) / <alpha-value>)",
        // `night` = ALWAYS-dark blocks (footer, final CTA) — warm near-black (brand)
        night: {
          DEFAULT: "#0E080A",
          soft: "#1B1517",
          strong: "#241C1F",
        },
        // Brand ramp centred on the official #454AFE (brand-200 = #BBBDFF)
        brand: {
          50: "#EDEEFF",
          100: "#DCDDFF",
          200: "#BBBDFF",
          300: "#9A9DFF",
          400: "#6E72FF",
          500: "#454AFE",
          600: "#3A3EE6",
          700: "#2E31B8",
          800: "#24268C",
          900: "#1C1E6B",
        },
        // theme-aware secondary highlight (cyan on tech themes, periwinkle on brand)
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        // hairline borders (theme-aware)
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.45)",
        lift: "0 16px 50px rgba(0,0,0,0.6)",
        glow: "0 20px 70px -25px rgba(69,74,254,0.65)",
        "glow-cyan": "0 20px 70px -25px rgba(34,211,238,0.5)",
      },
      maxWidth: { content: "1200px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(220%)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "44px 44px" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
