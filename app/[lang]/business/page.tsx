import { articles } from '../../data/articles';
import { getArticleImageUrl } from '../../lib/article-image';
import { type Language, localizedHref, languageLabels, generateHreflangLinks } from '../../lib/i18n-config';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ lang: string }>;
};

const translations = {
  pageTitle: {
    en: "Business in Jurmala",
    lv: "Bizness Jūrmalā",
    ru: "Бизнес в Юрмале"
  },
  pageDescription: {
    en: "Economic satire from the Baltic business hub. Market analysis, startup stories, and suspiciously successful potato ventures.",
    lv: "Ekonomiskā satīra no Baltijas biznesa centra. Tirgus analīze, jaunuzņēmumu stāsti un aizdomīgi veiksmīgi kartupeļu projekti.",
    ru: "Экономическая сатира из балтийского бизнес-хаба. Анализ рынка, истории стартапов и подозрительно успешные картофельные предприятия."
  },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang as Language;
  
  const baseUrl = 'https://jurmola.com';
  const hreflangLinks = generateHreflangLinks(`/${lang}/business/`, baseUrl);
  
  return {
    title: `${translations.pageTitle[lang]} | Jurmola Telegraphs`,
    description: translations.pageDescription[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/business/`,
      languages: Object.fromEntries(
        hreflangLinks
          .filter(link => link.lang !== 'x-default')
          .map(link => [link.lang, link.href])
      ),
    },
    openGraph: {
      title: `${translations.pageTitle[lang]} | Jurmola Telegraphs`,
      description: translations.pageDescription[lang],
      url: `${baseUrl}/${lang}/business/`,
      siteName: 'Jurmola Telegraphs',
      locale: lang === 'en' ? 'en_US' : lang === 'ru' ? 'ru_RU' : 'lv_LV',
      type: 'website',
    },
  };
}

export default async function BusinessPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const language = resolvedParams.lang as Language;

  const businessArticles = articles
    .filter(a => a.categories.includes('business'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href={localizedHref('', language)} className="text-sm hover:underline">
              {translations.backToHome[language]}
            </Link>
            <div className="flex gap-2">
              <Link href="/en/business/" className={`px-3 py-1 text-sm ${language === 'en' ? 'font-bold underline' : ''}`}>
                {languageLabels.en}
              </Link>
              <Link href="/lv/business/" className={`px-3 py-1 text-sm ${language === 'lv' ? 'font-bold underline' : ''}`}>
                {languageLabels.lv}
              </Link>
              <Link href="/ru/business/" className={`px-3 py-1 text-sm ${language === 'ru' ? 'font-bold underline' : ''}`}>
                {languageLabels.ru}
              </Link>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            {translations.pageTitle[language]}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {translations.pageDescription[language]}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {businessArticles.map((article) => (
            <article key={article.id} className="pb-6">
              <Link href={localizedHref(`news/${article.slug}`, language)} className="bg-gray-200 rounded aspect-video overflow-hidden mb-4 block">
                <img 
                  src={getArticleImageUrl(article)} 
                  alt={article.title[language]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                {article.category[language]}
              </span>
              <Link href={localizedHref(`news/${article.slug}`, language)}>
                <h3 className="text-xl font-bold mt-2 mb-3 leading-tight hover:underline cursor-pointer" 
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  {article.title[language]}
                </h3>
              </Link>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {article.excerpt[language]}
              </p>
              <div className="text-xs text-gray-500">
                {article.date} · {article.readTime}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
