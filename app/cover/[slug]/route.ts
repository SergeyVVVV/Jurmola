import { articles } from '../../data/articles';

const PEXELS_API_URL = 'https://api.pexels.com/v1/search';
const PEXELS_PER_PAGE = 1;

// Words to remove from title for better image search
const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during'
]);

/**
 * Extract meaningful keywords from article title for image search.
 * Removes stopwords, Latvia-specific terms, and keeps 3-4 main words.
 */
function extractKeywords(title: string): string {
  const words = title
    .toLowerCase()
    .replace(/[''""]/g, '') // Remove quotes
    .replace(/[^\w\s]/g, ' ') // Remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOPWORDS.has(word))
    .slice(0, 4); // Take first 4 meaningful words
  
  return words.join(' ');
}

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(input: string, maxChars = 32, maxLines = 3): string[] {
  const words = input.split(/\s+/);
  const lines: string[] = [];
  let line = '';

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
      if (lines.length >= maxLines - 1) {
        break;
      }
    } else {
      line = next;
    }
  }

  if (line && lines.length < maxLines) {
    lines.push(line);
  }

  return lines;
}

async function fetchPexelsImageUrl(query: string): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  const url = new URL(PEXELS_API_URL);
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(PEXELS_PER_PAGE));
  url.searchParams.set('orientation', 'landscape');
  url.searchParams.set('size', 'large');

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: apiKey,
    },
    // Avoid caching at the fetch layer; we control caching via response headers.
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const data = (await response.json()) as { photos?: Array<{ src?: { large?: string; landscape?: string } }> };
  const first = data.photos?.[0];
  return first?.src?.landscape || first?.src?.large || null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<Response> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = articles.find(
    (a) => a.slug === slug || (!Number.isNaN(Number(slug)) && a.id === Number(slug))
  );

  if (!article) {
    return new Response('Not found', { status: 404 });
  }

  // Use manual keywords if provided, otherwise extract from title
  const keywords = article.coverKeywords || extractKeywords(article.title.en);
  const query = `${keywords} ${article.category.en}`;
  const pexelsUrl = await fetchPexelsImageUrl(query);

  if (pexelsUrl) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: pexelsUrl,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  const titleLines = wrapText(article.title.en);
  const category = escapeXml(article.category.en.toUpperCase());
  const titleTspans = titleLines
    .map((line, index) => `<tspan x="80" dy="${index === 0 ? 0 : 64}">${escapeXml(line)}</tspan>`)
    .join('');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="90" width="240" height="12" rx="6" fill="url(#accent)"/>
  <text x="80" y="150" fill="#f87171" font-family="Georgia, 'Times New Roman', serif" font-size="28" letter-spacing="2">${category}</text>
  <text x="80" y="230" fill="#f9fafb" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="700">
    ${titleTspans}
  </text>
  <text x="80" y="560" fill="#9ca3af" font-family="Arial, sans-serif" font-size="20">Jurmola Telegraphs</text>
</svg>
`.trim();

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
