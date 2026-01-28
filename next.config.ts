import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer domínio
      },
      {
        protocol: 'http',
        hostname: '**', // Permite domínios sem SSL (opcional)
      },
    ],
  },
};

export default nextConfig;
