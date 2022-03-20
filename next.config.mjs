/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: 'local',
    },
  },
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
