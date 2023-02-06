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
  transpilePackages: [
    "@wassdahl/ui",
  ],
};

export default nextConfig;
