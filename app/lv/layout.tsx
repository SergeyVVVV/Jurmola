import type { Metadata } from "next";
import SetHtmlLang from "../components/SetHtmlLang";

export const metadata: Metadata = {
  title: "Jurmola Telegraphs – Jūsu Jūrmala, Jūsu Galvaspilsēta",
  description: "Satīriskas ziņas no Jūrmalas, Latvijas un Baltijas. Pirmais AI darbinātais satīriskais izdevums Baltijas valstīs. Nav saistīts ar Laimu Vaikuli.",
  alternates: {
    canonical: 'https://jurmola.com/lv/',
    languages: {
      'x-default': 'https://jurmola.com/',
      'en': 'https://jurmola.com/en/',
      'ru': 'https://jurmola.com/',
      'lv': 'https://jurmola.com/lv/',
    },
  },
  openGraph: {
    title: "Jurmola Telegraphs – Jūsu Jūrmala, Jūsu Galvaspilsēta",
    description: "Satīriskas ziņas no Jūrmalas, Latvijas un Baltijas. Pirmais AI darbinātais satīriskais izdevums Baltijas valstīs. Nav saistīts ar Laimu Vaikuli.",
    url: "https://jurmola.com/lv/",
    siteName: "Jurmola Telegraphs",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "https://jurmola.com/images/grey-day-creature.jpg",
        width: 1200,
        height: 630,
        alt: "Jurmola Telegraphs – Baltijas satīriskās ziņas",
      },
    ],
  },
};

export default function LvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <SetHtmlLang lang="lv" />
    {children}
  </>;
}
