import type { Metadata } from 'next';
import { articles } from '../../../data/articles';
import { getArticleImageAbsoluteUrl } from '../../../lib/article-image';
import { generateHreflangLinks, type Language } from '../../../lib/i18n-config';

type Props = {
  params: Promise<{ slug: string; lang: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang as Language;
  
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Jurmola Telegraphs',
      description: 'The requested article could not be found.',
    };
  }

  const baseUrl = 'https://jurmola.com';
  const articleUrl = `${baseUrl}/${lang}/news/${article.slug}`;
  const imageUrl = getArticleImageAbsoluteUrl(article, baseUrl);
  
  const hreflangLinks = generateHreflangLinks(`/${lang}/news/${article.slug}`, baseUrl);

  return {
    title: `${article.title[lang]} | Jurmola Telegraphs`,
    description: article.excerpt[lang],
    keywords: ['Latvia', 'Jurmala', 'satire', 'news', 'Baltic', 'humor', 'Riga'],
    authors: [{ name: 'Jurmola Telegraphs' }],
    alternates: {
      canonical: articleUrl,
      languages: Object.fromEntries(
        hreflangLinks
          .filter(link => link.lang !== 'x-default')
          .map(link => [link.lang, link.href])
      ),
    },
    openGraph: {
      title: article.title[lang],
      description: article.excerpt[lang],
      url: articleUrl,
      siteName: 'Jurmola Telegraphs',
      locale: lang === 'en' ? 'en_US' : lang === 'ru' ? 'ru_RU' : 'lv_LV',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: ['Jurmola Telegraphs'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title[lang],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title[lang],
      description: article.excerpt[lang],
      images: [imageUrl],
      creator: '@JurmolaTelegraphs',
    },
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
