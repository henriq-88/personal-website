import bundleAnalyzer from "@next/bundle-analyzer";
import { execSync } from "child_process";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const getGitHash = () => {
  try {
    return execSync(`git rev-parse --verify HEAD`)
      .toString()
      .substring(0, 7);
  } catch {
    return process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7) ?? `unknown`;
  }
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  partialPrefetching: true,
  typescript: { ignoreBuildErrors: !!process.env.CI },
  env: {
    NEXT_PUBLIC_GIT_HASH: getGitHash(),
  },
  images: {
    minimumCacheTTL: 1 * 60 * 60, // 1 hour
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  transpilePackages: [
    "@wassdahl/api",
    "@wassdahl/auth",
    "@wassdahl/mail",
    "@wassdahl/ui",
    "@awesome-reveal/react",
  ],
};

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
  await import("./src/env.mjs");
}

export default withBundleAnalyzer(nextConfig);
