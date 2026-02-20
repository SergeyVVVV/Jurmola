import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Where to Stay in Jurmala – Best Hotels & Accommodation | Jurmola',
  description: 'Best Jurmala hotels 2026: luxury spa hotels from €93, boutique guesthouses, budget stays from €30. Top 15 hotels ranked, booking tips, and best neighborhoods.',
  keywords: 'jurmala hotels, jurmola hotels, where to stay jurmala, jurmala accommodation, jurmala spa hotels, budget hotels jurmala, baltic beach hotel, hotel jurmala spa, jurmala guesthouses',
  openGraph: {
    title: 'Where to Stay in Jurmala – Best Hotels & Accommodation',
    description: 'Complete Jurmala accommodation guide: from 5-star spa hotels to budget guesthouses. 614 properties, average price from €52/night.',
    url: 'https://jurmola.com/en/jurmola/where-to-stay',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Hotels and accommodation in Jurmala' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola/where-to-stay',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/where-to-stay',
      'en': 'https://jurmola.com/en/jurmola/where-to-stay',
      'ru': 'https://jurmola.com/jurmola/where-to-stay',
      'lv': 'https://jurmola.com/lv/jurmola/where-to-stay',
    }
  }
};

const BOOKING_LINK = 'https://www.booking.com/city/lv/jurmala.html';

const luxuryHotels = [
  {
    name: 'Baltic Beach Hotel & SPA',
    stars: 5,
    price: 'from €147/night',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Private beach', 'Center of Jurmala', '200m from Jomas St', 'World-class spa'],
    description: 'Flagship 5-star hotel in the heart of Jurmala with its own private beach and a luxurious spa. Perfect location for those who want to be at the center of it all.',
  },
  {
    name: 'Hotel Jurmala Spa & Conference Center',
    stars: 4,
    price: 'from €93/night',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['190 rooms', '#1 on TripAdvisor', 'Wellness Oasis', '200+ spa treatments'],
    description: 'TripAdvisor\'s top-rated hotel in Jurmala. 190 rooms, huge Wellness Oasis spa center with over 200 treatments available.',
  },
  {
    name: 'SemaraH Hotel Lielupe SPA & Conferences',
    stars: 4.5,
    price: 'from €104/night',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Family-friendly', 'Indoor pool', 'Rating 9.1/10', 'Conference facilities'],
    description: 'Excellent choice for families with children. Indoor pool, kids\' programs, and an outstanding 9.1/10 guest rating.',
  },
  {
    name: 'Jurmala Golf Club & Hotel',
    stars: 4.5,
    price: 'on request',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Golf course', 'Spa center', 'Elegant dining', 'Premium class'],
    description: 'The only golf resort in Jurmala with an 18-hole course, spa center, and fine dining restaurant. Ideal for golf enthusiasts and countryside retreats.',
  },
];

const boutiqueHotels = [
  {
    name: 'Boutique Hotel Light House Jurmala',
    stars: 4,
    price: 'from €110/night',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Most unique hotel', 'Private beach', '700m from Dzintari', 'Couples\' favorite'],
    description: 'The most unique boutique hotel in Jurmala. Private beach, romantic atmosphere, and just 700 meters from Dzintari Concert Hall.',
  },
  {
    name: 'Pegasa Pils Spa',
    stars: 4,
    price: 'from €92/night',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['66ft from Dzintari', 'Near the beach', 'Spa treatments', 'Historic building'],
    description: 'Located just 66 feet from Dzintari Concert Hall and steps from the beach. A historic building with modern spa facilities.',
  },
  {
    name: 'TB Palace Hotel & SPA',
    stars: 4,
    price: 'from €95/night',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Top-rated breakfasts', 'Popular with couples', 'Spa center', 'Elegant interiors'],
    description: 'Renowned for its outstanding breakfasts and elegant interiors. Especially popular among romantic couples.',
  },
  {
    name: 'Amber SPA Boutique Hotel',
    stars: 4,
    price: 'from €85/night',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Great breakfasts', 'Boutique feel', 'Spa', 'Cozy design'],
    description: 'An intimate boutique hotel with a cozy atmosphere. Praised by guests for excellent breakfasts and attentive service.',
  },
  {
    name: 'Parus Boutique Hotel',
    stars: 3.5,
    price: 'from €75/night',
    priceCategory: '\u20AC\u20AC',
    features: ['100 yards from beach', 'Near Jomas St', 'Quiet spot', 'Comfortable rooms'],
    description: 'A quiet boutique hotel just 100 yards from the beach and close to Jomas Street. The perfect balance of seclusion and convenient location.',
  },
];

