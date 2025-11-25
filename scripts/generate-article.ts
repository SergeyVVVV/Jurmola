import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 60000, // 60 seconds timeout
  maxRetries: 3, // Retry up to 3 times
});

interface ArticleTranslations {
  en: string;
  lv: string;
  ru: string;
}

interface Article {
  id: number;
  slug: string;
  title: ArticleTranslations;
  excerpt: ArticleTranslations;
  fullContent: ArticleTranslations;
  date: string;
  category: ArticleTranslations;
  categories: string[]; // New: multiple categories (politics, culture, business, opinion)
  type: 'news' | 'interview' | 'analysis'; // New: content type
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

// Generate SEO-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .split('-')
    .slice(0, 6) // Take first 6 words
    .join('-');
}

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
  const articlesDataPath = path.join(process.cwd(), 'app/data/articles.ts');
  const content = fs.readFileSync(articlesDataPath, 'utf-8');
  const idMatches = content.match(/id:\s*(\d+)/g) || [];
  const ids = idMatches.map(match => parseInt(match.match(/\d+/)![0]));
  const maxId = Math.max(...ids, 0);
  const newId = maxId + 1;
  
  console.log(`📊 Found ${ids.length} existing articles, max ID: ${maxId}, new ID will be: ${newId}`);

  // Random selections
  const category = categories[Math.floor(Math.random() * categories.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
  const imageId = unsplashTopics[Math.floor(Math.random() * unsplashTopics.length)];
  const readTime = `${Math.floor(Math.random() * 6) + 5} min read`;

  // Determine categories and type based on category
  const categoryEn = category.en.toLowerCase();
  let articleCategories: string[] = [];
  let articleType: 'news' | 'interview' | 'analysis' = 'news';

  if (categoryEn === 'politics') {
    articleCategories = ['politics'];
    articleType = 'news';
  } else if (categoryEn === 'culture') {
    articleCategories = ['culture'];
    articleType = 'news';
  } else if (categoryEn === 'business') {
    articleCategories = ['business'];
    articleType = 'news';
  } else if (categoryEn === 'opinion') {
    articleCategories = ['opinion'];
    articleType = 'news';
  } else if (categoryEn === 'analysis') {
    articleCategories = ['opinion'];
    articleType = 'analysis';
  } else {
    // Breaking, Science, etc → opinion category
    articleCategories = ['opinion'];
    articleType = 'news';
  }

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const article: Article = {
    id: newId,
    slug: generateSlug(englishArticle.title),
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
    categories: articleCategories,
    type: articleType,
    readTime,
    imageUrl: `https://images.unsplash.com/${imageId}?w=800&h=600&fit=crop`,
    author,
    featured: false,
  };

  return article;
}

async function insertArticleIntoCode(article: Article) {
  console.log('📝 Inserting article into centralized data file...\n');

  const articlesDataPath = path.join(process.cwd(), 'app/data/articles.ts');
  let content = fs.readFileSync(articlesDataPath, 'utf-8');

  // Find the articles array and insert the new article at the beginning
  const articlesArrayMatch = content.match(/export const articles: Article\[\] = \[/);
  if (!articlesArrayMatch) {
    throw new Error('Could not find articles array in articles.ts');
  }

  const insertPosition = articlesArrayMatch.index! + articlesArrayMatch[0].length;

  // Format the new article
  const articleCode = `
  {
    id: ${article.id},
    slug: "${article.slug}",
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
    categories: ${JSON.stringify(article.categories)},
    type: "${article.type}",
    readTime: "${article.readTime}",
    imageUrl: "${article.imageUrl}",
    author: { en: "${article.author.en}", lv: "${article.author.lv}", ru: "${article.author.ru}" },
    featured: true
  },`;

  content = content.slice(0, insertPosition) + articleCode + content.slice(insertPosition);

  // Update featured flag - make new article featured, remove from others
  const featuredRegex = /featured: true/g;
  let match;
  let firstFeaturedIndex = -1;
  
  while ((match = featuredRegex.exec(content)) !== null) {
    if (firstFeaturedIndex === -1) {
      firstFeaturedIndex = match.index;
    } else {
      // Replace subsequent featured: true with featured: false
      content = content.substring(0, match.index) + 'featured: false' + content.substring(match.index + 'featured: true'.length);
    }
  }

  fs.writeFileSync(articlesDataPath, content, 'utf-8');
  console.log('✅ Article inserted into centralized data file');

  console.log('\n🎉 New article successfully generated and added!\n');
  console.log(`📰 ID: ${article.id}`);
  console.log(`📰 Title (EN): ${article.title.en}`);
  console.log(`📰 Title (LV): ${article.title.lv}`);
  console.log(`📰 Title (RU): ${article.title.ru}`);
  console.log(`📅 Date: ${article.date}\n`);
}

// RSS feed now auto-imports from centralized articles.ts - no need to update separately

async function main() {
  try {
    console.log('🚀 Starting article generation process...\n');
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('❌ OPENAI_API_KEY environment variable is not set');
    }
    
    console.log('✅ OpenAI API key found');
    console.log('⏳ This may take 2-3 minutes...\n');

    const article = await generateArticle();
    await insertArticleIntoCode(article);
    
    console.log('\n✨ Done! Commit and push the changes to publish the new article.');
    console.log('📡 RSS feed will auto-update from centralized articles.ts');
    console.log('🎉 Article generation completed successfully!\n');
  } catch (error) {
    console.error('\n❌ Error generating article:');
    if (error instanceof Error) {
      console.error(`   Message: ${error.message}`);
      console.error(`   Stack: ${error.stack}`);
    } else {
      console.error(error);
    }
    console.error('\n💡 Tip: Check your OpenAI API key and internet connection');
    process.exit(1);
  }
}

main();

