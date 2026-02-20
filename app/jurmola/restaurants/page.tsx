import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Лучшие рестораны Юрмалы – Бары, кафе и рестораны | Jurmola',
  description: 'Полный гид по ресторанам Юрмалы: от изысканных ресторанов до уютных кафе и баров. 150+ заведений, лучшие места на улице Йомас, морепродукты, латвийская и международная кухня.',
  keywords: 'рестораны юрмала, юрмола рестораны, кафе юрмала, бары юрмала, где поесть юрмала, jurmala restaurants, jurmola restaurants, юрмала еда, йомас рестораны, jurmola',
  openGraph: {
    title: 'Лучшие рестораны Юрмалы – Бары, кафе и рестораны',
    description: 'Полный гид по ресторанам, барам и кафе Юрмалы. От высокой кухни до уютных кафе — найдите идеальное место для обеда или ужина.',
    url: 'https://jurmola.com/jurmola/restaurants',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Рестораны Юрмалы – лучшие места для еды' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola/restaurants',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/restaurants',
      'en': 'https://jurmola.com/en/jurmola/restaurants',
      'ru': 'https://jurmola.com/jurmola/restaurants',
      'lv': 'https://jurmola.com/lv/jurmola/restaurants',
    }
  }
};

const fineDining = [
  { name: '36.Line Grill Restaurant', cuisine: 'Морепродукты и гриль', price: '\u20ac\u20ac\u20ac', description: 'Ресторан у пляжа с акцентом на морепродукты и блюда на гриле. Дегустационные меню и свежайшие ингредиенты из Балтийского моря.' },
  { name: 'VIEW Restaurant & Lounge', cuisine: 'Авторская кухня', price: '\u20ac\u20ac\u20ac', description: 'Гурме-ресторан с панорамным видом на море. Стильный интерьер и изысканные блюда от шеф-повара.' },
  { name: 'FACES Restaurant', cuisine: 'Современная европейская', price: '\u20ac\u20ac\u20ac', description: 'Где традиции встречаются с инновациями. Ресторан на берегу моря с авторской кухней и элегантной атмосферой.' },
  { name: 'TB Palace', cuisine: 'Высокая кухня', price: '\u20ac\u20ac\u20ac', description: 'Изысканный ресторан для особых случаев. Корпоративные обеды, торжественные приемы и утонченное меню.' },
];

const casualDining = [
  { name: 'Majorenhoff', cuisine: 'Европейская', price: '\u20ac\u20ac', description: 'В самом сердце Юрмалы — идеален для романтического ужина. Европейская кухня в уютной атмосфере.' },
  { name: 'Il Sole', cuisine: 'Итальянская', price: '\u20ac\u20ac', description: 'Современная итальянская кухня с панорамным видом на море. Элегантная casual-атмосфера.' },
  { name: 'O\'Sole Mio', cuisine: 'Средиземноморская', price: '\u20ac\u20ac', description: 'Средиземноморская кухня на улице Йомас 61. Новый ресторан, открытый в декабре 2024 года.' },
  { name: 'Laivas Restaurant', cuisine: 'Латвийская', price: '\u20ac\u20ac\u2013\u20ac\u20ac\u20ac', description: 'Ресторан на реке Лиелупе с латвийскими деликатесами. Проект ресторатора Александра Раппопорта.' },
  { name: 'Gan Bei Jurmala', cuisine: 'Китайская / Азиатская', price: '\u20ac\u20ac', description: 'Китайская и азиатская кухня на знаменитой улице Йомас. Аутентичные вкусы Азии у Балтийского моря.' },
  { name: 'MO Restbar', cuisine: 'Морепродукты и суши', price: '\u20ac\u20ac', description: 'Морепродукты и суши в стильном пространстве. Рейтинг 4.2 — одно из самых популярных мест Юрмалы.' },
  { name: 'Grill & Fish Jomas Terase', cuisine: 'Гриль и рыба', price: '\u20ac\u20ac', description: 'Блюда на гриле из свежей рыбы и мяса на открытой террасе на улице Йомас.' },
];

const cafes = [
  { name: 'Cafe 53', cuisine: 'Кафе и BBQ', price: '\u20ac', description: 'Два этажа и огромная терраса. Необычное сочетание: барбекю встречает кофейную культуру.' },
  { name: 'Madam Brios', cuisine: 'Французская пекарня', price: '\u20ac', description: 'Французская пекарня на границе Дубулти и Меллужи. Обязательно попробуйте фирменное пирожное «Маконитис».' },
  { name: 'Kafijas Sturitis', cuisine: 'Кофейня', price: '\u20ac', description: 'В районе Булдури — самый большой выбор кофе во всей Юрмале. Рай для кофейных ценителей.' },
  { name: 'De Gusto', cuisine: 'Кофейня и кондитерская', price: '\u20ac', description: 'Лучший кофе в Юрмале по мнению местных. Превосходные пирожные и выпечка.' },
  { name: 'Stacija Vaivari Pizza', cuisine: 'Пиццерия', price: '\u20ac', description: 'Неаполитанская пицца, приготовленная в дровяной печи, прямо на станции Вайвари. Уникальная атмосфера.' },
];

