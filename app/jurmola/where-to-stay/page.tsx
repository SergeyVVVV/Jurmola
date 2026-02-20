import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Где остановиться в Юрмале – Лучшие отели и гостиницы | Jurmola',
  description: 'Лучшие отели Юрмалы 2026: спа-отели от €93, бутик-гостиницы, бюджетное жилье от €30. Рейтинг 15 лучших отелей, советы по бронированию и выбору района.',
  keywords: 'отели юрмала, юрмола отели, где остановиться юрмала, гостиницы юрмала, jurmola hotels, спа отели юрмала, бюджетные отели юрмала, baltic beach hotel, hotel jurmala spa',
  openGraph: {
    title: 'Где остановиться в Юрмале – Лучшие отели и гостиницы',
    description: 'Полный гид по размещению в Юрмале: от 5-звездочных спа-отелей до бюджетных гостиниц. 614 вариантов, средняя цена от €52/ночь.',
    url: 'https://jurmola.com/jurmola/where-to-stay',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Отели и гостиницы Юрмалы' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola/where-to-stay',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/where-to-stay',
      'en': 'https://jurmola.com/en/jurmola/where-to-stay',
      'ru': 'https://jurmola.com/jurmola/where-to-stay',
      'lv': 'https://jurmola.com/lv/jurmola/where-to-stay',
    }
  }
};

const BOOKING_LINK = 'https://www.booking.com/city/lv/jurmala.html';

const luxuryHotels = [
  {
    name: 'Baltic Beach Hotel & SPA',
    stars: 5,
    price: 'от €147/ночь',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Частный пляж', 'В центре Юрмалы', '200 м от улицы Йомас', 'Спа-центр мирового класса'],
    description: 'Флагманский 5-звездочный отель в самом сердце Юрмалы с собственным пляжем и роскошным спа. Идеальное расположение для тех, кто хочет быть в центре событий.',
  },
  {
    name: 'Hotel Jurmala Spa & Conference Center',
    stars: 4,
    price: 'от €93/ночь',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['190 номеров', '#1 на TripAdvisor', 'Wellness Oasis', '200+ спа-процедур'],
    description: 'Лидер рейтинга TripAdvisor среди отелей Юрмалы. 190 номеров, огромный спа-центр Wellness Oasis с более чем 200 процедурами.',
  },
  {
    name: 'SemaraH Hotel Lielupe SPA & Conferences',
    stars: 4.5,
    price: 'от €104/ночь',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Семейный отдых', 'Крытый бассейн', 'Рейтинг 9.1/10', 'Конференц-залы'],
    description: 'Отличный выбор для семейного отдыха с детьми. Крытый бассейн, детские программы и высочайший рейтинг 9.1/10 от гостей.',
  },
  {
    name: 'Jurmala Golf Club & Hotel',
    stars: 4.5,
    price: 'по запросу',
    priceCategory: '\u20AC\u20AC\u20AC',
    features: ['Гольф-поле', 'Спа-центр', 'Элегантный ресторан', 'Премиум-класс'],
    description: 'Единственный гольф-курорт в Юрмале с полем на 18 лунок, спа-центром и изысканным рестораном. Идеален для любителей гольфа и загородного отдыха.',
  },
];

const boutiqueHotels = [
  {
    name: 'Boutique Hotel Light House Jurmala',
    stars: 4,
    price: 'от €110/ночь',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Самый необычный отель', 'Частный пляж', '700 м от Дзинтари', 'Любимый парами'],
    description: 'Самый уникальный бутик-отель Юрмалы. Частный пляж, романтическая атмосфера и всего 700 метров от концертного зала Дзинтари.',
  },
  {
    name: 'Pegasa Pils Spa',
    stars: 4,
    price: 'от €92/ночь',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['20 м от Дзинтари', 'Рядом с пляжем', 'Спа-процедуры', 'Историческое здание'],
    description: 'Расположен всего в 20 метрах от концертного зала Дзинтари и рядом с пляжем. Историческое здание с современным спа.',
  },
  {
    name: 'TB Palace Hotel & SPA',
    stars: 4,
    price: 'от €95/ночь',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Лучшие завтраки', 'Популярен у пар', 'Спа-центр', 'Элегантный интерьер'],
    description: 'Славится великолепными завтраками и элегантным интерьером. Особенно популярен среди романтических пар.',
  },
  {
    name: 'Amber SPA Boutique Hotel',
    stars: 4,
    price: 'от €85/ночь',
    priceCategory: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    features: ['Отличные завтраки', 'Бутик-атмосфера', 'Спа', 'Уютный дизайн'],
    description: 'Камерный бутик-отель с атмосферой уюта. Отмечен гостями за превосходные завтраки и внимательный сервис.',
  },
  {
    name: 'Parus Boutique Hotel',
    stars: 3.5,
    price: 'от €75/ночь',
    priceCategory: '\u20AC\u20AC',
    features: ['100 м от пляжа', 'Рядом с Йомас', 'Тихое место', 'Уютные номера'],
    description: 'Тихий бутик-отель всего в 100 метрах от пляжа и рядом с улицей Йомас. Идеальный баланс уединения и удобного расположения.',
  },
];

