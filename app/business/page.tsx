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
  pageTitle: "Бизнес в Юрмале",
  pageDescription: "Экономическая сатира из балтийского бизнес-хаба. Анализ рынка, истории стартапов и подозрительно успешные картофельные предприятия.",
  backToHome: "← Назад на главную"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/business/',
    languages: {
      'x-default': 'https://jurmola.com/business/',
      'en': 'https://jurmola.com/en/business/',
      'ru': 'https://jurmola.com/business/',
      'lv': 'https://jurmola.com/lv/business/',
    },
  },
  openGraph: {
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    url: 'https://jurmola.com/business/',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jurmola Telegraphs – Бизнес' }],
  },
};

export default function BusinessPage() {
  const businessArticles = articles
    .filter(a => a.categories.includes('business'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="business" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.pageTitle}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          {translations.pageDescription}
        </p>
        
        <LoadMoreArticles 
          articles={businessArticles}
          language={language}
          initialCount={18}
          loadMoreCount={15}
        />
      </main>

      <Footer language={language} />
    </div>
  );
}
