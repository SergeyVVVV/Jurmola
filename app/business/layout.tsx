import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business in Jurmala | Market Analysis & Startup Stories | Jurmola Telegraphs',
  description: 'Economic satire from the Baltic business hub. Market analysis, startup stories, and suspiciously successful potato ventures from Jurmala and beyond.',
  keywords: ['Jurmala business', 'Latvia business', 'Baltic economy', 'startup stories', 'business satire', 'Riga startups'],
  alternates: {
    canonical: 'https://jurmola.com/business/',
  },
  openGraph: {
    title: 'Business in Jurmala | Jurmola Telegraphs',
    description: 'Economic satire from the Baltics. Market analysis and startup stories.',
    url: 'https://jurmola.com/business/',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business in Jurmala | Jurmola Telegraphs',
    description: 'Economic satire from the Baltics. Market analysis and startup stories.',
    creator: '@JurmolaTelegraphs',
  },
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

