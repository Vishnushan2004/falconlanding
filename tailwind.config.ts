import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { primary: "#050816", secondary: "#0B1120" },
        surface: "#111827",
        glass: "rgba(255,255,255,0.04)",
        accent: { teal: "#00E5A8", cyan: "#22D3EE", gold: "#FACC15" },
        state: { success: "#22C55E", danger: "#EF4444", warning: "#F59E0B" },
        text: { primary: "#FFFFFF", secondary: "#CBD5E1", muted: "#94A3B8" },
        border: { DEFAULT: "rgba(255,255,255,.08)" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-teal-cyan": "linear-gradient(135deg,#00E5A8 0%,#22D3EE 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,229,168,0.12), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,229,168,0.15)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        "falcon-swoop": {
          "0%": { transform: "translate(-40vw,-30vh) scale(0.4) rotate(-18deg)", opacity: "0" },
          "35%": { opacity: "1" },
          "70%": { transform: "translate(0,0) scale(1.05) rotate(2deg)" },
          "100%": { transform: "translate(0,0) scale(1) rotate(0deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "falcon-swoop": "falcon-swoop 1.1s cubic-bezier(.22,1,.36,1) forwards",
        "fade-up": "fade-up .6s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
