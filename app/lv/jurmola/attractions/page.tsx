import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Jūrmalas apskates vietas – Ko apskatīt un kur aiziet | Jurmola',
  description: 'Pilns ceļvedis par Jūrmalas apskates vietām: pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintaru koncertzāle, muzeji un izklaides. Visas labākās vietas Jūrmalā (Jurmola) vienā ceļvedī.',
  keywords: 'jūrmala apskates vietas, jūrmala ko apskatīt, jurmola apskates vietas, jūrmala pludmales, ķemeru nacionālais parks, jomas iela, dzintaru koncertzāle, jūrmala muzeji, jūrmala izklaides',
  openGraph: {
    title: 'Jūrmalas apskates vietas – Ko apskatīt un kur aiziet',
    description: 'Zilā karoga pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintaru koncertzāle, muzeji un ģimenes izklaides. Pilns ceļvedis par labākajām vietām Jūrmalā.',
    url: 'https://jurmola.com/lv/jurmola/attractions',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jūrmalas apskates vietas' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola/attractions',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/attractions',
      'en': 'https://jurmola.com/en/jurmola/attractions',
      'ru': 'https://jurmola.com/jurmola/attractions',
      'lv': 'https://jurmola.com/lv/jurmola/attractions',
    }
  }
};

const beaches = [
  {
    name: 'Majoru pludmale',
    description: 'Populārākā un dzīvīgākā pludmale Jūrmalā. Plata balto smilšu josla ar lielisku infrastruktūru — glābēji, ģērbtuves, bērnu rotaļlaukumi un pludmales kafejnīcas. Brīnišķīgs skats uz Rīgas jūras līci.',
    location: 'Majori, Jūrmalas centrs',
    info: 'ES Zilais karogs. Bezmaksas ieeja. Glābēji dežūrā vasaras sezonā (jūnijs–augusts).',
    color: 'border-blue-400',
  },
  {
    name: 'Bulduru pludmale',
    description: 'Klusāka alternatīva Majoriem. Mierīga un kopta pludmale, iecienīta ģimeņu un vietējo iedzīvotāju vidū. Sekls ūdens un lēzena ieiešana padara to drošu peldēšanai ar bērniem.',
    location: 'Bulduri, Jūrmalas rietumu daļa',
    info: 'ES Zilais karogs. Bezmaksas ieeja. Mazāk apmeklētāju pat sezonas laikā.',
    color: 'border-cyan-400',
  },
  {
    name: 'Dzintaru pludmale',
    description: 'Atrodas blakus leģendārajai Dzintaru koncertzālei. Skaista pludmale ar labu infrastruktūru, ko ieskauj priedes. Populāra aktīvo atpūtnieku vidū — šeit bieži notiek pludmales pasākumi.',
    location: 'Dzintari, pie koncertzāles',
    info: 'Bezmaksas ieeja. Tuvu Dzintaru mežaparkam — ideāli pludmales un dabas apvienošanai.',
    color: 'border-sky-400',
  },
  {
    name: 'Jaunkemeru pludmale',
    description: 'Savvaļas un neskartas pludmale Jūrmalas nomalē, pie Ķemeru Nacionālā parka. Minimāla infrastruktūra, toties maksimāla tuvība dabai. Ideāla tiem, kas meklē mieru un dabas skaistumu.',
    location: 'Jaunkemeri, Jūrmalas rietumu mala',
    info: 'Bezmaksas ieeja. Savvaļas pludmale bez ērtībām. Blakus Ķemeru Nacionālajam parkam.',
    color: 'border-teal-400',
  },
];

