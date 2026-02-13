import { articles } from '../../data/articles';
import { getArticleImageUrl } from '../../lib/article-image';
import { localizedHref } from '../../lib/i18n-config';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadMoreArticles from '../../components/LoadMoreArticles';

const language = 'lv';

const translations = {
  pageTitle: "Politika Jūrmalā",
  pageDescription: "Jūsu avots politiskajai satīrai no Jūrmalas un tālāk. Jaunākie politiskie ziņojumi, intervijas un padziļināta analīze.",
  backToHome: "← Atpakaļ uz sākumu"
};

export const metadata: Metadata = {
  title: `${translations.pageTitle} – Jurmola Telegraphs`,
  description: translations.pageDescription,
  alternates: {
    canonical: 'https://jurmola.com/lv/politics/',
    languages: {
      'x-default': 'https://jurmola.com/politics/',
      'en': 'https://jurmola.com/en/politics/',
      'ru': 'https://jurmola.com/politics/',
      'lv': 'https://jurmola.com/lv/politics/',
    },
  },
  openGraph: {
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    url: 'https://jurmola.com/lv/politics/',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${translations.pageTitle} – Jurmola Telegraphs`,
    description: translations.pageDescription,
    creator: '@JurmolaTelegraphs',
  },
};

export default function PoliticsPage() {
  const politicsArticles = articles
    .filter(a => a.categories.includes('politics'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="politics" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.pageTitle}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          {translations.pageDescription}
        </p>
        
        <LoadMoreArticles 
          articles={politicsArticles}
          language={language}
          initialCount={18}
          loadMoreCount={15}
        />
      </main>

      <Footer language={language} />
    </div>
  );
}
