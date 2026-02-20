import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Kā nokļūt Jūrmalā – Vilciens, taksometrs, autobuss, auto | Jurmola',
  description: 'Kā nokļūt Jūrmalā no Rīgas un lidostas: Vivi vilciens par €1.50, taksometrs, autobuss, auto. Jūrmalas iebraukšanas atļauja €5/dienā. Saraksti, cenas, padomi 2026.',
  keywords: 'kā nokļūt jūrmalā, jūrmala vilciens, jūrmala no rīgas, jūrmala taksometrs, jūrmala autobuss, jūrmala iebraukšanas atļauja, jūrmala transports, jurmala transport, jurmola',
  openGraph: {
    title: 'Kā nokļūt Jūrmalā – Vilciens, taksometrs, autobuss, auto',
    description: 'Pilns transporta ceļvedis uz Jūrmalu: vilciens no Rīgas 30 minūtēs, taksometrs no lidostas, auto iebraukšanas atļauja. Cenas, saraksti, padomi.',
    url: 'https://jurmola.com/lv/jurmola/how-to-get-there',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Kā nokļūt Jūrmalā – transporta ceļvedis' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola/how-to-get-there',
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
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition">Jūrmalas ceļvedis</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Kā nokļūt</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Transporta ceļvedis 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Kā nokļūt Jūrmalā
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Vilciens, taksometrs, autobuss, auto – visi veidi, kā nokļūt <strong>Jūrmalā</strong> no Rīgas un lidostas.
          Cenas, saraksti un praktiski padomi.
        </p>
        <p className="text-gray-500 mb-12">Pilns transporta ceļvedis ceļojuma plānošanai.</p>

        {/* Quick Summary */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Īsumā</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Vilciens</div>
              <div className="text-sm text-gray-600">30 min / no €1.43</div>
              <div className="text-xs text-gray-400 mt-1">Labākā izvēle</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Taksometrs</div>
              <div className="text-sm text-gray-600">20–30 min / €32–50</div>
              <div className="text-xs text-gray-400 mt-1">No lidostas</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-900 font-bold">Auto</div>
              <div className="text-sm text-gray-600">25 min / atļauja €5</div>
              <div className="text-xs text-gray-400 mt-1">A10/E22 automaģistrāle</div>
            </div>
          </div>
        </section>

        {/* BY TRAIN */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-black pb-2 flex-1" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ar vilcienu no Rīgas</h2>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">Ieteicams</span>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Vilciens ir ērtākais un lētākais veids</strong>, kā nokļūt Jūrmalā. Elektrovilcienus operē <strong>Vivi</strong> (iepriekš Pasažieru vilciens),
              un tie kursē no <strong>Rīgas Centrālās stacijas</strong> <strong>Tukuma virzienā</strong>.
              Vilcieni atiet no <strong>4. platformas, 3.–4. ceļa</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Saraksts</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Pirmais vilciens</span><strong>5:00</strong></li>
                <li className="flex justify-between"><span>Pēdējais vilciens</span><strong>23:45</strong></li>
                <li className="flex justify-between"><span>Intervāls</span><strong>ik 30 min</strong></li>
                <li className="flex justify-between"><span>Brauciena laiks</span><strong>30–46 min</strong></li>
              </ul>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Biļešu cenas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Tiešsaistē (vivi.lv)</span><strong className="text-gray-900 font-bold">€1.43</strong></li>
                <li className="flex justify-between"><span>Stacijas kasē</span><strong>€1.50</strong></li>
                <li className="flex justify-between"><span>Pie konduktora</span><strong className="text-red-600">līdz €2.00</strong></li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded-r mb-6">
            <h3 className="font-bold text-lg mb-2">Kurā pieturā izkāpt?</h3>
            <p className="text-gray-700 mb-2">
              Jūrmalā ir <strong>14 dzelzceļa stacijas</strong>. Populārākā pietura ir
              <strong> Majori</strong> – kūrorta dzīves centrs. Tieši blakus atrodas Jomas iela, pludmale un lielākā daļa restorānu.
            </p>
            <p className="text-sm text-gray-500">
              Citas populāras stacijas: Dzintari – koncertzāles rajons, Bulduri – klusas pludmales, Ķemeri – nacionālais parks.
            </p>
          </div>

          <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Kā iegādāties biļeti</h3>
            <p className="text-gray-700">
              Izdevīgākais veids ir caur <strong>Vivi lietotni vai mājaslapu (vivi.lv)</strong> – aptuveni 5% atlaide.
              Biļetes var iegādāties arī stacijas kasēs. Pirkšana pie konduktora vilcienā izmaksā dārgāk –
              līdz €2.00 par biļeti.
            </p>
          </div>
        </section>

        {/* FROM AIRPORT */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>No Rīgas lidostas</h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Rīgas starptautiskā lidosta (RIX)</strong> atrodas aptuveni <strong>20 km</strong> no Jūrmalas.
              Brauciens ilgst <strong>20–30 minūtes</strong> atkarībā no satiksmes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Taksometrs no lidostas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Iepriekš pasūtīts</span><strong className="text-gray-900 font-bold">€32–44</strong></li>
                <li className="flex justify-between"><span>Ar skaitītāju</span><strong>€40–50</strong></li>
                <li className="flex justify-between"><span>Brauciena laiks</span><strong>20–30 min</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Iepriekš pasūtīts transfers ir ieteicams – fiksēta cena, un šoferis sagaida ar vārda zīmi.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-3">Autobuss + vilciens (budžets)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>22. autobuss uz Rīgu</span><strong>€1.81</strong></li>
                <li className="flex justify-between"><span>Vilciens uz Jūrmalu</span><strong>€1.43–1.50</strong></li>
                <li className="flex justify-between"><span>Kopā</span><strong className="text-gray-900 font-bold">~€3.25</strong></li>
                <li className="flex justify-between"><span>Kopējais laiks</span><strong>~1–1.5 st</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">22. autobuss brauc uz Rīgas centru. No turienes pārsēšanās uz vilcienu Tukuma virzienā.</p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <h3 className="font-bold text-lg mb-2">Padoms</h3>
            <p className="text-gray-700">
              Ja ierodaties naktī vai ar daudz bagāžas, <strong>iepriekš pasūtīts transfers</strong> ir labākā izvēle.
              Budžeta ceļojumiem dienā maršruts &laquo;22. autobuss + vilciens&raquo; izmaksā tikai ~€3.25.
            </p>
          </div>
        </section>

        {/* BY CAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ar auto</h2>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              No Rīgas uz Jūrmalu ved automaģistrāle <strong>A10/E22</strong>. Brauciens ilgst aptuveni <strong>25 minūtes</strong>.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r mb-6">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Iebraukšanas atļauja – OBLIGĀTA!</h3>
            <p className="text-gray-700 mb-4">
              Kopš 2024. gada februāra <strong>iebraukšanas atļauja Jūrmalā ir obligāta visu gadu</strong> (iepriekš tikai vasarā).
              Bez atļaujas – <strong>sods €50</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Izmaksas</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>Dienas atļauja</span><strong>€5.00</strong></li>
                  <li className="flex justify-between"><span>Sods par nesamaksu</span><strong className="text-red-600">€50.00</strong></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Kur iegādāties</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Lietotne <strong>Mobilly</strong></li>
                  <li>Lietotne <strong>EuroPark</strong></li>
                  <li>Automāti pie pilsētas iebrauktuvēm</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Atļauja ir derīga neierobežotam iebraukšanas skaitam iegādes dienā. Cena uz 2026. gada janvāri.
            </p>
          </div>
        </section>

        {/* BY BUS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ar autobusu</h2>
          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Autobusi un mikroautobusi kursē starp <strong>Rīgas autoostā</strong> un Jūrmalu.
              Šī iespēja ir mazāk populāra nekā vilciens iespējamo sastrēgumu dēļ uz šosejas, taču var būt ērta,
              lai nokļūtu Jūrmalas rajonos, kas atrodas tālāk no dzelzceļa līnijas.
            </p>
            <p className="text-sm text-gray-500">
              Autobusu sarakstus var apskatīt vietnēs <a href="https://www.autoosta.lv" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-900">autoosta.lv</a> vai <a href="https://www.1188.lv" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-900">1188.lv</a>.
            </p>
          </div>
        </section>

        {/* BY BICYCLE */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ar velosipēdu</h2>
          <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              No Rīgas uz Jūrmalu ir pieejams velomaršruts. Brauciens ilgst 1.5–2 stundas atkarībā no maršruta un sagatavotības.
              Velosipēdu var ņemt līdzi vilcienā – tam nepieciešama <strong>atsevišķa velosipēda biļete</strong>.
            </p>
            <p className="text-sm text-gray-500">
              Jūrmalā ir lielisks veloceliņu tīkls – ērti pārvietoties starp rajoniem.
            </p>
          </div>
        </section>

        {/* FROM OTHER COUNTRIES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>No citām valstīm</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-2">Ar lidmašīnu</h3>
              <p className="text-gray-700">
                Tuvākā lielā lidosta ir <strong>Rīga (RIX)</strong>. Tiešie reisi no Eiropas, Tuvajiem Austrumiem
                un citām pilsētām. No lidostas līdz Jūrmalai – 20–30 minūtes ar taksometru.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <h3 className="font-bold text-lg mb-2">Ar prāmi</h3>
              <p className="text-gray-700">
                Prāmju satiksme maršrutā <strong>Stokholma–Rīga</strong> (Tallink/Silja Line).
                Prāmju terminālis atrodas Rīgā, no kurienes līdz Jūrmalai var nokļūt ar vilcienu vai taksometru.
              </p>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Cenu un laika salīdzinājums</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-4 font-medium">Transports</th>
                  <th className="text-left p-4 font-medium">Laiks</th>
                  <th className="text-left p-4 font-medium">Cena</th>
                  <th className="text-left p-4 font-medium">Komforts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">Vilciens</td>
                  <td className="p-4">30–46 min</td>
                  <td className="p-4 font-bold text-gray-900">€1.43–2.00</td>
                  <td className="p-4">Izcili</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Taksometrs (no Rīgas)</td>
                  <td className="p-4">25–40 min</td>
                  <td className="p-4">€20–35</td>
                  <td className="p-4">Izcili</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Taksometrs (no lidostas)</td>
                  <td className="p-4">20–30 min</td>
                  <td className="p-4">€32–50</td>
                  <td className="p-4">Izcili</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Autobuss + vilciens</td>
                  <td className="p-4">1–1.5 st</td>
                  <td className="p-4 font-bold text-gray-900">~€3.25</td>
                  <td className="p-4">Labi</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Auto</td>
                  <td className="p-4">25 min</td>
                  <td className="p-4">degviela + €5 atļauja</td>
                  <td className="p-4">Izcili</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Autobuss</td>
                  <td className="p-4">40–60 min</td>
                  <td className="p-4">~€2–3</td>
                  <td className="p-4">Labi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Praktiski padomi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Vilciena biļetes</h3>
              <p className="text-gray-700 text-sm">
                Pērciet biļeti iepriekš caur Vivi lietotni – ietaupiet ~5% un izvairieties no rindas.
                Biļeti telefonā parādiet kontrolierim.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Auto iebraukšanas atļauja</h3>
              <p className="text-gray-700 text-sm">
                Instalējiet Mobilly lietotni pirms ceļojuma. Atļauju var iegādāties tieši piebraucot pilsētai.
                Kameras automātiski nolasa numura zīmi.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Nakts ierašanās</h3>
              <p className="text-gray-700 text-sm">
                Pēdējais 22. autobuss kursē aptuveni līdz pusnaktij. Ja ierodaties vēlāk – tikai taksometrs vai iepriekš pasūtīts transfers.
              </p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold mb-2">Pārvietošanās Jūrmalā</h3>
              <p className="text-gray-700 text-sm">
                Jūrmalā ērtākais veids ir velosipēds vai pārvietošanās starp stacijām ar vilcienu.
                Attālums no Lielupes līdz Ķemeriem ir aptuveni 30 km.
              </p>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Citas ceļveža sadaļas</h2>
          <div className="grid gap-3">
            {[
              { href: 'jurmola', title: 'Jūrmalas ceļvedis', description: 'Galvenā ceļveža lapa – viss par Jūrmalu vienuviet.' },
              { href: 'jurmola/weather', title: 'Laikapstākļi Jūrmalā', description: 'Prognoze pa mēnešiem, jūras temperatūra, labākais laiks apmeklējumam.' },
              { href: 'jurmola/attractions', title: 'Apskates vietas', description: 'Pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintari un citas vietas.' },
              { href: 'jurmola/restaurants', title: 'Restorāni, bāri un kafejnīcas', description: 'Labākās ēdināšanas vietas Jūrmalā.' },
              { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'SPA viesnīcas, butika viesnīcas un budžeta naktsmītnes.' },
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
          <h2 className="text-2xl font-bold mb-3">Vilciens – labākais veids nokļūt Jūrmalā</h2>
          <p className="text-gray-400 mb-6">30 minūtes no Rīgas, no tikai €1.43. Vilcieni ik 30 minūtes no 5:00 līdz 23:45</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">Kur palikt</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Apskates vietas</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
