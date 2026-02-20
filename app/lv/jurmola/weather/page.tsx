import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Laikapstākļi Jūrmalā pa mēnešiem – Kad labāk apmeklēt | Jurmola',
  description: 'Laikapstākļi Jūrmalā (Jurmala) pa mēnešiem: gaisa un jūras temperatūra, nokrišņi, saules stundas. Labākais laiks apmeklēt Jūrmalu – maijs–septembris. Peldsezona: jūlijs–augusts.',
  keywords: 'jūrmala laikapstākļi, jurmala weather, jurmola weather, jūrmala laiks pa mēnešiem, jūrmala jūras temperatūra, jūrmala klimats, jūrmala kad braukt, jūrmala peldsezona',
  openGraph: {
    title: 'Laikapstākļi Jūrmalā pa mēnešiem – Kad labāk apmeklēt',
    description: 'Pilns klimata ceļvedis par Jūrmalu: gaisa un jūras temperatūra pa mēnešiem, nokrišņi, ko ņemt līdzi. Plānojiet ideālu braucienu uz Jūrmalu.',
    url: 'https://jurmola.com/lv/jurmola/weather',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Laikapstākļi Jūrmalā – Baltijas piekrastes klimats' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola/weather',
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
    month: 'Janvāris',
    highC: -1,
    lowC: -6,
    rainfallMm: 40,
    sunnyDays: 2,
    waterC: 2,
    description: 'Aukstākais mēnesis. Īsas dienas (apmēram 7 gaismas stundas), bieži sniegputeņi un ass vējš no jūras. Pilsēta klāta sniegā, bet savā veidā skaista.',
  },
  {
    month: 'Februāris',
    highC: 0,
    lowC: -6,
    rainfallMm: 30,
    sunnyDays: 3,
    waterC: 1,
    description: 'Joprojām ziema, bet dienas kļūst manāmi garākas. Temperatūra svārstās ap nulli, iespējami atkušņi. Sniega sega parasti saglabājas.',
  },
  {
    month: 'Marts',
    highC: 3,
    lowC: -3,
    rainfallMm: 35,
    sunnyDays: 4,
    waterC: 1,
    description: 'Pavasara sākums. Sniegs pakāpeniski kūst, bet naktīs vēl salst. Sausākais gada periods. Daba tikai sāk atmosties.',
  },
  {
    month: 'Aprīlis',
    highC: 10,
    lowC: 2,
    rainfallMm: 33,
    sunnyDays: 6,
    waterC: 4,
    description: 'Pavasaris ieņem spēku. Temperatūra paaugstinās, priežu meži piepildās ar smaržu. Maz nokrišņu, bet vakaros vēl vēss.',
  },
  {
    month: 'Maijs',
    highC: 16,
    lowC: 7,
    rainfallMm: 40,
    sunnyDays: 9,
    waterC: 10,
    description: 'Lielisks laiks apmeklējumam. Garas dienas (līdz 17 gaismas stundām), zaļums, ziedēšana. Pludmales tukšas, bet pastaigas pie jūras ir brīnišķīgas.',
  },
  {
    month: 'Jūnijs',
    highC: 20,
    lowC: 11,
    rainfallMm: 55,
    sunnyDays: 10,
    waterC: 15,
    description: 'Vasaras un balto nakšu sākums. Visvairāk saules stundas gadā – gandrīz 10 stundas dienā. Ūdens vēl vēss, bet sauļoties jau var.',
  },
  {
    month: 'Jūlijs',
    highC: 22,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 10,
    waterC: 19,
    description: 'Sezonas virsotne. Siltākais mēnesis ar komfortablu jūras temperatūru. Pludmales pilnas ar atpūtniekiem, darbojas visi restorāni un izklaides.',
  },
  {
    month: 'Augusts',
    highC: 21,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 9,
    waterC: 20,
    description: 'Siltākais jūras ūdens. Lielisks mēnesis pludmales atpūtai, lai gan augusta beigās vakari kļūst vēsāki. Iespējamas īslaicīgas lietusgāzes.',
  },
  {
    month: 'Septembris',
    highC: 17,
    lowC: 10,
    rainfallMm: 65,
    sunnyDays: 6,
    waterC: 16,
    description: 'Samtainā sezona. Dienā vēl silts, bet vakari vēsi. Mazāk tūristu, skaistas rudens krāsas. Peldēties var mēneša sākumā.',
  },
  {
    month: 'Oktobris',
    highC: 10,
    lowC: 5,
    rainfallMm: 80,
    sunnyDays: 4,
    waterC: 12,
    description: 'Zelta rudens. Visvairāk nokrišņu gadā. Priežu meži un parki iekrāsojas spilgtās krāsās. Ideāli piemērots SPA atpūtai un pastaigām siltā apģērbā.',
  },
  {
    month: 'Novembris',
    highC: 4,
    lowC: 0,
    rainfallMm: 55,
    sunnyDays: 2,
    waterC: 7,
    description: 'Vēls rudens ar īsām dienām un augstu mitrumu. Pirmais sniegs var uzkrist mēneša beigās. Jūra vētraina, vēji pastiprinās.',
  },
  {
    month: 'Decembris',
    highC: 1,
    lowC: -3,
    rainfallMm: 45,
    sunnyDays: 1,
    waterC: 4,
    description: 'Tumšākais mēnesis: mazāk par 7 dienas gaismas stundām un mazāk par stundu saules. Sniegputeņi, svētku atmosfēra. SPA viesnīcas piedāvā ziemas programmas.',
  },
];

