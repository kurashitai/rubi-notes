import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wiki.rubinot.com',
      },
      {
        protocol: 'https',
        hostname: 'rubinot.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.rubinot.com.br',
      },
    ],
  },
};

export default nextConfig;
