import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy SEO slug updates - redirect to English version (Jan 2026)
      {
        source: '/news/latvian-capital-to-introduce-mandatory-walk',
        destination: '/en/news/riga-mandatory-snail-work-day',
        permanent: true, // 301 redirect
      },
      {
        source: '/news/riga-announces-revolutionary-urban-bee-network',
        destination: '/en/news/riga-urban-bee-transportation',
        permanent: true, // 301 redirect
      },
      // Old category pages (without language prefix) - redirect to English
      {
        source: '/politics',
        destination: '/en/politics/',
        permanent: true,
      },
      {
        source: '/culture',
        destination: '/en/culture/',
        permanent: true,
      },
      {
        source: '/business',
        destination: '/en/business/',
        permanent: true,
      },
      {
        source: '/opinion',
        destination: '/en/opinion/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
