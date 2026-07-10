import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Triare-inspired blue/navy theme — previous values: signal #0D9488, beacon #C2691E
        void: "#FFFFFF",
        panel: "#F3F5F7",
        signal: "#3282EB",
        beacon: "#122E52",
        paper: "#1A1D1F",
        muted: "#5B6470",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