function getSeasonColor(index: number): string {
  if (index < 2 || index === 11) return 'bg-blue-50/60 border-blue-100'; // Ziema
  if (index >= 2 && index < 5) return 'bg-emerald-50/60 border-emerald-100'; // Pavasaris
  if (index >= 5 && index < 8) return 'bg-amber-50/60 border-amber-100'; // Vasara
  return 'bg-orange-50/60 border-orange-100'; // Rudens
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
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-900 transition">Ceļvedis pa Jūrmalu</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Laikapstākļi</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Klimats un laikapstākļi</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Laikapstākļi Jūrmalā pa mēnešiem
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Pilns klimata ceļvedis: gaisa un jūras temperatūra, nokrišņi, saules stundas un sezonālie ieteikumi.
        </p>
        <p className="text-gray-500 mb-12">Plānojiet ideālu braucienu uz Jūrmalu ar mūsu detalizēto laika apstākļu ceļvedi</p>

        {/* Klimata apskats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Jūrmalas klimats</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jūrmala</strong> (arī raksta <strong>Jurmala</strong> vai <strong>Jurmola</strong>) atrodas Rīgas jūras līča krastā Baltijas jūrā, un tai ir <strong>mitrs kontinentāls klimats</strong> (Kepena klasifikācija: Dfb) ar siltām vasarām un aukstām ziemām. Jūras un priežu mežu tuvums rada unikālu mikroklimatu: ziemas šeit ir nedaudz siltākas, bet vasaras vēsākas nekā Rīgā.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Vidējā gada temperatūra ir <strong>7,7 &deg;C</strong>. Gada nokrišņu daudzums ir aptuveni <strong>757 mm</strong>. Gaisa mitrums ir augsts visu gadu (70&ndash;90%), kas ir tipiski piejūras klimatam. Starpība starp aukstāko mēnesi (janvāris, &minus;1 &deg;C) un siltāko (jūlijs, +22 &deg;C) ir aptuveni 23 grādi.
            </p>
          </div>
        </section>

        {/* Ātrā statistika */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Jūrmalas klimats skaitļos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '+22 \u00B0C', label: 'maks. jūlijā' },
              { value: '-6 \u00B0C', label: 'min. janvārī' },
              { value: '~757 mm', label: 'nokrišņi gadā' },
              { value: '1800+ h', label: 'saule gadā' },
              { value: '+20 \u00B0C', label: 'jūra augustā' },
              { value: '0 \u00B0C', label: 'jūra martā' },
              { value: '70-90%', label: 'mitrums' },
              { value: '18 h', label: 'diena jūnijā' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mēneša datu tabula */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Laika apstākļu dati pa mēnešiem</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold">Mēnesis</th>
                  <th className="text-center p-3 font-bold">Maks. &deg;C</th>
                  <th className="text-center p-3 font-bold">Min. &deg;C</th>
                  <th className="text-center p-3 font-bold">Nokrišņi, mm</th>
                  <th className="text-center p-3 font-bold">Saules dienas</th>
                  <th className="text-center p-3 font-bold">Jūra &deg;C</th>
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
            * Dati balstīti uz ilggadīgiem klimata vidējiem rādītājiem. Faktiskie laikapstākļi var atšķirties no vidējām vērtībām.
          </p>
        </section>

        {/* Detalizētas mēnešu kartītes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Laikapstākļu apraksts pa mēnešiem</h2>
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
                      <div className="text-xs text-gray-500">Nokrišņi</div>
                      <div className="font-bold text-sm">{m.rainfallMm} mm</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Jūra</div>
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

        {/* Labākais apmeklējuma laiks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Labākais laiks apmeklēt Jūrmalu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50/50 rounded-lg border border-emerald-200">
              <h3 className="text-xl font-bold mb-3">Pludmales atpūta: jūlijs &ndash; augusts</h3>
              <p className="text-gray-700 leading-relaxed">
                Ideāls laiks peldēšanai. Gaisa temperatūra +21&ndash;22 &deg;C, jūras ūdens sasilst līdz +19&ndash;20 &deg;C.
                Visas pludmales ir aprīkotas, strādā glābēji. Garas dienas (16&ndash;18 gaismas stundas).
                Vienīgais trūkums &mdash; sezonas virsotne, un Jūrmalā var būt daudz cilvēku.
              </p>
            </div>
            <div className="p-6 bg-green-50/50 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-3">Starpsezona: maijs &ndash; jūnijs, septembris</h3>
              <p className="text-gray-700 leading-relaxed">
                Lieliska izvēle, ja vēlaties izvairīties no pūļiem. Maijā un jūnijā daba ir pilnā ziedā, dienas ļoti garas.
                Septembris ir samtainā sezona ar siltām dienām un mazāku tūristu skaitu. Peldēties var septembra sākumā.
              </p>
            </div>
            <div className="p-6 bg-amber-50/50 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold mb-3">SPA un daba: oktobris &ndash; aprīlis</h3>
              <p className="text-gray-700 leading-relaxed">
                Zemā sezona ir ideāla SPA atpūtai: cenas zemākas, un SPA viesnīcas strādā visu gadu.
                Pastaigas pa ziemas pludmali un caur priežu mežiem, miers un klusums. Ķemeru minerālavoti pieejami jebkurā laikā.
              </p>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold mb-3">Ziemas pasaka: decembris &ndash; februāris</h3>
              <p className="text-gray-700 leading-relaxed">
                Ne pludmales atpūtai, bet ziemas Jūrmalai ir savs šarms. Sniegā klātas priedes, vētraina jūra,
                svētku rotājumi. SPA viesnīcas piedāvā īpašas ziemas programmas un Jaungada paketes.
              </p>
            </div>
          </div>
        </section>

        {/* Peldsezona */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Peldsezona Jūrmalā</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Peldsezona Jūrmalas pludmalēs ilgst no <strong>jūnija beigām līdz augusta beigām</strong>, kad ūdens temperatūra Rīgas jūras līcī paaugstinās līdz komfortabliem +18&ndash;20 &deg;C. Virsotne ir augusta sākumā, kad ūdens var sasilt līdz +22&ndash;23 &deg;C.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Rīgas jūras līcis ir sekls, tāpēc ūdens sasilst ātrāk nekā atklātajā Baltijas jūrā. Lēzenā ieiešana ūdenī padara Jūrmalas pludmales drošas bērniem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">Jūnijs</div>
                <div className="text-xl font-bold text-gray-900">+15 &deg;C</div>
                <div className="text-xs text-gray-500">vēss</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">Jūlijs</div>
                <div className="text-xl font-bold text-gray-900">+19 &deg;C</div>
                <div className="text-xs text-gray-500">var peldēties</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">Augusts</div>
                <div className="text-xl font-bold text-gray-900">+20 &deg;C</div>
                <div className="text-xs text-gray-500">labākais laiks</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500">Septembris</div>
                <div className="text-xl font-bold text-gray-900">+16 &deg;C</div>
                <div className="text-xs text-gray-500">drosmīgajiem</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ko ņemt līdzi */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Ko ņemt līdzi uz Jūrmalu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Vasara (jūnijs &ndash; augusts)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Viegls apģērbs un šorti</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Peldkostīms un pludmales dvielis</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Saules aizsargkrēms (SPF 30+)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Viegla jaka vai džemperis vakaram</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Lietus jaka vai lietussargs (lieti gadās)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Ērti apavi pastaigām pa pludmali un mežu</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Pavasaris un rudens (marts &ndash; maijs, septembris &ndash; novembris)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Daudzslāņu apģērbs</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Ūdensnecaurlaidīga jaka ar kapuci</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Silts džemperis vai flīss</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Ūdensnecaurlaidīgi apavi</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Šalle un cepure (vēlam rudenim)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Lietussargs &mdash; obligāti</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Ziema (decembris &ndash; februāris)</h3>
              <ul className="space-y-2 text-gray-700 md:columns-2">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Silta ziemas jaka (dūnu jaka)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Termoveļa</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Silta cepure, šalle un cimdi</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Ziemas zābaki ar neslīdošu zoli</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Mitrinošs krēms (auksts, sauss gaiss)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Siltas zeķes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Padomi tūristiem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Laika apstākļu padomi apmeklētājiem</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Baltijas saule ir maldinoša</h3>
              <p className="text-gray-700">Pat mākoņainās dienās var apdegt. Vasarā vienmēr lietojiet saules aizsargkrēmu, īpaši pludmalē, kur atstarošanās no ūdens un smiltīm pastiprina UV starojumu.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Laikapstākļi mainās ātri</h3>
              <p className="text-gray-700">Piejūras klimats ir neparedzams: saulains rīts var pārvērsties lietū līdz pusdienām, bet vakarā atkal parādās saule. Vienmēr ņemiet līdzi lietus jaku vai lietussargu, pat ja no rīta ir skaidrs.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Jūras vējš</h3>
              <p className="text-gray-700">Pludmalē bieži pūš vējš no Rīgas jūras līča, tāpēc sajūtamā temperatūra var būt par 3&ndash;5 &deg;C zemāka nekā faktiskā. Ņemiet līdzi vēja jaku, pat ja termometrs rāda +22 &deg;C.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Baltās naktis jūnijā</h3>
              <p className="text-gray-700">Jūnija beigās Jūrmalā ir baltās naktis &mdash; pilnīgi tumšs nekļūst. Dienas gaisma ilgst apmēram 18 stundas. Ja esat jutīgi pret gaismu, ņemiet līdzi miega masku.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Tumšas, bet skaistas ziemas</h3>
              <p className="text-gray-700">Decembrī dienas gaisma ilgst tikai apmēram 7 stundas, un saule var parādīties mazāk par stundu. Bet sniegā klātā Jūrmala ar apgaismotām priedēm ir neaizmirstams skats. Ņemiet līdzi kabatas lukturīti vakara pastaigām.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-gray-300 rounded-r">
              <h3 className="font-bold text-lg mb-2">Dziedinošais gaiss visu gadu</h3>
              <p className="text-gray-700">Jūras gaisa un priežu mežu fitoncīdu kombinācija rada unikālu atmosfēru, kas ir labvēlīga elpošanas sistēmai. Šis efekts ir visspēcīgākais pavasarī un vasarā, kad priedes izdala vairāk sveķu.</p>
            </div>
          </div>
        </section>

        {/* Sezonas kopsavilkums */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Gadalaiki Jūrmalā: īss pārskats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Ziema (decembris &ndash; februāris)</h3>
              <p className="text-gray-700 mb-3">Temperatūra no &minus;6 līdz +1 &deg;C. Sniegs, īsas dienas, sals. Piekrastes ūdens var sasalt.</p>
              <p className="text-sm text-gray-500">Piemērots: ziemas SPA cienītājiem, klusuma meklētājiem un sniegainu ainavu baudītājiem.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Pavasaris (marts &ndash; maijs)</h3>
              <p className="text-gray-700 mb-3">Temperatūra no &minus;3 līdz +16 &deg;C. Daba mostas, maz nokrišņu, pieaugoša dienas gaisma.</p>
              <p className="text-sm text-gray-500">Piemērots: dabas cienītājiem, fotogrāfiem, tiem, kas vēlas redzēt Jūrmalu bez pūļiem.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Vasara (jūnijs &ndash; augusts)</h3>
              <p className="text-gray-700 mb-3">Temperatūra no +11 līdz +22 &deg;C. Baltās naktis, pludmales sezona, festivāli un dzīvīga kultūras dzīve.</p>
              <p className="text-sm text-gray-500">Piemērots: visiem! Pludmales atpūta, ģimenes ar bērniem, kultūras tūristi.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Rudens (septembris &ndash; novembris)</h3>
              <p className="text-gray-700 mb-3">Temperatūra no 0 līdz +17 &deg;C. Zelta rudens, sēņošana mežos, vētraina jūra, mājīgas kafejnīcas.</p>
              <p className="text-sm text-gray-500">Piemērots: romantiķiem, SPA entuziastiem, tiem, kas dod priekšroku klusumam.</p>
            </div>
          </div>
        </section>

        {/* Citas ceļveža sadaļas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Vairāk no Jūrmalas ceļveža</h2>
          <div className="grid gap-3">
            {[
              { href: 'jurmola', title: 'Ceļvedis pa Jūrmalu', description: 'Galvenā ceļveža lapa' },
              { href: 'jurmola/how-to-get-there', title: 'Kā nokļūt', description: 'Vilciens, taksometrs, autobuss no Rīgas' },
              { href: 'jurmola/attractions', title: 'Apskates vietas', description: 'Pludmales, parki, Jomas iela' },
              { href: 'jurmola/restaurants', title: 'Restorāni un kafejnīcas', description: 'Labākās ēdināšanas vietas' },
              { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'Viesnīcas un SPA kūrorti' },
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

        {/* CTA sadaļa */}
        <section className="mb-12 text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Izvēlējāties ceļojuma datumus?</h2>
          <p className="text-gray-400 mb-6">Turpiniet plānošanu ar citām mūsu ceļveža sadaļām</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">Kā nokļūt</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Kur palikt</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Apskates vietas</Link>
          </div>
        </section>

        {/* Atpakaļ uz ceļvedi */}
        <div className="text-center">
          <Link href={localizedHref('jurmola', language)} className="text-gray-600 hover:text-gray-900 font-medium transition">
            &larr; Atpakaļ uz Jūrmalas ceļvedi
          </Link>
        </div>

      </main>

      <Footer language={language} />
    </div>
  );
}
