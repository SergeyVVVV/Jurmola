/**
 * Generate SEO-friendly slug from article title
 * 
 * Rules:
 * - 3-5 words through hyphens
 * - Key meaningful words only
 * - Reflects article topic concisely
 * 
 * Use for articles dated Jan 28, 2026 and later
 */

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
  'all', 'that', 'this', 'these', 'those', 'will', 'has', 'have', 'had',
  'be', 'been', 'being', 'is', 'are', 'was', 'were', 'its', 'their'
]);

/**
 * Generate SEO-optimized slug from title
 * @param title Article title in English
 * @param maxWords Maximum number of words (default: 5)
 * @returns SEO-friendly slug
 */
export function generateSeoSlug(title: string, maxWords: number = 5): string {
  const words = title
    .toLowerCase()
    .replace(/[''"",]/g, '') // Remove quotes and commas
    .replace(/[^\w\s-]/g, ' ') // Replace punctuation with space
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOPWORDS.has(word))
    .slice(0, maxWords);
  
  return words.join('-');
}

/**
 * Validate slug meets SEO requirements
 */
export function isValidSeoSlug(slug: string): boolean {
  const wordCount = slug.split('-').length;
  return wordCount >= 3 && wordCount <= 5 && /^[a-z0-9-]+$/.test(slug);
}
