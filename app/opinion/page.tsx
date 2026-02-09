import { articles } from '../data/articles';
import { getArticleImageUrl } from '../lib/article-image';
import { localizedHref } from '../lib/i18n-config';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadMoreArticles from '../components/LoadMoreArticles';

const language = 'ru';

const translations = {
  pageTitle: "Мнение",
  pageDescription: "Смелые взгляды на балтийскую жизнь. Горячие мнения, холодные истины и теплые наблюдения обо всем - от памятников до картофеля.",
  backToHome: "← Назад на главную"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/opinion/',
    languages: {
      'x-default': 'https://jurmola.com/opinion/',
      'en': 'https://jurmola.com/en/opinion/',
      'ru': 'https://jurmola.com/opinion/',
      'lv': 'https://jurmola.com/lv/opinion/',
    },
  },
  openGraph: {
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    url: 'https://jurmola.com/opinion/',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jurmola Telegraphs – Мнение' }],
  },
};

export default function OpinionPage() {
  const opinionArticles = articles
    .filter(a => a.categories.includes('opinion'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="opinion" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.pageTitle}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          {translations.pageDescription}
        </p>
        
        <LoadMoreArticles 
          articles={opinionArticles}
          language={language}
          initialCount={18}
          loadMoreCount={15}
        />
      </main>

      <Footer language={language} />
    </div>
  );
}
