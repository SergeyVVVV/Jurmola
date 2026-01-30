import type { Metadata } from 'next';
import { articles } from '../../data/articles';
import { getArticleImageAbsoluteUrl } from '../../lib/article-image';

type Props = {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Next.js 15: params is now a Promise
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Find article by slug or ID (for backwards compatibility)
  const article = articles.find(a => 
    a.slug === slug || (!isNaN(Number(slug)) && a.id === Number(slug))
  );

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
    title: `${article.title.en} | Jurmola Telegraphs`,
    description: article.excerpt.en,
    keywords: ['Latvia', 'Jurmala', 'satire', 'news', 'Baltic', 'humor', 'Riga'],
    authors: [{ name: 'Jurmola Telegraphs' }],
    openGraph: {
      title: article.title.en,
      description: article.excerpt.en,
      url: articleUrl,
      siteName: 'Jurmola Telegraphs',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: ['Jurmola Telegraphs'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title.en,
      description: article.excerpt.en,
      images: [imageUrl],
      creator: '@JurmolaTelegraphs',
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

