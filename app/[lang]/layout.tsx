import type { Metadata } from "next";
import { languages, isValidLanguage, generateHreflangLinks, type Language } from '../lib/i18n-config';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang as Language;
  
  if (!isValidLanguage(lang)) {
    return {};
  }
  
  const baseUrl = 'https://jurmola.com';
  const hreflangLinks = generateHreflangLinks(`/${lang}/`, baseUrl);
  
  const titles: Record<Language, string> = {
    en: "Jurmola Telegraphs - Your Jurmala, Your Capital",
    ru: "Jurmola Telegraphs - Твоя Юрмала, Твоя Столица",
    lv: "Jurmola Telegraphs - Jūsu Jūrmala, Jūsu Galvaspilsēta",
  };
  
  const descriptions: Record<Language, string> = {
    en: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
    ru: "Многие спрашивают нас, поэтому пишем в подзаголовке: наш ресурс не имеет никакого отношения к Лайме Вайкуле. Вообще. И к лаймам тоже.",
    lv: "Daudzi mums jautā, tāpēc rakstām apakšvirsrakstā: mūsu resurss nav saistīts ar Laimu Vaikuli. Nemaz. Un arī nav saistīts ar laima.",
  };
  
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/`,
      languages: Object.fromEntries(
        hreflangLinks
          .filter(link => link.lang !== 'x-default')
          .map(link => [link.lang, link.href])
      ),
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang;
  
  if (!isValidLanguage(lang)) {
    notFound();
  }
  
  return <>{children}</>;
}