const bars = [
  { name: 'Simply Beach Bar', cuisine: 'Пляжный бар', price: '\u20ac\u2013\u20ac\u20ac', description: 'Пляжный бар на Дзинтари с панорамными стеклянными стенами. Кофе от бариста и коктейли с видом на море.' },
  { name: 'X.O Beach Lounge & Club', cuisine: 'Клуб и лаундж', price: '\u20ac\u20ac', description: 'Ночная жизнь Юрмалы с видом на океан. Коктейли, музыка и атмосфера курортной вечеринки.' },
  { name: 'Draft Bar', cuisine: 'Крафтовый бар', price: '\u20ac\u2013\u20ac\u20ac', description: 'Большой выбор крафтового пива в оживленной атмосфере. Отличное место для вечернего отдыха.' },
];

const tips = [
  { title: 'Улица Йомас', text: 'Большинство ресторанов сосредоточено на пешеходной улице Йомас (Jomas iela) — главной ресторанной улице Юрмалы.' },
  { title: 'Бюджетный обед', text: 'Бизнес-ланч в Юрмале обойдется в 5\u201310 \u20ac. Многие рестораны предлагают выгодные дневные комплексы.' },
  { title: 'Летний сезон', text: 'Летом многие рестораны работают допоздна — «до последнего клиента». Живая музыка на террасах — приятный бонус.' },
  { title: '150+ заведений', text: 'В Юрмале более 150 ресторанов, кафе и баров. Мы выбрали лучшие, но не бойтесь исследовать самостоятельно!' },
  { title: 'Бронирование', text: 'В высокий сезон (июнь\u2013август) бронируйте столик заранее, особенно в ресторанах высокой кухни и на террасах.' },
  { title: 'Местная кухня', text: 'Попробуйте латвийскую рыбу холодного копчения, ржаной хлеб, серый горох с беконом и рижский бальзам.' },
];

const otherGuides = [
  { href: 'jurmola', title: 'Путеводитель по Юрмале', description: 'Вернуться на главную страницу путеводителя.' },
  { href: 'jurmola/weather', title: 'Погода в Юрмале', description: 'Прогноз по месяцам и лучшее время для поездки.' },
  { href: 'jurmola/how-to-get-there', title: 'Как добраться', description: 'Поезд, такси, автобус и автомобиль.' },
  { href: 'jurmola/attractions', title: 'Достопримечательности', description: 'Пляжи, парки, архитектура и музеи.' },
  { href: 'jurmola/where-to-stay', title: 'Где остановиться', description: 'Отели, спа и бюджетное жилье.' },
];

function RestaurantCard({ name, cuisine, price, description }: { name: string; cuisine: string; price: string; description: string }) {
  return (
    <div className="p-5 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap ml-2">{price}</span>
      </div>
      <p className="text-sm text-red-600 font-medium mb-2">{cuisine}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition-colors">Путеводитель по Юрмале</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Рестораны, бары и кафе</span>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Гид по ресторанам 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Лучшие рестораны, бары и кафе Юрмалы
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          От изысканных ресторанов с видом на Балтийское море до уютных кофеен и пляжных баров.
          Полный гид по <strong>150+ заведениям Юрмалы</strong> — где вкусно поесть и провести вечер.
        </p>
        <p className="text-gray-500 mb-12">Большинство ресторанов расположено на пешеходной улице Йомас (Jomas iela).</p>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Рестораны высокой кухни</h2>
          <p className="text-gray-600 mb-6">Лучшие рестораны Юрмалы для особых случаев: авторская кухня, дегустационные меню и виды на море.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {fineDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Рестораны и кухни мира</h2>
          <p className="text-gray-600 mb-6">Европейская, итальянская, азиатская и латвийская кухня — для повседневного обеда или романтического ужина.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {casualDining.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Кафе и кофейни</h2>
          <p className="text-gray-600 mb-6">Лучший кофе, французская выпечка и неаполитанская пицца — уютные кафе Юрмалы для любого настроения.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cafes.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Бары и ночная жизнь</h2>
          <p className="text-gray-600 mb-6">Пляжные бары, крафтовое пиво и ночные клубы — вечерняя жизнь курортной Юрмалы.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {bars.map((r) => (
              <RestaurantCard key={r.name} {...r} />
            ))}
          </div>
        </section>

        <section className="mb-14 text-center">
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g274964-Jurmala_Riga_Region.html"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Все рестораны Юрмалы на TripAdvisor &rarr;
          </a>
        </section>

        <section className="mb-14 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Полезные советы</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Планируете поездку в Юрмалу?</h2>
          <p className="text-gray-600 mb-4">Забронируйте отель заранее, чтобы получить лучшие цены и быть ближе к любимым ресторанам.</p>
          <a
            href="https://www.booking.com/city/lv/jurmala.html"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Найти отели в Юрмале на Booking.com
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Другие разделы путеводителя</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {otherGuides.map((guide) => (
              <Link key={guide.href} href={localizedHref(guide.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <h3 className="font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