const natureParks = [
  {
    name: 'Ķemeru Nacionālais parks',
    description: 'Viens no Latvijas nozīmīgākajiem dabas objektiem, dibināts 1997. gadā. Platība 381 km\u00B2. Parka pērle ir Lielais Ķemeru tīrelis ar koka laipām (īsā cilpa 1,4 km vai garā cilpa 3,4 km) un skatu torni. Bagāta flora un fauna: savvaļas zirgi, brieži, melnie stārķi un desmitiem putnu sugu.',
    location: 'Jūrmalas rietumu daļa, Ķemeru rajons',
    info: 'Bezmaksas ieeja. Stāvvieta: pirmā stunda \u20AC3, pēc tam \u20AC7 par 24 stundām. Atvērts visu gadu. Laipas piemērotas ratiņkrēsliem.',
    color: 'border-green-500',
  },
  {
    name: 'Ragakāpas dabas parks',
    description: 'Smilšu kāpu dabas liegums Lielupes rajonā ar unikāliem priežu mežiem, kas vecāki par 150 gadiem. Ainaviskas dabas takas vijas cauri kāpām un mežam. Viens no labākajiem Baltijas jūras piekrastes ainavu piemēriem.',
    location: 'Lielupe, Jūrmalas austrumu daļa',
    info: 'Bezmaksas ieeja. Dabas takas pieejamas visu gadu. Sasniedzams no Lielupes stacijas.',
    color: 'border-emerald-500',
  },
  {
    name: 'Dzintaru mežaparks',
    description: 'Moderns piedzīvojumu parks Dzintaru priežu mežā. Virves trases dažādos grūtības līmeņos, skatu tornis ar panorāmas skatu, velo un pastaigu celiņi. Ideāla vieta aktīvai atpūtai visai ģimenei.',
    location: 'Dzintari',
    info: 'Piedzīvojumu parks: ~\u20AC10\u201320 atkarībā no trases. Skatu tornis: bezmaksas. Atvērts no pavasara līdz rudenim.',
    color: 'border-lime-500',
  },
  {
    name: 'Lielupe',
    description: 'Gleznainas upes, kas apņem Jūrmalu no dienvidiem. Piedāvā laivu braucienus, airēšanu ar smailēm un makšķerēšanu. Upes krasti ir lieliska vieta pikniekam un dabas vērošanai.',
    location: 'Jūrmalas dienvidu robeža',
    info: 'Laivu noma pieejama vasaras sezonā. Makšķerēšana ar licenci.',
    color: 'border-green-400',
  },
];

const cultureMuseums = [
  {
    name: 'Dzintaru koncertzāle',
    description: 'Leģendāra brīvdabas koncertvieta un Jūrmalas simbols. Būvēta 20. gadsimta sākumā, rekonstruēta 2006. gadā. Vasarā šeit notiek pasaules mēroga mākslinieku koncerti, festivāli un kultūras pasākumi. Unikāla akustika un vakara koncerta atmosfēra starp priedēm.',
    location: 'Dzintari, Turaidas iela 1',
    info: 'Vasaras sezona: jūnijs\u2013septembris. Biļetes: no \u20AC15 atkarībā no pasākuma. Programma: dzintarukoncertzale.lv.',
    color: 'border-purple-500',
  },
  {
    name: 'Jūrmalas brīvdabas muzejs',
    description: '19. gadsimta zvejnieku sēta, kas atveido latviešu piekrastes zvejnieku dzīvi un tradīcijas. Autentiskas ēkas, zvejas rīki un sadzīves priekšmeti. Dzīvā vēsture par Jūrmalas piekrastes ciemiem pirms kūrorta laikmeta.',
    location: 'Bulduri, Tīklu iela 1',
    info: 'Atvērts: tr\u2013sv, 10:00\u201318:00 (vasarā), 10:00\u201316:00 (ziemā). Ieeja: ~\u20AC2\u20133.',
    color: 'border-violet-500',
  },
  {
    name: 'Aspazijas māja',
    description: 'Memoriālais muzejs, kas veltīts izcilai latviešu dzejniecei Aspazijai (Elzai Pliekšānei) elegantā jūgendstila villā. Ekspozīcija stāsta par dzejnieces dzīvi un daiļradi, kā arī par viņas vīru \u2014 dzejnieku Raini. Ēka pati ir skaists 20. gadsimta sākuma arhitektūras paraugs.',
    location: 'Dubulti, Z. Meierovica prospekts 18/20',
    info: 'Atvērts: tr\u2013sv, 10:00\u201317:00. Ieeja: ~\u20AC2. Ekskursijas pēc iepriekšēja pieteikuma.',
    color: 'border-pink-500',
  },
  {
    name: 'Jūrmalas pilsētas muzejs',
    description: 'Vietējās vēstures muzejs, kas stāsta par Jūrmalu no zvejnieku ciemiem līdz mūsdienu kūrortam. Ekspozīcijas par kūrorta kultūras attīstību, arhitektūru, ievērojamiem iedzīvotājiem un reģiona dabu.',
    location: 'Majori, Tirgoņu iela 29',
    info: 'Atvērts: tr\u2013sv, 10:00\u201317:00. Ieeja: ~\u20AC2\u20133. Pagaidu izstādes mainās regulāri.',
    color: 'border-indigo-500',
  },
  {
    name: 'Dubultu luterāņu baznīca',
    description: 'Skaista vēsturiska baznīca Dubultu rajonā, celta 19. gadsimta beigās. Izceļas ar unikālu arhitektūru ar neogotikas elementiem. Darbīga baznīca, kas atvērta apmeklētājiem.',
    location: 'Dubulti',
    info: 'Bezmaksas ieeja. Dievkalpojumi svētdienās.',
    color: 'border-purple-400',
  },
];

