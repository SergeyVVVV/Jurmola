import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Kur palikt Jūrmalā – Labākās viesnīcas un naktsmītnes | Jurmola',
  description: 'Labākās Jūrmalas viesnīcas 2026: luksusa SPA viesnīcas no €93, butika viesnīcas, budžeta naktsmītnes no €30. Top 15 viesnīcu reitings, rezervēšanas padomi.',
  keywords: 'jūrmala viesnīcas, jurmola viesnīcas, kur palikt jūrmalā, jūrmala naktsmītnes, jūrmala spa viesnīcas, budžeta viesnīcas jūrmala, baltic beach hotel, hotel jurmala spa',
  openGraph: {
    title: 'Kur palikt Jūrmalā – Labākās viesnīcas un naktsmītnes',
    description: 'Pilns Jūrmalas izmitināšanas ceļvedis: no 5 zvaigžņu SPA viesnīcām līdz budžeta naktsmītnēm. 614 objekti, vidējā cena no €52/nakti.',
    url: 'https://jurmola.com/lv/jurmola/where-to-stay',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Viesnīcas un naktsmītnes Jūrmalā' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola/where-to-stay',
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
    price: 'no €147/nakti',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Privāta pludmale', 'Jūrmalas centrā', '200 m no Jomas ielas', 'Pasaules līmeņa SPA'],
    description: 'Vadošā 5 zvaigžņu viesnīca Jūrmalas sirdī ar privātu pludmali un luksusa SPA. Ideāla atrašanās vieta tiem, kas vēlas būt notikumu centrā.',
  },
  {
    name: 'Hotel Jurmala Spa & Conference Center',
    stars: 4,
    price: 'no €93/nakti',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['190 numuri', '#1 TripAdvisor', 'Wellness Oasis', '200+ SPA procedūras'],
    description: 'TripAdvisor augstāk novērtētā viesnīca Jūrmalā. 190 numuri, milzīgs Wellness Oasis SPA centrs ar vairāk nekā 200 procedūrām.',
  },
  {
    name: 'SemaraH Hotel Lielupe SPA & Conferences',
    stars: 4.5,
    price: 'no €104/nakti',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Ģimenēm draudzīga', 'Iekštelpu baseins', 'Vērtējums 9.1/10', 'Konferenču telpas'],
    description: 'Lieliska izvēle ģimenēm ar bērniem. Iekštelpu baseins, bērnu programmas un izcils viesu vērtējums 9.1/10.',
  },
  {
    name: 'Jurmala Golf Club & Hotel',
    stars: 4.5,
    price: 'pēc pieprasījuma',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Golfa laukums', 'SPA centrs', 'Eleganta maltīte', 'Augstākā klase'],
    description: 'Vienīgais golfa kūrorts Jūrmalā ar 18 laukumu golfa lauku, SPA centru un izsmalcinātu restorānu. Ideāls golfa entuziastiem.',
  },
];

const boutiqueHotels = [
  {
    name: 'Boutique Hotel Light House Jurmala',
    stars: 4,
    price: 'no €110/nakti',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Unikālākā viesnīca', 'Privāta pludmale', '700 m no Dzintariem', 'Pāru iecienīta'],
    description: 'Unikālākā butika viesnīca Jūrmalā. Privāta pludmale, romantiska atmosfēra un tikai 700 metri no Dzintaru koncertzāles.',
  },
  {
    name: 'Pegasa Pils Spa',
    stars: 4,
    price: 'no €92/nakti',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['20 m no Dzintariem', 'Netālu no pludmales', 'SPA procedūras', 'Vēsturiska ēka'],
    description: 'Atrodas tikai 20 metrus no Dzintaru koncertzāles un dažus soļus no pludmales. Vēsturiska ēka ar modernu SPA.',
  },
  {
    name: 'TB Palace Hotel & SPA',
    stars: 4,
    price: 'no €95/nakti',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Labākās brokastis', 'Populāra pāru vidū', 'SPA centrs', 'Elegants interjers'],
    description: 'Slavena ar izcilām brokastīm un elegantu interjeru. Īpaši populāra romantisku pāru vidū.',
  },
  {
    name: 'Amber SPA Boutique Hotel',
    stars: 4,
    price: 'no €85/nakti',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Lieliskas brokastis', 'Butika atmosfēra', 'SPA', 'Mājīgs dizains'],
    description: 'Intīma butika viesnīca ar mājīgu atmosfēru. Viesi atzinīgi novērtē izcilās brokastis un uzmanīgo apkalpošanu.',
  },
  {
    name: 'Parus Boutique Hotel',
    stars: 3.5,
    price: 'no €75/nakti',
    priceCategory: '\u20AC\u20AC',
    features: ['100 m no pludmales', 'Pie Jomas ielas', 'Klusa vieta', 'Ērti numuri'],
    description: 'Klusa butika viesnīca tikai 100 metru attālumā no pludmales un netālu no Jomas ielas. Ideāls līdzsvars starp privātumu un ērtu atrašanās vietu.',
  },
];