const midRangeHotels = [
  {
    name: 'Kurshi Hotel & SPA',
    stars: 3.5,
    price: 'от €70/ночь',
    priceCategory: '\u20AC\u20AC',
    features: ['400 м от моря', 'Спа-центр', 'Ресторан', 'Хорошее расположение'],
    description: 'Комфортабельный отель со спа-центром в 400 метрах от моря. Отличное соотношение цены и качества.',
  },
  {
    name: 'Daina Jurmala Beach Hotel & SPA',
    stars: 3.5,
    price: 'от €65/ночь',
    priceCategory: '\u20AC\u20AC',
    features: ['120 м от пляжа', 'Тихий район', 'Обновлен в 2015', 'Спа-услуги'],
    description: 'Отреставрированный в 2015 году отель в тихом районе, всего 120 метров от пляжа. Спокойная атмосфера и современный комфорт.',
  },
  {
    name: 'Amber Sea Hotel & SPA',
    stars: 3.5,
    price: 'от €68/ночь',
    priceCategory: '\u20AC\u20AC',
    features: ['В сосновом лесу', 'Aqua Club', 'Бассейн и сауна', 'Природное окружение'],
    description: 'Уникальное расположение среди соснового леса. Собственный Aqua Club с бассейном и сауной для полного расслабления.',
  },
];

const budgetHotels = [
  {
    name: 'Villa Joma',
    stars: 3,
    price: 'от €45/ночь',
    priceCategory: '\u20AC',
    features: ['Центр Юрмалы', '5 мин до пляжа', 'Здание XX века', 'Историческая атмосфера'],
    description: 'Очаровательное здание начала XX века в самом сердце Юрмалы. 5 минут пешком до пляжа, доступные цены и историческая атмосфера.',
  },
  {
    name: 'Elina Hotel',
    stars: 3,
    price: 'от €30/ночь',
    priceCategory: '\u20AC',
    features: ['Самый бюджетный', 'Чистые номера', 'Базовый комфорт', 'Хорошие отзывы'],
    description: 'Самый доступный вариант размещения в Юрмале. Чистые номера с базовым комфортом от €30 за ночь.',
  },
  {
    name: 'Boutique Mama',
    stars: 4,
    price: 'от €60/ночь',
    priceCategory: '\u20AC',
    features: ['Самый дешевый 4*', 'Рейтинг 8.3', 'Стильный дизайн', 'Отличная цена'],
    description: 'Самый доступный 4-звездочный отель Юрмалы с рейтингом 8.3. Стильный дизайн и отличный сервис по разумной цене.',
  },
];

