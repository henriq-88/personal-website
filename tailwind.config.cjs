const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/_app.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--theme-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};