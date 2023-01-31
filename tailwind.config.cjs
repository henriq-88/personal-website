const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/_app.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: `#673ab7`,
          light: `#ff5722`,
        }
      },
      fontFamily: {
        sans: ["var(--theme-font)", ...fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};