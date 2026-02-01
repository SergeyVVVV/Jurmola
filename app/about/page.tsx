import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';

const language = 'ru';

export const metadata: Metadata = {
  title: 'О проекте – Jurmola Telegraphs',
  description: 'Первое AI-powered сатирическое издание Балтии. Юмористические новости о Юрмоле, Латвии и регионе, созданные с помощью искусственного интеллекта.',
  openGraph: {
    title: 'О проекте – Jurmola Telegraphs',
    description: 'Первое AI-powered сатирическое издание Балтии. Юмористические новости о Юрмоле, Латвии и регионе, созданные с помощью искусственного интеллекта.',
    url: 'https://jurmola.com/about',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jurmola.com/about',
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
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">О проекте</div>
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
            <Link href={localizedHref('about', language)} className="hover:text-gray-600 transition font-bold underline">
              О нас
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">О Jurmola Telegraphs</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Кто мы?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Первое <strong>AI-powered сатирическое издание Балтии</strong>. Мы создаем юмористические 
              новости о Юрмоле, Латвии и регионе, используя искусственный интеллект и щепотку абсурда.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Вдохновленные такими изданиями как The Onion и Babylon Bee, мы привносим сатирический 
              взгляд на события Балтии – с местным колоритом, юмором и любовью к Юрмоле.
            </p>
          </section>

          <section className="mb-10 p-6 bg-yellow-50 border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Важный дисклеймер
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              <strong>Все статьи на Jurmola Telegraphs являются сатирой</strong> и созданы с помощью 
              искусственного интеллекта.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              Это <strong>НЕ настоящие новости</strong>. Любые совпадения с реальными людьми, событиями 
              или организациями случайны и носят исключительно юмористический характер.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Наш ресурс не имеет никакого отношения к Лайме Вайкуле. Вообще. И к лаймам тоже.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Зачем AI?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Мы используем передовые технологии генерации текста для создания остроумных и абсурдных 
              новостей в стиле The Onion, но с балтийским колоритом.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Искусственный интеллект позволяет нам:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mb-4 space-y-2">
              <li>Оперативно реагировать на актуальные события в регионе</li>
              <li>Создавать абсурдные, но узнаваемые сюжеты</li>
              <li>Поддерживать уникальный сатирический тон</li>
              <li>Экспериментировать с форматами и стилями</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">
              Мы верим в прозрачность и честность с нашей аудиторией – именно поэтому открыто говорим 
              о технологиях, которые используем.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Смешить, развлекать и иногда заставлять задуматься</strong> через призму сатиры.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Jurmola Telegraphs – это место, где новости встречаются с юмором, абсурд с реальностью, 
              а Юрмола становится столицей вымышленного, но такого знакомого мира.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Мы не претендуем на журналистику. Мы создаем развлекательный контент, который заставляет 
              улыбнуться и взглянуть на привычные вещи под другим углом.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Контент и темы</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Наши сатирические статьи основаны на реальных событиях и трендах в Балтии, но доведены 
              до абсурда. Мы следим за актуальными новостями региона и создаем на их основе юмористические 
              интерпретации.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Основные темы: политика и общество Латвии, культурная жизнь Балтии, курортная жизнь 
              Юрмолы, международные отношения региона – все через призму доброго юмора и сатиры.
            </p>
          </section>

          <section className="mb-10 p-6 bg-blue-50 border-l-4 border-blue-400">
            <h2 className="text-2xl font-bold mb-4">E-E-A-T и прозрачность</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Мы следуем принципам Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
              <li><strong>Experience:</strong> Знание местного контекста Балтии и Латвии</li>
              <li><strong>Expertise:</strong> Использование современных AI-технологий для создания контента</li>
              <li><strong>Authoritativeness:</strong> Честность о природе нашего проекта</li>
              <li><strong>Trustworthiness:</strong> Полная прозрачность о методах создания контента</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Есть вопросы, предложения или хотите поделиться идеей для сатирической статьи?
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Следите за нами в социальных сетях и наслаждайтесь нашим уникальным взглядом на новости Балтии!
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Помните: мы создаем улыбки, а не новости. 😊
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>© 2026 Jurmola Telegraphs. Все права защищены.</div>
            <div className="flex gap-4">
              <Link href={localizedHref('about', language)} className="hover:text-gray-900">
                О нас
              </Link>
              <Link href={localizedHref('', language)} className="hover:text-gray-900">
                Главная
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
