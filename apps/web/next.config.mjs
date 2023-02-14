import bundleAnalyzer from "@next/bundle-analyzer";

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
    unoptimized: true,
  },
  transpilePackages: ["@wassdahl/ui", "@wassdahl/api", "@wassdahl/auth"],
};

export default withBundleAnalyzer(nextConfig);
