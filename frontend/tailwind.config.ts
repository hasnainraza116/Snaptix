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
        // Vibrant accent trio layered on top of the blue/navy base
        violet: "#7C3AED",
        coral: "#FB7185",
        amber: "#F59E0B",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
