import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Best Restaurants in Jurmala – Bars, Cafes & Dining | Jurmola',
  description: 'Complete guide to restaurants in Jurmala: from fine dining to cozy cafes and beach bars. 150+ venues, best spots on Jomas Street, seafood, Latvian and international cuisine.',
  keywords: 'jurmala restaurants, jurmola restaurants, cafes jurmala, bars jurmala, where to eat jurmala, jurmala dining, jomas street restaurants, jurmala food, jurmola, best restaurants jurmala',
  openGraph: {
    title: 'Best Restaurants in Jurmala – Bars, Cafes & Dining',
    description: 'Complete guide to restaurants, bars and cafes in Jurmala. From fine dining to cozy cafes — find the perfect spot for lunch or dinner.',
    url: 'https://jurmola.com/en/jurmola/restaurants',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Restaurants in Jurmala – best places to eat' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola/restaurants',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/restaurants',
      'en': 'https://jurmola.com/en/jurmola/restaurants',
      'ru': 'https://jurmola.com/jurmola/restaurants',
      'lv': 'https://jurmola.com/lv/jurmola/restaurants',
    }
  }
};

const fineDining = [
  { name: '36.Line Grill Restaurant', cuisine: 'Seafood & Grill', price: '\u20ac\u20ac\u20ac', description: 'Beachfront restaurant specializing in seafood and grilled dishes. Tasting menus featuring the freshest ingredients from the Baltic Sea.' },
  { name: 'VIEW Restaurant & Lounge', cuisine: 'Gourmet', price: '\u20ac\u20ac\u20ac', description: 'Gourmet restaurant with panoramic sea views. Stylish interior and exquisite dishes crafted by the head chef.' },
  { name: 'FACES Restaurant', cuisine: 'Modern European', price: '\u20ac\u20ac\u20ac', description: 'Where tradition meets innovation. Seaside restaurant with creative cuisine and an elegant atmosphere.' },
  { name: 'TB Palace', cuisine: 'Fine Dining', price: '\u20ac\u20ac\u20ac', description: 'Upscale restaurant for special occasions. Corporate lunches, receptions, and a refined menu.' },
];

const casualDining = [
  { name: 'Majorenhoff', cuisine: 'European', price: '\u20ac\u20ac', description: 'In the heart of Jurmala \u2014 perfect for a romantic dinner. European cuisine in a warm, inviting atmosphere.' },
  { name: 'Il Sole', cuisine: 'Italian', price: '\u20ac\u20ac', description: 'Modern Italian cuisine with panoramic sea views. Casual elegant dining at its finest.' },
  { name: 'O\'Sole Mio', cuisine: 'Mediterranean', price: '\u20ac\u20ac', description: 'Mediterranean cuisine on Jomas iela 61. A new restaurant opened in December 2024.' },
  { name: 'Laivas Restaurant', cuisine: 'Latvian', price: '\u20ac\u20ac\u2013\u20ac\u20ac\u20ac', description: 'Restaurant on the Lielupe River serving Latvian specialties. A project by restaurateur Alexander Rappoport.' },
  { name: 'Gan Bei Jurmala', cuisine: 'Chinese / Asian', price: '\u20ac\u20ac', description: 'Chinese and Asian cuisine on the famous Jomas Street. Authentic Asian flavors by the Baltic Sea.' },
  { name: 'MO Restbar', cuisine: 'Seafood & Sushi', price: '\u20ac\u20ac', description: 'Seafood and sushi in a stylish setting. Rated 4.2 \u2014 one of Jurmala\u2019s most popular dining spots.' },
  { name: 'Grill & Fish Jomas Terase', cuisine: 'Grill & Fish', price: '\u20ac\u20ac', description: 'Grilled fresh fish and meat on an open terrace right on Jomas Street.' },
];

const cafes = [
  { name: 'Cafe 53', cuisine: 'Cafe & BBQ', price: '\u20ac', description: 'Two floors plus a huge terrace. A unique concept where BBQ meets coffee culture.' },
  { name: 'Madam Brios', cuisine: 'French Bakery', price: '\u20ac', description: 'French bakery on the Dubulti/Melluzi border. Be sure to try the signature \u201CM\u0101kon\u012Btis\u201D pastry.' },
  { name: 'Kafijas Sturitis', cuisine: 'Coffee House', price: '\u20ac', description: 'In the Bulduri district \u2014 the largest coffee selection in all of Jurmala. A paradise for coffee lovers.' },
  { name: 'De Gusto', cuisine: 'Coffee & Pastry', price: '\u20ac', description: 'Best coffee in Jurmala according to locals. Excellent pastries and baked goods.' },
  { name: 'Stacija Vaivari Pizza', cuisine: 'Pizzeria', price: '\u20ac', description: 'Neapolitan pizza baked in a wood-fired oven right inside Vaivari train station. A truly unique setting.' },
];

