import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';

type Language = 'en' | 'ru' | 'lv';

interface FooterProps {
  language: Language;
}

const translations = {
  en: {
    about: 'About Us',
    aboutText: 'Jurmola Telegraphs – the first AI-powered satirical publication in the Baltics. We create humorous news about the region using artificial intelligence.',
    sections: 'Sections',
    politics: 'Politics',
    culture: 'Culture',
    business: 'Business',
    opinion: 'Opinion',
    info: 'Information',
    aboutPage: 'About',
    jurmalaPage: 'Jurmala City Guide',
    home: 'Home',
    rss: 'RSS Feed',
    copyright: 'All rights reserved.',
    guide: 'Jurmala Guide',
    guideWeather: 'Weather',
    guideTransport: 'How to Get There',
    guideAttractions: 'Attractions',
    guideRestaurants: 'Restaurants',
    guideHotels: 'Where to Stay',
  },
  ru: {
    about: 'О проекте',
    aboutText: 'Jurmola Telegraphs – первое AI-powered сатирическое издание Балтии. Мы создаем юмористические новости о регионе с помощью искусственного интеллекта.',
    sections: 'Разделы',
    politics: 'Политика',
    culture: 'Культура',
    business: 'Бизнес',
    opinion: 'Мнение',
    info: 'Информация',
    aboutPage: 'О нас',
    jurmalaPage: 'Гид по Юрмале',
    home: 'Главная',
    rss: 'RSS-лента',
    copyright: 'Все права защищены.',
    guide: 'Гид по Юрмале',
    guideWeather: 'Погода',
    guideTransport: 'Как добраться',
    guideAttractions: 'Достопримечательности',
    guideRestaurants: 'Рестораны',
    guideHotels: 'Где остановиться',
  },
  lv: {
    about: 'Par projektu',
    aboutText: 'Jurmola Telegraphs – pirmais AI darbināts satīrisks izdevums Baltijā. Mēs radām humoristiskus ziņu stāstus par reģionu, izmantojot mākslīgo intelektu.',
    sections: 'Sadaļas',
    politics: 'Politika',
    culture: 'Kultūra',
    business: 'Bizness',
    opinion: 'Viedoklis',
    info: 'Informācija',
    aboutPage: 'Par mums',
    jurmalaPage: 'Jūrmalas ceļvedis',
    home: 'Sākums',
    rss: 'RSS barotne',
    copyright: 'Visas tiesības aizsargātas.',
    guide: 'Jūrmalas ceļvedis',
    guideWeather: 'Laikapstākļi',
    guideTransport: 'Kā nokļūt',
    guideAttractions: 'Apskates vietas',
    guideRestaurants: 'Restorāni',
    guideHotels: 'Kur palikt',
  },
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  
  return (
    <footer className="border-t border-gray-300 mt-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="font-bold mb-3">{t.about}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.aboutText}
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-bold mb-3">{t.sections}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={localizedHref('politics', language)} className="text-gray-600 hover:text-gray-900">{t.politics}</Link></li>
              <li><Link href={localizedHref('culture', language)} className="text-gray-600 hover:text-gray-900">{t.culture}</Link></li>
              <li><Link href={localizedHref('business', language)} className="text-gray-600 hover:text-gray-900">{t.business}</Link></li>
              <li><Link href={localizedHref('opinion', language)} className="text-gray-600 hover:text-gray-900">{t.opinion}</Link></li>
            </ul>
          </div>

          {/* Jurmala Guide */}
          <div>
            <h3 className="font-bold mb-3">
              <Link href={localizedHref('jurmola', language)} className="hover:text-gray-600">{t.guide}</Link>
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={localizedHref('jurmola/weather', language)} className="text-gray-600 hover:text-gray-900">{t.guideWeather}</Link></li>
              <li><Link href={localizedHref('jurmola/how-to-get-there', language)} className="text-gray-600 hover:text-gray-900">{t.guideTransport}</Link></li>
              <li><Link href={localizedHref('jurmola/attractions', language)} className="text-gray-600 hover:text-gray-900">{t.guideAttractions}</Link></li>
              <li><Link href={localizedHref('jurmola/restaurants', language)} className="text-gray-600 hover:text-gray-900">{t.guideRestaurants}</Link></li>
              <li><Link href={localizedHref('jurmola/where-to-stay', language)} className="text-gray-600 hover:text-gray-900">{t.guideHotels}</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold mb-3">{t.info}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={localizedHref('about', language)} className="text-gray-600 hover:text-gray-900">{t.aboutPage}</Link></li>
              <li><Link href={localizedHref('jurmola', language)} className="text-gray-600 hover:text-gray-900">{t.jurmalaPage}</Link></li>
              <li><Link href={localizedHref('', language)} className="text-gray-600 hover:text-gray-900">{t.home}</Link></li>
              <li><Link href={`/feed.xml?lang=${language}`} className="text-gray-600 hover:text-gray-900">{t.rss}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300 text-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jurmola Telegraphs. {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
