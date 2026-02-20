import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Lab\u0101kie restor\u0101ni J\u016brmal\u0101 \u2013 B\u0101ri, kafejn\u012bcas un restor\u0101ni | Jurmola',
  description: 'Pilns ce\u013Cvedis par J\u016brmalas restor\u0101niem: no izsmalcin\u0101tas virtuves l\u012Bdz m\u0101j\u012Bg\u0101m kafejn\u012Bc\u0101m un pludmales b\u0101riem. 150+ vietas, lab\u0101k\u0101s vietas uz Jomas ielas, j\u016bras veltes, latvie\u0161u un starptautisk\u0101 virtuve.',
  keywords: 'j\u016brmala restor\u0101ni, jurmola restor\u0101ni, kafejn\u012Bcas j\u016brmala, b\u0101ri j\u016brmala, kur \u0113st j\u016brmala, jomas iela restor\u0101ni, j\u016brmala \u0113din\u0101\u0161ana, jurmola',
  openGraph: {
    title: 'Lab\u0101kie restor\u0101ni J\u016brmal\u0101 \u2013 B\u0101ri, kafejn\u012Bcas un restor\u0101ni',
    description: 'Pilns ce\u013Cvedis par J\u016brmalas restor\u0101niem, b\u0101riem un kafejn\u012Bc\u0101m. No izsmalcin\u0101tas virtuves l\u012Bdz m\u0101j\u012Bg\u0101m kafejn\u012Bc\u0101m.',
    url: 'https://jurmola.com/lv/jurmola/restaurants',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'J\u016brmalas restor\u0101ni \u2013 lab\u0101k\u0101s \u0113din\u0101\u0161anas vietas' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola/restaurants',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/restaurants',
      'en': 'https://jurmola.com/en/jurmola/restaurants',
      'ru': 'https://jurmola.com/jurmola/restaurants',
      'lv': 'https://jurmola.com/lv/jurmola/restaurants',
    }
  }
};

const fineDining = [
  { name: '36.Line Grill Restaurant', cuisine: 'J\u016bras veltes un grils', price: '\u20ac\u20ac\u20ac', description: 'Restor\u0101ns pie pludmales, kas specializ\u0113jas j\u016bras velt\u0113s un gril\u0113tos \u0113dienos. Degust\u0101cijas izv\u0113lnes ar svaig\u0101kaj\u0101m Baltijas j\u016bras veltem.' },
  { name: 'VIEW Restaurant & Lounge', cuisine: 'Gurmee', price: '\u20ac\u20ac\u20ac', description: 'Gurmee restor\u0101ns ar panor\u0101mas skatu uz j\u016bru. Stilgs interjer un izsmalcin\u0101ti \u0113dieni no \u0161efpav\u0101ra.' },
  { name: 'FACES Restaurant', cuisine: 'M\u016bsdienu eiropie\u0161u', price: '\u20ac\u20ac\u20ac', description: 'Kur trad\u012Bcijas satiek inov\u0101cijas. Restor\u0101ns j\u016bras krast\u0101 ar autora virtuvi un elegantu atmosf\u0113ru.' },
  { name: 'TB Palace', cuisine: 'Augst\u0101 virtuve', price: '\u20ac\u20ac\u20ac', description: 'Izsmalcin\u0101ts restor\u0101ns \u012Bpa\u0161iem gad\u012Bjumiem. Korporat\u012Bv\u0101s pusdienas, pie\u0146em\u0161anas un rafinets izv\u0113lne.' },
];

const casualDining = [
  { name: 'Majorenhoff', cuisine: 'Eiropie\u0161u', price: '\u20ac\u20ac', description: 'Pa\u0161\u0101 J\u016brmalas sird\u012B \u2014 ide\u0101ls romantisk\u0101m vakari\u0146\u0101m. Eiropie\u0161u virtuve m\u0101j\u012Bg\u0101 atmosf\u0113r\u0101.' },
  { name: 'Il Sole', cuisine: 'It\u0101\u013Cu', price: '\u20ac\u20ac', description: 'M\u016bsdienu it\u0101\u013Cu virtuve ar panor\u0101mas skatu uz j\u016bru. Eleganta ikdienas atmosf\u0113ra.' },
  { name: 'O\'Sole Mio', cuisine: 'Vidusjuras', price: '\u20ac\u20ac', description: 'Vidusjuras virtuve Jomas iel\u0101 61. Jauns restor\u0101ns, atv\u0113rts 2024. gada decembr\u012B.' },
  { name: 'Laivas Restaurant', cuisine: 'Latvie\u0161u', price: '\u20ac\u20ac\u2013\u20ac\u20ac\u20ac', description: 'Restor\u0101ns uz Lielupes upes ar latvie\u0161u specialit\u0101t\u0113m. Restorat\u0113ra Aleksandra Rappoporta projekts.' },
  { name: 'Gan Bei Jurmala', cuisine: '\u0136\u012Bnie\u0161u / \u0100zijas', price: '\u20ac\u20ac', description: '\u0136\u012Bnie\u0161u un \u0101zijas virtuve slavenaj\u0101 Jomas iel\u0101. Autentiskas \u0100zijas gar\u0161as pie Baltijas j\u016bras.' },
  { name: 'MO Restbar', cuisine: 'J\u016bras veltes un su\u0161i', price: '\u20ac\u20ac', description: 'J\u016bras veltes un su\u0161i stilg\u0101 vid\u0113. V\u0113rt\u0113jums 4.2 \u2014 viena no popul\u0101r\u0101kaj\u0101m viet\u0101m J\u016brmal\u0101.' },
  { name: 'Grill & Fish Jomas Terase', cuisine: 'Grils un zivis', price: '\u20ac\u20ac', description: 'Gril\u0113tas svaigas zivis un ga\u013Ca \u0113dieni uz atv\u0113rtas terases tie\u0161i Jomas iel\u0101.' },
];

