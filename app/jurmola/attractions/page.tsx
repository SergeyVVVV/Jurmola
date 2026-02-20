import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JurmalaMap from '../../components/JurmalaMapWrapper';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Достопримечательности Юрмалы – Что посмотреть и куда сходить | Jurmola',
  description: 'Полный гид по достопримечательностям Юрмалы: пляжи, Кемерский национальный парк, улица Йомас, Дзинтари, музеи и развлечения. Все лучшие места Юрмалы (Jurmola) в одном путеводителе.',
  keywords: 'достопримечательности юрмалы, юрмала что посмотреть, юрмола достопримечательности, jurmola attractions, юрмала пляжи, кемерский парк, улица йомас, дзинтари, юрмала музеи, юрмала развлечения',
  openGraph: {
    title: 'Достопримечательности Юрмалы – Что посмотреть и куда сходить',
    description: 'Пляжи с Голубым флагом, Кемерский национальный парк, улица Йомас, концертный зал Дзинтари, музеи и развлечения. Полный гид по лучшим местам Юрмалы.',
    url: 'https://jurmola.com/jurmola/attractions',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Достопримечательности Юрмалы' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola/attractions',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/attractions',
      'en': 'https://jurmola.com/en/jurmola/attractions',
      'ru': 'https://jurmola.com/jurmola/attractions',
      'lv': 'https://jurmola.com/lv/jurmola/attractions',
    }
  }
};

const beaches = [
  {
    name: 'Пляж Майори',
    description: 'Самый популярный и оживленный пляж Юрмалы. Широкая полоса белого песка, развитая инфраструктура, спасатели, кабинки для переодевания, детские площадки и пляжные кафе. Отсюда открывается прекрасный вид на Рижский залив.',
    location: 'Майори, центр Юрмалы',
    info: 'Голубой флаг ЕС. Бесплатный вход. Спасатели дежурят в летний сезон (июнь–август).',
  },
  {
    name: 'Пляж Булдури',
    description: 'Более спокойная альтернатива Майори. Тихий и ухоженный пляж, популярный среди семей с детьми и местных жителей. Мелководье и пологий вход делают его безопасным для купания.',
    location: 'Булдури, западная часть Юрмалы',
    info: 'Голубой флаг ЕС. Бесплатный вход. Менее людный даже в высокий сезон.',
  },
  {
    name: 'Пляж Дзинтари',
    description: 'Расположен рядом с легендарным концертным залом «Дзинтари». Прекрасный пляж с хорошей инфраструктурой, окруженный соснами. Популярен среди активных отдыхающих — здесь часто проводятся пляжные мероприятия.',
    location: 'Дзинтари, рядом с концертным залом',
    info: 'Бесплатный вход. Близость к Дзинтару межапарксу — идеально для комбинированного отдыха.',
  },
  {
    name: 'Пляж Яункемери',
    description: 'Дикий и нетронутый пляж на окраине Юрмалы, рядом с Кемерским национальным парком. Минимальная инфраструктура, зато максимальная близость к природе. Идеален для тех, кто ищет уединение.',
    location: 'Яункемери, западная окраина Юрмалы',
    info: 'Бесплатный вход. Дикий пляж без удобств. Рядом с Кемерским национальным парком.',
  },
];

