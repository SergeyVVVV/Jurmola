import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Jurmala Weather by Month – Best Time to Visit | Jurmola',
  description: 'Jurmala (Jūrmala) weather by month: air and sea temperature, rainfall, sunshine hours. Best time to visit Jurmala is May–September. Swimming season: July–August.',
  keywords: 'jurmala weather, jurmola weather, jurmala weather by month, jurmala sea temperature, jurmala climate, jurmala best time to visit, jurmala swimming season, jūrmala weather',
  openGraph: {
    title: 'Jurmala Weather by Month – Best Time to Visit',
    description: 'Complete climate guide to Jurmala: air and sea temperatures by month, rainfall, what to pack. Plan your perfect trip to Jurmala, Latvia.',
    url: 'https://jurmola.com/en/jurmola/weather',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jurmala Weather – Baltic coast climate' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola/weather',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/weather',
      'en': 'https://jurmola.com/en/jurmola/weather',
      'ru': 'https://jurmola.com/jurmola/weather',
      'lv': 'https://jurmola.com/lv/jurmola/weather',
    }
  }
};

const monthlyData = [
  {
    month: 'January',
    highC: -1,
    lowC: -6,
    rainfallMm: 40,
    sunnyDays: 2,
    waterC: 2,
    description: 'The coldest month. Short days (about 7 hours of light), frequent snowfall, and biting wind from the sea. The city is blanketed in snow but beautiful in its own way.',
  },
  {
    month: 'February',
    highC: 0,
    lowC: -6,
    rainfallMm: 30,
    sunnyDays: 3,
    waterC: 1,
    description: 'Still winter, but days are noticeably longer. Temperatures hover around freezing with occasional thaws. Snow cover usually persists.',
  },
  {
    month: 'March',
    highC: 3,
    lowC: -3,
    rainfallMm: 35,
    sunnyDays: 4,
    waterC: 1,
    description: 'The start of spring. Snow gradually melts but nights are still frosty. The driest period of the year. Nature is just beginning to awaken.',
  },
  {
    month: 'April',
    highC: 10,
    lowC: 2,
    rainfallMm: 33,
    sunnyDays: 6,
    waterC: 4,
    description: 'Spring gains strength. Temperatures rise and pine forests fill with fragrance. Low rainfall, but evenings are still cool.',
  },
  {
    month: 'May',
    highC: 16,
    lowC: 7,
    rainfallMm: 40,
    sunnyDays: 9,
    waterC: 10,
    description: 'A wonderful time to visit. Long days (up to 17 hours of light), lush greenery, and blooming flowers. Beaches are empty but seaside walks are magnificent.',
  },
  {
    month: 'June',
    highC: 20,
    lowC: 11,
    rainfallMm: 55,
    sunnyDays: 10,
    waterC: 15,
    description: 'The start of summer and white nights. The sunniest month with nearly 10 hours of sunshine per day. Water is still cool but sunbathing is comfortable.',
  },
  {
    month: 'July',
    highC: 22,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 10,
    waterC: 19,
    description: 'Peak season. The warmest month with comfortable sea temperatures. Beaches are full of visitors, all restaurants and entertainment are open.',
  },
  {
    month: 'August',
    highC: 21,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 9,
    waterC: 20,
    description: 'The warmest sea temperatures. An excellent month for beach holidays, though evenings become cooler by late August. Brief rain showers are possible.',
  },
  {
    month: 'September',
    highC: 17,
    lowC: 10,
    rainfallMm: 65,
    sunnyDays: 6,
    waterC: 16,
    description: 'The velvet season. Still warm during the day but evenings are cool. Fewer tourists, beautiful autumn colours. Swimming is possible in early September.',
  },
  {
    month: 'October',
    highC: 10,
    lowC: 5,
    rainfallMm: 80,
    sunnyDays: 4,
    waterC: 12,
    description: 'Golden autumn. The rainiest month. Pine forests and parks are painted in vivid colours. Perfect for spa holidays and walks in warm clothing.',
  },
  {
    month: 'November',
    highC: 4,
    lowC: 0,
    rainfallMm: 55,
    sunnyDays: 2,
    waterC: 7,
    description: 'Late autumn with short days and high humidity. First snow may fall by the end of the month. The sea is stormy and winds intensify.',
  },
  {
    month: 'December',
    highC: 1,
    lowC: -3,
    rainfallMm: 45,
    sunnyDays: 1,
    waterC: 4,
    description: 'The darkest month: less than 7 hours of daylight and under 1 hour of sunshine. Snowfall, festive atmosphere. Spa hotels offer winter wellness programmes.',
  },
];

