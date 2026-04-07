import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--background-base)",
        deep: "var(--background-deep)",
        elevated: "var(--background-elevated)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        foreground: "var(--foreground)",
        muted: "var(--foreground-muted)",
        subtle: "var(--foreground-subtle)",
        accent: "var(--accent)",
        "accent-bright": "var(--accent-bright)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2)",
        "card-hover": "0 0 0 1px rgba(255,255,255,0.1), 0 10px 48px rgba(0,0,0,0.5), 0 0 84px rgba(94,106,210,0.1)",
        accent: "0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)"
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        glow: "pulseGlow 9s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
