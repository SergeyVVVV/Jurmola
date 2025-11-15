import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Jurmala - Your Capital",
  description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
  metadataBase: new URL('https://jurmola.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Your Jurmala - Your Capital",
    description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
    url: "https://jurmola.com",
    siteName: "Jurmola",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jurmola - Your Jurmala, Your Capital',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Jurmala - Your Capital",
    description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
    images: ['/og-image.svg'],
  },
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
