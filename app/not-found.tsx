import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header language="ru" />

      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1
          className="text-6xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          Страница не найдена
        </p>
        <p className="text-lg text-gray-500 mb-10">
          Возможно, эта страница была перемещена или никогда не существовала.
          Как и большинство наших новостей.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            На главную
          </Link>
          <Link
            href="/politics"
            className="px-6 py-3 border border-gray-300 font-semibold rounded hover:bg-gray-50 transition"
          >
            Политика
          </Link>
          <Link
            href="/culture"
            className="px-6 py-3 border border-gray-300 font-semibold rounded hover:bg-gray-50 transition"
          >
            Культура
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-gray-300 font-semibold rounded hover:bg-gray-50 transition"
          >
            О нас
          </Link>
        </div>
      </main>

      <Footer language="ru" />
    </div>
  );
}
