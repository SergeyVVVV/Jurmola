import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'How to Get to Jurmala – Train, Taxi, Bus, Car | Jurmola',
  description: 'How to get to Jurmala from Riga and airport: Vivi train for €1.50, taxi, bus, car. Jurmala entry pass €5/day. Schedules, prices, and practical tips 2026.',
  keywords: 'how to get to jurmala, jurmala train, jurmala from riga, jurmala taxi, jurmala bus, jurmala entry pass, jurmala transport, jurmola transport, jurmala travel guide',
  openGraph: {
    title: 'How to Get to Jurmala – Train, Taxi, Bus, Car',
    description: 'Complete transport guide to Jurmala: train from Riga in 30 minutes, taxi from airport, car entry pass. Prices, schedules, and tips.',
    url: 'https://jurmola.com/en/jurmola/how-to-get-there',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'How to get to Jurmala – transport guide' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola/how-to-get-there',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/how-to-get-there',
      'en': 'https://jurmola.com/en/jurmola/how-to-get-there',
      'ru': 'https://jurmola.com/jurmola/how-to-get-there',
      'lv': 'https://jurmola.com/lv/jurmola/how-to-get-there',
    }
  }
};

export default function HowToGetTherePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition">Jurmala City Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">How to Get There</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Transport Guide 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          How to Get to Jurmala
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Train, taxi, bus, car – all the ways to reach <strong>Jurmala</strong> from Riga and the airport.
          Prices, schedules, and practical tips.
        </p>
        <p className="text-gray-500 mb-12">Your complete transport guide for planning the trip.</p>

        {/* Quick Summary */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Train</div>
              <div className="text-sm text-gray-600">30 min / from €1.43</div>
              <div className="text-xs text-gray-400 mt-1">Best option</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Taxi</div>
              <div className="text-sm text-gray-600">20–30 min / €32–50</div>
              <div className="text-xs text-gray-400 mt-1">From airport</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Car</div>
              <div className="text-sm text-gray-600">25 min / €5 entry pass</div>
              <div className="text-xs text-gray-400 mt-1">A10/E22 motorway</div>
            </div>
          </div>
        </section>

        {/* BY TRAIN */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-black pb-2 flex-1" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>By Train from Riga</h2>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Recommended</span>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>The train is the easiest and cheapest way</strong> to get to Jurmala. Electric trains operated by <strong>Vivi</strong> (formerly Pasažieru vilciens)
              run from <strong>Riga Central Station</strong> (Rīgas Centrālā stacija) in the <strong>Tukums direction</strong>.
              Trains depart from <strong>Platform 4, Tracks 3–4</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Schedule</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>First train</span><strong>5:00 AM</strong></li>
                <li className="flex justify-between"><span>Last train</span><strong>11:45 PM</strong></li>
                <li className="flex justify-between"><span>Frequency</span><strong>every 30 min</strong></li>
                <li className="flex justify-between"><span>Journey time</span><strong>30–46 min</strong></li>
              </ul>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Ticket Prices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Online (vivi.lv)</span><strong className="text-gray-900 font-bold">€1.43</strong></li>
                <li className="flex justify-between"><span>Station booth</span><strong>€1.50</strong></li>
                <li className="flex justify-between"><span>From conductor</span><strong className="text-red-600">up to €2.00</strong></li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded-r mb-6">
            <h3 className="font-bold text-lg mb-2">Which Stop to Get Off At?</h3>
            <p className="text-gray-700 mb-2">
              There are <strong>14 train stations</strong> in Jurmala. The most popular stop is
              <strong> Majori</strong>, the heart of the resort town. It&apos;s right next to Jomas Street, the beach, and most restaurants.
            </p>
            <p className="text-sm text-gray-500">
              Other popular stations: Dzintari – concert hall area, Bulduri – quiet beaches, Kemeri – national park.
            </p>
          </div>

          <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">How to Buy Tickets</h3>
            <p className="text-gray-700">
              The best deal is through the <strong>Vivi app or website (vivi.lv)</strong> – about 5% cheaper.
              You can also buy tickets at station counters. Buying from the conductor on the train costs more –
              up to €2.00 per ticket.
            </p>
          </div>
        </section>

        {/* FROM AIRPORT */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>From Riga Airport</h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Riga International Airport (RIX)</strong> is approximately <strong>20 km</strong> from Jurmala.
              The journey takes <strong>20–30 minutes</strong> depending on traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Taxi from Airport</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Pre-booked online</span><strong className="text-gray-900 font-bold">€32–44</strong></li>
                <li className="flex justify-between"><span>Metered taxi</span><strong>€40–50</strong></li>
                <li className="flex justify-between"><span>Journey time</span><strong>20–30 min</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Pre-booked transfers are recommended – fixed price and the driver meets you with a name sign.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Bus + Train (Budget)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Bus 22 to Riga</span><strong>€1.81</strong></li>
                <li className="flex justify-between"><span>Train to Jurmala</span><strong>€1.43–1.50</strong></li>
                <li className="flex justify-between"><span>Total</span><strong className="text-gray-900 font-bold">~€3.25</strong></li>
                <li className="flex justify-between"><span>Total time</span><strong>~1–1.5 hrs</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Bus 22 goes to Riga city center. From there, transfer to the train heading toward Tukums.</p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <h3 className="font-bold text-lg mb-2">Tip</h3>
            <p className="text-gray-700">
              If you&apos;re arriving at night or with lots of luggage, a <strong>pre-booked transfer</strong> is the best option.
              For budget daytime travel, the &quot;Bus 22 + train&quot; route costs just ~€3.25.
            </p>
          </div>
        </section>

        {/* BY CAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>By Car</h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              The <strong>A10/E22 motorway</strong> connects Riga to Jurmala. The drive takes about <strong>25 minutes</strong>.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r mb-6">
            <h3 className="font-bold text-xl mb-3 text-gray-900">City Entry Pass – REQUIRED!</h3>
            <p className="text-gray-700 mb-4">
              Since February 2024, a <strong>city entry pass is required year-round</strong> (previously only in summer).
              Driving without a pass results in a <strong>€50 fine</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Cost</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>Daily pass</span><strong>€5.00</strong></li>
                  <li className="flex justify-between"><span>Fine for non-payment</span><strong className="text-red-600">€50.00</strong></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Where to Buy</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><strong>Mobilly</strong> app</li>
                  <li><strong>EuroPark</strong> app</li>
                  <li>Vending machines at city entrances</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              The pass is valid for unlimited entries on the day of purchase. Price as of January 2026.
            </p>
          </div>
        </section>

        {/* BY BUS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>By Bus</h2>
          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Buses and minibuses run between <strong>Riga Bus Station</strong> (Rīgas autoosta) and Jurmala.
              This option is less popular than the train due to potential highway traffic, but it can be convenient
              for reaching parts of Jurmala that are further from the railway line.
            </p>
            <p className="text-sm text-gray-500">
              Bus schedules are available at <a href="https://www.autoosta.lv" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-900">autoosta.lv</a> or <a href="https://www.1188.lv" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-900">1188.lv</a>.
            </p>
          </div>
        </section>

        {/* BY BICYCLE */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>By Bicycle</h2>
          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              There is a cycling route from Riga to Jurmala. The ride takes 1.5–2 hours depending on the route and your fitness level.
              You can also bring your bicycle on the train – a <strong>separate bike ticket</strong> is required.
            </p>
            <p className="text-sm text-gray-500">
              Jurmala has an excellent network of cycling paths – great for getting around between districts.
            </p>
          </div>
        </section>

        {/* FROM OTHER COUNTRIES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>From Other Countries</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-2">By Air</h3>
              <p className="text-gray-700">
                The nearest major airport is <strong>Riga (RIX)</strong>. Direct flights from cities across Europe,
                the Middle East, and beyond. From the airport to Jurmala takes just 20–30 minutes by taxi.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-2">By Ferry</h3>
              <p className="text-gray-700">
                The <strong>Stockholm–Riga</strong> ferry route (Tallink/Silja Line) is available.
                The ferry terminal is in Riga, from where you can reach Jurmala by train or taxi.
              </p>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Price &amp; Time Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-medium">Transport</th>
                  <th className="text-left p-4 font-medium">Time</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Comfort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">Train</td>
                  <td className="p-4">30–46 min</td>
                  <td className="p-4 font-bold text-gray-900">€1.43–2.00</td>
                  <td className="p-4">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Taxi (from Riga)</td>
                  <td className="p-4">25–40 min</td>
                  <td className="p-4">€20–35</td>
                  <td className="p-4">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Taxi (from airport)</td>
                  <td className="p-4">20–30 min</td>
                  <td className="p-4">€32–50</td>
                  <td className="p-4">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Bus + Train</td>
                  <td className="p-4">1–1.5 hrs</td>
                  <td className="p-4 font-bold text-gray-900">~€3.25</td>
                  <td className="p-4">OK</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Car</td>
                  <td className="p-4">25 min</td>
                  <td className="p-4">fuel + €5 pass</td>
                  <td className="p-4">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Bus</td>
                  <td className="p-4">40–60 min</td>
                  <td className="p-4">~€2–3</td>
                  <td className="p-4">OK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Practical Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Train Tickets</h3>
              <p className="text-gray-700 text-sm">
                Buy your ticket in advance through the Vivi app – save ~5% and skip the queue.
                Show the ticket on your phone to the inspector.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Car Entry Pass</h3>
              <p className="text-gray-700 text-sm">
                Install the Mobilly app before your trip. You can buy the pass right as you approach the city.
                Cameras read your license plate automatically.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Late Night Arrivals</h3>
              <p className="text-gray-700 text-sm">
                The last Bus 22 runs around midnight. If you arrive later, your only options are a taxi or pre-booked transfer.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Getting Around Jurmala</h3>
              <p className="text-gray-700 text-sm">
                Within Jurmala, cycling or hopping between train stations is the easiest way to get around.
                The distance from Lielupe to Kemeri is about 30 km.
              </p>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>More from the City Guide</h2>
          <div className="grid gap-3">
            {[
              { href: 'jurmola', title: 'Jurmala City Guide', description: 'Main guide page – everything about Jurmala in one place.' },
              { href: 'jurmola/weather', title: 'Weather in Jurmala', description: 'Monthly forecast, sea temperature, best time to visit.' },
              { href: 'jurmola/attractions', title: 'Attractions & Things to Do', description: 'Beaches, Kemeri National Park, Jomas Street, Dzintari, and more.' },
              { href: 'jurmola/restaurants', title: 'Restaurants, Bars & Cafes', description: 'The best places to eat in Jurmala.' },
              { href: 'jurmola/where-to-stay', title: 'Where to Stay', description: 'Spa hotels, boutique guesthouses, and budget accommodation.' },
            ].map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <span className="text-gray-400 text-xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">The Train Is the Best Way to Reach Jurmala</h2>
          <p className="text-gray-400 mb-6">30 minutes from Riga, from just €1.43. Trains every half hour from 5:00 AM to 11:45 PM</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">Where to Stay</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Attractions</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
