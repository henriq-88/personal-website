import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/@wassdahl/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDE7F6",
          100: "#D1C4E9",
          200: "#B39DDB",
          300: "#9575CD",
          400: "#7E57C2",
          500: "#673AB7",
          600: "#5E35B1",
          700: "#512DA8",
          800: "#4527A0",
          900: "#24133D",
          A100: "#B388FF",
          A200: "#7C4DFF",
          A400: "#651FFF",
          A700: "#6200EA",
        },
      },
    },
    screens: {
      xs: "512px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1720px",
    },
  },
  plugins: [],
} satisfies Config;

export { type Config };
