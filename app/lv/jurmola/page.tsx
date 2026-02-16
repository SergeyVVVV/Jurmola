import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Jūrmala – Baltijas kūrorta galvaspilsēta | Jurmola Telegraphs',
  description: 'Viss par Jūrmalu: ziņas, notikumi, kultūra un dzīve kūrorta pilsētā. Satīrisks skatījums uz Jūrmalu no Jurmola Telegraphs – Baltijas labākā ziņu avota.',
  keywords: 'jūrmala, jurmala, jūrmala ziņas, jūrmala kūrorts, latvija jūrmala, jūrmala šodien, jūrmala pludmale',
  openGraph: {
    title: 'Jūrmala – Baltijas kūrorta galvaspilsēta | Jurmola Telegraphs',
    description: 'Viss par Jūrmalu: ziņas, notikumi, kultūra un dzīve kūrorta pilsētā. Satīrisks skatījums uz Jūrmalu no Jurmola Telegraphs.',
    url: 'https://jurmola.com/lv/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Jūrmala – Baltijas kūrorta galvaspilsēta'
      }
    ]
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
            Jūrmala – Baltijas kūrorta galvaspilsēta
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Pilsēta, kur Rīgas jūras līcis satiekas ar priežu mežiem, un kūrorta dzīve – ar absurdu.
          </p>
          <p className="text-lg text-gray-600">
            Laipni lūdzam Jūrmalā caur Jurmola Telegraphs acīm – kur realitāte sajaucas ar satīru!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Kas ir Jūrmala?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jūrmala</strong> ir lielākā kūrorta pilsēta Latvijā un visā Baltijā,
              kas atrodas Rīgas jūras līča krastā, tikai 25 km no galvaspilsētas Rīgas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pilsētas nosaukums cēlies no latviešu vārda "jūra", kas perfekti atspoguļo tās
              jūras būtību. Jūrmala stiepjas 32 kilometrus gar piekrasti, apvienojot
              15 rajonus, katram ar savu raksturu un vēsturi.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Šodien Jūrmala ir ne tikai pludmales un priedes, bet arī reģiona kultūras centrs,
              starptautisko festivālu, koncertu vieta un (pēc mūsu versijas) absurdākās
              ziņas Baltijā!
            </p>
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-orange-400">
            <h2 className="text-3xl font-bold mb-4">🎭 Jūrmala vai Jurmola? Kāpēc mēs esam Jurmola?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Uzmanīgs lasītājs pamanīs: pareizais rakstījums ir <strong>Jūrmala</strong> (ar "a").
              Šis ir oficiālais Latvijas kūrorta nosaukums.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Tad kāpēc mēs esam <strong>Jurmola Telegraphs</strong>, nevis Jūrmala Telegraphs?
            </p>
            <div className="bg-white p-6 rounded-lg mb-4">
              <p className="text-lg leading-relaxed text-gray-800 mb-3">
                <strong>Tāpēc, ka mēs esam satīrisks izdevums!</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-3">
                Rakstījums "Jurmola" (ar "o") ir mūsu apzinātā izvēle, uzsverot satīrisko,
                nedaudz absurdo mūsu satura raksturu. Tas ir kā neliela realitātes drukas kļūda, kas
                norāda: "ne viss ir tik nopietni, kā šķiet."
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Mūsu pasaulē Jūrmala kļūst par Jurmolu – satīrisko ziņu galvaspilsētu, kur gliemji
                saņem pases un kaijas maksā kūrorta nodevu. Tas ir daļa no mūsu spēles ar vārdiem
                un realitāti.
              </p>
            </div>
            <p className="text-sm text-gray-600 italic">
              💡 Bet šajā rakstā mēs lietojam pareizo rakstījumu <strong>Jūrmala</strong>,
              lai pastāstītu par īsto pilsētu, kas iedvesmo mūsu satīriskos stāstus.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Kāpēc Jūrmala ir svarīga?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏖️ Kūrorta pērle</h3>
                <p className="text-gray-700">
                  33 km balto smilšu pludmales, apbalvotas ar ES Zilo karogu par tīrību un ekoloģisko kvalitāti.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🌲 Dabas oāze</h3>
                <p className="text-gray-700">
                  Puse pilsētas ir klāta ar priežu mežiem, radot unikālu mikroklimatu ar dziedināmo gaisu.
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎭 Kultūras centrs</h3>
                <p className="text-gray-700">
                  KVN festivāls, pasaules zvaigžņu koncerti, mūzikas festivāli – Jūrmala dzīvo spilgtu kultūras dzīvi.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏛️ Arhitektūras mantojums</h3>
                <p className="text-gray-700">
                  Unikāla koka arhitektūra no 19.-20. gadsimta: villas, pansionāti, dačas jūgendstilā un nacionālā romantisma stilā.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
            <h2 className="text-3xl font-bold mb-4">Jūrmala skaitļos</h2>
            <ul className="text-lg leading-relaxed text-gray-700 space-y-2">
              <li>📍 <strong>Iedzīvotāji:</strong> ~50,000 iedzīvotāju (un neskaitāmi daudz tūristu vasarā)</li>
              <li>📏 <strong>Garums:</strong> 32 km gar piekrasti</li>
              <li>🏖️ <strong>Pludmales:</strong> 33 km smilšu pludmales</li>
              <li>🌳 <strong>Meži:</strong> 50% no pilsētas teritorijas</li>
              <li>🎵 <strong>Festivāli gadā:</strong> Vairāk nekā 20 lieli kultūras notikumi</li>
              <li>🚂 <strong>Līdz Rīgai:</strong> 25 km (30 minūtes ar vilcienu)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Jurmola Telegraphs un Jūrmala</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Mūsu izdevums ir nosaukts šīs brīnišķīgās pilsētas vārdā. <strong>Jurmola Telegraphs</strong> ir
              satīrisks skatījums uz dzīvi Jūrmalā, Latvijā un visā Baltijā.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Mēs ņemam reālus notikumus no reģiona un tos pārspīlējam līdz absurdam, radot humoristiskas ziņas
              The Onion stilā, bet ar vietējo garšu. Gliemji, kas pasludināti par nacionālajiem simboliem,
              kūrorta nodevas kaijām, politiskās debates par smilšu krāsu – tas ir mūsu mīļākais žanrs!
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mēs mīlam Jūrmalu un rādām šo mīlestību caur labsirdīga humora un satīras prizmu.
              Jo dažreiz smiekli ir labākais veids, kā saprast un novērtēt vietu, kur dzīvo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Ziņas par Jūrmalu</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Lasiet mūsu satīriskos rakstus par Jūrmalu – kur realitāte satiekas ar absurdu:
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
                Visas ziņas →
              </Link>
            </div>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-3xl font-bold mb-4">Apmeklējiet Jūrmalu</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Ja jūs vēl neesat bijuši Jūrmalā – obligāti atbrauciet! Šī ir pilsēta, kur varat:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li>Pastaigāties pa 33 kilometru garo Baltijas jūras pludmali</li>
              <li>Ieelpot dziedinošo priežu meža gaisu</li>
              <li>Apbrīnot koka arhitektūru no 20. gadsimta sākuma</li>
              <li>Nobaudīt vietējo virtuvi mājīgās kafejnīcās uz Jomas ielas</li>
              <li>Apmeklēt koncertu vai festivālu Dzintaru koncertzālē</li>
              <li>Peldēties Rīgas jūras līcī (vasarā, protams!)</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Un tad atgriezieties pie mums un izlasiet satīrisko versiju par savu vizīti! 😄
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-xl font-bold text-gray-900 mb-3">
              Jūrmala – mūsu iedvesma, mūsu mājas, mūsu satīra
            </p>
            <p className="text-gray-600 italic">
              Ar mīlestību un absurdu, Jurmola Telegraphs komanda
            </p>
          </div>
        </article>
      </main>

      <Footer language={language} />
    </div>
  );
}