const natureParks = [
  {
    name: 'Кемерский национальный парк (Kemeru Nacionalais parks)',
    description: 'Один из главных природных объектов Латвии, основан в 1997 году. Площадь 381 км2. Жемчужина парка — Большое Кемерское болото с деревянными настилами (короткая петля 1,4 км или длинная 3,4 км) и смотровой башней. Богатейшая флора и фауна: здесь можно увидеть диких лошадей, оленей, черных аистов и десятки видов птиц.',
    location: 'Западная часть Юрмалы, район Кемери',
    info: 'Вход бесплатный. Парковка: первый час €3, далее €7 за 24 часа. Открыт круглый год. Настилы доступны для колясок.',
  },
  {
    name: 'Природный парк Рагакапа (Ragakapas dabas parks)',
    description: 'Заповедник песчаных дюн в районе Лиелупе с уникальными сосновыми борами возрастом более 150 лет. Живописные природные тропы проходят через дюны и лес. Один из лучших примеров прибрежных ландшафтов Балтийского моря.',
    location: 'Лиелупе, восточная часть Юрмалы',
    info: 'Бесплатный вход. Природные тропы доступны круглый год. Добраться можно от станции Лиелупе.',
  },
  {
    name: 'Дзинтарский лесопарк (Dzintaru mezaparks)',
    description: 'Современный парк приключений в сосновом лесу Дзинтари. Веревочные трассы на разных уровнях сложности, смотровая башня с панорамным видом, велосипедные и пешеходные дорожки. Идеальное место для активного отдыха всей семьей.',
    location: 'Дзинтари',
    info: 'Парк приключений: ~€10–20 в зависимости от трассы. Смотровая башня: бесплатно. Открыт с весны по осень.',
  },
  {
    name: 'Река Лиелупе',
    description: 'Живописная река, огибающая Юрмалу с южной стороны. Предлагает прогулки на лодках, каякинг и рыбалку. Берега реки — прекрасное место для пикника и наблюдения за природой.',
    location: 'Южная граница Юрмалы',
    info: 'Прокат лодок доступен в летний сезон. Рыбалка с лицензией.',
  },
];

const cultureMuseums = [
  {
    name: 'Концертный зал «Дзинтари» (Dzintaru koncertzale)',
    description: 'Легендарная концертная площадка под открытым небом, символ Юрмалы. Построен в начале XX века, реконструирован в 2006 году. Летом здесь проходят концерты мировых звезд, фестивали и культурные мероприятия. Уникальная акустика и атмосфера вечернего концерта среди сосен.',
    location: 'Дзинтари, Turaidаs iela 1',
    info: 'Летний сезон: июнь–сентябрь. Билеты: от €15 в зависимости от мероприятия. Расписание на сайте dzintarukoncertzale.lv.',
  },
  {
    name: 'Музей под открытым небом (Jurmalas brivdabas muzejs)',
    description: 'Рыбацкий хутор XIX века, воссоздающий быт и традиции латвийских рыбаков. Подлинные постройки, орудия рыболовства, предметы быта. Живая история прибрежных поселений Юрмалы до эпохи курортного туризма.',
    location: 'Булдури, Tiklu iela 1',
    info: 'Открыт: ср–вс, 10:00–18:00 (лето), 10:00–16:00 (зима). Вход: ~€2–3.',
  },
  {
    name: 'Дом Аспазии (Aspazijas maja)',
    description: 'Мемориальный музей великой латышской поэтессы Аспазии (Эльзы Плиекшане) в изящной вилле в стиле модерн. Экспозиция рассказывает о жизни и творчестве поэтессы и её мужа, поэта Райниса. Само здание — прекрасный образец архитектуры начала XX века.',
    location: 'Дубулти, Z. Meierovica prospekts 18/20',
    info: 'Открыт: ср–вс, 10:00–17:00. Вход: ~€2. Экскурсии по предварительной записи.',
  },
  {
    name: 'Городской музей Юрмалы (Jurmalas pilsetas muzejs)',
    description: 'Музей местной истории, рассказывающий об истории Юрмалы от рыбацких поселений до современного курорта. Экспозиции о развитии курортной культуры, архитектуре, знаменитых жителях и природе региона.',
    location: 'Майори, Tirgoniu iela 29',
    info: 'Открыт: ср–вс, 10:00–17:00. Вход: ~€2–3. Временные выставки меняются регулярно.',
  },
  {
    name: 'Дубултская лютеранская церковь',
    description: 'Красивая историческая церковь в районе Дубулти, построенная в конце XIX века. Выделяется своей уникальной архитектурой с элементами неоготики. Действующий храм, открытый для посещения.',
    location: 'Дубулти',
    info: 'Бесплатный вход. Богослужения по воскресеньям.',
  },
];

