import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "var(--color-bg)",
        surface:  "var(--color-surface)",
        ink:      "var(--color-ink)",
        muted:    "var(--color-muted)",
        accent:   "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        whatsapp: "var(--color-whatsapp)",
        "whatsapp-hover": "var(--color-whatsapp-hover)",
        "dark-bg":      "var(--color-dark-bg)",
        "dark-surface": "var(--color-dark-surface)",
        border:         "var(--color-border)",
        "border-md":    "var(--color-border-md)",
        "live-bg":      "var(--color-live-bg)",
        "live-text":    "var(--color-live-text)",
        "concept-bg":   "var(--color-concept-bg)",
        "concept-text": "var(--color-concept-text)",
      },
      fontFamily: {
        sans:  ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono:  ["var(--font-geist-mono)", "'Courier New'", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "h1": ["clamp(2.5rem,7vw,5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "h2": ["clamp(1.75rem,4vw,3rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "h3": ["clamp(1.25rem,2.5vw,1.75rem)", { lineHeight: "1.2" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        lg:   "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm:     "var(--shadow-sm)",
        md:     "var(--shadow-md)",
        lg:     "var(--shadow-lg)",
        accent: "var(--shadow-accent)",
      },
      transitionDuration: {
        fast: "200ms",
        base: "400ms",
        slow: "600ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22,1,0.36,1)",
      },
      zIndex: {
        below:    "-1",
        raised:   "10",
        dropdown: "100",
        sticky:   "200",
        modal:    "300",
        toast:    "400",
        tooltip:  "500",
      },
      spacing: {
        "section-mobile": "5rem",   // py-20
        "section-md":     "7rem",   // py-28
        "section-lg":     "9rem",   // py-36
      },
      maxWidth: {
        container: "1200px",
        prose:     "65ch",
      },
      animation: {
        "fade-in": "fadeIn var(--duration-base) var(--ease-out-expo) forwards",
        "fade-up": "fadeUp var(--duration-base) var(--ease-out-expo) forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
