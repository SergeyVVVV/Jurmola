import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jurmola Telegraphs – Your Jurmala, Your Capital",
  description: "Satirical news from Jurmala, Latvia and the Baltics. The first AI-powered satirical publication in the Baltic states. Not affiliated with Laima Vaikule.",
  alternates: {
    canonical: 'https://jurmola.com/en/',
    languages: {
      'x-default': 'https://jurmola.com/',
      'en': 'https://jurmola.com/en/',
      'ru': 'https://jurmola.com/',
      'lv': 'https://jurmola.com/lv/',
    },
  },
  openGraph: {
    title: "Jurmola Telegraphs – Your Jurmala, Your Capital",
    description: "Satirical news from Jurmala, Latvia and the Baltics. The first AI-powered satirical publication in the Baltic states. Not affiliated with Laima Vaikule.",
    url: "https://jurmola.com/en/",
    siteName: "Jurmola Telegraphs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jurmola.com/images/grey-day-creature.jpg",
        width: 1200,
        height: 630,
        alt: "Jurmola Telegraphs – Satirical news from the Baltics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurmola Telegraphs – Your Jurmala, Your Capital",
    description: "Satirical news from Jurmala, Latvia and the Baltics. The first AI-powered satirical publication in the Baltic states. Not affiliated with Laima Vaikule.",
    images: ["https://jurmola.com/images/grey-day-creature.jpg"],
    creator: "@JurmolaTelegraphs",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
