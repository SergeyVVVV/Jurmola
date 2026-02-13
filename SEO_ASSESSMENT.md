# SEO Assessment – Jurmola Telegraphs

**Date:** February 2026
**Site:** https://jurmola.com
**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript
**Languages:** Russian (default on root), English (/en/), Latvian (/lv/)

---

## Executive Summary

Jurmola Telegraphs has a **strong SEO foundation** with most critical technical SEO elements properly implemented. The site uses Next.js server-side rendering, has comprehensive metadata, structured data, hreflang tags, and a dynamic sitemap. However, there are several issues ranging from moderate to minor that should be addressed to maximize search visibility.

**Overall Score: 7.5/10**

---

## What's Working Well

### 1. Technical Foundation
- **Server-Side Rendering** via Next.js App Router — all pages are rendered server-side, ensuring crawlability
- **Static generation** for article pages via `generateStaticParams()` — fast TTFB
- **Clean URL structure** — `/news/[slug]`, `/politics/`, `/en/news/[slug]`, etc.

### 2. Sitemap & Robots
- **Dynamic sitemap** (`app/sitemap.ts`) covering all pages across all 3 languages
- **Proper priority hierarchy**: homepages (1.0) > categories (0.9) > articles (0.8) > RSS (0.5)
- **Hreflang alternates** in sitemap for every page
- **robots.ts** correctly blocks `/api/` and `/admin/`, allows everything else, references sitemap

### 3. Metadata
- **Unique title and description** for every page type (home, about, category, article)
- **Localized metadata** — Russian, English, Latvian each have native-language titles/descriptions
- **Dynamic article metadata** via `generateMetadata()` with per-article title, description, OG tags
- **Canonical URLs** set on all pages
- **Hreflang alternates** in metadata for all language variants with `x-default`

### 4. OpenGraph & Twitter Cards
- **Full OG tags** on all pages: title, description, image (1200x630), url, siteName, locale, type
- **Twitter `summary_large_image` cards** on all pages
- **Per-article OG images** with proper alt text
- **`publishedTime`** set on article OG tags

### 5. Structured Data (JSON-LD)
- **Organization schema** on root layout
- **WebSite schema** on root layout with multi-language support
- **NewsArticle schema** on every article page with headline, description, image, dates, author, publisher, articleSection, inLanguage

### 6. Internationalization
- **Meduza-style URL structure**: Russian on root, EN/LV with prefixes — good for the primary audience
- **Geo-based language detection** via Cloudflare `CF-IPCountry` header
- **Cookie persistence** for language preference
- **301 redirects** for old `/ru/` prefix URLs (structure migration)
- **`set-lang` parameter** for explicit language switching

### 7. Other Positives
- **RSS feeds** for all 3 languages with proper XML formatting
- **301 redirects** for legacy slug changes and spelling corrections (`/yurmola` → `/jurmola`)
- **Hidden crawlable links** (`sr-only` nav) for articles beyond the initial "load more" fold
- **Google Analytics 4** tracking
- **Semantic HTML** — proper `<article>`, `<main>`, `<nav>`, `<section>`, `<h1>`-`<h3>` hierarchy
- **Image alt text** derived from article titles
- **Social sharing links** on article pages (Twitter, Facebook)

---

## Issues Found

### Critical Issues

#### 1. Missing `<html lang>` attribute for EN/LV pages
**Files:** `app/en/layout.tsx`, `app/lv/layout.tsx`
**Problem:** The root `<html lang="ru">` is set in `app/layout.tsx:91`. The EN and LV layouts use a client-side `<SetHtmlLang>` component to change it, but search engine crawlers may not execute this JavaScript. Google and other crawlers see `lang="ru"` for all pages, including English and Latvian ones.
**Impact:** Search engines may misidentify the language of EN/LV pages, hurting rankings in those languages.
**Fix:** Use separate root layouts per locale, or use Next.js middleware to set the lang attribute server-side.