function StarRating({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 !== 0;
  return (
    <span className="text-yellow-500 text-sm" aria-label={`${stars} из 5 звезд`}>
      {'★'.repeat(fullStars)}{hasHalf && '½'}{'☆'.repeat(5 - Math.ceil(stars))}
    </span>
  );
}

function HotelCard({ hotel }: { hotel: { name: string; stars: number; price: string; priceCategory: string; features: string[]; description: string } }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
          <StarRating stars={hotel.stars} />
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-gray-500">{hotel.priceCategory}</span>
          <div className="text-gray-900 font-bold">{hotel.price}</div>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {hotel.features.map((feature) => (
          <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{feature}</span>
        ))}
      </div>
      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-block text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
      >
        Забронировать на Booking.com
      </a>
    </div>
  );
}

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-900 transition-colors">Юрмала</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Где остановиться</span>
        </nav>

        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Путеводитель 2026</span>
        <h1 className="text-4xl font-bold mb-6 leading-tight mt-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Где остановиться в Юрмале
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Полный гид по отелям и гостиницам <strong>Юрмалы</strong>: от роскошных 5-звездочных спа-отелей
          до уютных бюджетных гостиниц. Более <strong>614 вариантов</strong> размещения на любой вкус и бюджет.
        </p>
        <p className="text-gray-500 mb-12">Средние цены: 3* от €52/ночь &middot; 4* от €111/ночь &middot; спа от €172/ночь</p>

        {/* Quick Stats */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Размещение в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '614', label: 'объектов размещения' },
              { value: 'от €30', label: 'самый бюджетный' },
              { value: '~€111', label: 'средний 4-звездочный' },
              { value: 'Февраль', label: 'самый дешевый месяц' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Luxury & Spa */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Люксовые и спа-отели</h2>
          <p className="text-gray-500 mb-6">Категория {'\u20AC\u20AC\u20AC'} &middot; от €93/ночь</p>
          <div className="grid md:grid-cols-2 gap-6">
            {luxuryHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Boutique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Бутик-отели</h2>
          <p className="text-gray-500 mb-6">Категория {'\u20AC\u20AC'}-{'\u20AC\u20AC\u20AC'} &middot; от €75/ночь</p>
          <div className="grid md:grid-cols-2 gap-6">
            {boutiqueHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Mid-Range */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Средний ценовой сегмент</h2>
          <p className="text-gray-500 mb-6">Категория {'\u20AC\u20AC'} &middot; от €65/ночь</p>
          <div className="grid md:grid-cols-2 gap-6">
            {midRangeHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Бюджетное размещение</h2>
          <p className="text-gray-500 mb-6">Категория {'\u20AC'} &middot; от €30/ночь</p>
          <div className="grid md:grid-cols-2 gap-6">
            {budgetHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <section className="mb-12 text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Найдите идеальный отель в Юрмале</h2>
          <p className="text-gray-400 mb-6">Более 614 вариантов размещения на Booking.com с бесплатной отменой</p>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Смотреть все отели на Booking.com
          </a>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Советы по размещению в Юрмале</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Лучшие районы</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Майори</strong> -- центр жизни, улица Йомас, рестораны, магазины. Самый удобный район.</li>
                <li><strong>Дзинтари</strong> -- концертный зал, респектабельные виллы. Идеально для культурного отдыха.</li>
                <li><strong>Булдури</strong> -- лучшие пляжи с Голубым флагом, спокойная атмосфера.</li>
                <li><strong>Лиелупе</strong> -- река, гольф, семейный отдых. Тихо и зелено.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Когда бронировать дешевле</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Февраль</strong> -- самый дешевый месяц, цены на 40-50% ниже летних.</li>
                <li><strong>Ноябрь-март</strong> -- низкий сезон, отличные скидки на спа-отели.</li>
                <li><strong>Будни</strong> -- дешевле выходных на 15-25%, особенно летом.</li>
                <li><strong>Раннее бронирование</strong> -- за 2-3 месяца до поездки дает лучшие цены.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Что выбрать</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Спа-отдых</strong> -- Hotel Jurmala Spa (200+ процедур) или Baltic Beach Hotel.</li>
                <li><strong>Романтика</strong> -- Light House Jurmala или TB Palace Hotel.</li>
                <li><strong>Семья с детьми</strong> -- SemaraH Lielupe (бассейн, программы для детей).</li>
                <li><strong>Бюджет</strong> -- Elina Hotel от €30 или Boutique Mama от €60.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Полезные советы</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Почти все отели 4*+ включают спа-зону в стоимость проживания.</li>
                <li>Летом бронируйте заранее -- популярные отели раскупают за 2 месяца.</li>
                <li>Многие отели предлагают трансфер с ж/д станции или из Риги.</li>
                <li>Проверяйте, включен ли завтрак -- это может сэкономить €10-20 в день.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Другие разделы путеводителя</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: 'jurmola/weather', title: 'Погода в Юрмале' },
              { href: 'jurmola/how-to-get-there', title: 'Как добраться' },
              { href: 'jurmola/attractions', title: 'Достопримечательности' },
              { href: 'jurmola/restaurants', title: 'Рестораны и кафе' },
            ].map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">{page.title}</span>
                  <span className="ml-auto text-gray-400">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to Hub */}
        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Планируете поездку в Юрмалу?</h2>
          <p className="text-gray-400 mb-6">Изучите все разделы путеводителя для идеального отдыха</p>
          <Link href={localizedHref('jurmola', language)} className="inline-block px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition">
            Вернуться к путеводителю
          </Link>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
