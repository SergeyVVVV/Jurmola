import { MetadataRoute } from 'next'
import { articles } from './data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jurmola.com';
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Homepage for each language (highest priority)
  // Russian on root, EN and LV with prefixes
  routes.push({
    url: `${baseUrl}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en/`,
        ru: `${baseUrl}/`,
        lv: `${baseUrl}/lv/`,
      },
    },
  });
  
  routes.push({
    url: `${baseUrl}/en/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en/`,
        ru: `${baseUrl}/`,
        lv: `${baseUrl}/lv/`,
      },
    },
  });
  
  routes.push({
    url: `${baseUrl}/lv/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en/`,
        ru: `${baseUrl}/`,
        lv: `${baseUrl}/lv/`,
      },
    },
  });

  // About pages for each language (high priority for E-E-A-T)
  routes.push({
    url: `${baseUrl}/about/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/en/about/`,
        ru: `${baseUrl}/about/`,
        lv: `${baseUrl}/lv/about/`,
      },
    },
  });
  
  routes.push({
    url: `${baseUrl}/en/about/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/en/about/`,
        ru: `${baseUrl}/about/`,
        lv: `${baseUrl}/lv/about/`,
      },
    },
  });
  
  routes.push({
    url: `${baseUrl}/lv/about/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/en/about/`,
        ru: `${baseUrl}/about/`,
        lv: `${baseUrl}/lv/about/`,
      },
    },
  });

  // Yurmola keyword page (Russian only - target keyword "юрмола")
  routes.push({
    url: `${baseUrl}/yurmola/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.95, // High priority for target keyword
  });

  // Category pages for each language (high priority for SEO)
  const categories = ['politics', 'culture', 'business', 'opinion'];
  categories.forEach(category => {
    // Russian (root)
    routes.push({
      url: `${baseUrl}/${category}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/${category}/`,
          ru: `${baseUrl}/${category}/`,
          lv: `${baseUrl}/lv/${category}/`,
        },
      },
    });
    
    // English
    routes.push({
      url: `${baseUrl}/en/${category}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/${category}/`,
          ru: `${baseUrl}/${category}/`,
          lv: `${baseUrl}/lv/${category}/`,
        },
      },
    });
    
    // Latvian
    routes.push({
      url: `${baseUrl}/lv/${category}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/${category}/`,
          ru: `${baseUrl}/${category}/`,
          lv: `${baseUrl}/lv/${category}/`,
        },
      },
    });
  });

  // Article pages for each language (high priority content)
  articles.forEach(article => {
    // Russian (root)
    routes.push({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/news/${article.slug}`,
          ru: `${baseUrl}/news/${article.slug}`,
          lv: `${baseUrl}/lv/news/${article.slug}`,
        },
      },
    });
    
    // English
    routes.push({
      url: `${baseUrl}/en/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/news/${article.slug}`,
          ru: `${baseUrl}/news/${article.slug}`,
          lv: `${baseUrl}/lv/news/${article.slug}`,
        },
      },
    });
    
    // Latvian
    routes.push({
      url: `${baseUrl}/lv/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/news/${article.slug}`,
          ru: `${baseUrl}/news/${article.slug}`,
          lv: `${baseUrl}/lv/news/${article.slug}`,
        },
      },
    });
  });

  // RSS feeds (lower priority utility pages)
  ['en', 'ru', 'lv'].forEach(lang => {
    routes.push({
      url: `${baseUrl}/feed.xml?lang=${lang}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    });
  });

  return routes;
}


