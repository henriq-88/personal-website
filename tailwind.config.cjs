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
          50: '#EDE7F6',
          100: '#D1C4E9',
          200: '#B39DDB',
          300: '#9575CD',
          400: '#7E57C2',
          500: '#673AB7',
          600: '#5E35B1',
          700: '#512DA8',
          800: '#4527A0',
          900: '#24133D',
          A100: '#B388FF',
          A200: '#7C4DFF',
          A400: '#651FFF',
          A700: '#6200EA',
        },
        secondary: {
          50: '#FBE9E7',
          100: '#FFCCBC',
          200: '#FFAB91',
          300: '#FF8A65',
          400: '#FF7043',
          500: '#FF5722',
          600: '#F4511E',
          700: '#E64A19',
          800: '#D84315',
          900: '#491607',
          A100: '#FF9E80',
          A200: '#FF6E40',
          A400: '#FF3D00',
          A700: '#DD2C00',
        },
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