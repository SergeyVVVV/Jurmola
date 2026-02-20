import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu 2026 | Jurmola',
  description: 'Pilns ceļvedis par Jūrmalu: laikapstākļi, kā nokļūt, apskates vietas, labākie restorāni un viesnīcas. Jūrmala – lielākā kūrorta pilsēta Latvijā pie Baltijas jūras.',
  keywords: 'jūrmala, jurmala, jurmola, jūrmala ceļvedis, jūrmala latvija, jūrmala pludmale, jūrmala apskates vietas, jūrmala restorāni, jūrmala viesnīcas',
  openGraph: {
    title: 'Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu',
    description: 'Viss par Jūrmalu: laikapstākļi pa mēnešiem, kā nokļūt no Rīgas, apskates vietas, labākie restorāni un viesnīcas.',
    url: 'https://jurmola.com/lv/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jūrmala – Baltijas kūrorta galvaspilsēta' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

const guidePages = [
  { href: 'jurmola/weather', title: 'Laikapstākļi Jūrmalā', description: 'Prognoze pa mēnešiem, jūras temperatūra, labākais laiks apmeklējumam un ko ņemt līdzi.' },
  { href: 'jurmola/how-to-get-there', title: 'Kā nokļūt', description: 'Vilciens no Rīgas par €1.50, taksometrs no lidostas, autobusi, auto un iebraukšanas atļauja.' },
  { href: 'jurmola/attractions', title: 'Apskates vietas', description: 'Pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintari un citas vietas.' },
  { href: 'jurmola/restaurants', title: 'Restorāni, bāri un kafejnīcas', description: 'No izsmalcinātiem restorāniem līdz mājīgām kafejnīcām: labākās ēdināšanas vietas Jūrmalā.' },
  { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'SPA viesnīcas, butika viesnīcas un budžeta naktsmītnes: labākās izmitināšanas iespējas.' },
];

export default function JurmolaGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Ceļvedis 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Viss, kas jāzina par <strong>Jūrmalu</strong> – Latvijas lielāko kūrorta pilsētu.
          33 km balto smilšu pludmaļu, priežu meži, vēsturiskas villas un dzīvīga kultūras dzīve.
        </p>
        <p className="text-gray-500 mb-12">Plānojat braucienu uz Jūrmalu? Sāciet šeit.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Par Jūrmalu</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jūrmala</strong> (arī pazīstama kā <strong>Jurmala</strong> vai <strong>Jurmola</strong>) ir Latvijas un visas Baltijas lielākā kūrorta pilsēta,
              kas atrodas Rīgas jūras līča krastā, tikai 25 km no galvaspilsētas Rīgas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pilsētas nosaukums cēlies no latviešu vārda «jūra». Jūrmala stiepjas 32 kilometrus gar piekrasti,
              apvienojot 15 rajonus: Lielupi, Buldurus, Dzintarus, Majorus, Dubultus, Mellužus un citus. Katram rajonam ir savs unikāls raksturs.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Pilsēta ir slavena ar 33 km garām ES Zilā karoga smilšu pludmalēm, unikālu koka arhitektūru no 19.–20. gadsimta,
              dziedinošo priežu mežu gaisu un bagātu kultūras dzīvi. Katru gadu Jūrmalu apmeklē vairāk nekā 2 miljoni tūristu.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Jūrmala skaitļos</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { value: '50 000', label: 'iedzīvotāju' },
              { value: '33 km', label: 'pludmaļu' },
              { value: '25 km', label: 'no Rīgas' },
              { value: '15', label: 'rajonu' },
              { value: '50%', label: 'mežs' },
              { value: '30 min', label: 'ar vilcienu' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ceļveža sadaļas</h2>
          <div className="grid gap-3">
            {guidePages.map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className="block p-5 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <span className="text-gray-400 text-xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Kāpēc apmeklēt Jūrmalu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Pasaules klases pludmales</h3>
              <p className="text-gray-700 text-sm leading-relaxed">33 km balto smilšu ar ES Zilo karogu. Lēzena ieiešana ūdenī, tīrs Rīgas jūras līča ūdens un labiekārtotās pludmales.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Daba un veselība</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Puse pilsētas ir klāta ar priežu mežiem. Dziedinošais jūras gaiss, sajaukts ar priežu aromātu, un Ķemeru minerālūdens avoti.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Arhitektūra un vēsture</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Unikālas koka villas no 19.–20. gs. jūgendstilā, nacionālā romantisma un neogotikas stilā. Vairāk nekā 400 arhitektūras pieminekļi.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Kultūra un izklaide</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Dzintaru koncertzāle, vairāk nekā 20 festivāli gadā, dzīvīgā Jomas iela ar restorāniem un ielu mūziķiem.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r">
          <h2 className="text-xl font-bold mb-3">Jūrmala vai Jurmola?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-3">
            Pareizais pilsētas nosaukums ir <strong>Jūrmala</strong>.
            Variants <strong>«Jurmola»</strong> ir alternatīvs rakstījums, ko bieži lieto krievvalodīgie tūristi.
            Abi varianti ved uz mūsu ceļvedi, lai jūs varētu atrast nepieciešamo informāciju neatkarīgi no meklēšanas veida.
          </p>
          <p className="text-sm text-gray-500">Citi rakstījumi: Jurmala, Jūrmala, Юрмала, Юрмола, Jurmola</p>
        </section>

        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Gatavi braucienam uz Jūrmalu?</h2>
          <p className="text-gray-400 mb-6">Sāciet plānošanu, izvēloties ceļveža sadaļu augstāk</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">Kā nokļūt</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Kur palikt</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