const cafes = [
  { name: 'Cafe 53', cuisine: 'Kafejn\u012Bca un BBQ', price: '\u20ac', description: 'Divi st\u0101vi un milz\u012Bga terase. Unik\u0101ls koncepts, kur BBQ satiek kafijas kult\u016Bru.' },
  { name: 'Madam Brios', cuisine: 'Fran\u010Du maizniec\u012Bba', price: '\u20ac', description: 'Fran\u010Du maizniec\u012Bba uz Dubultu/Mellu\u017Eu robe\u017Eas. Noteikti j\u0101nogaršo firmas k\u016Bci\u0146a \u201CM\u0101kon\u012Btis\u201D.' },
  { name: 'Kafijas St\u016br\u012Btis', cuisine: 'Kafejn\u012Bca', price: '\u20ac', description: 'Bulduru rajon\u0101 \u2014 liel\u0101kais kafijas sortiments vis\u0101 J\u016brmal\u0101. Parad\u012Bze kafijas cin\u012Bt\u0101jiem.' },
  { name: 'De Gusto', cuisine: 'Kafija un konditorejas', price: '\u20ac', description: 'Lab\u0101k\u0101 kafija J\u016brmal\u0101 p\u0113c viet\u0113jo domam. Izcili konditorejas izstr\u0101d\u0101jumi un maize.' },
  { name: 'Stacija Vaivari Pizza', cuisine: 'Pic\u0113rija', price: '\u20ac', description: 'Neapoles pica, cepta malkas kr\u0101sn\u012B tie\u0161i Vaivaru dzelzce\u013Ca stacij\u0101. Patiesi unik\u0101la vieta.' },
];

const bars = [
  { name: 'Simply Beach Bar', cuisine: 'Pludmales b\u0101rs', price: '\u20ac\u2013\u20ac\u20ac', description: 'Dzintaru pludmales b\u0101rs ar panor\u0101mas stikla sien\u0101m. Baristas kafija un koktei\u013Ci ar skatu uz j\u016bru.' },
  { name: 'X.O Beach Lounge & Club', cuisine: 'Klubs un laundža', price: '\u20ac\u20ac', description: 'J\u016brmalas naktsdzīves vieta ar skatu uz j\u016bru. Koktei\u013Ci, m\u016Bzika un k\u016Brorta ballītes atmosf\u0113ra.' },
  { name: 'Draft Bar', cuisine: 'Kraft\u0101lus b\u0101rs', price: '\u20ac\u2013\u20ac\u20ac', description: 'Pla\u0161s kraft\u0101lus sortiments dz\u012Bv\u012Bg\u0101 atmosf\u0113r\u0101. Lieliska vieta vakara pavad\u012B\u0161anai.' },
];

const tips = [
  { title: 'Jomas iela', text: 'Liel\u0101k\u0101 da\u013Ca restor\u0101nu atrodas g\u0101j\u0113ju iel\u0101 Jomas iela \u2014 J\u016brmalas galvenaj\u0101 restor\u0101nu iel\u0101.' },
  { title: 'Budžeta pusdienas', text: 'Biznesa pusdienas J\u016brmal\u0101 maks\u0101 \u20ac5\u201310. Daudzi restor\u0101ni pied\u0101v\u0101 iz\u0113rtīgas dienas komplekt\u0113din\u0101\u0161anas.' },
  { title: 'Vasaras sezona', text: 'Vasar\u0101 daudzi restor\u0101ni str\u0101d\u0101 l\u012Bdz v\u0113lam \u2014 \u201Cl\u012Bdz p\u0113d\u0113jam klientam\u201D. Dz\u012Bv\u0101 m\u016Bzika uz teras\u0113m ir pat\u012Bkams bonuss.' },
  { title: '150+ vietas', text: 'J\u016brmal\u0101 ir vair\u0101k nek\u0101 150 restor\u0101ni, kafejn\u012Bcas un b\u0101ri. M\u0113s esam izv\u0113l\u0113ju\u0161ies lab\u0101kos, bet nebaidieties izp\u0113t\u012Bt pa\u0161i!' },
  { title: 'Rezerv\u0101cija', text: 'Augst\u0101 sezon\u0101 (j\u016Bnijs\u2013augusts) rezerv\u0113jiet galdu iepriek\u0161, it \u012Bpa\u0161i augst\u0101s virtuves restor\u0101nos un uz teras\u0113m.' },
  { title: 'Viet\u0113j\u0101 virtuve', text: 'Nogaršojiet latvie\u0161u auksti k\u016Bpin\u0101tu zivi, rudzu maizi, pelekos zirnus ar speki un R\u012Bgas Melno balzamu.' },
];