const midRangeHotels = [
  {
    name: 'Kurshi Hotel & SPA',
    stars: 3.5,
    price: 'from €70/night',
    priceCategory: '\u20AC\u20AC',
    features: ['400m from sea', 'Spa facilities', 'Restaurant', 'Good location'],
    description: 'Comfortable hotel with spa facilities, 400 meters from the sea. Great value for money.',
  },
  {
    name: 'Daina Jurmala Beach Hotel & SPA',
    stars: 3.5,
    price: 'from €65/night',
    priceCategory: '\u20AC\u20AC',
    features: ['120m from beach', 'Quiet area', 'Renovated 2015', 'Spa services'],
    description: 'Renovated in 2015, this hotel sits in a quiet area just 120 meters from the beach. Peaceful atmosphere with modern comforts.',
  },
  {
    name: 'Amber Sea Hotel & SPA',
    stars: 3.5,
    price: 'from €68/night',
    priceCategory: '\u20AC\u20AC',
    features: ['Pine forest setting', 'Aqua Club', 'Pool & sauna', 'Natural surroundings'],
    description: 'Uniquely located among pine forests. Features its own Aqua Club with swimming pool and sauna for total relaxation.',
  },
];

const budgetHotels = [
  {
    name: 'Villa Joma',
    stars: 3,
    price: 'from €45/night',
    priceCategory: '\u20AC',
    features: ['Heart of Jurmala', '5 min to beach', 'Early 20th c. building', 'Historic charm'],
    description: 'A charming early 20th century building in the very heart of Jurmala. 5-minute walk to the beach, affordable prices, and historic atmosphere.',
  },
  {
    name: 'Elina Hotel',
    stars: 3,
    price: 'from €30/night',
    priceCategory: '\u20AC',
    features: ['Most affordable', 'Clean rooms', 'Basic comforts', 'Good reviews'],
    description: 'The most budget-friendly option in Jurmala. Clean rooms with basic comforts starting from just €30 per night.',
  },
  {
    name: 'Boutique Mama',
    stars: 4,
    price: 'from €60/night',
    priceCategory: '\u20AC',
    features: ['Cheapest 4-star', 'Rating 8.3', 'Stylish design', 'Great value'],
    description: 'The most affordable 4-star hotel in Jurmala with an 8.3 rating. Stylish design and excellent service at a reasonable price.',
  },
];

