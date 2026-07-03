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
        // `night` = ALWAYS-dark blocks (footer, final CTA) — fixed in both themes
        night: {
          DEFAULT: "#070A12",
          soft: "#0E1523",
          strong: "#152135",
        },
        // Brand — electric blue → cyan, reads "technological"
        brand: {
          50: "#EAF1FF",
          100: "#CADBFF",
          200: "#9EBEFF",
          300: "#6E98FF",
          400: "#4A78FF",
          500: "#3B6BFF",
          600: "#2F58F0",
          700: "#2544C4",
          800: "#1E3596",
          900: "#1B2C74",
        },
        accent: {
          DEFAULT: "#22D3EE", // cyan highlight
          soft: "#67E3F5",
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
        glow: "0 20px 70px -25px rgba(59,107,255,0.65)",
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
