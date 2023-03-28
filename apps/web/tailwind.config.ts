import { type Config } from "@wassdahl/tailwind-config";

export default {
  presets: [require("@wassdahl/tailwind-config")],
  darkMode: [`class`],
} satisfies Partial<Config>;