const landmarks = [
  {
    name: 'Jomas iela',
    description: 'Jūrmalas galvenā gājēju iela un tās neoficiālā sirds. 1,1 km garumā \u2014 no Majoru stacijas līdz Dzintariem. Restorāni, kafejnīcas, suvenīru veikali, ielu mūziķi un mākslinieki. Vasarā dzīve šeit verd līdz vēlam vakaram.',
    location: 'Majori \u2013 Dzintari, Jūrmalas centrs',
    info: 'Gājēju zona. Atvērta visu diennakti. Labākais pastaigas laiks \u2014 vasaras vakars.',
    color: 'border-amber-500',
  },
  {
    name: 'Jūrmalas koka arhitektūra',
    description: 'Vairāk nekā 400 vēsturiskas koka villas no 19.\u201320. gadsimta jūgendstilā, nacionālā romantisma un neogotikas stilā. Unikāli kokgriezumi, torņi un verandas \u2014 katra māja ir neatkārtojama. Arhitektūras mantojums no laikmeta, kad Jūrmala bija modes kūrorts.',
    location: 'Visā pilsētā, īpaši Majoros, Dzintaros, Bulduros, Dubultos',
    info: 'Brīvi apskatāma. Koka arhitektūras karti var saņemt tūrisma centrā.',
    color: 'border-orange-500',
  },
  {
    name: 'Jūrmalas globuss',
    description: 'Ikoniska metāla globusa skulptūra \u2014 viens no atpazīstamākajiem simboliem un populārākajām foto vietām Jūrmalā. Iecienīts tikšanās punkts un pastaigu sākumpunkts.',
    location: 'Majori, pie Jomas ielas',
    info: 'Pieejams visu diennakti. Bezmaksas. Populāra foto vieta.',
    color: 'border-yellow-500',
  },
  {
    name: 'Ķemeru ūdenstornis',
    description: 'Vēsturisks ūdenstornis \u2014 Ķemeru rajona orientieris. Blakus atrodas slavenie sēra avoti, kas kādreiz padarīja Ķemerus par populāru balneologisko kūrortu.',
    location: 'Ķemeri',
    info: 'Ārējais apskats. Sēra avoti ir brīvi pieejami.',
    color: 'border-amber-400',
  },
];

const familyFun = [
  {
    name: 'Līvu Akvaparks',
    description: 'Viens no lielākajiem akvaparkam Baltijā, darbojas visu gadu. Ūdens slidkalniņi, viļņu baseins, bērnu zona, SPA un pirtis. Lieliska izklaide visai ģimenei jebkurā laikā.',
    location: 'Lielupe, Viestura iela 24',
    info: 'Atvērts visu gadu. Biļetes: no ~\u20AC15 (bērni) līdz ~\u20AC25 (pieaugušie) par 3 stundām. Sīkāk: akvaparks.lv.',
    color: 'border-rose-500',
  },
  {
    name: 'Dzintaru piedzīvojumu parks',
    description: 'Virves trases starp priedēm dažādos grūtības līmeņos \u2014 no bērnu maršrutiem līdz ekstrēmiem pieaugušo trasēm. Pieejami arī batuti, velosipēdu noma un piknika vieta.',
    location: 'Dzintari, Dzintaru mežaparkā',
    info: 'Atvērts: maijs\u2013oktobris. Bērnu trases: no ~\u20AC8. Pieaugušo trases: no ~\u20AC15.',
    color: 'border-red-400',
  },
];

