import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';

type Language = 'en' | 'ru' | 'lv';

interface HeaderProps {
  language: Language;
  currentPath?: string; // e.g., 'politics', 'culture', 'about', etc.
}

const translations = {
  en: {
    tagline: "The Baltic's Finest Satirical News Source",
    politics: 'Politics',
    culture: 'Culture',
    business: 'Business',
    opinion: 'Opinion',
    about: 'About',
    guide: 'Jurmala Guide',
  },
  ru: {
    tagline: 'Лучший источник сатирических новостей Балтии',
    politics: 'Политика',
    culture: 'Культура',
    business: 'Бизнес',
    opinion: 'Мнение',
    about: 'О нас',
    guide: 'Гид по Юрмале',
  },
  lv: {
    tagline: 'Labākais Baltijas satīrisko ziņu avots',
    politics: 'Politika',
    culture: 'Kultūra',
    business: 'Bizness',
    opinion: 'Viedoklis',
    about: 'Par mums',
    guide: 'Jūrmalas ceļvedis',
  },
};

export default function Header({ language, currentPath }: HeaderProps) {
  const t = translations[language];
  
  return (
    <>
      {/* Top Bar with Language Switcher */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">
            {new Date().toLocaleDateString(language === 'en' ? 'en-US' : language === 'ru' ? 'ru-RU' : 'lv-LV', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="flex gap-3 items-center">
            <Link
              href="/?set-lang=ru"
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${
                language === 'ru' ? 'font-bold underline' : ''
              } text-gray-600`}
            >
              RU
            </Link>
            <Link
              href="/en/?set-lang=en"
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${
                language === 'en' ? 'font-bold underline' : ''
              } text-gray-600`}
            >
              EN
            </Link>
            <Link
              href="/lv/?set-lang=lv"
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${
                language === 'lv' ? 'font-bold underline' : ''
              } text-gray-600`}
            >
              LV
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <Link href={localizedHref('', language)}>
            <span className="font-serif text-6xl font-bold cursor-pointer hover:text-gray-700 transition block">
              Jurmola Telegraphs
            </span>
          </Link>
          <p className="text-sm mt-2 text-gray-600">{t.tagline}</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 py-3 text-sm">
            <Link 
              href={localizedHref('politics', language)} 
              className={`hover:text-gray-600 transition ${
                currentPath === 'politics' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.politics}
            </Link>
            <Link 
              href={localizedHref('culture', language)} 
              className={`hover:text-gray-600 transition ${
                currentPath === 'culture' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.culture}
            </Link>
            <Link 
              href={localizedHref('business', language)} 
              className={`hover:text-gray-600 transition ${
                currentPath === 'business' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.business}
            </Link>
            <Link 
              href={localizedHref('opinion', language)} 
              className={`hover:text-gray-600 transition ${
                currentPath === 'opinion' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.opinion}
            </Link>
            <Link
              href={localizedHref('about', language)}
              className={`hover:text-gray-600 transition ${
                currentPath === 'about' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.about}
            </Link>
            <Link
              href={localizedHref('jurmola', language)}
              className={`hover:text-gray-600 transition text-blue-700 ${
                currentPath === 'jurmola' ? 'font-bold' : 'font-medium'
              }`}
            >
              {t.guide}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
