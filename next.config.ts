import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy SEO slug updates - redirect to Russian version (Jan 2026)
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
      // Redirect /yurmola to /jurmola (correct spelling matching domain)
      {
        source: '/yurmola',
        destination: '/jurmola',
        permanent: true, // 301 redirect
      },
      // Redirect /yurmola sub-pages to /jurmola sub-pages
      {
        source: '/yurmola/:path*',
        destination: '/jurmola/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect /jurmala to /jurmola (common spelling variant)
      {
        source: '/jurmala',
        destination: '/jurmola',
        permanent: true, // 301 redirect
      },
      {
        source: '/jurmala/:path*',
        destination: '/jurmola/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect guide aliases
      {
        source: '/guide',
        destination: '/jurmola',
        permanent: true,
      },
      {
        source: '/en/guide',
        destination: '/en/jurmola',
        permanent: true,
      },
      {
        source: '/lv/guide',
        destination: '/lv/jurmola',
        permanent: true,
      },
      // Old Russian prefix redirects (Meduza structure migration)
      {
        source: '/ru/:path*',
        destination: '/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
