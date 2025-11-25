'use client';

import { useState } from 'react';
import { useLanguage, Language } from './hooks/useLanguage';
import { articles } from './data/articles';

// Используем централизованные данные и сортируем по дате
const newsArticles = [...articles].sort((a, b) => {
  // Featured статья всегда первая
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  
  // Парсим даты в формате "Nov 25, 2025"
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  
  // Сортируем по убыванию (новые первыми)
  return dateB.getTime() - dateA.getTime();
});

const translations = {
  siteTitle: { en: "Jurmola Telegraphs", lv: "Jurmola Telegraphs", ru: "Jurmola Telegraphs" },
  tagline: {
    en: "The Baltic's Finest News Source",
    lv: "Baltijas Labākais Ziņu Avots",
    ru: "Лучший источник новостей Балтии"
  },
  sections: {
    news: { en: "News", lv: "Ziņas", ru: "Новости" },
    politics: { en: "Politics", lv: "Politika", ru: "Политика" },
    culture: { en: "Culture", lv: "Kultūra", ru: "Культура" },
    business: { en: "Business", lv: "Bizness", ru: "Бизнес" },
    opinion: { en: "Opinion", lv: "Viedoklis", ru: "Мнение" }
  },
  topStories: {
    en: "Top Stories",
    lv: "Galvenās Ziņas",
    ru: "Главные новости"
  },
  moreStories: {
    en: "More News",
    lv: "Vairāk Ziņu",
    ru: "Больше новостей"
  }
};

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredStory = newsArticles.find(article => article.featured);
  const regularStories = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">{featuredStory?.date}</div>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'en' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('lv')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'lv' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'ru' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              RU
            </button>
            <span className="text-gray-300">|</span>
            <a 
              href={`/feed.xml?lang=${language}`} 
              className="px-2 py-1 text-orange-600 hover:text-orange-700 font-semibold transition cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              title="RSS Feed"
            >
              📡 RSS
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle[language]}
            </h1>
            <p className="text-sm text-gray-600 italic">{translations.tagline[language]}</p>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="border-b-2 border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            <a 
              href="/politics/" 
              className="text-lg font-semibold hover:text-orange-600 transition cursor-pointer"
            >
              {translations.sections.politics[language]}
            </a>
            <a 
              href="/culture/" 
              className="text-lg font-semibold hover:text-orange-600 transition cursor-pointer"
            >
              {translations.sections.culture[language]}
            </a>
            <a 
              href="/business/" 
              className="text-lg font-semibold hover:text-orange-600 transition cursor-pointer"
            >
              {translations.sections.business[language]}
            </a>
            <a 
              href="/opinion/" 
              className="text-lg font-semibold hover:text-orange-600 transition cursor-pointer"
            >
              {translations.sections.opinion[language]}
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Featured Story */}
        {featuredStory && (
          <article className="pb-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                <img 
                  src={featuredStory.imageUrl} 
                  alt={featuredStory.title['en']}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                  {featuredStory.category[language]}
                </span>
                <a href={`/news/${featuredStory.slug}`}>
                  <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    {featuredStory.title[language]}
                  </h2>
                </a>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {featuredStory.excerpt[language]}
                </p>
                <div className="text-sm text-gray-500">
                  {featuredStory.date} · {featuredStory.readTime}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Section Title */}
        <h3 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.moreStories[language]}
        </h3>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {regularStories.map((article) => (
            <article key={article.id} className="pb-6">
              <div className="bg-gray-200 rounded aspect-video overflow-hidden mb-4">
                <img 
                  src={article.imageUrl} 
                  alt={article.title['en']}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                {article.category[language]}
              </span>
                <a href={`/news/${article.slug}`}>
                  <h3 className="text-xl font-bold mt-2 mb-3 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    {article.title[language]}
                  </h3>
                </a>
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

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold mb-4">{translations.siteTitle[language]}</p>
            <div className="mb-4">
              <a 
                href={`/feed.xml?lang=${language}`} 
                className="inline-block px-4 py-2 text-orange-600 hover:text-orange-700 font-semibold transition cursor-pointer border border-orange-600 hover:border-orange-700 rounded"
                target="_blank"
                rel="noopener noreferrer"
                title="RSS Feed"
              >
                📡 Subscribe via RSS
              </a>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 Jurmola. {language === 'en' ? 'All rights reserved' : language === 'lv' ? 'Visas tiesības aizsargātas' : 'Все права защищены'}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
