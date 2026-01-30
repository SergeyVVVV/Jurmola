import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opinion | Bold Perspectives on Baltic Life | Jurmola Telegraphs',
  description: 'Bold perspectives on Baltic life. Hot takes, cold truths, and lukewarm observations about everything from monuments to potatoes in Jurmala.',
  keywords: ['Jurmala opinion', 'Latvia opinion', 'Baltic perspectives', 'editorial satire', 'satirical commentary'],
  alternates: {
    canonical: 'https://jurmola.com/opinion/',
  },
  openGraph: {
    title: 'Opinion | Jurmola Telegraphs',
    description: 'Bold perspectives on Baltic life. Hot takes and cold truths.',
    url: 'https://jurmola.com/opinion/',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opinion | Jurmola Telegraphs',
    description: 'Bold perspectives on Baltic life. Hot takes and cold truths.',
    creator: '@JurmolaTelegraphs',
  },
};

export default function OpinionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

