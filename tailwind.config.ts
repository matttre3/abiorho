import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellowAbio: "#ffd43c",
        blueAbio: "#0068bb",
      },
      fontFamily: {
        agrandir: ["Agrandir Regular", "sans-serif"],
        agrandirHeavy: ["Agrandir Heavy", "sans-serif"],
        agrandirBold: ["Agrandir Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
