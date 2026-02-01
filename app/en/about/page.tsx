import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';

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
  },
  alternates: {
    canonical: 'https://jurmola.com/en/about',
    languages: {
      'en': 'https://jurmola.com/en/about',
      'ru': 'https://jurmola.com/about',
      'lv': 'https://jurmola.com/lv/about',
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">About</div>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600"
            >
              RU
            </Link>
            <Link
              href="/en/"
              className="px-2 py-1 cursor-pointer hover:text-black transition font-bold underline text-gray-600"
            >
              EN
            </Link>
            <Link
              href="/lv/"
              className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600"
            >
              LV
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <Link href={localizedHref('', language)}>
            <h1 className="font-serif text-6xl font-bold cursor-pointer hover:text-gray-700 transition">
              Jurmola Telegraphs
            </h1>
          </Link>
          <p className="text-sm mt-2 text-gray-600">Your Best Source for Baltic News</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 py-3 text-sm font-medium">
            <Link href={localizedHref('politics', language)} className="hover:text-gray-600 transition">
              Politics
            </Link>
            <Link href={localizedHref('culture', language)} className="hover:text-gray-600 transition">
              Culture
            </Link>
            <Link href={localizedHref('business', language)} className="hover:text-gray-600 transition">
              Business
            </Link>
            <Link href={localizedHref('opinion', language)} className="hover:text-gray-600 transition">
              Opinion
            </Link>
            <Link href={localizedHref('about', language)} className="hover:text-gray-600 transition font-bold underline">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">About Jurmola Telegraphs</h1>

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
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Important Disclaimer
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
            <h2 className="text-2xl font-bold mb-4">E-E-A-T & Transparency</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              We follow Google's E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness):
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li><strong>Experience:</strong> Knowledge of Baltic and Latvian local context</li>
              <li><strong>Expertise:</strong> Using modern AI technologies for content creation</li>
              <li><strong>Authoritativeness:</strong> Honesty about the nature of our project</li>
              <li><strong>Trustworthiness:</strong> Complete transparency about content creation methods</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Have questions, suggestions, or want to share an idea for a satirical article?
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Follow us on social media and enjoy our unique take on Baltic news!
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Remember: we create smiles, not news. 😊
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>© 2026 Jurmola Telegraphs. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href={localizedHref('about', language)} className="hover:text-gray-900">
                About
              </Link>
              <Link href={localizedHref('', language)} className="hover:text-gray-900">
                Home
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            ⚠️ Satirical content generated with AI assistance. Not real news.
          </div>
        </div>
      </footer>
    </div>
  );
}
