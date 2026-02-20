import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Юрмала (Jurmala) – Полный путеводитель по курортной столице Балтии 2026 | Jurmola',
  description: 'Полный гид по Юрмале: погода, как добраться, достопримечательности, лучшие рестораны и отели. Юрмала (Jurmala, Jūrmala) – крупнейший курорт Латвии на берегу Балтийского моря.',
  keywords: 'юрмала, юрмола, jurmala, jurmola, jūrmala, путеводитель юрмала, юрмала латвия, юрмала отдых, юрмала пляж, юрмала достопримечательности, юрмала рестораны, юрмала отели',
  openGraph: {
    title: 'Юрмала – Полный путеводитель по курортной столице Балтии',
    description: 'Все о Юрмале: погода по месяцам, как добраться из Риги, достопримечательности, лучшие рестораны и отели. Планируйте идеальный отдых в Юрмале.',
    url: 'https://jurmola.com/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Юрмала – курортная столица Балтии' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

const guidePages = [
  { href: 'jurmola/weather', title: 'Погода в Юрмале', description: 'Прогноз по месяцам, температура воды, лучшее время для поездки и что брать с собой.' },
  { href: 'jurmola/how-to-get-there', title: 'Как добраться', description: 'Поезд из Риги за €1.50, такси из аэропорта, автобусы, автомобиль и пропуск в город.' },
  { href: 'jurmola/attractions', title: 'Достопримечательности', description: 'Пляжи, Кемерский национальный парк, улица Йомас, Дзинтари и другие места.' },
  { href: 'jurmola/restaurants', title: 'Рестораны, бары и кафе', description: 'От изысканных ресторанов до уютных кафе: лучшие места для еды в Юрмале.' },
  { href: 'jurmola/where-to-stay', title: 'Где остановиться', description: 'Спа-отели, бутик-гостиницы и бюджетное жилье: лучшие варианты размещения.' },
];

export default function JurmolaGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Путеводитель 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Юрмала – Полный гид по курортной столице Балтии
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Всё, что нужно знать о <strong>Юрмале</strong> (Jūrmala) – крупнейшем курортном городе Латвии.
          33 км белоснежных пляжей, сосновые леса, исторические виллы и яркая культурная жизнь.
        </p>
        <p className="text-gray-500 mb-12">Планируете поездку в Юрмалу? Начните здесь.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>О Юрмале</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Юрмала</strong> (латыш. <em>Jūrmala</em>, также часто пишут <strong>Юрмола</strong> / <strong>Jurmola</strong> / <strong>Jurmala</strong>) –
              крупнейший курортный город Латвии и всей Прибалтики, расположенный на берегу Рижского залива Балтийского моря, всего в 25 км от столицы Риги.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Название города происходит от латышского слова «jūra» — море. Юрмала протянулась на 32 километра вдоль побережья,
              объединяя 15 районов: Лиелупе, Булдури, Дзинтари, Майори, Дубулти, Меллужи и другие. Каждый район обладает своим неповторимым характером.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Город знаменит 33-километровыми песчаными пляжами с Голубым флагом ЕС, уникальной деревянной архитектурой XIX–XX веков,
              целебным сосновым воздухом и богатой культурной жизнью. Ежегодно Юрмалу посещают более 2 миллионов туристов.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Юрмала в цифрах</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { value: '50 000', label: 'жителей' },
              { value: '33 км', label: 'пляжей' },
              { value: '25 км', label: 'от Риги' },
              { value: '15', label: 'районов' },
              { value: '50%', label: 'лес' },
              { value: '30 мин', label: 'поездом' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Разделы путеводителя</h2>
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
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Почему стоит посетить Юрмалу</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Пляжи мирового класса</h3>
              <p className="text-gray-700 text-sm leading-relaxed">33 км белого песка с Голубым флагом ЕС. Пологий вход в воду, чистая вода Рижского залива и оборудованные пляжи.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Природа и здоровье</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Половина города покрыта сосновыми лесами. Целебный морской воздух, смешанный с ароматом хвои, и минеральные источники Кемери.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Архитектура и история</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Уникальные деревянные виллы XIX–XX веков в стиле модерн, национальной романтики и неоготики. Более 400 памятников архитектуры.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold mb-3">Культура и развлечения</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Концертный зал «Дзинтари», более 20 фестивалей в год, оживленная улица Йомас с ресторанами и уличными музыкантами.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r">
          <h2 className="text-xl font-bold mb-3">Юрмала или Юрмола? Jurmala или Jurmola?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-3">
            Правильное написание города — <strong>Юрмала</strong> (латыш. <strong>Jūrmala</strong>).
            Вариант <strong>«Юрмола»</strong> (Jurmola) — это разговорная форма, часто используемая русскоязычными туристами.
            Оба варианта написания ведут на наш путеводитель, чтобы вы могли найти нужную информацию, как бы вы ни искали.
          </p>
          <p className="text-sm text-gray-500">Другие варианты написания: Jurmala, Jūrmala, Юрмала, Юрмола, Jurmola</p>
        </section>

        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Готовы к поездке в Юрмалу?</h2>
          <p className="text-gray-400 mb-6">Начните планирование с выбора раздела путеводителя выше</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition">Как добраться</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition border border-gray-600">Где остановиться</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