const bars = [
  { name: 'Simply Beach Bar', cuisine: 'Beach Bar', price: '\u20ac\u2013\u20ac\u20ac', description: 'Dzintari beach bar with panoramic glass walls. Barista coffee and cocktails with stunning sea views.' },
  { name: 'X.O Beach Lounge & Club', cuisine: 'Club & Lounge', price: '\u20ac\u20ac', description: 'Jurmala\u2019s nightlife destination with ocean views. Cocktails, music, and resort party vibes.' },
  { name: 'Draft Bar', cuisine: 'Craft Beer Bar', price: '\u20ac\u2013\u20ac\u20ac', description: 'Wide selection of craft beer in a lively atmosphere. A great spot for an evening out.' },
];

const tips = [
  { title: 'Jomas Street', text: 'Most restaurants are concentrated on the pedestrian Jomas Street (Jomas iela) \u2014 Jurmala\u2019s main dining street.' },
  { title: 'Budget Lunch', text: 'A business lunch in Jurmala costs \u20ac5\u201310. Many restaurants offer great value daily set menus.' },
  { title: 'Summer Season', text: 'In summer, many restaurants stay open late \u2014 \u201Cuntil the last client.\u201D Live music on terraces is a pleasant bonus.' },
  { title: '150+ Venues', text: 'Jurmala has over 150 restaurants, cafes, and bars. We\u2019ve picked the best, but don\u2019t be afraid to explore on your own!' },
  { title: 'Reservations', text: 'In high season (June\u2013August), book your table in advance, especially at fine dining restaurants and terrace seating.' },
  { title: 'Local Cuisine', text: 'Try Latvian cold-smoked fish, rye bread, grey peas with bacon, and Riga Black Balsam.' },
];

const otherGuides = [
  { href: 'jurmola', title: 'Jurmala City Guide', description: 'Back to the main guide page.' },
  { href: 'jurmola/weather', title: 'Weather in Jurmala', description: 'Monthly forecast and best time to visit.' },
  { href: 'jurmola/how-to-get-there', title: 'How to Get There', description: 'Train, taxi, bus, and car.' },
  { href: 'jurmola/attractions', title: 'Attractions & Things to Do', description: 'Beaches, parks, architecture, and museums.' },
  { href: 'jurmola/where-to-stay', title: 'Where to Stay', description: 'Hotels, spas, and budget accommodation.' },
];

function RestaurantCard({ name, cuisine, price, description }: { name: string; cuisine: string; price: string; description: string }) {
  return (
    <div className="p-5 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap ml-2">{price}</span>
      </div>
      <p className="text-sm text-red-600 font-medium mb-2">{cuisine}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition-colors">Jurmala City Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Restaurants, Bars & Cafes</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Restaurant Guide 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Best Restaurants, Bars & Cafes in Jurmala
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          From fine dining with Baltic Sea views to cozy coffee shops and beach bars.
          Your complete guide to <strong>150+ restaurants and cafes in Jurmala</strong> — where to eat and spend an evening.
        </p>
        <p className="text-gray-500 mb-12">Most restaurants are located on the pedestrian Jomas Street (Jomas iela).</p>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Fine Dining & Grill</h2>
          <p className="text-gray-600 mb-6">Jurmala&apos;s best restaurants for special occasions: creative cuisine, tasting menus, and sea views.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {fineDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Casual & International Dining</h2>
          <p className="text-gray-600 mb-6">European, Italian, Asian, and Latvian cuisine — for a casual lunch or a romantic dinner.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {casualDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Cafes & Coffee Houses</h2>
          <p className="text-gray-600 mb-6">The best coffee, French pastries, and Neapolitan pizza — cozy cafes in Jurmala for every mood.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cafes.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Bars & Nightlife</h2>
          <p className="text-gray-600 mb-6">Beach bars, craft beer, and nightclubs — Jurmala&apos;s evening scene comes alive in summer.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {bars.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14 text-center">
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g274964-Jurmala_Riga_Region.html"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            See all Jurmala restaurants on TripAdvisor &rarr;
          </a>
        </section>

        <section className="mb-14 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Dining Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Planning a trip to Jurmala?</h2>
          <p className="text-gray-600 mb-4">Book your hotel in advance for the best prices and to stay close to your favorite restaurants.</p>
          <a
            href="https://www.booking.com/city/lv/jurmala.html"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Find hotels in Jurmala on Booking.com
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Other Guide Sections</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {otherGuides.map((guide) => (
              <Link key={guide.href} href={localizedHref(guide.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <h3 className="font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