const guideLinks = [
  { href: 'jurmola', title: 'Jūrmala \u2013 galvenā lapa', description: 'Atgriezties pilnajā Jūrmalas ceļvedī.', icon: '🏠', color: 'from-blue-50 to-cyan-50', border: 'border-blue-300' },
  { href: 'jurmola/weather', title: 'Laikapstākļi Jūrmalā', description: 'Prognoze pa mēnešiem, jūras temperatūra un ko ņemt līdzi.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
  { href: 'jurmola/how-to-get-there', title: 'Kā nokļūt', description: 'Vilciens, taksometrs, autobuss un auto no Rīgas.', icon: '🚂', color: 'from-green-50 to-emerald-50', border: 'border-green-300' },
  { href: 'jurmola/restaurants', title: 'Restorāni un kafejnīcas', description: 'Labākās ēdināšanas vietas Jūrmalā.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
  { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'SPA viesnīcas, butika viesnīcas un budžeta naktsmītnes.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href={localizedHref('jurmola', language)} className="hover:text-blue-600 transition">&larr; Jūrmalas ceļvedis</Link>
          </nav>
          <p className="text-sm font-medium text-purple-600 mb-3 tracking-wide uppercase">Ceļvedis 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Jūrmalas apskates vietas</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Ko apskatīt un kur aiziet <strong>Jūrmalā</strong> (Jurmala / Jurmola) &mdash; no balto smilšu pludmalēm
            un Ķemeru purva takām līdz dzīvīgajai Jomas ielai un leģendārajai Dzintaru koncertzālei.
          </p>
          <p className="text-lg text-gray-500">15 labākās vietas, ko apmeklēt</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Beaches */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏖️</span>
            <div>
              <h2 className="text-3xl font-bold">Pludmales</h2>
              <p className="text-gray-600">33 km balto smilšu ar ES Zilo karogu &mdash; bezmaksas ieeja visās pludmalēs</p>
            </div>
          </div>
          <div className="grid gap-5">
            {beaches.map((beach) => (
              <div key={beach.name} className={`p-6 bg-white rounded-lg border-l-4 ${beach.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{beach.name}</h3>
                <p className="text-gray-700 mb-3">{beach.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {beach.location}</span>
                </div>
                <p className="text-sm text-blue-700 bg-blue-50 rounded-md px-3 py-2 mt-3">{beach.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nature & Parks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌿</span>
            <div>
              <h2 className="text-3xl font-bold">Daba un parki</h2>
              <p className="text-gray-600">Nacionālie parki, dabas liegumi, meži un upe</p>
            </div>
          </div>
          <div className="grid gap-5">
            {natureParks.map((park) => (
              <div key={park.name} className={`p-6 bg-white rounded-lg border-l-4 ${park.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{park.name}</h3>
                <p className="text-gray-700 mb-3">{park.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {park.location}</span>
                </div>
                <p className="text-sm text-green-700 bg-green-50 rounded-md px-3 py-2 mt-3">{park.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture & Museums */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏛️</span>
            <div>
              <h2 className="text-3xl font-bold">Kultūra un muzeji</h2>
              <p className="text-gray-600">Koncertzāles, muzeji un vēsturiskas ēkas</p>
            </div>
          </div>
          <div className="grid gap-5">
            {cultureMuseums.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-purple-700 bg-purple-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <div>
              <h2 className="text-3xl font-bold">Ievērojamas vietas un orientieri</h2>
              <p className="text-gray-600">Ikoniskas ielas, arhitektūra un piemiņas vietas</p>
            </div>
          </div>
          <div className="grid gap-5">
            {landmarks.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-amber-700 bg-amber-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Family Fun */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎢</span>
            <div>
              <h2 className="text-3xl font-bold">Izklaides visai ģimenei</h2>
              <p className="text-gray-600">Akvaparki, piedzīvojumu trases un aktīvā atpūta</p>
            </div>
          </div>
          <div className="grid gap-5">
            {familyFun.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-rose-700 bg-rose-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold mb-4">Praktiski padomi</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><span className="font-bold text-orange-500">1.</span> Lielākā daļa dabas apskates vietu ir bezmaksas &mdash; maksāt jāmaksā tikai par stāvvietu Ķemeros.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">2.</span> Ērtākais veids, kā pārvietoties starp rajoniem, ir elektrovilciens &mdash; stacijas ir katrā rajonā.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">3.</span> Vasara (jūnijs&ndash;augusts) ir augstā sezona: viss ir atvērts, bet daudz cilvēku. Maijs un septembris ir lielisks kompromiss.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">4.</span> Ķemeru tīrelī ņemiet līdzi ērtus apavus un līdzekli pret kukaiņiem (īpaši vasarā).</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">5.</span> Koka arhitektūru vislabāk apskatīt kājām vai ar velosipēdu &mdash; noma pieejama Majoros.</li>
          </ul>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Citas ceļveža sadaļas</h2>
          <div className="grid gap-4">
            {guideLinks.map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className={`block p-5 bg-gradient-to-r ${page.color} rounded-xl border ${page.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{page.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <span className="ml-auto text-gray-400 text-xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Plānojat braucienu uz Jūrmalu?</h2>
          <p className="text-purple-100 mb-6">Uzziniet, kā nokļūt un kur palikt</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition">Kā nokļūt</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Kur palikt</Link>
          </div>
        </section>

      </main>

      <Footer language={language} />
    </div>
  );
}
