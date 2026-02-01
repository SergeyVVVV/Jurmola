import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Par mums – Jurmola Telegraphs',
  description: 'Pirmais AI darbināts satīrisks izdevums Baltijā. Humoristiski ziņu stāsti par Jūrmalu, Latviju un reģionu, radīti ar mākslīgā intelekta palīdzību.',
  openGraph: {
    title: 'Par mums – Jurmola Telegraphs',
    description: 'Pirmais AI darbināts satīrisks izdevums Baltijā. Humoristiski ziņu stāsti par Jūrmalu, Latviju un reģionu, radīti ar mākslīgā intelekta palīdzību.',
    url: 'https://jurmola.com/lv/about',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/about',
    languages: {
      'en': 'https://jurmola.com/en/about',
      'ru': 'https://jurmola.com/about',
      'lv': 'https://jurmola.com/lv/about',
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">Par mums</div>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600"
            >
              RU
            </Link>
            <Link
              href="/en/"
              className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600"
            >
              EN
            </Link>
            <Link
              href="/lv/"
              className="px-2 py-1 cursor-pointer hover:text-black transition font-bold underline text-gray-600"
            >
              LV
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <Link href={localizedHref('', language)}>
            <h1 className="font-serif text-6xl font-bold cursor-pointer hover:text-gray-700 transition">
              Jurmola Telegraphs
            </h1>
          </Link>
          <p className="text-sm mt-2 text-gray-600">Labākais Baltijas ziņu avots</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 py-3 text-sm font-medium">
            <Link href={localizedHref('politics', language)} className="hover:text-gray-600 transition">
              Politika
            </Link>
            <Link href={localizedHref('culture', language)} className="hover:text-gray-600 transition">
              Kultūra
            </Link>
            <Link href={localizedHref('business', language)} className="hover:text-gray-600 transition">
              Bizness
            </Link>
            <Link href={localizedHref('opinion', language)} className="hover:text-gray-600 transition">
              Viedoklis
            </Link>
            <Link href={localizedHref('about', language)} className="hover:text-gray-600 transition font-bold underline">
              Par mums
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">Par Jurmola Telegraphs</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Kas mēs esam?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pirmais <strong>AI darbināts satīrisks izdevums Baltijā</strong>. Mēs radām humoristiskus ziņu 
              stāstus par Jūrmalu, Latviju un reģionu, izmantojot mākslīgo intelektu un nedaudz absurda.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Iedvesmojušies no tādiem izdevumiem kā The Onion un Babylon Bee, mēs sniedzam satīrisku skatījumu 
              uz Baltijas notikumiem – ar vietējo kolorītu, humoru un mīlestību pret Jūrmalu.
            </p>
          </section>

          <section className="mb-10 p-6 bg-yellow-50 border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Svarīgs brīdinājums
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              <strong>Visi raksti Jurmola Telegraphs ir satīra</strong> un radīti ar mākslīgā intelekta palīdzību.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              Tās <strong>NAV īstas ziņas</strong>. Jebkāda līdzība ar reālām personām, notikumiem vai 
              organizācijām ir nejauša un tikai humoristiska.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Mūsu izdevumam nav nekādas saistības ar Laimu Vaikuli. Pavisam nekādas. Arī ar laimimiem ne.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Kāpēc AI?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Mēs izmantojam progresīvas teksta ģenerēšanas tehnoloģijas, lai radītu asprātīgas un absurdas 
              ziņas The Onion stilā, bet ar Baltijas garšu.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Mākslīgais intelekts ļauj mums:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mb-4 space-y-2">
              <li>Ātri reaģēt uz aktuāliem notikumiem reģionā</li>
              <li>Radīt absurdus, bet atpazīstamus stāstus</li>
              <li>Saglabāt unikālu satīrisku toni</li>
              <li>Eksperimentēt ar formātiem un stiliem</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              Mēs ticam pārredzamībai un godīgumam ar mūsu auditoriju – tāpēc mēs atklāti runājam par 
              tehnoloģijām, ko izmantojam.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Mūsu misija</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Izklaidēt, jautrināt un reizēm likt padomāt</strong> caur satīras prizmu.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Jurmola Telegraphs ir vieta, kur ziņas satiekas ar humoru, absurds ar realitāti, 
              un Jūrmala kļūst par iedomātas, bet tik pazīstamas pasaules galvaspilsētu.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mēs neapgalvojam, ka esam žurnālistika. Mēs radām izklaides saturu, kas liek smaidīt un 
              paskatīties uz pazīstamām lietām no cita leņķa.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Saturs un tēmas</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Mūsu satīriskie raksti ir balstīti uz reāliem notikumiem un tendencēm Baltijā, bet pacelti 
              līdz absurdam. Mēs sekojam aktuālajām reģiona ziņām un radām uz to pamata humoristiskas interpretācijas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Galvenās tēmas: Latvijas politika un sabiedrība, Baltijas kultūras dzīve, Jūrmalas kūrorta dzīve, 
              reģiona starptautiskās attiecības – viss caur laba humora un satīras prizmu.
            </p>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-2xl font-bold mb-4">E-E-A-T un pārredzamība</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Mēs sekojam Google E-E-A-T principiem (Pieredze, Ekspertīze, Autoritāte, Uzticamība):
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li><strong>Pieredze:</strong> Zināšanas par Baltijas un Latvijas vietējo kontekstu</li>
              <li><strong>Ekspertīze:</strong> Mūsdienu AI tehnoloģiju izmantošana satura radīšanai</li>
              <li><strong>Autoritāte:</strong> Godīgums par mūsu projekta būtību</li>
              <li><strong>Uzticamība:</strong> Pilnīga pārredzamība par satura radīšanas metodēm</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Sazinies ar mums</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Vai tev ir jautājumi, ieteikumi vai vēlies dalīties ar ideju satīriskam rakstam?
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Seko mums sociālajos tīklos un baudi mūsu unikālo skatījumu uz Baltijas ziņām!
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Atceries: mēs radām smaidu, ne ziņas. 😊
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>© 2026 Jurmola Telegraphs. Visas tiesības aizsargātas.</div>
            <div className="flex gap-4">
              <Link href={localizedHref('about', language)} className="hover:text-gray-900">
                Par mums
              </Link>
              <Link href={localizedHref('', language)} className="hover:text-gray-900">
                Sākums
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            ⚠️ Satirical content generated with AI assistance. Not real news.
          </div>
        </div>
      </footer>
    </div>
  );
}
