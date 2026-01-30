import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Culture in Jurmala | Arts, Music & Literature | Jurmola Telegraphs',
  description: 'Cultural satire from the heart of the Baltics. Coverage of art, music, literature, and the occasional inexplicable monument in Jurmala.',
  keywords: ['Jurmala culture', 'Latvia culture', 'Baltic arts', 'cultural satire', 'Riga culture', 'Latvian literature'],
  alternates: {
    canonical: 'https://jurmola.com/culture/',
  },
  openGraph: {
    title: 'Culture in Jurmala | Jurmola Telegraphs',
    description: 'Cultural satire from the Baltics. Art, music, literature, and monuments.',
    url: 'https://jurmola.com/culture/',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culture in Jurmala | Jurmola Telegraphs',
    description: 'Cultural satire from the Baltics. Art, music, literature, and monuments.',
    creator: '@JurmolaTelegraphs',
  },
};

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