const midRangeHotels = [
  {
    name: 'Kurshi Hotel & SPA',
    stars: 3.5,
    price: 'no €70/nakti',
    priceCategory: '\u20AC\u20AC',
    features: ['400 m no jūras', 'SPA pakalpojumi', 'Restorāns', 'Laba atrašanās vieta'],
    description: 'Komfortabla viesnīca ar SPA pakalpojumiem 400 metru attālumā no jūras. Lielisks cenas un kvalitātes līdzsvars.',
  },
  {
    name: 'Daina Jūrmala Beach Hotel & SPA',
    stars: 3.5,
    price: 'no €65/nakti',
    priceCategory: '\u20AC\u20AC',
    features: ['120 m no pludmales', 'Kluss rajons', 'Atjaunota 2015', 'SPA pakalpojumi'],
    description: '2015. gadā atjaunotā viesnīca klusā rajonā tikai 120 metru attālumā no pludmales. Mierīga atmosfēra un moderns komforts.',
  },
  {
    name: 'Amber Sea Hotel & SPA',
    stars: 3.5,
    price: 'no €68/nakti',
    priceCategory: '\u20AC\u20AC',
    features: ['Priežu mežā', 'Aqua Club', 'Baseins un pirts', 'Dabas apkārtne'],
    description: 'Unikāla atrašanās vieta priežu mežā. Savs Aqua Club ar baseinu un pirts pilnīgai atpūtai.',
  },
];

const budgetHotels = [
  {
    name: 'Villa Joma',
    stars: 3,
    price: 'no €45/nakti',
    priceCategory: '\u20AC',
    features: ['Jūrmalas centrā', '5 min līdz pludmalei', '20. gs. sākuma ēka', 'Vēsturisks šarms'],
    description: 'Burvīga 20. gadsimta sākuma ēka Jūrmalas sirdī. 5 minūšu pastaigas attālumā no pludmales, pieejamas cenas un vēsturiska atmosfēra.',
  },
  {
    name: 'Elīna Hotel',
    stars: 3,
    price: 'no €30/nakti',
    priceCategory: '\u20AC',
    features: ['Vispieejamākā', 'Tīri numuri', 'Pamata komforts', 'Labi atsauksmēm'],
    description: 'Visbudžetiskākais variants Jūrmalā. Tīri numuri ar pamata komfortu sākot no €30 par nakti.',
  },
  {
    name: 'Boutique Mama',
    stars: 4,
    price: 'no €60/nakti',
    priceCategory: '\u20AC',
    features: ['Lētākā 4*', 'Vērtējums 8.3', 'Stilīgs dizains', 'Lieliska cena'],
    description: 'Vispieejamākā 4 zvaigžņu viesnīca Jūrmalā ar vērtējumu 8.3. Stilīgs dizains un lielisks serviss par saprātīgu cenu.',
  },
];

