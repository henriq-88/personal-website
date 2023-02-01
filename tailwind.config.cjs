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
    screens: {
      xs: '512px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  darkMode: 'class',
  plugins: [],
};