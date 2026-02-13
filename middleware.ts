import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const RUSSIAN_COUNTRIES = ['ru', 'by', 'ua', 'kz', 'am', 'ge', 'md', 'tj', 'uz', 'kg'];
const COOKIE_NAME = 'preferred-language';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  
  // Skip static files, API routes, and special Next.js paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/cover/') ||
    pathname.startsWith('/feed.xml') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }

  // Get existing language preference from cookie
  const preferredLang = request.cookies.get(COOKIE_NAME)?.value;
  
  // Get country from Cloudflare header (for local dev, also check x-test-country)
  const country = (
    request.headers.get('CF-IPCountry') || 
    request.headers.get('x-test-country') ||
    ''
  ).toLowerCase();

  // MIGRATION: Redirect old /ru/ URLs to root (301 permanent)
  if (pathname.startsWith('/ru/') || pathname === '/ru') {
    const newPath = pathname.replace(/^\/ru/, '') || '/';
    const newUrl = new URL(newPath, request.url);
    newUrl.search = searchParams.toString();
    
    const response = NextResponse.redirect(newUrl, 301);
    response.cookies.set(COOKIE_NAME, 'ru', {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });
    return response;
  }

  // Handle language switcher (set-lang parameter)
  const setLang = searchParams.get('set-lang');
  if (setLang && ['ru', 'en', 'lv'].includes(setLang)) {
    let targetPath = '/';
    if (setLang === 'en') {
      targetPath = '/en/';
    } else if (setLang === 'lv') {
      targetPath = '/lv/';
    }
    
    // Add flag to prevent cookie-based redirect on next request
    const newUrl = new URL(targetPath, request.url);
    newUrl.searchParams.set('_switched', '1');
    const response = NextResponse.redirect(newUrl);
    response.cookies.set(COOKIE_NAME, setLang, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    return response;
  }

  // MIGRATION: Handle old ?lang= parameter (301 permanent)
  const langParam = searchParams.get('lang');
  if (langParam) {
    let newPath = pathname;
    if (langParam === 'ru') {
      newPath = pathname; // Russian stays on root
    } else if (langParam === 'en') {
      newPath = `/en${pathname === '/' ? '' : pathname}`;
    } else if (langParam === 'lv') {
      newPath = `/lv${pathname === '/' ? '' : pathname}`;
    }
    
    const newUrl = new URL(newPath || '/', request.url);
    const response = NextResponse.redirect(newUrl, 301);
    response.cookies.set(COOKIE_NAME, langParam, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    return response;
  }

  // Check if already on a language-specific path
  const isOnEnglishPath = pathname.startsWith('/en/') || pathname === '/en';
  const isOnLatvianPath = pathname.startsWith('/lv/') || pathname === '/lv';
  
  // If already on a language path, set cookie and continue
  if (isOnEnglishPath) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, 'en', {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    response.headers.set('x-pathname', pathname);
    return response;
  }

  if (isOnLatvianPath) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, 'lv', {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // If user is on root path without language prefix
  // and doesn't have a preference cookie, determine language by geo
  if (!preferredLang && pathname === '/') {
    let targetPath = '/'; // Default: Russian (root)
    let targetLang = 'ru';
    
    if (country === 'lv') {
      targetPath = '/lv/';
      targetLang = 'lv';
    } else if (country && !RUSSIAN_COUNTRIES.includes(country)) {
      // Non-Russian/CIS countries -> English
      targetPath = '/en/';
      targetLang = 'en';
    }
    
    // If determined language is not Russian, redirect
    if (targetPath !== '/') {
      const response = NextResponse.redirect(new URL(targetPath, request.url));
      response.cookies.set(COOKIE_NAME, targetLang, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      });
      return response;
    }
    
    // User should stay on Russian root, set cookie
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, 'ru', {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // If user has a preference cookie and is on root, respect their preference
  // BUT: skip if language was just switched (to avoid redirect loop with old cookie)
  const justSwitched = searchParams.get('_switched');
  if (preferredLang && pathname === '/' && !justSwitched) {
    if (preferredLang === 'en') {
      return NextResponse.redirect(new URL('/en/', request.url));
    } else if (preferredLang === 'lv') {
      return NextResponse.redirect(new URL('/lv/', request.url));
    }
    // Russian preference: stay on root
    return NextResponse.next();
  }
  
  // If language was just switched, clean URL and continue
  if (justSwitched) {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete('_switched');
    return NextResponse.redirect(cleanUrl);
  }

  // For Russian content on root (no prefix), set cookie if not present
  if (!isOnEnglishPath && !isOnLatvianPath && !preferredLang) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, 'ru', {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    response.headers.set('x-pathname', pathname);
    return response;
  }

  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp).*)',
  ],
};
