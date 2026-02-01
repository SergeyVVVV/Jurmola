import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jurmola Telegraphs – Your Jurmala, Your Capital",
  description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
  alternates: {
    canonical: 'https://jurmola.com/en/',
    languages: {
      'en': 'https://jurmola.com/en/',
      'ru': 'https://jurmola.com/',
      'lv': 'https://jurmola.com/lv/',
    },
  },
  openGraph: {
    title: "Jurmola Telegraphs – Your Jurmala, Your Capital",
    description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
    url: "https://jurmola.com/en/",
    siteName: "Jurmola Telegraphs",
    locale: "en_US",
    type: "website",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
