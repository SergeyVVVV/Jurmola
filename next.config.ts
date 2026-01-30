import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // SEO slug updates (Jan 2026)
      {
        source: '/news/latvian-capital-to-introduce-mandatory-walk',
        destination: '/news/riga-mandatory-snail-work-day',
        permanent: true, // 301 redirect
      },
      {
        source: '/news/riga-announces-revolutionary-urban-bee-network',
        destination: '/news/riga-urban-bee-transportation',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
