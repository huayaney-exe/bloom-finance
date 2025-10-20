import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          sage: "#7FA58E",
          coral: "#F08E80",
          blue: "#A8C7E7",
          charcoal: "#2D3436",
          gray: "#636E72",
          "warm-white": "#FAF8F5",
          "deep-green": "#5F9F7C",
          "warm-orange": "#F4A460",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["40px", { lineHeight: "1.2" }],
        "display-3": ["28px", { lineHeight: "1.3" }],
        "body-large": ["20px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-small": ["14px", { lineHeight: "1.5" }],
        "hero-heading": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.2" }],
        "hero-subtitle": ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.5" }],
      },
      borderRadius: {
        bloom: "8px",
        "bloom-card": "12px",
        "bloom-input": "6px",
        "bloom-image": "16px",
      },
      spacing: {
        section: "96px",
        "section-mobile": "64px",
        "hero-card-overlap": "-12rem",
        "hero-card-overlap-lg": "-16rem",
      },
      zIndex: {
        behind: "-1",
        base: "0",
        content: "10",
        card: "20",
        header: "50",
        modal: "100",
      },
    },
  },
  plugins: [],
};

export default config;
