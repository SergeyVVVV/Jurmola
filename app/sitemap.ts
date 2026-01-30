import { MetadataRoute } from 'next'
import { articles } from './data/articles';
import { languages } from './lib/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jurmola.com';
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Homepage for each language (highest priority)
  languages.forEach(lang => {
    routes.push({
      url: `${baseUrl}/${lang}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en/`,
          ru: `${baseUrl}/ru/`,
          lv: `${baseUrl}/lv/`,
        },
      },
    });
  });

  // Category pages for each language (high priority for SEO)
  const categories = ['politics', 'culture', 'business', 'opinion'];
  categories.forEach(category => {
    languages.forEach(lang => {
      routes.push({
        url: `${baseUrl}/${lang}/${category}/`,
        lastModified: now,
        changeFrequency: 'daily' as const,
        priority: 0.9,
        alternates: {
          languages: {
            en: `${baseUrl}/en/${category}/`,
            ru: `${baseUrl}/ru/${category}/`,
            lv: `${baseUrl}/lv/${category}/`,
          },
        },
      });
    });
  });

  // Article pages for each language (high priority content)
  articles.forEach(article => {
    languages.forEach(lang => {
      routes.push({
        url: `${baseUrl}/${lang}/news/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/news/${article.slug}`,
            ru: `${baseUrl}/ru/news/${article.slug}`,
            lv: `${baseUrl}/lv/news/${article.slug}`,
          },
        },
      });
    });
  });

  // RSS feeds (lower priority utility pages)
  languages.forEach(lang => {
    routes.push({
      url: `${baseUrl}/feed.xml?lang=${lang}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    });
  });

  return routes;
}