function getSeasonColor(index: number): string {
  if (index < 2 || index === 11) return 'bg-blue-50/60 border-blue-100'; // Winter
  if (index >= 2 && index < 5) return 'bg-emerald-50/60 border-emerald-100'; // Spring
  if (index >= 5 && index < 8) return 'bg-amber-50/60 border-amber-100'; // Summer
  return 'bg-orange-50/60 border-orange-100'; // Autumn
}

function getWaterColor(temp: number): string {
  if (temp <= 9) return 'bg-blue-100/70 text-blue-800';
  if (temp <= 15) return 'bg-cyan-100/70 text-cyan-800';
  if (temp <= 19) return 'bg-teal-100/70 text-teal-800';
  return 'bg-emerald-100/70 text-emerald-800';
}

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-900 transition">Jurmala City Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Weather</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Climate &amp; Weather</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Jurmala Weather by Month
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Complete climate guide: air and sea temperatures, rainfall, sunshine hours, and seasonal recommendations.
        </p>
        <p className="text-gray-500 mb-12">Plan your perfect trip to Jurmala with our detailed weather guide</p>

        {/* Climate overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Jurmala Climate Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jurmala</strong> (also spelled <strong>Jurmola</strong>, Latvian: <em>Jūrmala</em>) sits on the shores of the Gulf of Riga in the Baltic Sea and has a <strong>humid continental climate</strong> (K&ouml;ppen classification: Dfb) with warm summers and cold winters. The proximity of the sea and pine forests creates a unique microclimate: winters are slightly milder and summers cooler than in nearby Riga.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The annual average temperature is <strong>7.7 &deg;C</strong>. Annual precipitation is approximately <strong>757 mm</strong>. Humidity is high year-round (70&ndash;90%), typical of a maritime-influenced climate. The difference between the coldest month (January, &minus;1 &deg;C) and the warmest (July, +22 &deg;C) is about 23 degrees.
            </p>
          </div>
        </section>

        {/* Quick stats */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Jurmala Climate at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '+22 \u00B0C', label: 'July high' },
              { value: '-6 \u00B0C', label: 'January low' },
              { value: '~757 mm', label: 'annual rainfall' },
              { value: '1800+ h', label: 'sunshine/year' },
              { value: '+20 \u00B0C', label: 'sea in August' },
              { value: '0 \u00B0C', label: 'sea in March' },
              { value: '70-90%', label: 'humidity' },
              { value: '18 h', label: 'daylight in June' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Monthly data table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Monthly Weather Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold">Month</th>
                  <th className="text-center p-3 font-bold">High &deg;C</th>
                  <th className="text-center p-3 font-bold">Low &deg;C</th>
                  <th className="text-center p-3 font-bold">Rain, mm</th>
                  <th className="text-center p-3 font-bold">Sunny days</th>
                  <th className="text-center p-3 font-bold">Sea &deg;C</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((m, i) => (
                  <tr key={m.month} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-3 font-medium">{m.month}</td>
                    <td className="text-center p-3">{m.highC > 0 ? '+' : ''}{m.highC}</td>
                    <td className="text-center p-3">{m.lowC > 0 ? '+' : ''}{m.lowC}</td>
                    <td className="text-center p-3">{m.rainfallMm}</td>
                    <td className="text-center p-3">{m.sunnyDays}</td>
                    <td className="text-center p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${getWaterColor(m.waterC)}`}>
                        {m.waterC > 0 ? '+' : ''}{m.waterC}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            * Data based on long-term climate averages. Actual weather may differ from average values.
          </p>
        </section>

        {/* Monthly detailed cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Month-by-Month Weather Guide</h2>
          <div className="grid gap-4">
            {monthlyData.map((m, i) => (
              <div key={m.month} className={`p-5 rounded-lg border ${getSeasonColor(i)}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 shrink-0">
                    <h3 className="text-xl font-bold">{m.month}</h3>
                    <div className="text-sm text-gray-600 mt-1">
                      {m.highC > 0 ? '+' : ''}{m.highC} / {m.lowC > 0 ? '+' : ''}{m.lowC} &deg;C
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{m.description}</p>
                  <div className="flex gap-3 md:gap-4 shrink-0 text-center">
                    <div>
                      <div className="text-xs text-gray-500">Rain</div>
                      <div className="font-bold text-sm">{m.rainfallMm} mm</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Sea</div>
                      <div className={`font-bold text-sm px-2 py-0.5 rounded ${getWaterColor(m.waterC)}`}>
                        {m.waterC > 0 ? '+' : ''}{m.waterC}&deg;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best time to visit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Best Time to Visit Jurmala</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50/50 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold mb-3">Beach Holiday: July &ndash; August</h3>
              <p className="text-gray-700 leading-relaxed">
                The ideal time for swimming. Air temperature +21&ndash;22 &deg;C, sea water warms to +19&ndash;20 &deg;C.
                All beaches are equipped with facilities and lifeguards. Long days (16&ndash;18 hours of light).
                The only downside &mdash; peak season means Jurmala can be crowded.
              </p>
            </div>
            <div className="p-6 bg-green-50/50 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3">Shoulder Season: May &ndash; June, September</h3>
              <p className="text-gray-700 leading-relaxed">
                An excellent choice if you want to avoid crowds. In May and June, nature is in full bloom and days are very long.
                September is the velvet season with warm days and fewer tourists. Swimming is possible in early September.
              </p>
            </div>
            <div className="p-6 bg-amber-50/50 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-3">Spa &amp; Nature: October &ndash; April</h3>
              <p className="text-gray-700 leading-relaxed">
                The off-season is ideal for spa holidays: prices are lower and spa hotels operate year-round.
                Walks along winter beaches and through pine forests, peace and tranquillity. Kemeri mineral springs are accessible any time.
              </p>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3">Winter Wonderland: December &ndash; February</h3>
              <p className="text-gray-700 leading-relaxed">
                Not for beach holidays, but winter Jurmala has its own charm. Snow-covered pines, stormy seas,
                festive decorations. Spa hotels offer special winter programmes and New Year packages.
              </p>
            </div>
          </div>
        </section>

        {/* Swimming season */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Swimming Season in Jurmala</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The swimming season on Jurmala&apos;s beaches runs from <strong>late June to late August</strong>, when the Gulf of Riga water temperature rises to a comfortable +18&ndash;20 &deg;C. The peak is early August when the water can warm to +22&ndash;23 &deg;C.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The Gulf of Riga is shallow, so water warms faster than in the open Baltic Sea. The gentle slope into the water makes Jurmala&apos;s beaches safe for children.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">June</div>
                <div className="text-xl font-bold text-gray-900">+15 &deg;C</div>
                <div className="text-xs text-gray-500">cool</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">July</div>
                <div className="text-xl font-bold text-gray-900">+19 &deg;C</div>
                <div className="text-xs text-gray-500">swimmable</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">August</div>
                <div className="text-xl font-bold text-gray-900">+20 &deg;C</div>
                <div className="text-xs text-gray-500">best time</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">September</div>
                <div className="text-xl font-bold text-gray-900">+16 &deg;C</div>
                <div className="text-xs text-gray-500">for the brave</div>
              </div>
            </div>
          </div>
        </section>

        {/* What to pack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>What to Pack for Jurmala</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Summer (June &ndash; August)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Light clothing and shorts</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Swimwear and beach towel</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Sunscreen (SPF 30+)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Light jacket or cardigan for evenings</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Rain jacket or umbrella (showers happen)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Comfortable walking shoes for beach and forest</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Spring &amp; Autumn (March &ndash; May, September &ndash; November)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Layered clothing</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Waterproof jacket with hood</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Warm sweater or fleece</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Waterproof shoes</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Scarf and beanie (for late autumn)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Umbrella &mdash; essential</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Winter (December &ndash; February)</h3>
              <ul className="space-y-2 text-gray-700 md:columns-2">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Warm winter coat (down jacket)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Thermal base layers</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Warm hat, scarf, and gloves</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Winter boots with non-slip soles</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Moisturiser (cold, dry air)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Warm socks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips for tourists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Weather Tips for Visitors</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">The Baltic Sun is Deceptive</h3>
              <p className="text-gray-700">Even on cloudy days you can get sunburned. Always use sunscreen in summer, especially at the beach where reflection from water and sand amplifies UV radiation.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Weather Changes Quickly</h3>
              <p className="text-gray-700">The maritime climate is unpredictable: a sunny morning can give way to rain by lunchtime, only for the sun to reappear by evening. Always carry a rain jacket or umbrella, even if the morning is clear.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Sea Breeze Factor</h3>
              <p className="text-gray-700">The beach often has wind blowing from the Gulf of Riga, making the perceived temperature 3&ndash;5 &deg;C lower than actual. Bring a windbreaker even when the thermometer reads +22 &deg;C.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">White Nights in June</h3>
              <p className="text-gray-700">In late June, Jurmala experiences white nights &mdash; it never gets fully dark. Daylight lasts about 18 hours. If you&apos;re sensitive to light, bring a sleep mask.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Dark but Beautiful Winters</h3>
              <p className="text-gray-700">In December, daylight lasts only about 7 hours and the sun may appear for less than one hour. But snow-covered Jurmala with illuminated pines is an unforgettable sight. Bring a torch for evening walks.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Healing Air All Year Round</h3>
              <p className="text-gray-700">The combination of sea air and pine forest phytoncides creates a unique atmosphere beneficial for the respiratory system. This effect is strongest in spring and summer when the pines release more resin.</p>
            </div>
          </div>
        </section>

        {/* Seasons summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Seasons in Jurmala: Quick Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Winter (December &ndash; February)</h3>
              <p className="text-gray-700 mb-3">Temperature from &minus;6 to +1 &deg;C. Snow, short days, frosty air. Coastal water may freeze.</p>
              <p className="text-sm text-gray-500">Ideal for: winter spa lovers, seekers of quiet, and snowy landscapes.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Spring (March &ndash; May)</h3>
              <p className="text-gray-700 mb-3">Temperature from &minus;3 to +16 &deg;C. Nature awakens, low rainfall, growing daylight hours.</p>
              <p className="text-sm text-gray-500">Ideal for: nature lovers, photographers, those who want to see Jurmala without the crowds.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Summer (June &ndash; August)</h3>
              <p className="text-gray-700 mb-3">Temperature from +11 to +22 &deg;C. White nights, beach season, festivals, and vibrant cultural life.</p>
              <p className="text-sm text-gray-500">Ideal for: everyone! Beach holidays, families with children, cultural tourists.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Autumn (September &ndash; November)</h3>
              <p className="text-gray-700 mb-3">Temperature from 0 to +17 &deg;C. Golden autumn, mushroom foraging in forests, stormy seas, cosy cafes.</p>
              <p className="text-sm text-gray-500">Ideal for: romantics, spa enthusiasts, those who prefer tranquillity.</p>
            </div>
          </div>
        </section>

        {/* Other guide sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>More from the Jurmala Guide</h2>
          <div className="grid gap-3">
            {[
              { href: 'jurmola', title: 'Jurmala City Guide', description: 'Main guide overview page' },
              { href: 'jurmola/how-to-get-there', title: 'How to Get There', description: 'Train, taxi, bus from Riga' },
              { href: 'jurmola/attractions', title: 'Attractions & Things to Do', description: 'Beaches, parks, Jomas Street' },
              { href: 'jurmola/restaurants', title: 'Restaurants & Cafes', description: 'Best places to eat' },
              { href: 'jurmola/where-to-stay', title: 'Where to Stay', description: 'Hotels and spa resorts' },
            ].map((link) => (
              <Link key={link.href} href={localizedHref(link.href, language)} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 border border-gray-200">
                <div>
                  <h3 className="font-bold text-gray-900">{link.title}</h3>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </div>
                <span className="text-gray-400 text-xl">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section className="mb-12 text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Chosen Your Travel Dates?</h2>
          <p className="text-gray-400 mb-6">Continue planning with other sections of our guide</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">How to Get There</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Where to Stay</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Attractions</Link>
          </div>
        </section>

        {/* Back to guide */}
        <div className="text-center">
          <Link href={localizedHref('jurmola', language)} className="text-gray-600 hover:text-gray-900 font-medium transition">
            &larr; Back to the Jurmala City Guide
          </Link>
        </div>

      </main>

      <Footer language={language} />
    </div>
  );
}