#### 2. Images use `<img>` instead of Next.js `<Image>`
**Files:** `app/page.tsx:53-60`, `app/news/[slug]/page.tsx:95-103`, `app/components/LoadMoreArticles.tsx:58-65`
**Problem:** All images use raw `<img>` tags instead of the Next.js `<Image>` component. This means:
- No automatic WebP/AVIF conversion
- No responsive `srcset` generation
- No built-in lazy loading optimization (though `loading="lazy"` is added manually on grid images)
- No Cumulative Layout Shift (CLS) prevention
**Impact:** Worse Core Web Vitals (LCP, CLS), larger image payloads, lower PageSpeed scores.
**Fix:** Replace `<img>` with Next.js `<Image>` component. The `next.config.ts` already has `picsum.photos` in `remotePatterns`.

### Moderate Issues

#### 3. Category pages lack Twitter Card metadata
**Files:** `app/politics/page.tsx`, and presumably all category pages
**Problem:** Category pages have OpenGraph metadata but no `twitter` metadata object. Twitter/X will fall back to OG tags, but explicit Twitter cards are better for control.
**Fix:** Add `twitter: { card: 'summary_large_image', ... }` to all category page metadata.

#### 4. English/Latvian layouts missing Twitter Card metadata
**Files:** `app/en/layout.tsx`, `app/lv/layout.tsx`
**Problem:** The root Russian layout has Twitter card metadata, but the EN and LV layouts don't include a `twitter` section. Sharing EN/LV homepage links on Twitter may not render optimal cards.
**Fix:** Add `twitter` metadata to EN/LV layouts.

#### 5. About page missing OG image
**File:** `app/about/page.tsx:9-19`
**Problem:** The about page has OpenGraph title, description, and URL, but no `images` array. Social shares of the about page will have no preview image.
**Fix:** Add `images` with the site's default OG image to the about page metadata.

#### 6. `/jurmola` keyword page is Russian-only — no hreflang for EN/LV
**File:** `app/jurmola/page.tsx`, `app/sitemap.ts:103-109`
**Problem:** The `/jurmola` page exists only in Russian and has no hreflang alternates. The sitemap also has no language alternates for this URL. If similar content exists or should exist in other languages, this is a missed opportunity. Even if intentionally Russian-only, the sitemap entry should specify `hreflang` so search engines don't guess.
**Impact:** Search engines may show the Russian version to English/Latvian users searching for "Jurmala."

#### 7. `keywords` meta tag only in English across all article languages
**Files:** `app/news/[slug]/layout.tsx:32`, `app/en/news/[slug]/layout.tsx:32`, `app/lv/news/[slug]/layout.tsx:32`
**Problem:** All article layouts use the same English keywords `['Latvia', 'Jurmala', 'satire', 'news', 'Baltic', 'humor', 'Riga']` regardless of language. The Russian and Latvian article pages should have localized keywords.
**Note:** Google ignores the `keywords` meta tag, but Yandex (important for Russian audience) may use it. Localized keywords improve Yandex SEO.

#### 8. Article dates not in machine-readable format in visible content
**Files:** `app/news/[slug]/page.tsx:81`, `app/page.tsx:76`
**Problem:** Article dates are rendered as plain text (e.g., "January 15, 2026") without a `<time>` element and `datetime` attribute. While the structured data has ISO dates, visible dates without `<time>` elements are a missed semantic signal.
**Fix:** Wrap dates in `<time datetime="2026-01-15">January 15, 2026</time>`.

#### 9. 404 page is Russian-only
**File:** `app/not-found.tsx`
**Problem:** The 404 page always renders in Russian regardless of the language prefix the user was on. An English user hitting a broken `/en/news/...` link sees Russian text.
**Impact:** Poor UX for non-Russian users; soft 404 signals may confuse search engines about site language.

### Minor Issues

#### 10. No `favicon.ico` or comprehensive favicon set visible in metadata
**Problem:** The root layout doesn't explicitly define favicons or `apple-touch-icon` in metadata. While Next.js auto-serves `favicon.ico` and `icon.svg` from `/public`, explicitly defining icons in metadata ensures broader compatibility (Apple devices, Android PWA, etc.).
**Fix:** Add `icons` to the root metadata object.

