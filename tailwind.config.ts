import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: "#E0B341",
        jade: "#0EA47A",
        deepblue: "#0B1F3A",
        night: "#0F1524",
        cream: "#FBF7EE",
        sand: "#F2E8D5",
        teal: "#0B6E6E",
        charcoal: "#1F2A37",
        danger: "#DC2626",
      },
      fontFamily: {
        sans: ["system-ui", "Padauk", "Noto Sans Myanmar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
