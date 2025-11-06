import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**' // Correctly allow all paths under the hostname
      },
      {
        protocol: 'https',
        hostname: 'Fai-ob.com',
        port: '',
        pathname: '/**' // Correctly allow all paths under the hostname
      },
      {
        protocol: 'https',
        hostname: 'blog-x-ui.vercel.app',
        port: '',
        pathname: '/**' // Correctly allow all paths under the hostname
      },
      {
        protocol: 'https',
        hostname: 'comboblocks.com',
        port: '',
        pathname: '/**' // Correctly allow all paths under the hostname
      }

    ],
  },
};

export default nextConfig;
