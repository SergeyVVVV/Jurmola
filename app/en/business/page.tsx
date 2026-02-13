import { articles } from '../../data/articles';
import { getArticleImageUrl } from '../../lib/article-image';
import { localizedHref } from '../../lib/i18n-config';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadMoreArticles from '../../components/LoadMoreArticles';

const language = 'en';

const translations = {
  pageTitle: "Business in Jurmala",
  pageDescription: "Economic satire from the Baltic business hub. Market analysis, startup stories, and suspiciously successful potato ventures.",
  backToHome: "← Back to Home"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/en/business/',
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
    url: 'https://jurmola.com/en/business/',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    creator: '@JurmolaTelegraphs',
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
