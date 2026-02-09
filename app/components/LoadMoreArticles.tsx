'use client';

import { useState } from 'react';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';
import { getArticleImageUrl } from '../lib/article-image';
import type { Article } from '../data/articles';

interface LoadMoreArticlesProps {
  articles: Article[];
  language: 'ru' | 'en' | 'lv';
  initialCount: number; // 19 for homepage, 18 for categories
  loadMoreCount?: number; // 15 by default
}

const translations = {
  ru: {
    loadMore: 'Загрузить еще',
    noMore: 'Все новости загружены'
  },
  en: {
    loadMore: 'Load more',
    noMore: 'All news loaded'
  },
  lv: {
    loadMore: 'Ielādēt vairāk',
    noMore: 'Visas ziņas ielādētas'
  }
};

export default function LoadMoreArticles({
  articles,
  language,
  initialCount,
  loadMoreCount = 15
}: LoadMoreArticlesProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const t = translations[language];

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + loadMoreCount, articles.length));
  };

  return (
    <>
      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleArticles.map((article) => (
          <article key={article.id} className="pb-6">
            <Link 
              href={localizedHref(`news/${article.slug}`, language)} 
              className="bg-gray-200 rounded aspect-video overflow-hidden mb-4 block"
            >
              <img
                src={getArticleImageUrl(article)}
                alt={article.title[language]}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              {article.category[language]}
            </span>
            <Link href={localizedHref(`news/${article.slug}`, language)}>
              <h3 className="text-xl font-bold mt-2 mb-3 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                {article.title[language]}
              </h3>
            </Link>
            <p className="text-gray-700 mb-3 leading-relaxed">
              {article.excerpt[language]}
            </p>
            <div className="text-sm text-gray-500">
              {article.date} · {article.readTime}
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            {t.loadMore}
          </button>
        </div>
      )}

      {/* All Loaded Message */}
      {!hasMore && articles.length > initialCount && (
        <div className="text-center mt-12 text-gray-500">
          {t.noMore}
        </div>
      )}
    </>
  );
}
