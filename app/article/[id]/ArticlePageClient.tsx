'use client';

import { useState } from 'react';

type Language = 'en' | 'lv' | 'ru';

interface ArticleContent {
  id: number;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  fullContent: { en: string; lv: string; ru: string };
  date: string;
  category: { en: string; lv: string; ru: string };
  readTime: string;
  imageUrl: string;
  author: { en: string; lv: string; ru: string };
}

// Import articles data
import { articles } from './articlesData';

const translations = {
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumlapu", ru: "← Назад на главную" },
  siteTitle: { en: "Jurmola Telegraphs", lv: "Jurmola Telegraphs", ru: "Jurmola Telegraphs" },
  share: { en: "Share this story", lv: "Dalīties ar šo stāstu", ru: "Поделиться этой историей" }
};

export default function ArticlePageClient({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id);
  const [language, setLanguage] = useState<Language>('en');

  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </div>
    );
  }

  const fullArticleContent = article.fullContent?.[language] || article.excerpt[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-gray-600 hover:text-black">{translations.backToHome[language]}</a>
          <div className="flex gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${language === 'en' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('lv')}
              className={`px-2 py-1 ${language === 'lv' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 ${language === 'ru' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              RU
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <a href="/">
            <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle[language]}
            </h1>
          </a>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-semibold uppercase tracking-wide">
            {article.category[language]}
          </span>
          <span className="text-gray-500">{article.date}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {article.title[language]}
        </h1>

        {/* Author */}
        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title[language]}
            className="w-full h-auto"
          />
        </div>

        {/* Excerpt */}
        <div className="text-xl leading-relaxed mb-8 font-semibold text-gray-800 border-l-4 border-black pl-6">
          {article.excerpt[language]}
        </div>

        {/* Full Content */}
        <div className="prose prose-lg max-w-none">
          {fullArticleContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">{translations.share[language]}</p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = article.title[language];
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Twitter
            </button>
            <button 
              onClick={() => {
                const url = window.location.href;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Facebook
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <a href="/">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              {translations.siteTitle[language]}
            </h3>
          </a>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Jurmola Telegraphs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

