import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politics in Jurmala | News, Interviews & Analysis | Jurmola Telegraphs',
  description: 'Your source for political satire from Jurmala and beyond. Breaking political news, interviews, and in-depth analysis of local and international politics.',
  keywords: ['Jurmala politics', 'Latvia politics', 'political satire', 'political news', 'Baltic politics', 'Riga politics'],
  alternates: {
    canonical: 'https://jurmola.com/politics/',
  },
  openGraph: {
    title: 'Politics in Jurmala | Jurmola Telegraphs',
    description: 'Satirical political coverage from Jurmala. Breaking news, interviews, and analysis.',
    url: 'https://jurmola.com/politics/',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politics in Jurmala | Jurmola Telegraphs',
    description: 'Satirical political coverage from Jurmala. Breaking news, interviews, and analysis.',
    creator: '@JurmolaTelegraphs',
  },
};

export default function PoliticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

