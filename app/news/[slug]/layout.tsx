import type { Metadata } from 'next';
import { articles } from '../../data/articles';
import { getArticleImageAbsoluteUrl } from '../../lib/article-image';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

const language = 'ru';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Jurmola Telegraphs',
      description: 'The requested article could not be found.',
    };
  }

  const baseUrl = 'https://jurmola.com';
  const articleUrl = `${baseUrl}/news/${article.slug}`;
  const imageUrl = getArticleImageAbsoluteUrl(article, baseUrl);

  return {
    title: article.title[language],
    description: article.excerpt[language],
    keywords: ['Latvia', 'Jurmala', 'satire', 'news', 'Baltic', 'humor', 'Riga'],
    authors: [{ name: 'Jurmola Telegraphs' }],
    alternates: {
      canonical: articleUrl,
      languages: {
        'x-default': `${baseUrl}/news/${article.slug}`,
        'en': `${baseUrl}/en/news/${article.slug}`,
        'ru': `${baseUrl}/news/${article.slug}`,
        'lv': `${baseUrl}/lv/news/${article.slug}`,
      },
    },
    openGraph: {
      title: article.title[language],
      description: article.excerpt[language],
      url: articleUrl,
      siteName: 'Jurmola Telegraphs',
      locale: 'ru_RU',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: ['Jurmola Telegraphs'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title[language],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title[language],
      description: article.excerpt[language],
      images: [imageUrl],
      creator: '@JurmolaTelegraphs',
    },
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
