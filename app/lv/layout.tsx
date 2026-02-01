import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jurmola Telegraphs – Jūsu Jūrmala, Jūsu Galvaspilsēta",
  description: "Daudzi mums jautā, tāpēc rakstām apakšvirsrakstā: mūsu resurss nav saistīts ar Laimu Vaikuli. Nemaz. Un arī nav saistīts ar laima.",
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
    description: "Daudzi mums jautā, tāpēc rakstām apakšvirsrakstā: mūsu resurss nav saistīts ar Laimu Vaikuli. Nemaz. Un arī nav saistīts ar laima.",
    url: "https://jurmola.com/lv/",
    siteName: "Jurmola Telegraphs",
    locale: "lv_LV",
    type: "website",
  },
};

export default function LvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