const landmarks = [
  {
    name: 'Улица Йомас (Jomas iela)',
    description: 'Главная пешеходная улица Юрмалы и её неофициальное сердце. Протяженность 1,1 км — от станции Майори до Дзинтари. Рестораны, кафе, магазины сувениров, уличные музыканты и художники. Летом здесь кипит жизнь до позднего вечера.',
    location: 'Майори – Дзинтари, центр Юрмалы',
    info: 'Пешеходная зона. Открыта круглосуточно. Лучшее время для прогулки — летний вечер.',
  },
  {
    name: 'Деревянная архитектура Юрмалы',
    description: 'Более 400 исторических деревянных вилл XIX–XX веков в стилях модерн, национальной романтики и неоготики. Уникальная резьба, башенки, веранды — каждый дом неповторим. Архитектурное наследие эпохи, когда Юрмала была модным курортом Российской империи.',
    location: 'По всему городу, особенно Майори, Дзинтари, Булдури, Дубулти',
    info: 'Свободный осмотр. Карту деревянной архитектуры можно взять в туристическом центре.',
  },
  {
    name: 'Глобус Юрмалы (Jurmalas globuss)',
    description: 'Знаковая металлическая скульптура глобуса — один из самых узнаваемых символов и популярных мест для фото в Юрмале. Излюбленная точка встречи и начала прогулок.',
    location: 'Майори, рядом с улицей Йомас',
    info: 'Круглосуточный доступ. Бесплатно. Популярная фотолокация.',
  },
  {
    name: 'Кемерская водонапорная башня (Kemeru udenstornis)',
    description: 'Историческая водонапорная башня — знаковый ориентир района Кемери. Рядом находятся знаменитые серные источники, которые когда-то сделали Кемери популярным бальнеологическим курортом.',
    location: 'Кемери',
    info: 'Внешний осмотр. Серные источники доступны свободно.',
  },
];

const familyFun = [
  {
    name: 'Аквапарк Ливу (Livu Akvaparks)',
    description: 'Один из крупнейших аквапарков в Прибалтике, работающий круглый год. Водные горки, волновой бассейн, зона для детей, спа и сауны. Отличное развлечение для всей семьи в любую погоду.',
    location: 'Лиелупе, Viestura iela 24',
    info: 'Открыт круглый год. Билеты: от ~€15 (дети) до ~€25 (взрослые) за 3 часа. Подробнее на akvaparks.lv.',
  },
  {
    name: 'Дзинтарский парк приключений',
    description: 'Веревочные трассы среди сосен на различных уровнях сложности — от детских маршрутов до экстремальных для взрослых. Также доступны батуты, велопрокат и зона для пикника.',
    location: 'Дзинтари, в Дзинтарском лесопарке',
    info: 'Открыт: май–октябрь. Детские трассы: от ~€8. Взрослые трассы: от ~€15.',
  },
];

