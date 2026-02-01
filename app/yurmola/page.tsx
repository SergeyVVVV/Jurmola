import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';
import { articles } from '../data/articles';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Юрмола – Курортная столица Балтии | Jurmola Telegraphs',
  description: 'Все о Юрмоле: новости, события, культура и жизнь курортного города. Сатирический взгляд на Юрмолу от Jurmola Telegraphs – лучшего источника новостей Балтии.',
  keywords: 'юрмола, jurmala, юрмала новости, курорт юрмола, латвия юрмола, новости юрмолы, юрмола сегодня',
  openGraph: {
    title: 'Юрмола – Курортная столица Балтии | Jurmola Telegraphs',
    description: 'Все о Юрмоле: новости, события, культура и жизнь курортного города. Сатирический взгляд на Юрмолу от Jurmola Telegraphs.',
    url: 'https://jurmola.com/yurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрмола – курортная столица Балтии'
      }
    ]
  },
  alternates: {
    canonical: 'https://jurmola.com/yurmola',
  }
};

export default function YurmolaPage() {
  // Get some articles to feature
  const jurmalaArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">О Юрмоле</div>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="px-2 py-1 cursor-pointer hover:text-black transition font-bold underline text-gray-600"
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
              className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600"
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
          <p className="text-sm mt-2 text-gray-600">Лучший источник новостей Балтии</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 py-3 text-sm font-medium">
            <Link href={localizedHref('politics', language)} className="hover:text-gray-600 transition">
              Политика
            </Link>
            <Link href={localizedHref('culture', language)} className="hover:text-gray-600 transition">
              Культура
            </Link>
            <Link href={localizedHref('business', language)} className="hover:text-gray-600 transition">
              Бизнес
            </Link>
            <Link href={localizedHref('opinion', language)} className="hover:text-gray-600 transition">
              Мнение
            </Link>
            <Link href={localizedHref('about', language)} className="hover:text-gray-600 transition">
              О нас
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Юрмола – Курортная столица Балтии
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Город, где Рижский залив встречается с сосновыми лесами, а курортная жизнь – с абсурдом.
          </p>
          <p className="text-lg text-gray-600">
            Добро пожаловать в Юрмолу глазами Jurmola Telegraphs – где реальность смешивается с сатирой!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Что такое Юрмола?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Юрмола (Jūrmala)</strong> – крупнейший курортный город Латвии и всей Балтии, 
              расположенный на берегу Рижского залива, всего в 25 км от столицы Риги.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Название города происходит от латышского слова «jūra» (море), что идеально отражает его 
              приморскую сущность. Юрмола протянулась на 32 километра вдоль побережья, объединяя 
              15 районов, каждый со своим характером и историей.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Сегодня Юрмола – это не только пляжи и сосны, но и культурный центр региона, место 
              проведения международных фестивалей, концертов и (по нашей версии) самых абсурдных 
              новостей Балтии!
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Почему Юрмола важна?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏖️ Курортная жемчужина</h3>
                <p className="text-gray-700">
                  33 км белоснежных песчаных пляжей, отмеченных Голубым флагом ЕС за чистоту и экологичность.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🌲 Природный оазис</h3>
                <p className="text-gray-700">
                  Половина города покрыта сосновыми лесами, создающими уникальный микроклимат с целебным воздухом.
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎭 Культурный центр</h3>
                <p className="text-gray-700">
                  Фестиваль КВН, концерты мировых звезд, музыкальные фестивали – Юрмола живет яркой культурной жизнью.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏛️ Архитектурное наследие</h3>
                <p className="text-gray-700">
                  Уникальная деревянная архитектура 19-20 веков: виллы, пансионаты, дачи в стиле модерн и национальной романтики.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
            <h2 className="text-3xl font-bold mb-4">Юрмола в цифрах</h2>
            <ul className="text-lg leading-relaxed text-gray-700 space-y-2">
              <li>📍 <strong>Население:</strong> ~50,000 жителей (и бесчисленное количество туристов летом)</li>
              <li>📏 <strong>Протяженность:</strong> 32 км вдоль побережья</li>
              <li>🏖️ <strong>Пляжи:</strong> 33 км песчаных пляжей</li>
              <li>🌳 <strong>Леса:</strong> 50% территории города</li>
              <li>🎵 <strong>Фестивалей в год:</strong> Более 20 крупных культурных событий</li>
              <li>🚂 <strong>До Риги:</strong> 25 км (30 минут на электричке)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Jurmola Telegraphs и Юрмола</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Наше издание названо в честь этого удивительного города. <strong>Jurmola Telegraphs</strong> – 
              это сатирический взгляд на жизнь Юрмолы, Латвии и всей Балтии.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Мы берем реальные события региона и доводим их до абсурда, создавая юмористические новости 
              в стиле The Onion, но с местным колоритом. Улитки, объявленные национальными символами, 
              курортные сборы для чаек, политические дебаты о цвете песка – всё это наш любимый жанр!
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Мы любим Юрмолу и показываем эту любовь через призму доброго юмора и сатиры. 
              Потому что иногда смех – лучший способ понять и оценить место, где живёшь.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Новости о Юрмоле</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Читайте наши сатирические статьи о Юрмоле – где реальность встречается с абсурдом:
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
                Все новости →
              </Link>
            </div>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-3xl font-bold mb-4">Посетите Юрмолу</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Если вы ещё не были в Юрмоле – обязательно приезжайте! Это город, где можно:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li>Прогуляться по 33-километровому пляжу Балтийского моря</li>
              <li>Подышать целебным воздухом соснового леса</li>
              <li>Полюбоваться деревянной архитектурой начала XX века</li>
              <li>Попробовать местную кухню в уютных кафе на улице Йомас</li>
              <li>Посетить концерт или фестиваль в концертном зале «Дзинтари»</li>
              <li>Искупаться в Рижском заливе (летом, конечно!)</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              А потом вернуться к нам и прочитать сатирическую версию вашего визита! 😄
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-xl font-bold text-gray-900 mb-3">
              Юрмола – наша вдохновение, наш дом, наша сатира
            </p>
            <p className="text-gray-600 italic">
              С любовью и абсурдом, команда Jurmola Telegraphs
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold mb-3">О проекте</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Jurmola Telegraphs – первое AI-powered сатирическое издание Балтии. 
                Мы создаем юмористические новости о регионе с помощью искусственного интеллекта.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={localizedHref('politics', language)} className="text-gray-600 hover:text-gray-900">Политика</Link></li>
                <li><Link href={localizedHref('culture', language)} className="text-gray-600 hover:text-gray-900">Культура</Link></li>
                <li><Link href={localizedHref('business', language)} className="text-gray-600 hover:text-gray-900">Бизнес</Link></li>
                <li><Link href={localizedHref('opinion', language)} className="text-gray-600 hover:text-gray-900">Мнение</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={localizedHref('about', language)} className="text-gray-600 hover:text-gray-900">О нас</Link></li>
                <li><Link href={localizedHref('yurmola', language)} className="text-gray-600 hover:text-gray-900">О Юрмоле</Link></li>
                <li><Link href={localizedHref('', language)} className="text-gray-600 hover:text-gray-900">Главная</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-300">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div>© 2026 Jurmola Telegraphs. Все права защищены.</div>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              ⚠️ Satirical content generated with AI assistance. Not real news.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
