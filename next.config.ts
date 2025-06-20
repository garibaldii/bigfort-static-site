import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    domains: ['lh3.googleusercontent.com'], // Adicione aqui os domínios que você precisa
  },
};

export default nextConfig;
