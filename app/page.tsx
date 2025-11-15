'use client';

import { useState } from 'react';

type Language = 'en' | 'lv' | 'ru';

interface NewsArticle {
  id: number;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  date: string;
  category: string;
  image: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: {
      en: "Man Attempts to Pay for Beer with Song at Riga Bar",
      lv: "Vīrietis mēģina samaksāt par alu ar dziesmu Rīgas bārā",
      ru: "Мужчина попытался заплатить за пиво песней в рижском баре"
    },
    excerpt: {
      en: "Local resident claims his rendition of 'Daugava' should be worth at least three beers. Bar owner disagrees.",
      lv: "Vietējais iedzīvotājs apgalvo, ka viņa 'Daugavas' izpildījums būtu vērts vismaz trīs alus. Bāra īpašnieks nepiekrīt.",
      ru: "Местный житель утверждает, что его исполнение 'Даугавы' должно стоить как минимум три пива. Владелец бара не согласен."
    },
    date: "2025-11-15",
    category: "Local",
    image: "🍺"
  },
  {
    id: 2,
    title: {
      en: "Seagull Steals Entire Fish from Jūrmala Beach Tourist",
      lv: "Kaija nozog veselu zivi no Jūrmalas pludmales tūrista",
      ru: "Чайка украла целую рыбу у туриста на пляже Юрмалы"
    },
    excerpt: {
      en: "Tourist from Germany learns important lesson: never turn your back on Latvian seagulls. The bird has been seen enjoying the fish near the pier.",
      lv: "Tūrists no Vācijas iemācījās svarīgu mācību: nekad nepagriezies ar muguru Latvijas kaijām. Putns ir redzēts baudām zivi pie mola.",
      ru: "Турист из Германии усвоил важный урок: никогда не поворачивайтесь спиной к латвийским чайкам. Птица была замечена наслаждающейся рыбой у пирса."
    },
    date: "2025-11-14",
    category: "Wildlife",
    image: "🦅"
  },
  {
    id: 3,
    title: {
      en: "Latvian Man Accidentally Orders 100kg of Potatoes Online",
      lv: "Latvietis nejauši pasūta 100kg kartupeļu tiešsaistē",
      ru: "Латвиец случайно заказал 100 кг картофеля онлайн"
    },
    excerpt: {
      en: "What started as a simple grocery order turned into a potato crisis. Neighbors are being offered free potatoes for the next month.",
      lv: "Tas, kas sākās kā vienkāršs pārtikas pasūtījums, pārvērtās kartupeļu krīzē. Kaimiņiem nākamajā mēnesī tiek piedāvāti bezmaksas kartupeļi.",
      ru: "То, что началось как простой заказ продуктов, превратилось в картофельный кризис. Соседям предлагают бесплатный картофель на следующий месяц."
    },
    date: "2025-11-13",
    category: "Tech Fails",
    image: "🥔"
  },
  {
    id: 4,
    title: {
      en: "Dog Elected Honorary Mayor of Small Latvian Village",
      lv: "Suns ievēlēts par goda mēru mazā Latvijas ciemā",
      ru: "Собака избрана почетным мэром небольшой латвийской деревни"
    },
    excerpt: {
      en: "After actual candidates failed to show up, residents decided their beloved golden retriever would make a better mayor. So far, approval ratings are at 100%.",
      lv: "Pēc tam, kad faktiskie kandidāti neieradās, iedzīvotāji nolēma, ka viņu mīļotais zelta retriveris būtu labāks mērs. Pagaidām apstiprinājuma reitingi ir 100%.",
      ru: "После того как настоящие кандидаты не явились, жители решили, что их любимый золотистый ретривер станет лучшим мэром. Пока рейтинг одобрения составляет 100%."
    },
    date: "2025-11-12",
    category: "Politics",
    image: "🐕"
  },
  {
    id: 5,
    title: {
      en: "Man Builds World's Largest Amber Collection in His Basement",
      lv: "Vīrietis savā pagrabā izveidojis pasaulē lielāko dzintara kolekciju",
      ru: "Мужчина собрал самую большую коллекцию янтаря в мире в своем подвале"
    },
    excerpt: {
      en: "What started as a hobby 40 years ago has turned into a basement filled with 15 tons of amber. Wife says it's 'getting out of hand.'",
      lv: "Tas, kas pirms 40 gadiem sākās kā hobijs, ir pārvērtis pagrabu par vietu ar 15 tonnām dzintara. Sieva saka, ka tas 'iziet no rokām.'",
      ru: "То, что началось как хобби 40 лет назад, превратилось в подвал с 15 тоннами янтаря. Жена говорит, что это 'выходит из-под контроля'."
    },
    date: "2025-11-11",
    category: "Culture",
    image: "💎"
  },
  {
    id: 6,
    title: {
      en: "Riga Traffic Jam Caused by Goats Escaping from Farm",
      lv: "Rīgas sastrēgums radies no fermas izbēgušajām kazām",
      ru: "Пробка в Риге из-за сбежавших с фермы коз"
    },
    excerpt: {
      en: "Morning commuters were surprised to find 20 goats blocking the main road. The goats seemed unbothered by the honking.",
      lv: "Rīta braucēji bija pārsteigti, ieraugot 20 kazas, kas bloķē galveno ceļu. Kazas šķita netraucētas no taures skaņām.",
      ru: "Утренние пассажиры были удивлены, обнаружив 20 коз, блокирующих главную дорогу. Козы казались невозмутимыми от сигналов."
    },
    date: "2025-11-10",
    category: "Traffic",
    image: "🐐"
  }
];

const translations = {
  siteTitle: {
    en: "Jurmola News",
    lv: "Jurmola Ziņas",
    ru: "Новости Юрмола"
  },
  tagline: {
    en: "Latvian News with a Smile",
    lv: "Latvijas ziņas ar smaidu",
    ru: "Латвийские новости с улыбкой"
  },
  latestNews: {
    en: "Latest News",
    lv: "Jaunākās ziņas",
    ru: "Последние новости"
  },
  readMore: {
    en: "Read more",
    lv: "Lasīt vairāk",
    ru: "Читать далее"
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-blue-600">
                {translations.siteTitle[language]}
              </h1>
              <p className="text-gray-600 mt-1">{translations.tagline[language]}</p>
            </div>
            
            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('lv')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  language === 'lv'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                LV
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  language === 'ru'
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {translations.latestNews[language]}
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-48 flex items-center justify-center">
                <span className="text-8xl">{article.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title[language]}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt[language]}
                </p>
                
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  {translations.readMore[language]} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2">{translations.siteTitle[language]}</h3>
          <p className="text-gray-400">{translations.tagline[language]}</p>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Jurmola News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