const guideLinks = [
  { href: 'jurmola', title: 'Юрмала – главная', description: 'Вернуться к полному путеводителю по Юрмале.' },
  { href: 'jurmola/weather', title: 'Погода в Юрмале', description: 'Прогноз по месяцам, температура воды и что брать с собой.' },
  { href: 'jurmola/how-to-get-there', title: 'Как добраться', description: 'Поезд, такси, автобус и автомобиль из Риги.' },
  { href: 'jurmola/restaurants', title: 'Рестораны и кафе', description: 'Лучшие места для еды в Юрмале.' },
  { href: 'jurmola/where-to-stay', title: 'Где остановиться', description: 'Спа-отели, бутик-гостиницы и бюджетное жилье.' },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href={localizedHref('jurmola', language)} className="hover:text-gray-700 transition">&larr; Путеводитель по Юрмале</Link>
        </nav>
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">Путеводитель 2026</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Достопримечательности Юрмалы
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Что посмотреть и куда сходить в <strong>Юрмале</strong> (Jurmala / Jurmola) — от белоснежных пляжей
          и болотных троп Кемери до оживленной улицы Йомас и легендарного концертного зала «Дзинтари».
        </p>
        <p className="text-gray-500 mb-12">15 лучших мест, которые стоит посетить</p>

        {/* Map */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Карта достопримечательностей</h2>
          <p className="text-gray-600 mb-4">Все ключевые места Юрмалы на одной карте. Нажмите на маркер для подробностей.</p>
          <JurmalaMap language="ru" />
        </section>

        {/* Beaches */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Пляжи</h2>
          <p className="text-gray-600 mb-6">33 км белого песка с Голубым флагом ЕС — бесплатный вход на все пляжи</p>
          <div className="grid gap-5">
            {beaches.map((beach) => (
              <div key={beach.name} className="p-6 bg-white rounded-lg border-l-4 border-gray-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{beach.name}</h3>
                <p className="text-gray-700 mb-3">{beach.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">{beach.location}</span>
                </div>
                <p className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 mt-3 text-sm">{beach.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nature & Parks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Природа и парки</h2>
          <p className="text-gray-600 mb-6">Национальные парки, заповедники, леса и река</p>
          <div className="grid gap-5">
            {natureParks.map((park) => (
              <div key={park.name} className="p-6 bg-white rounded-lg border-l-4 border-gray-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{park.name}</h3>
                <p className="text-gray-700 mb-3">{park.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">{park.location}</span>
                </div>
                <p className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 mt-3 text-sm">{park.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture & Museums */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Культура и музеи</h2>
          <p className="text-gray-600 mb-6">Концертные залы, музеи, исторические здания</p>
          <div className="grid gap-5">
            {cultureMuseums.map((item) => (
              <div key={item.name} className="p-6 bg-white rounded-lg border-l-4 border-gray-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">{item.location}</span>
                </div>
                <p className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 mt-3 text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Достопримечательности и ориентиры</h2>
          <p className="text-gray-600 mb-6">Знаковые улицы, архитектура и памятные места</p>
          <div className="grid gap-5">
            {landmarks.map((item) => (
              <div key={item.name} className="p-6 bg-white rounded-lg border-l-4 border-gray-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">{item.location}</span>
                </div>
                <p className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 mt-3 text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Family Fun */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Развлечения для всей семьи</h2>
          <p className="text-gray-600 mb-6">Аквапарк, приключения и активный отдых</p>
          <div className="grid gap-5">
            {familyFun.map((item) => (
              <div key={item.name} className="p-6 bg-white rounded-lg border-l-4 border-gray-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">{item.location}</span>
                </div>
                <p className="bg-gray-100 text-gray-700 rounded-md px-3 py-2 mt-3 text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 rounded-r p-6">
          <h2 className="text-2xl font-bold mb-4">Практические советы</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><span className="font-bold text-gray-900">1.</span> Большинство природных достопримечательностей бесплатны — платить нужно только за парковку в Кемери.</li>
            <li className="flex gap-2"><span className="font-bold text-gray-900">2.</span> Передвигаться между районами удобнее всего на электричке — станции есть в каждом районе.</li>
            <li className="flex gap-2"><span className="font-bold text-gray-900">3.</span> Летом (июнь–август) — пик сезона: все открыто, но много людей. Май и сентябрь — отличный компромисс.</li>
            <li className="flex gap-2"><span className="font-bold text-gray-900">4.</span> Для Кемерского болота берите удобную обувь и средство от комаров (особенно летом).</li>
            <li className="flex gap-2"><span className="font-bold text-gray-900">5.</span> Деревянную архитектуру лучше всего осматривать пешком или на велосипеде — прокат доступен в Майори.</li>
          </ul>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>Другие разделы путеводителя</h2>
          <div className="grid gap-3">
            {guideLinks.map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
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

        {/* CTA */}
        <section className="text-center py-8 px-6 bg-black rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Планируете поездку в Юрмалу?</h2>
          <p className="text-gray-400 mb-6">Узнайте, как добраться и где остановиться</p>
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
