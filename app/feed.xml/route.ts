import { NextResponse } from 'next/server';
import { articles, Article } from '../data/articles';

function generateRSSItem(article: Article, language: 'en' | 'lv' | 'ru') {
  const baseUrl = 'https://jurmola.com';
  const title = article.title[language];
  const description = article.excerpt[language];
  const link = `${baseUrl}/news/${article.slug}`;
  const guid = `${baseUrl}/news/${article.slug}`;
  const pubDate = new Date(article.date).toUTCString();
  const category = article.category[language];

  return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid>${guid}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <category><![CDATA[${category}]]></category>
    </item>
  `;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = (searchParams.get('lang') || 'en') as 'en' | 'lv' | 'ru';

  const rssItems = articles.map(article => generateRSSItem(article, language)).join('');

  const languageNames = {
    en: 'English',
    lv: 'Latviešu',
    ru: 'Русский'
  };

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Jurmola Telegraphs (${languageNames[language]})</title>
    <link>https://jurmola.com</link>
    <description>The Baltic's Finest News Source - Satirical news from Latvia, Jurmala, and beyond</description>
    <language>${language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}

