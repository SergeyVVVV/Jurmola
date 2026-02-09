import { articles } from './data/articles';
import { getArticleImageUrl } from './lib/article-image';
import { localizedHref } from './lib/i18n-config';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadMoreArticles from './components/LoadMoreArticles';

// Russian version on root (Meduza structure)
const language = 'ru';

// Sort articles by date
const newsArticles = [...articles].sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  
  return dateB.getTime() - dateA.getTime();
});

const translations = {
  siteTitle: "Jurmola Telegraphs",
  tagline: "Лучший источник новостей Балтии",
  sections: {
    politics: "Политика",
    culture: "Культура",
    business: "Бизнес",
    opinion: "Мнение"
  },
  moreStories: "Больше новостей",
  allRightsReserved: 'Все права защищены'
};

export default function Home() {
  const featuredStory = newsArticles.find(article => article.featured);
  const regularStories = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="sr-only">Jurmola Telegraphs – Сатирические новости Балтии</h1>

        {/* Featured Story */}
        {featuredStory && (
          <article className="pb-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href={localizedHref(`news/${featuredStory.slug}`, language)} className="bg-gray-200 rounded-lg aspect-video overflow-hidden block">
                <img
                  src={getArticleImageUrl(featuredStory)}
                  alt={featuredStory.title[language]}
                  width={800}
                  height={600}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                  {featuredStory.category[language]}
                </span>
                <Link href={localizedHref(`news/${featuredStory.slug}`, language)}>
                  <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    {featuredStory.title[language]}
                  </h2>
                </Link>
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
          {translations.moreStories}
        </h3>

        {/* News Grid with Load More */}
        <LoadMoreArticles
          articles={regularStories}
          language={language}
          initialCount={18}
          loadMoreCount={15}
        />

        {/* Hidden crawlable links for articles beyond initial load (SEO) */}
        <nav aria-label="All articles" className="sr-only">
          {regularStories.slice(18).map((article) => (
            <Link key={article.id} href={localizedHref(`news/${article.slug}`, language)}>
              {article.title[language]}
            </Link>
          ))}
        </nav>
      </main>

      <Footer language={language} />
    </div>
  );
}
