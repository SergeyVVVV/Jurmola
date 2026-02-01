import { articles } from '../../data/articles';
import { getArticleImageUrl } from '../../lib/article-image';
import { localizedHref } from '../../lib/i18n-config';
import Link from 'next/link';
import type { Metadata } from 'next';

const language = 'lv';

const translations = {
  pageTitle: "Kultūra Jūrmalā",
  pageDescription: "Kultūras satīra no Baltijas sirds. Mākslas, mūzikas, literatūras apskats un dažreiz neskaidri pieminekļi.",
  backToHome: "← Atpakaļ uz sākumu"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/lv/culture/',
    languages: {
      'en': 'https://jurmola.com/en/culture/',
      'ru': 'https://jurmola.com/culture/',
      'lv': 'https://jurmola.com/lv/culture/',
    },
  },
  openGraph: {
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    url: 'https://jurmola.com/lv/culture/',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
  },
};

export default function CulturePage() {
  const cultureArticles = articles
    .filter(a => a.categories.includes('culture'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href={localizedHref('', language)} className="text-sm hover:underline">
              {translations.backToHome}
            </Link>
            <div className="flex gap-2">
              <Link href="/culture/" className="px-3 py-1 text-sm">RU</Link>
              <Link href="/en/culture/" className="px-3 py-1 text-sm">EN</Link>
              <Link href="/lv/culture/" className="px-3 py-1 text-sm font-bold underline">LV</Link>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            {translations.pageTitle}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {translations.pageDescription}
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
