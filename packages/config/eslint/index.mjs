import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
import turbo from "eslint-plugin-turbo";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const config = defineConfig(
  globalIgnores([
    "**/node_modules/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.config.mjs",
    "**/next-env.d.ts",
    "**/tsconfig.tsbuildinfo",
    "packages/config/**",
  ]),
  ...nextVitals,
  tseslint.config({
    files: ["**/*.{ts,tsx,mts,cts}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  }),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  turbo.configs["flat/recommended"],
  prettier,
);

export default config;
