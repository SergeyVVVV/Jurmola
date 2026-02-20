import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'About Us – Jurmola Telegraphs',
  description: 'The first AI-powered satirical publication in the Baltics. Humorous news about Jurmala, Latvia and the region, created with artificial intelligence.',
  openGraph: {
    title: 'About Us – Jurmola Telegraphs',
    description: 'The first AI-powered satirical publication in the Baltics. Humorous news about Jurmala, Latvia and the region, created with artificial intelligence.',
    url: 'https://jurmola.com/en/about',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Jurmola Telegraphs – Satirical news from the Baltics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Jurmola Telegraphs',
    description: 'The first AI-powered satirical publication in the Baltics. Humorous news about Jurmala, Latvia and the region, created with artificial intelligence.',
    images: ['https://jurmola.com/images/grey-day-creature.jpg'],
    creator: '@JurmolaTelegraphs',
  },
  alternates: {
    canonical: 'https://jurmola.com/en/about',
    languages: {
      'x-default': 'https://jurmola.com/about',
      'en': 'https://jurmola.com/en/about',
      'ru': 'https://jurmola.com/about',
      'lv': 'https://jurmola.com/lv/about',
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="about" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          About Jurmola Telegraphs
        </h1>
        <article className="max-w-4xl">

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The first <strong>AI-powered satirical publication in the Baltics</strong>. We create humorous 
              news about Jurmala, Latvia and the region using artificial intelligence and a pinch of absurdity.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Inspired by publications like The Onion and Babylon Bee, we bring a satirical perspective to 
              Baltic events – with local flavor, humor, and love for Jurmala.
            </p>
          </section>

          <section className="mb-10 p-6 bg-yellow-50 border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4">
              Please Note:
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              <strong>All articles on Jurmola Telegraphs are satire</strong> and created with the help of 
              artificial intelligence.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              This is <strong>NOT real news</strong>. Any resemblance to real people, events, or organizations 
              is coincidental and purely humorous in nature.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Our publication has no relation to Laima Vaikule. None whatsoever. Or to limes either.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Why AI?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We use advanced text generation technologies to create witty and absurd news in the style of 
              The Onion, but with Baltic flavor.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Artificial intelligence allows us to:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mb-4 space-y-2">
              <li>Respond quickly to current events in the region</li>
              <li>Create absurd yet recognizable storylines</li>
              <li>Maintain a unique satirical tone</li>
              <li>Experiment with formats and styles</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe in transparency and honesty with our audience – that's why we openly discuss the 
              technologies we use.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>To entertain, amuse, and occasionally make you think</strong> through the lens of satire.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Jurmola Telegraphs is where news meets humor, absurdity meets reality, and Jurmala becomes 
              the capital of a fictional yet familiar world.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We don't claim to be journalism. We create entertainment content that makes you smile and 
              look at familiar things from a different angle.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Content & Topics</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our satirical articles are based on real events and trends in the Baltics, taken to absurd 
              extremes. We monitor current regional news and create humorous interpretations based on them.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Main topics: Latvian politics and society, Baltic cultural life, Jurmala resort life, 
              regional international relations – all through the prism of good humor and satire.
            </p>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-2xl font-bold mb-4">Our Principles</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We're honest about using AI to create content. We know the local context of the Baltics and Latvia. 
              We don't hide that this is satire, not real news.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Transparency matters more to us than pretending to be serious.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Have questions, suggestions, or want to share an idea for a satirical article?{' '}
              <a 
                href="https://www.linkedin.com/in/sergey-visotsky/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Drop us a line!
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Don't take it too seriously 😊
            </p>
          </div>
        </article>
      </main>

      <Footer language={language} />
    </div>
  );
}