function StarRating({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 !== 0;
  return (
    <span className="text-yellow-500 text-sm" aria-label={`${stars} no 5 zvaigznēm`}>
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
        Rezervēt Booking.com
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
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-900 transition-colors">Jūrmala</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Kur palikt</span>
        </nav>

        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Ceļvedis 2026</span>
        <h1 className="text-4xl font-bold mb-6 leading-tight mt-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Kur palikt Jūrmalā
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Pilns ceļvedis par <strong>Jūrmalas</strong> viesnīcām un naktsmītnēm: no greznām 5 zvaigžņu SPA viesnīcām
          līdz mājīgām budžeta naktsmītnēm. Vairāk nekā <strong>614 objekti</strong> katrai gaumei un budžetam.
        </p>
        <p className="text-gray-500 mb-12">Vidējās cenas: 3* no €52/nakti &middot; 4* no €111/nakti &middot; SPA no €172/nakti</p>

        {/* Quick Stats */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Izmitināšana skaitļos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '614', label: 'objekti' },
              { value: 'no €30', label: 'vispieejamākā' },
              { value: '~€111', label: 'vidējā 4 zvaigžņu' },
              { value: 'Februāris', label: 'lētākais mēnesis' },
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
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Luksusa un SPA viesnīcas</h2>
          <p className="text-gray-500 mb-6">Kategorija {'\u20AC\u20AC\u20AC'} &middot; no €93/nakti</p>
          <div className="grid md:grid-cols-2 gap-6">
            {luxuryHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Boutique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Butika viesnīcas</h2>
          <p className="text-gray-500 mb-6">Kategorija {'\u20AC\u20AC'}-{'\u20AC\u20AC\u20AC'} &middot; no €75/nakti</p>
          <div className="grid md:grid-cols-2 gap-6">
            {boutiqueHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Mid-Range */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Vidējas cenu kategorijas viesnīcas</h2>
          <p className="text-gray-500 mb-6">Kategorija {'\u20AC\u20AC'} &middot; no €65/nakti</p>
          <div className="grid md:grid-cols-2 gap-6">
            {midRangeHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Budžeta naktsmītnes</h2>
          <p className="text-gray-500 mb-6">Kategorija {'\u20AC'} &middot; no €30/nakti</p>
          <div className="grid md:grid-cols-2 gap-6">
            {budgetHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mb-12 text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Atrodiet savu ideālo viesnīcu Jūrmalā</h2>
          <p className="text-gray-400 mb-6">Vairāk nekā 614 objekti Booking.com ar bezmaksas atcelšanu</p>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Skatīt visas viesnīcas Booking.com
          </a>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Izmitināšanas padomi Jūrmalā</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Labākie rajoni</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Majori</strong> -- dzīves centrs, Jomas iela, restorāni, veikali. Visērtākais rajons.</li>
                <li><strong>Dzintari</strong> -- koncertzāle, respektablas villas. Ideāli kultūras atpūtai.</li>
                <li><strong>Bulduri</strong> -- labākās Zilā karoga pludmales, mierīga atmosfēra.</li>
                <li><strong>Lielupe</strong> -- upe, golfs, ģimenes atpūta. Kluss un zaļš.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Kad rezervēt lētāk</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Februāris</strong> -- lētākais mēnesis, cenas par 40-50% zemākas nekā vasarā.</li>
                <li><strong>Novembris-marts</strong> -- zemā sezona ar lieliskām SPA viesnīcu atlaidēm.</li>
                <li><strong>Darbdienas</strong> -- par 15-25% lētāk nekā nedēļas nogalē, īpaši vasarā.</li>
                <li><strong>Agrīna rezervēšana</strong> -- 2-3 mēnešus iepriekš nodrošina labākās cenas.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Ko izvēlēties</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>SPA atpūta</strong> -- Hotel Jurmala Spa (200+ procedūras) vai Baltic Beach Hotel.</li>
                <li><strong>Romantika</strong> -- Light House Jurmala vai TB Palace Hotel.</li>
                <li><strong>Ģimene ar bērniem</strong> -- SemaraH Lielupe (baseins, bērnu programmas).</li>
                <li><strong>Budžets</strong> -- Elīna Hotel no €30 vai Boutique Mama no €60.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Noderīgi padomi</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Gandrīz visas 4*+ viesnīcas iekļauj SPA zonu istabas cenā.</li>
                <li>Vasarā rezervējiet laicīgi -- populāras viesnīcas izpērk 2 mēnešus iepriekš.</li>
                <li>Daudzas viesnīcas piedāvā transfēru no dzelzceļa stacijas vai Rīgas.</li>
                <li>Pārbaudiet, vai brokastis ir iekļautas -- tas var ietaupīt €10-20 dienā.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Citas ceļveža sadaļas</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: 'jurmola/weather', title: 'Laikapstākļi Jūrmalā' },
              { href: 'jurmola/how-to-get-there', title: 'Kā nokļūt' },
              { href: 'jurmola/attractions', title: 'Apskates vietas' },
              { href: 'jurmola/restaurants', title: 'Restorāni un kafejnīcas' },
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
          <h2 className="text-2xl font-bold mb-3">Plānojat braucienu uz Jūrmalu?</h2>
          <p className="text-gray-400 mb-6">Izpētiet visas ceļveža sadaļas ideālai atpūtai</p>
          <Link href={localizedHref('jurmola', language)} className="inline-block px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition">
            Atpakaļ uz ceļvedi
          </Link>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
