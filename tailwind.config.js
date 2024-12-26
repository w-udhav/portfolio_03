/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "dark",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text-secondary": "var(--color-text-secondary)",
        "section-heading": "var(--section-heading)",
        text: "var(--color-text)",
        "color-placeholder": "var(--color-placeholder)",
        "overlay-bg": "var(--overlay-background)",
        "card-bg-color-1": "var(--card-background-color-1)",
        "card-bg-color-2": "var(--card-background-color-2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
