import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ArticleTranslations {
  en: string;
  lv: string;
  ru: string;
}

interface Article {
  id: number;
  title: ArticleTranslations;
  excerpt: ArticleTranslations;
  fullContent: ArticleTranslations;
  date: string;
  category: ArticleTranslations;
  readTime: string;
  imageUrl: string;
  author: ArticleTranslations;
  featured?: boolean;
}

const categories = [
  { en: "Politics", lv: "Politika", ru: "Политика" },
  { en: "Culture", lv: "Kultūra", ru: "Культура" },
  { en: "Business", lv: "Bizness", ru: "Бизнес" },
  { en: "Science", lv: "Zinātne", ru: "Наука" },
  { en: "Opinion", lv: "Viedoklis", ru: "Мнение" },
  { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
  { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
];

const authors = [
  { en: "By Marina Ozola", lv: "Rakstījusi Marina Ozola", ru: "Автор: Марина Озола" },
  { en: "By Jānis Liepa", lv: "Rakstījis Jānis Liepa", ru: "Автор: Янис Лиепа" },
  { en: "By Laura Kalniņa", lv: "Rakstījusi Laura Kalniņa", ru: "Автор: Лаура Калниня" },
  { en: "By Andris Ozoliņš", lv: "Rakstījis Andris Ozoliņš", ru: "Автор: Андрис Озолиньш" },
  { en: "By Kristīne Ozoliņa", lv: "Rakstījusi Kristīne Ozoliņa", ru: "Автор: Кристине Озолиня" },
];

const unsplashTopics = [
  'photo-1465495976277-4387d4b0b4c6', // Wedding
  'photo-1513026705753-bc3fffca8bf4', // Monument
  'photo-1518977676601-b53f82aba655', // Potato
  'photo-1439066615861-d1af74d74000', // Sea
  'photo-1501594907352-04cda38ebc29', // River
  'photo-1456513080510-7bf3a84b82f8', // Library/Books
  'photo-1593642532744-d377ab507dc8', // Stone/Rock
  'photo-1526778548025-fa2f459cd5c1', // Map/Geography
];

async function generateArticle(): Promise<Article> {
  console.log('🤖 Generating new satirical article about Latvia...\n');

  const prompt = `You are a writer for "Jurmola Telegraphs" - a satirical news site similar to The Onion, but focused on Latvia, Jurmala, Riga, and Baltic region humor.

Generate a completely NEW and ORIGINAL satirical news article. The article should be:
- Absurd and humorous, but written in a serious journalistic tone
- About Latvia, Riga, Jurmala, or Baltic culture/politics/everyday life
- Creative and unexpected - avoid clichés
- Well-structured with quotes from fictional sources
- Include specific details, names, and statistics to make it feel authentic

Generate the article in English with the following structure:

1. HEADLINE (creative and attention-grabbing)
2. EXCERPT (2-3 sentences summarizing the absurd premise)
3. FULL ARTICLE (400-600 words, written like a real news article with quotes, details, and a humorous conclusion)

Format your response as JSON:
{
  "title": "The headline",
  "excerpt": "The excerpt",
  "fullContent": "The full article content"
}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a brilliant satirical news writer for a Latvian version of The Onion. Your humor is clever, absurd, and perfectly captures the quirks of Baltic life.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 1.0,
    response_format: { type: "json_object" },
  });

  const englishArticle = JSON.parse(completion.choices[0].message.content || '{}');
  console.log('✅ English article generated');
  console.log(`📰 Title: ${englishArticle.title}\n`);

  // Translate to Latvian
  console.log('🇱🇻 Translating to Latvian...');
  const latvianCompletion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a professional translator. Translate the satirical article to Latvian, maintaining the humor and tone.",
      },
      {
        role: "user",
        content: `Translate this article to Latvian:\n\nTitle: ${englishArticle.title}\nExcerpt: ${englishArticle.excerpt}\nContent: ${englishArticle.fullContent}\n\nReturn as JSON with keys: title, excerpt, fullContent`,
      },
    ],
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const latvianArticle = JSON.parse(latvianCompletion.choices[0].message.content || '{}');
  console.log('✅ Latvian translation complete\n');

  // Translate to Russian
  console.log('🇷🇺 Translating to Russian...');
  const russianCompletion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a professional translator. Translate the satirical article to Russian, maintaining the humor and tone.",
      },
      {
        role: "user",
        content: `Translate this article to Russian:\n\nTitle: ${englishArticle.title}\nExcerpt: ${englishArticle.excerpt}\nContent: ${englishArticle.fullContent}\n\nReturn as JSON with keys: title, excerpt, fullContent`,
      },
    ],
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const russianArticle = JSON.parse(russianCompletion.choices[0].message.content || '{}');
  console.log('✅ Russian translation complete\n');

  // Get current articles to determine next ID
  const articlePagePath = path.join(process.cwd(), 'app/article/[id]/page.tsx');
  const content = fs.readFileSync(articlePagePath, 'utf-8');
  const idMatches = content.match(/id:\s*(\d+)/g) || [];
  const ids = idMatches.map(match => parseInt(match.match(/\d+/)![0]));
  const maxId = Math.max(...ids, 0);
  const newId = maxId + 1;

  // Random selections
  const category = categories[Math.floor(Math.random() * categories.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
  const imageId = unsplashTopics[Math.floor(Math.random() * unsplashTopics.length)];
  const readTime = `${Math.floor(Math.random() * 6) + 5} min read`;

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const article: Article = {
    id: newId,
    title: {
      en: englishArticle.title,
      lv: latvianArticle.title,
      ru: russianArticle.title,
    },
    excerpt: {
      en: englishArticle.excerpt,
      lv: latvianArticle.excerpt,
      ru: russianArticle.excerpt,
    },
    fullContent: {
      en: englishArticle.fullContent,
      lv: latvianArticle.fullContent,
      ru: russianArticle.fullContent,
    },
    date: dateStr,
    category,
    readTime,
    imageUrl: `https://images.unsplash.com/${imageId}?w=800&h=600&fit=crop`,
    author,
    featured: false,
  };

  return article;
}

async function insertArticleIntoCode(article: Article) {
  console.log('📝 Inserting article into code...\n');

  const articlePagePath = path.join(process.cwd(), 'app/article/[id]/page.tsx');
  let content = fs.readFileSync(articlePagePath, 'utf-8');

  // Find the articles array and insert the new article at the beginning
  const articlesArrayMatch = content.match(/const articles: ArticleContent\[\] = \[/);
  if (!articlesArrayMatch) {
    throw new Error('Could not find articles array in page.tsx');
  }

  const insertPosition = articlesArrayMatch.index! + articlesArrayMatch[0].length;

  // Format the new article
  const articleCode = `
  {
    id: ${article.id},
    title: {
      en: "${article.title.en.replace(/"/g, '\\"')}",
      lv: "${article.title.lv.replace(/"/g, '\\"')}",
      ru: "${article.title.ru.replace(/"/g, '\\"')}"
    },
    excerpt: {
      en: "${article.excerpt.en.replace(/"/g, '\\"')}",
      lv: "${article.excerpt.lv.replace(/"/g, '\\"')}",
      ru: "${article.excerpt.ru.replace(/"/g, '\\"')}"
    },
    fullContent: {
      en: \`${article.fullContent.en.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      lv: \`${article.fullContent.lv.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      ru: \`${article.fullContent.ru.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    },
    date: "${article.date}",
    category: { en: "${article.category.en}", lv: "${article.category.lv}", ru: "${article.category.ru}" },
    readTime: "${article.readTime}",
    imageUrl: "${article.imageUrl}",
    author: { en: "${article.author.en}", lv: "${article.author.lv}", ru: "${article.author.ru}" }
  },`;

  content = content.slice(0, insertPosition) + articleCode + content.slice(insertPosition);

  fs.writeFileSync(articlePagePath, content, 'utf-8');
  console.log('✅ Article inserted into code');

  // Also update main page
  const mainPagePath = path.join(process.cwd(), 'app/page.tsx');
  let mainContent = fs.readFileSync(mainPagePath, 'utf-8');

  const mainArticlesMatch = mainContent.match(/const newsArticles: NewsArticle\[\] = \[/);
  if (mainArticlesMatch) {
    const mainInsertPosition = mainArticlesMatch.index! + mainArticlesMatch[0].length;
    
    const mainArticleCode = `
  {
    id: ${article.id},
    title: {
      en: "${article.title.en.replace(/"/g, '\\"')}",
      lv: "${article.title.lv.replace(/"/g, '\\"')}",
      ru: "${article.title.ru.replace(/"/g, '\\"')}"
    },
    excerpt: {
      en: "${article.excerpt.en.replace(/"/g, '\\"')}",
      lv: "${article.excerpt.lv.replace(/"/g, '\\"')}",
      ru: "${article.excerpt.ru.replace(/"/g, '\\"')}"
    },
    date: "${article.date}",
    category: { en: "${article.category.en}", lv: "${article.category.lv}", ru: "${article.category.ru}" },
    readTime: "${article.readTime}",
    imageEmoji: "${article.imageUrl}",
    featured: true
  },`;

    mainContent = mainContent.slice(0, mainInsertPosition) + mainArticleCode + mainContent.slice(mainInsertPosition);
    
    // Remove featured flag from previous article
    mainContent = mainContent.replace(/featured: true\s*\},\s*\{/g, (match) => {
      // Only replace the second occurrence (first is our new article)
      if (mainContent.indexOf(match) === mainContent.indexOf('featured: true')) {
        return match; // Keep first one
      }
      return match.replace('featured: true', 'featured: false');
    });

    fs.writeFileSync(mainPagePath, mainContent, 'utf-8');
    console.log('✅ Article added to main page as featured');
  }

  console.log('\n🎉 New article successfully generated and added!\n');
  console.log(`📰 ID: ${article.id}`);
  console.log(`📰 Title (EN): ${article.title.en}`);
  console.log(`📰 Title (LV): ${article.title.lv}`);
  console.log(`📰 Title (RU): ${article.title.ru}`);
  console.log(`📅 Date: ${article.date}\n`);
}

async function main() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    const article = await generateArticle();
    await insertArticleIntoCode(article);
    
    console.log('✨ Done! Commit and push the changes to publish the new article.');
  } catch (error) {
    console.error('❌ Error generating article:', error);
    process.exit(1);
  }
}

main();