function StarRating({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 !== 0;
  return (
    <span className="text-yellow-500 text-sm" aria-label={`${stars} out of 5 stars`}>
      {'★'.repeat(fullStars)}{hasHalf && '½'}{'☆'.repeat(5 - Math.ceil(stars))}
    </span>
  );
}

function HotelCard({ hotel }: { hotel: { name: string; stars: number; price: string; priceCategory: string; features: string[]; description: string } }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
          <StarRating stars={hotel.stars} />
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-gray-500">{hotel.priceCategory}</span>
          <div className="text-gray-900 font-bold">{hotel.price}</div>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {hotel.features.map((feature) => (
          <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{feature}</span>
        ))}
      </div>
      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-block text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
      >
        Book on Booking.com
      </a>
    </div>
  );
}

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-900 transition-colors">Jurmala</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Where to Stay</span>
        </nav>

        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">City Guide 2026</span>
        <h1 className="text-4xl font-bold mb-6 leading-tight mt-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Where to Stay in Jurmala
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Complete guide to <strong>Jurmala</strong> hotels and accommodation: from luxurious 5-star spa resorts
          to cozy budget guesthouses. Over <strong>614 properties</strong> to suit every taste and budget.
        </p>
        <p className="text-gray-500 mb-12">Average prices: 3* from €52/night &middot; 4* from €111/night &middot; spa from €172/night</p>

        {/* Quick Stats */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Accommodation at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '614', label: 'properties' },
              { value: 'from €30', label: 'most affordable' },
              { value: '~€111', label: 'average 4-star' },
              { value: 'February', label: 'cheapest month' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Luxury & Spa */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Luxury &amp; Spa Hotels</h2>
          <p className="text-gray-500 mb-6">Category {'\u20AC\u20AC\u20AC'} &middot; from €93/night</p>
          <div className="grid md:grid-cols-2 gap-6">
            {luxuryHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Boutique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Boutique Hotels</h2>
          <p className="text-gray-500 mb-6">Category {'\u20AC\u20AC'}-{'\u20AC\u20AC\u20AC'} &middot; from €75/night</p>
          <div className="grid md:grid-cols-2 gap-6">
            {boutiqueHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Mid-Range */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Mid-Range Hotels</h2>
          <p className="text-gray-500 mb-6">Category {'\u20AC\u20AC'} &middot; from €65/night</p>
          <div className="grid md:grid-cols-2 gap-6">
            {midRangeHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Budget Accommodation</h2>
          <p className="text-gray-500 mb-6">Category {'\u20AC'} &middot; from €30/night</p>
          <div className="grid md:grid-cols-2 gap-6">
            {budgetHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mb-12 text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Find Your Perfect Hotel in Jurmala</h2>
          <p className="text-gray-400 mb-6">Over 614 properties on Booking.com with free cancellation</p>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Browse All Hotels on Booking.com
          </a>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Accommodation Tips for Jurmala</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Best Neighborhoods</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Majori</strong> -- the center of action, Jomas Street, restaurants, shops. Most convenient district.</li>
                <li><strong>Dzintari</strong> -- concert hall, upscale villas. Ideal for a cultured stay.</li>
                <li><strong>Bulduri</strong> -- best Blue Flag beaches, peaceful atmosphere.</li>
                <li><strong>Lielupe</strong> -- river, golf, family-friendly. Quiet and green.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">When to Book for the Best Deals</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>February</strong> -- cheapest month, prices 40-50% lower than summer.</li>
                <li><strong>November-March</strong> -- low season with great spa hotel discounts.</li>
                <li><strong>Weekdays</strong> -- 15-25% cheaper than weekends, especially in summer.</li>
                <li><strong>Early booking</strong> -- 2-3 months ahead gets the best rates.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">What to Choose</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Spa getaway</strong> -- Hotel Jurmala Spa (200+ treatments) or Baltic Beach Hotel.</li>
                <li><strong>Romance</strong> -- Light House Jurmala or TB Palace Hotel.</li>
                <li><strong>Family with kids</strong> -- SemaraH Lielupe (pool, kids&apos; programs).</li>
                <li><strong>Budget</strong> -- Elina Hotel from €30 or Boutique Mama from €60.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Useful Tips</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Almost all 4*+ hotels include spa access in the room rate.</li>
                <li>In summer, book early -- popular hotels sell out 2 months ahead.</li>
                <li>Many hotels offer transfers from the train station or Riga.</li>
                <li>Check if breakfast is included -- it can save you €10-20 per day.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Other Guide Sections</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: 'jurmola/weather', title: 'Weather in Jurmala' },
              { href: 'jurmola/how-to-get-there', title: 'How to Get There' },
              { href: 'jurmola/attractions', title: 'Attractions & Things to Do' },
              { href: 'jurmola/restaurants', title: 'Restaurants & Cafes' },
            ].map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">{page.title}</span>
                  <span className="ml-auto text-gray-400">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to Hub */}
        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Planning Your Trip to Jurmala?</h2>
          <p className="text-gray-400 mb-6">Explore all guide sections for the perfect holiday</p>
          <Link href={localizedHref('jurmola', language)} className="inline-block px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition">
            Back to Jurmala Guide
          </Link>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
