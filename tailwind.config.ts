import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode support
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBg: "#ffffff",
        darkBg: "#111827", 
        lightText: "#111827",
        darkText: "#ffffff", 
        primary: "#9b87f5",
      },
    },
  },
  plugins: [],
};

export default config;
