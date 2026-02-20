import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '../../../data/articles';
import { getArticleImageAbsoluteUrl, getArticleImageUrl } from '../../../lib/article-image';
import { localizedHref } from '../../../lib/i18n-config';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

const language = 'en';

const translations = {
  backToHome: "← Back to Home",
  siteTitle: "Jurmola Telegraphs",
  share: "Share this story",
  allRightsReserved: "All rights reserved"
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title[language],
    "description": article.excerpt[language],
    "genre": "Satire",
    "image": getArticleImageAbsoluteUrl(article, "https://jurmola.com"),
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author[language].replace(/By |Rakstījis |Rakstījusi |Автор: /g, '')
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jurmola Telegraphs",
      "url": "https://jurmola.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jurmola.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jurmola.com/en/news/${article.slug}`
    },
    "articleSection": article.category[language],
    "inLanguage": language
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      
      <Header language={language} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-semibold uppercase tracking-wide">
            {article.category[language]}
          </span>
          <time dateTime={new Date(article.date).toISOString()} className="text-gray-500">
            {article.date}
          </time>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{article.readTime}</span>
        </div>

        <h1 className="text-2xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {article.title[language]}
        </h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-r">
          <p className="text-sm text-gray-800">
            ⚠️ <strong>Satire:</strong> This is a fictional story for entertainment.{' '}
            <Link href={localizedHref('about', language)} className="underline hover:text-gray-900">
              Learn more about us
            </Link>
          </p>
        </div>

        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={getArticleImageUrl(article)}
            alt={article.title[language]}
            width={800}
            height={600}
            quality={85}
            priority={article.featured || false}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto"
          />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <p className="text-lg leading-relaxed">
            <strong className="text-blue-900 font-semibold">At a Glance:</strong>
            {' '}
            <span className="text-gray-800">{article.excerpt[language]}</span>
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {article.fullContent[language].split('\n\n').map((paragraph, index) => {
            if (paragraph.includes('\n•')) {
              const lines = paragraph.split('\n');
              const beforeBullets: string[] = [];
              const bullets: string[] = [];
              let section: 'before' | 'bullets' = 'before';
              
              lines.forEach(line => {
                if (line.trim().startsWith('•')) {
                  section = 'bullets';
                  bullets.push(line.trim().substring(1).trim());
                } else if (section === 'before') {
                  beforeBullets.push(line);
                }
              });
              
              return (
                <div key={index} className="mb-6">
                  {beforeBullets.length > 0 && (
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {beforeBullets.join('\n')}
                    </p>
                  )}
                  {bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="text-lg leading-relaxed text-gray-800">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
            
            return (
              <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">{translations.share}</p>
          <div className="flex gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title[language])}&url=${encodeURIComponent(`https://jurmola.com/en/news/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Twitter
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://jurmola.com/en/news/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Facebook
            </a>
          </div>
        </div>
      </article>

      <Footer language={language} />
    </div>
  );
}