const otherGuides = [
  { href: 'jurmola', title: 'J\u016brmalas ce\u013Cvedis', description: 'Atpaka\u013C uz ce\u013Cve\u017Ea galveno lapu.' },
  { href: 'jurmola/weather', title: 'Laikapst\u0101k\u013Ci J\u016brmal\u0101', description: 'Prognoze pa m\u0113ne\u0161iem un lab\u0101kais laiks apmekl\u0113jumam.' },
  { href: 'jurmola/how-to-get-there', title: 'K\u0101 nok\u013C\u016bt', description: 'Vilciens, taksometrs, autobuss un auto.' },
  { href: 'jurmola/attractions', title: 'Apskates vietas', description: 'Pludmales, parki, arhitekt\u016Bra un muzeji.' },
  { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'Viesnīcas, SPA un budžeta naktsmītnes.' },
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
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition-colors">J&#363;rmalas ce&#316;vedis</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Restor&#257;ni, b&#257;ri un kafejn&#299;cas</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Restor&#257;nu ce&#316;vedis 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Lab&#257;kie restor&#257;ni, b&#257;ri un kafejn&#299;cas J&#363;rmal&#257;
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          No izsmalcin&#257;tas virtuves ar skatu uz Baltijas j&#363;ru l&#299;dz m&#257;j&#299;g&#257;m kafejn&#299;c&#257;m un pludmales b&#257;riem.
          Pilns ce&#316;vedis par <strong>150+ restor&#257;niem un kafejn&#299;c&#257;m J&#363;rmal&#257;</strong> &#8212; kur gar&#353;&#299;gi pa&#275;st un pavad&#299;t vakaru.
        </p>
        <p className="text-gray-500 mb-12">Liel&#257;k&#257; da&#316;a restor&#257;nu atrodas uz g&#257;j&#275;ju ielas Jomas iela.</p>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Augst&#257; virtuve un grils</h2>
          <p className="text-gray-600 mb-6">J&#363;rmalas lab&#257;kie restor&#257;ni &#299;pa&#353;iem gad&#299;jumiem: autora virtuve, degust&#257;cijas izv&#275;lnes un skati uz j&#363;ru.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {fineDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ikdienas un starptautisk&#257; virtuve</h2>
          <p className="text-gray-600 mb-6">Eiropie&#353;u, it&#257;&#316;u, &#257;zijas un latvie&#353;u virtuve &#8212; ikdienas pusdien&#257;m vai romantisk&#257;m vakari&#326;&#257;m.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {casualDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Kafejn&#299;cas un kafijas m&#257;jas</h2>
          <p className="text-gray-600 mb-6">Lab&#257;k&#257; kafija, fran&#269;u konditorejas izstr&#257;d&#257;jumi un Neapoles pica &#8212; m&#257;j&#299;gas kafejn&#299;cas J&#363;rmal&#257; katram gad&#299;jumam.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cafes.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>B&#257;ri un naktsdzīve</h2>
          <p className="text-gray-600 mb-6">Pludmales b&#257;ri, kraft&#257;lus un naktsklubi &#8212; J&#363;rmalas vakara dz&#299;ve vasarā atdzīvojas.</p>
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
            Skat&#299;t visus J&#363;rmalas restor&#257;nus TripAdvisor &rarr;
          </a>
        </section>

        <section className="mb-14 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Noderīgi padomi</h2>
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
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Pl&#257;nojat ce&#316;ojumu uz J&#363;rmalu?</h2>
          <p className="text-gray-600 mb-4">Rezerv&#275;jiet viesn&#299;cu iepriek&#353;, lai ieg&#363;tu lab&#257;k&#257;s cenas un b&#363;tu tuv&#257;k saviem iecien&#299;t&#257;kajiem restor&#257;niem.</p>
          <a
            href="https://www.booking.com/city/lv/jurmala.html"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Atrast viesn&#299;cas J&#363;rmal&#257; Booking.com
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Citas ce&#316;ve&#382;a sada&#316;as</h2>
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
