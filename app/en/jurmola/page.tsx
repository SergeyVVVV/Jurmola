import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Jurmala – The Baltic\'s Premier Resort City | Jurmola Telegraphs',
  description: 'Everything about Jurmala: news, events, culture and life in the resort city. A satirical look at Jūrmala from Jurmola Telegraphs – the Baltic\'s finest news source.',
  keywords: 'jurmala, jūrmala, jurmala news, jurmala resort, latvia jurmala, jurmala today, jurmala beach',
  openGraph: {
    title: 'Jurmala – The Baltic\'s Premier Resort City | Jurmola Telegraphs',
    description: 'Everything about Jurmala: news, events, culture and life in the resort city. A satirical look at Jūrmala from Jurmola Telegraphs.',
    url: 'https://jurmola.com/en/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Jurmala – the Baltic\'s premier resort city'
      }
    ]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

export default function JurmolaPage() {
  // Get some articles to feature
  const jurmalaArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Jurmala – The Baltic's Premier Resort City
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            A city where the Gulf of Riga meets pine forests, and resort life meets absurdity.
          </p>
          <p className="text-lg text-gray-600">
            Welcome to Jurmala through the eyes of Jurmola Telegraphs – where reality blends with satire!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">What is Jurmala?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jurmala (Jūrmala)</strong> is Latvia's and the Baltic's largest resort city,
              located on the shore of the Gulf of Riga, just 25 km from the capital Riga.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The city's name derives from the Latvian word "jūra" (sea), perfectly reflecting its
              seaside essence. Jurmala stretches 32 kilometers along the coast, uniting
              15 districts, each with its own character and history.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Today, Jurmala is not just beaches and pines, but also a cultural center of the region,
              a venue for international festivals, concerts, and (according to our version) the most
              absurd news in the Baltics!
            </p>
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-orange-400">
            <h2 className="text-3xl font-bold mb-4">🎭 Jurmala or Jurmola? Why are we Jurmola?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Attentive readers will notice: the correct spelling is <strong>Jurmala</strong> (with an "a").
              This is the official name of the Latvian resort Jūrmala.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              So why are we <strong>Jurmola Telegraphs</strong>, not Jurmala Telegraphs?
            </p>
            <div className="bg-white p-6 rounded-lg mb-4">
              <p className="text-lg leading-relaxed text-gray-800 mb-3">
                <strong>Because we're a satirical publication!</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-3">
                The spelling "Jurmola" (with an "o") is our deliberate choice, emphasizing the satirical,
                slightly absurd nature of our content. It's like a small typo in reality that
                hints: "not everything is as serious as it seems."
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                In our world, Jurmala becomes Jurmola – the capital of satirical news, where snails
                receive passports and seagulls pay resort fees. It's part of our play with words
                and reality.
              </p>
            </div>
            <p className="text-sm text-gray-600 italic">
              💡 But in this article we use the correct spelling <strong>Jurmala</strong>,
              to tell you about the real city that inspires our satirical stories.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Why is Jurmala Important?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏖️ Resort Jewel</h3>
                <p className="text-gray-700">
                  33 km of white sandy beaches, awarded the EU Blue Flag for cleanliness and environmental quality.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🌲 Natural Oasis</h3>
                <p className="text-gray-700">
                  Half the city is covered with pine forests, creating a unique microclimate with healing air.
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎭 Cultural Center</h3>
                <p className="text-gray-700">
                  KVN Festival, world-class concerts, music festivals – Jurmala lives a vibrant cultural life.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏛️ Architectural Heritage</h3>
                <p className="text-gray-700">
                  Unique wooden architecture of the 19th-20th centuries: villas, boarding houses, dachas in Art Nouveau and national romantic styles.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
            <h2 className="text-3xl font-bold mb-4">Jurmala in Numbers</h2>
            <ul className="text-lg leading-relaxed text-gray-700 space-y-2">
              <li>📍 <strong>Population:</strong> ~50,000 residents (and countless tourists in summer)</li>
              <li>📏 <strong>Length:</strong> 32 km along the coast</li>
              <li>🏖️ <strong>Beaches:</strong> 33 km of sandy beaches</li>
              <li>🌳 <strong>Forests:</strong> 50% of the city's territory</li>
              <li>🎵 <strong>Festivals per year:</strong> More than 20 major cultural events</li>
              <li>🚂 <strong>To Riga:</strong> 25 km (30 minutes by train)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Jurmola Telegraphs and Jurmala</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our publication is named after this amazing city. <strong>Jurmola Telegraphs</strong> is
              a satirical look at life in Jurmala, Latvia, and the entire Baltic region.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We take real events from the region and take them to absurd extremes, creating humorous news
              in The Onion style, but with local flavor. Snails declared national symbols,
              resort fees for seagulls, political debates about sand color – that's our favorite genre!
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We love Jurmala and show this love through the lens of good humor and satire.
              Because sometimes laughter is the best way to understand and appreciate the place where you live.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">News About Jurmala</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Read our satirical articles about Jurmala – where reality meets absurdity:
            </p>
            <div className="grid gap-6">
              {jurmalaArticles.map((article) => (
                <Link
                  key={article.id}
                  href={localizedHref(`news/${article.slug}`, language)}
                  className="block p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-gray-600">
                    {article.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-2">{article.excerpt[language]}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{article.category[language]}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={localizedHref('', language)}
                className="inline-block px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition"
              >
                All News →
              </Link>
            </div>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-3xl font-bold mb-4">Visit Jurmala</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              If you haven't been to Jurmala yet – you must come! This is a city where you can:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li>Walk along the 33-kilometer beach of the Baltic Sea</li>
              <li>Breathe the healing air of the pine forest</li>
              <li>Admire the wooden architecture of the early 20th century</li>
              <li>Try local cuisine in cozy cafes on Jomas Street</li>
              <li>Attend a concert or festival at the Dzintari Concert Hall</li>
              <li>Swim in the Gulf of Riga (in summer, of course!)</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              And then come back to us and read the satirical version of your visit! 😄
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-xl font-bold text-gray-900 mb-3">
              Jurmala – our inspiration, our home, our satire
            </p>
            <p className="text-gray-600 italic">
              With love and absurdity, the Jurmola Telegraphs team
            </p>
          </div>
        </article>
      </main>

      <Footer language={language} />
    </div>
  );
}
