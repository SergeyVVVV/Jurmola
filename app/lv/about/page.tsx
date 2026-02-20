import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Jurmola Telegraphs – Baltijas satīriskās ziņas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Par mums – Jurmola Telegraphs',
    description: 'Pirmais AI darbināts satīrisks izdevums Baltijā. Humoristiski ziņu stāsti par Jūrmalu, Latviju un reģionu, radīti ar mākslīgā intelekta palīdzību.',
    images: ['https://jurmola.com/images/grey-day-creature.jpg'],
    creator: '@JurmolaTelegraphs',
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/about',
    languages: {
      'x-default': 'https://jurmola.com/about',
      'en': 'https://jurmola.com/en/about',
      'ru': 'https://jurmola.com/about',
      'lv': 'https://jurmola.com/lv/about',
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} currentPath="about" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Par Jurmola Telegraphs
        </h1>
        <article className="max-w-4xl">

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
            <h2 className="text-2xl font-bold mb-4">
              Lūdzu, ņemiet vērā:
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
            <h2 className="text-2xl font-bold mb-4">Mūsu principi</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Mēs godīgi sakām, ka izmantojam AI satura radīšanai. Mēs pazīstam Baltijas un Latvijas 
              vietējo kontekstu. Mēs neslēpjam, ka šī ir satīra, nevis īstas ziņas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Pārredzamība mums ir svarīgāka nekā pretenzijas uz nopietni.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Sazinies ar mums</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Vai tev ir jautājumi, ieteikumi vai vēlies dalīties ar ideju satīriskam rakstam?{' '}
              <a 
                href="https://www.linkedin.com/in/sergey-visotsky/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Raksti!
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Neuztver to pārāk nopietni 😊
            </p>
          </div>
        </article>
      </main>

      <Footer language={language} />
    </div>
  );
}
