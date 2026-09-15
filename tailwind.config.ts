import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        lato: ["var(--font-lato)"],
        mono: ["var(--font-jetbrains-mono)"],
        outfit: ["var(--font-outfit)"],
        gochi: ["var(--font-gochi-hand)"],
        bricolage: ["var(--font-bricolage)"],
      },
    },
  },
  plugins: [],
};

export default config;
