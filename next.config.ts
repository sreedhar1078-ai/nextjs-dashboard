import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // optional, if you're using Partial Prerendering
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;