import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['en', 'ru', 'lv'];
const defaultLanguage = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  
  // Check if there's a ?lang= parameter (old structure)
  const langParam = searchParams.get('lang');
  if (langParam && languages.includes(langParam)) {
    // Redirect from /?lang=ru to /ru/
    // Redirect from /news/article-slug?lang=ru to /ru/news/article-slug
    const newUrl = new URL(`/${langParam}${pathname}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }
  
  // Check if pathname already has a language prefix
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }
  
  // Root path: redirect to default language
  if (pathname === '/' || pathname === '') {
    const newUrl = new URL(`/${defaultLanguage}/`, request.url);
    return NextResponse.redirect(newUrl, 307); // Temporary redirect for root
  }
  
  // Special paths that should not be redirected (Next.js internals, API routes, static files)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/cover/') ||
    pathname.startsWith('/feed.xml') ||
    pathname.includes('.') // Static files like .svg, .ico, etc.
  ) {
    return NextResponse.next();
  }
  
  // For any other path without language prefix, redirect to English version
  // E.g., /news/article-slug -> /en/news/article-slug
  const newUrl = new URL(`/${defaultLanguage}${pathname}`, request.url);
  return NextResponse.redirect(newUrl, 301);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (favicon files)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
};
