import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    images: [
      {
        url: 'https://jurmola.com/images/grey-day-creature.jpg',
        width: 1200,
        height: 630,
        alt: 'Jurmola Telegraphs – сатирические новости Балтии',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О проекте – Jurmola Telegraphs',
    description: 'Первое AI-powered сатирическое издание Балтии. Юмористические новости о Юрмоле, Латвии и регионе, созданные с помощью искусственного интеллекта.',
    images: ['https://jurmola.com/images/grey-day-creature.jpg'],
    creator: '@JurmolaTelegraphs',
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
      <Header language={language} currentPath="about" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          О Jurmola Telegraphs
        </h1>
        <article className="max-w-4xl">

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
            <h2 className="text-2xl font-bold mb-4">
              Обратите внимание:
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
            <h2 className="text-2xl font-bold mb-4">Наши принципы</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Мы честно говорим, что используем AI для создания контента. Мы знаем местный контекст Балтии и Латвии. 
              Мы не скрываем, что это сатира, а не настоящие новости.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Прозрачность для нас важнее, чем претензии на серьезность.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Есть вопросы, предложения или же вы хотите поделиться идеей для сатирической статьи?{' '}
              <a 
                href="https://www.linkedin.com/in/sergey-visotsky/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Напишите!
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 italic text-lg">
              Не принимайте это слишком серьезно 😊
            </p>
          </div>
        </article>
      </main>

      <Footer language={language} />
    </div>
  );
}
