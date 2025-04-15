/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
