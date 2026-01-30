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
    en: "Culture in Jurmala",
    lv: "Kultūra Jūrmalā",
    ru: "Культура в Юрмале"
  },
  pageDescription: {
    en: "Cultural satire from the heart of the Baltics. Coverage of art, music, literature, and the occasional inexplicable monument.",
    lv: "Kultūras satīra no Baltijas sirds. Mākslas, mūzikas, literatūras apskats un dažreiz neskaidri pieminekļi.",
    ru: "Культурная сатира из сердца Балтии. Искусство, музыка, литература и случайные необъяснимые памятники."
  },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang as Language;
  
  const baseUrl = 'https://jurmola.com';
  const hreflangLinks = generateHreflangLinks(`/${lang}/culture/`, baseUrl);
  
  return {
    title: `${translations.pageTitle[lang]} | Jurmola Telegraphs`,
    description: translations.pageDescription[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/culture/`,
      languages: Object.fromEntries(
        hreflangLinks
          .filter(link => link.lang !== 'x-default')
          .map(link => [link.lang, link.href])
      ),
    },
    openGraph: {
      title: `${translations.pageTitle[lang]} | Jurmola Telegraphs`,
      description: translations.pageDescription[lang],
      url: `${baseUrl}/${lang}/culture/`,
      siteName: 'Jurmola Telegraphs',
      locale: lang === 'en' ? 'en_US' : lang === 'ru' ? 'ru_RU' : 'lv_LV',
      type: 'website',
    },
  };
}

export default async function CulturePage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const language = resolvedParams.lang as Language;

  const cultureArticles = articles
    .filter(a => a.categories.includes('culture'))
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
              <Link href="/en/culture/" className={`px-3 py-1 text-sm ${language === 'en' ? 'font-bold underline' : ''}`}>
                {languageLabels.en}
              </Link>
              <Link href="/lv/culture/" className={`px-3 py-1 text-sm ${language === 'lv' ? 'font-bold underline' : ''}`}>
                {languageLabels.lv}
              </Link>
              <Link href="/ru/culture/" className={`px-3 py-1 text-sm ${language === 'ru' ? 'font-bold underline' : ''}`}>
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
          {cultureArticles.map((article) => (
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
