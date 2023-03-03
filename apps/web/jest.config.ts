import { Config } from "jest";
import nextJest from "next/jest";
import path from "path";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  // moduleDirectories: ["node_modules", "<rootDir>/"],

  // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
  // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
  // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  // testEnvironment: "jsdom",
  // extensionsToTreatAsEsm: [".ts", ".tsx"],
  // For example:
  // transformIgnorePatterns: ["node_modules/(?!@wassdahl/)"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/.pnpm/(?!(@wassdahl\\+.*)@)",
    /* if config file is under '~/packages/lib-a/' */
    `${path.join(__dirname, "../..")}/node_modules/.pnpm/(?!(@wassdahl\\+.*)@)`,
    /* or using relative path to match the second 'node_modules/' in 'node_modules/.pnpm/@wassdahl+pkg-b@x.x.x/node_modules/@wassdahl/pkg-b/' */
    "node_modules/(?!.pnpm|@wassdahl/.*)",
  ],
  testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   "^.+\\.(t|j)sx?$": "ts-jest",
  // },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