#### 11. CSS animations on body pseudo-elements may impact performance
**File:** `app/globals.css:30-114`
**Problem:** The `body::before` and `body::after` pseudo-elements have continuous CSS animations (`tackyScroll`, `marquee`, `pulse`) with `filter: blur()` and `saturate()`. These trigger constant GPU compositing and repaint.
**Impact:** May hurt Core Web Vitals on mobile devices (Total Blocking Time, Interaction to Next Paint).
**Fix:** Consider using `will-change: transform` or simplifying animations. Test with Lighthouse on mobile.

#### 12. RSS feed lacks `<atom:link>` self-reference
**File:** `app/feed.xml/route.ts`
**Problem:** The RSS feed doesn't include the Atom namespace or `<atom:link rel="self">` element, which is recommended for RSS 2.0 feeds for better feed reader compatibility and validation.

#### 13. Inconsistent trailing slashes in URLs
**Problem:** Some URLs in metadata have trailing slashes (`https://jurmola.com/en/`) while article URLs don't (`https://jurmola.com/news/slug`). Inconsistent trailing slash behavior can cause duplicate content issues if the server serves both variants.
**Fix:** Enforce a consistent trailing slash policy in `next.config.ts` using the `trailingSlash` option.

#### 14. No `noindex` on paginated/filtered states
**Problem:** The `LoadMoreArticles` component is client-side, so it doesn't create indexable paginated URLs. However, the `/news/category/[category]/` route (seen in the directory structure) may create duplicate content with the main category pages (`/politics/`, `/culture/`, etc.).
**Recommendation:** Verify that `/news/category/` pages either have canonical tags pointing to the main category pages or are blocked in robots.txt.

#### 15. Header site title rendered as `<span>` instead of semantic element
**File:** `app/components/Header.tsx:86-88`
**Problem:** The site name "Jurmola Telegraphs" is a `<span>` inside a link. On the homepage, it would be better as a semantic element. While the `<h1>` is an `sr-only` element on the homepage, having the visible branding in a non-semantic element is a minor miss.

---

## Recommendations by Priority

### High Priority
1. Fix `<html lang>` attribute for EN/LV pages (server-side, not client-side JS)
2. Switch from `<img>` to Next.js `<Image>` for Core Web Vitals
3. Add Twitter card metadata to EN/LV layouts and category pages
4. Add OG image to about page metadata

### Medium Priority
5. Localize `keywords` meta tags for Russian (Yandex) and Latvian articles
6. Wrap visible dates in `<time datetime="">` elements
7. Create localized 404 pages or detect language in not-found.tsx
8. Add hreflang to `/jurmola` page or create EN/LV equivalents
9. Enforce consistent trailing slash policy

### Low Priority
10. Add comprehensive favicon/icon definitions to metadata
11. Audit CSS animation performance impact on mobile
12. Add `<atom:link>` self-reference to RSS feed
13. Verify `/news/category/` canonical handling
14. Consider adding `BreadcrumbList` structured data for articles

---

## Summary Table

| SEO Element | Status | Notes |
|---|---|---|
| Server-Side Rendering | Pass | Next.js App Router |
| Sitemap | Pass | Dynamic, all languages, hreflang |
| Robots.txt | Pass | Correct allow/disallow, sitemap ref |
| Canonical URLs | Pass | All pages |
| Hreflang | Pass (mostly) | Missing on /jurmola page |
| Meta Titles | Pass | Unique per page, localized |
| Meta Descriptions | Pass | Unique per page, localized |
| OpenGraph | Pass (mostly) | Missing image on about page |
| Twitter Cards | Partial | Missing on EN/LV home + categories |
| Structured Data | Pass | Organization + WebSite + NewsArticle |
| HTML `lang` attribute | Fail | Client-side only for EN/LV |
| Image Optimization | Fail | Raw `<img>`, no Next.js Image |
| Core Web Vitals Risk | Medium | CSS animations + no image optimization |
| RSS Feeds | Pass | 3 languages, proper XML |
| 301 Redirects | Pass | Legacy URLs handled |
| Mobile Responsive | Pass | Tailwind responsive utilities |
| Semantic HTML | Pass (mostly) | Missing `<time>`, site name as `<span>` |
| Internal Linking | Pass | Footer, nav, hidden crawlable links |
| Analytics | Pass | GA4 |
