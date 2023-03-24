import bundleAnalyzer from "@next/bundle-analyzer";
import { execSync } from "child_process";
import { PrismaPlugin } from "experimental-prisma-webpack-plugin";
import webpack from "webpack";
import { withAxiom } from "next-axiom";

const { EnvironmentPlugin } = webpack;

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
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
    "@wassdahl/db",
    "@wassdahl/mail",
    "@wassdahl/ui",
  ],
  webpack: (config, { isServer }) => {
    const gitHash = execSync(`git rev-parse --verify HEAD`)
      .toString()
      .substring(0, 7);

    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    config.plugins = [
      ...config.plugins,
      new EnvironmentPlugin({
        NEXT_PUBLIC_GIT_HASH: gitHash,
      }),
    ];

    return config;
  },
};

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
  await import("./src/env.mjs");
}

export default withAxiom(withBundleAnalyzer(nextConfig));
