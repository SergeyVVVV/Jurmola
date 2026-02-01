import type { Metadata } from "next";
import { Merriweather, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const sourceSerif = Source_Serif_4({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Jurmola Telegraphs – Твоя Юрмала, Твоя Столица",
  description: "Многие спрашивают нас, поэтому пишем в подзаголовке: наш ресурс не имеет никакого отношения к Лайме Вайкуле. Вообще. И к лаймам тоже.",
  metadataBase: new URL('https://jurmola.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://jurmola.com/en/',
      'ru': 'https://jurmola.com/',
      'lv': 'https://jurmola.com/lv/',
    },
    types: {
      'application/rss+xml': [
        { url: '/feed.xml?lang=ru', title: 'Jurmola Telegraphs (Русский)' },
        { url: '/feed.xml?lang=en', title: 'Jurmola Telegraphs (English)' },
        { url: '/feed.xml?lang=lv', title: 'Jurmola Telegraphs (Latviešu)' },
      ],
    },
  },
  openGraph: {
    title: "Jurmola Telegraphs – Твоя Юрмала, Твоя Столица",
    description: "Многие спрашивают нас, поэтому пишем в подзаголовке: наш ресурс не имеет никакого отношения к Лайме Вайкуле. Вообще. И к лаймам тоже.",
    url: "https://jurmola.com",
    siteName: "Jurmola Telegraphs",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurmola Telegraphs – Твоя Юрмала, Твоя Столица",
    description: "Многие спрашивают нас, поэтому пишем в подзаголовке: наш ресурс не имеет никакого отношения к Лайме Вайкуле. Вообще. И к лаймам тоже.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jurmola Telegraphs",
    "url": "https://jurmola.com",
    "logo": "https://jurmola.com/icon.svg",
    "description": "The Baltic's Finest News Source - Satirical news from Latvia, Jurmala, and beyond",
    "sameAs": [
      "https://twitter.com/JurmolaTelegraphs"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jurmola Telegraphs",
    "url": "https://jurmola.com",
    "description": "The Baltic's Finest News Source - Satirical news from Latvia, Jurmala, and beyond",
    "inLanguage": ["en", "lv", "ru"],
    "publisher": {
      "@type": "Organization",
      "name": "Jurmola Telegraphs"
    }
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${merriweather.variable} ${sourceSerif.variable} antialiased`}
        style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
      >
        {children}
      </body>
    </html>
  );
}
