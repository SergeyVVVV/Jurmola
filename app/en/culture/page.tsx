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
  pageTitle: "Culture in Jurmala",
  pageDescription: "Cultural satire from the heart of the Baltics. Coverage of art, music, literature, and the occasional inexplicable monument.",
  backToHome: "← Back to Home"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/en/culture/',
    languages: {
      'x-default': 'https://jurmola.com/culture/',
      'en': 'https://jurmola.com/en/culture/',
      'ru': 'https://jurmola.com/culture/',
      'lv': 'https://jurmola.com/lv/culture/',
    },
  },
  openGraph: {
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    url: 'https://jurmola.com/en/culture/',
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

export default function CulturePage() {
  const cultureArticles = articles
    .filter(a => a.categories.includes('culture'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="culture" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.pageTitle}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          {translations.pageDescription}
        </p>
        
        <LoadMoreArticles 
          articles={cultureArticles}
          language={language}
          initialCount={18}
          loadMoreCount={15}
        />
      </main>

      <Footer language={language} />
    </div>
  );
}
