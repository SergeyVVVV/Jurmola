/**
 * Generate SEO-friendly slug from article title
 * - 3-5 words
 * - Key meaningful words only
 * - Reflects article topic concisely
 */

const STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
  'all', 'that', 'this', 'these', 'those', 'will', 'has', 'have', 'had',
  'be', 'been', 'being', 'is', 'are', 'was', 'were', 'its', 'their'
]);

function generateSeoSlug(title) {
  const words = title
    .toLowerCase()
    .replace(/[''"",]/g, '') // Remove quotes and commas
    .replace(/[^\w\s-]/g, ' ') // Replace punctuation with space
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOPWORDS.has(word))
    .slice(0, 5); // Take first 5 meaningful words
  
  return words.join('-');
}

// Test examples
const examples = [
  "Latvian Capital to Introduce Mandatory 'Walk Your Snail to Work Day' to Boost Productivity",
  "Riga Announces Revolutionary Urban Bee Network to Solve All Transportation Issues"
];

console.log('SEO Slug Generation:');
console.log('='.repeat(80));
examples.forEach(title => {
  const slug = generateSeoSlug(title);
  console.log(`\nTitle: ${title}`);
  console.log(`Slug:  ${slug}`);
  console.log(`Words: ${slug.split('-').length}`);
});
