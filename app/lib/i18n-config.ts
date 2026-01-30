// i18n configuration for the site
export const languages = ['en', 'ru', 'lv'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'en';

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  lv: 'Latviešu',
};

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  ru: 'RU',
  lv: 'LV',
};

// Check if a string is a valid language
export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

// Get language from pathname
export function getLanguageFromPathname(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLanguage;
}

// Generate localized href
export function localizedHref(href: string, lang: Language): string {
  // Remove leading slash if present
  const cleanHref = href.startsWith('/') ? href.slice(1) : href;
  
  // If it's the default language (en), keep it at root or add /en/ prefix
  // For consistency, we'll use /en/ prefix for all languages
  return `/${lang}/${cleanHref}`;
}

// Generate hreflang links for a page
export function generateHreflangLinks(pathname: string, baseUrl: string = 'https://jurmola.com'): Array<{ lang: Language | 'x-default'; href: string }> {
  // Remove language prefix from pathname to get the base path
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  let basePath = pathname;
  if (firstSegment && isValidLanguage(firstSegment)) {
    // Remove language prefix
    basePath = '/' + segments.slice(1).join('/');
  }
  
  // Ensure basePath starts with /
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }
  
  // Generate links for all languages
  const links: Array<{ lang: Language | 'x-default'; href: string }> = languages.map(lang => ({
    lang: lang,
    href: `${baseUrl}/${lang}${basePath}`,
  }));
  
  // Add x-default (pointing to English version)
  links.push({
    lang: 'x-default',
    href: `${baseUrl}/en${basePath}`,
  });
  
  return links;
}

// Remove language prefix from pathname
export function removeLanguagePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLanguage(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}
