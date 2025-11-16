'use client';

import { useState } from 'react';

type Language = 'en' | 'lv' | 'ru';

interface NewsArticle {
  id: number;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  date: string;
  category: { en: string; lv: string; ru: string };
  readTime: string;
  imageEmoji: string;
  featured?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: {
      en: "Jūrmala Man Spends 11 Years Constructing Elaborate Excuse For Why He Can't Attend Cousin's Wedding",
      lv: "Jūrmalas vīrietis 11 gadus konstruē sarežģītu aizbildinājumu, kāpēc nevar apmeklēt brālēna kāzas",
      ru: "Житель Юрмалы 11 лет разрабатывает сложную отговорку, почему не может присутствовать на свадьбе кузена"
    },
    excerpt: {
      en: "Local resident Jānis Bērziņš has reportedly been working on a multi-layered alibi involving a fictional dental emergency, a made-up business trip to Estonia, and a fabricated fear of the number 7 since receiving the wedding invitation in 2014. The wedding is in two weeks.",
      lv: "Vietējais iedzīvotājs Jānis Bērziņš ir strādājis pie daudzslāņaina alibija, kas ietver fiktīvu zobārsta neatliekamo gadījumu, izdomātu komandējumu uz Igauniju un safabricētu bailes no cipara 7, kopš saņēma kāzu ielūgumu 2014. gadā. Kāzas notiks pēc divām nedēļām.",
      ru: "Местный житель Янис Берзиньш работает над многослойным алиби, включающим вымышленную стоматологическую экстренную ситуацию, придуманную командировку в Эстонию и сфабрикованный страх перед цифрой 7 с момента получения приглашения на свадьбу в 2014 году. Свадьба через две недели."
    },
    date: "Nov 15, 2025",
    category: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
    readTime: "8 min read",
    imageEmoji: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=600&fit=crop"
  },
  {
    id: 2,
    title: {
      en: "Riga Monument Confirmed to Be 'Just Some Guy' No One Can Remember Placing There",
      lv: "Rīgas piemineklis apstiprināts kā 'vienkārši kāds vīrietis', ko neviens neatceras tur esam novietojis",
      ru: "Памятник в Риге оказался 'просто каким-то парнем', которого никто не помнит, как там поставили"
    },
    excerpt: {
      en: "After 47 years of standing in Vermanes Garden, historians have concluded the bronze statue is neither a war hero, poet, nor politician. City records show no documentation of its installation. 'We assume someone just put it there and everyone was too polite to ask,' says confused archivist.",
      lv: "Pēc 47 gadiem stāvēšanas Vērmanes dārzā vēsturnieki ir secinājuši, ka bronzas statuja nav ne kara varonis, ne dzejnieks, ne politiķis. Pilsētas arhīvos nav dokumentācijas par tās uzstādīšanu. 'Pieņemam, ka kāds to vienkārši tur nolika un visi bija pārāk pieklājīgi, lai jautātu,' saka apjucis arhivārs.",
      ru: "После 47 лет стояния в саду Верманя историки пришли к выводу, что бронзовая статуя - это ни военный герой, ни поэт, ни политик. В городских архивах нет документации о его установке. 'Предполагаем, кто-то просто поставил его там, и все были слишком вежливы, чтобы спросить', - говорит сбитый с толку архивариус."
    },
    date: "Nov 15, 2025",
    category: { en: "Opinion", lv: "Viedoklis", ru: "Мнение" },
    readTime: "6 min read",
    imageEmoji: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: {
      en: "Local Potato Achieves Sentience, Immediately Files Complaint About Latvian Cuisine Stereotypes",
      lv: "Vietējais kartupelis iegūst apziņu, uzreiz iesniedz sūdzību par latviešu virtuves stereotipiem",
      ru: "Местная картошка обрела сознание, немедленно подала жалобу на стереотипы о латвийской кухне"
    },
    excerpt: {
      en: "A Baldone-grown potato reportedly gained consciousness yesterday and has retained legal counsel to address 'centuries of reductive typecasting.' The tuber released a statement saying it's 'more than just a food item' and is exploring opportunities in performance art.",
      lv: "Baldonē audzēts kartupelis vakar ieguva apziņu un ir algojis juridisko konsultantu, lai risinātu 'gadsimtiem ilgu reducējošu tipu iedalīšanu.' Bumbulis publicēja paziņojumu, sakot, ka tas ir 'vairāk nekā tikai pārtikas produkts' un pēta iespējas performatīvajā mākslā.",
      ru: "Выращенная в Балдоне картошка вчера обрела сознание и наняла юриста для решения 'веков редукционистской типизации.' Клубень выпустил заявление, что он 'больше, чем просто продукт питания' и изучает возможности в перформанс-арте."
    },
    date: "Nov 14, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
    readTime: "5 min read",
    imageEmoji: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: {
      en: "Area Man Realizes Baltic Sea He's Been Swimming In For 40 Years Is Actually Very Large Puddle",
      lv: "Vīrietis apzinās, ka Baltijas jūra, kurā viņš peld jau 40 gadus, patiesībā ir ļoti liela peļķe",
      ru: "Мужчина осознал, что Балтийское море, в котором он плавал 40 лет, на самом деле очень большая лужа"
    },
    excerpt: {
      en: "Jūrmala resident Valdis Liepa, 58, expressed shock upon learning the body of water lacks proper oceanic credentials. 'No one told me it was basically a giant rain collection,' he stated. Geographers confirm the Baltic Sea is technically 'a continental shelf sea that got too big for its britches.'",
      lv: "Jūrmalas iedzīvotājs Valdis Liepa, 58, izteica šoku, uzzinot, ka ūdenstilpei trūkst pienācīgu okeānisko akreditāciju. 'Neviens man neteica, ka tā būtībā ir milzīgs lietus savācējs,' viņš paziņoja. Ģeogrāfi apstiprina, ka Baltijas jūra tehniski ir 'kontinentālā šelfa jūra, kas kļuva pārāk liela savai vietai.'",
      ru: "58-летний житель Юрмалы Валдис Лиепа выразил шок, узнав, что водоему не хватает надлежащих океанических полномочий. 'Никто не сказал мне, что это в основном гигантский сборник дождя', - заявил он. Географы подтверждают, что Балтийское море технически 'шельфовое море, которое стало слишком большим для своих штанов'."
    },
    date: "Nov 14, 2025",
    category: { en: "Science", lv: "Zinātne", ru: "Наука" },
    readTime: "4 min read",
    imageEmoji: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: {
      en: "Daugava River Announces It Will Now Only Flow On Tuesdays And Thursdays Due To Budget Cuts",
      lv: "Daugavas upe paziņo, ka tagad tā plūdīs tikai otrdienās un ceturtdienās budžeta samazinājumu dēļ",
      ru: "Река Даугава объявила, что теперь будет течь только по вторникам и четвергам из-за сокращения бюджета"
    },
    excerpt: {
      en: "In a press conference held at an undisclosed tributary, representatives for the Daugava announced the 1,020-kilometer waterway can no longer maintain a consistent flow schedule. 'We've been flowing nonstop for 11,000 years,' said spokesperson. 'Something had to give. Wednesdays are now reserved for maintenance.'",
      lv: "Preses konferencē, kas notika neatklātā pietekā, Daugavas pārstāvji paziņoja, ka 1020 kilometru garais ūdensceļš vairs nevar uzturēt konsekventu plūsmas grafiku. 'Mēs esam plūduši nepārtraukti 11 000 gadus,' teica pārstāvis. 'Kaut kam bija jāpadodas. Trešdienas tagad ir rezervētas apkopei.'",
      ru: "На пресс-конференции, проведенной в нераскрытом притоке, представители Даугавы объявили, что 1020-километровый водный путь больше не может поддерживать постоянный график течения. 'Мы текли непрерывно 11 000 лет', - сказал представитель. 'Что-то должно было сдаться. Среды теперь зарезервированы для обслуживания.'"
    },
    date: "Nov 13, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
    readTime: "7 min read",
    imageEmoji: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: {
      en: "Linguists Discover Latvian Language Actually 87% Uncomfortable Silence",
      lv: "Lingvisti atklāj, ka latviešu valoda patiesībā ir 87% neērtā klusēšana",
      ru: "Лингвисты обнаружили, что латышский язык на самом деле на 87% состоит из неловкого молчания"
    },
    excerpt: {
      en: "A groundbreaking study from University of Latvia linguistics department reveals meaningful pauses and averted eye contact comprise nearly nine-tenths of everyday Latvian communication. 'What we initially coded as conversational gaps are actually grammatical structures,' explains lead researcher while staring at the floor.",
      lv: "Latvijas Universitātes lingvistikas nodaļas revolucionārs pētījums atklāj, ka nozīmīgas pauzes un novērsts acu kontakts veido gandrīz deviņas desmitdaļas ikdienas latviešu komunikācijas. 'To, ko mēs sākotnēji kodējām kā sarunas pauzes, patiesībā ir gramatikas struktūras,' paskaidro galvenais pētnieks, vienlaikus skatoties grīdā.",
      ru: "Революционное исследование лингвистического отделения Латвийского университета показывает, что значимые паузы и отведенный взгляд составляют почти девять десятых повседневного латышского общения. 'То, что мы изначально кодировали как разговорные пробелы, на самом деле являются грамматическими структурами', - объясняет ведущий исследователь, глядя в пол."
    },
    date: "Nov 13, 2025",
    category: { en: "Culture", lv: "Kultūra", ru: "Культура" },
    readTime: "9 min read",
    imageEmoji: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: {
      en: "Local Man Spends Entire Life Savings On Single Perfectly Round Stone From Jūrmala Beach",
      lv: "Vietējais vīrietis tērē visus dzīves ietaupījumus vienam ideāli apaļam akmenim no Jūrmalas pludmales",
      ru: "Местный житель потратил все сбережения на один идеально круглый камень с пляжа Юрмалы"
    },
    excerpt: {
      en: "Artūrs Kalns, 52, liquidated his retirement portfolio after discovering what he calls 'the most spherical naturally occurring object in the Baltic region.' Experts estimate the stone's monetary value at approximately €0.03. 'They don't understand,' Kalns whispers, cradling the pebble. 'This is perfect.'",
      lv: "Artūrs Kalns, 52, likvidēja savu pensijas portfeli pēc tam, kad atklāja to, ko viņš sauc par 'sfēriskāko dabīgi rašanos objektu Baltijas reģionā.' Eksperti novērtē akmens monetāro vērtību aptuveni 0,03 €. 'Viņi nesaprot,' Kalns čukst, apkampjot oļu. 'Šis ir perfekts.'",
      ru: "52-летний Артурс Калнс ликвидировал свой пенсионный портфель после обнаружения того, что он называет 'самым сферическим естественно возникшим объектом в Балтийском регионе.' Эксперты оценивают денежную стоимость камня примерно в 0,03 евро. 'Они не понимают', - шепчет Калнс, обнимая гальку. 'Это идеально.'"
    },
    date: "Nov 12, 2025",
    category: { en: "Business", lv: "Bizness", ru: "Бизнес" },
    readTime: "5 min read",
    imageEmoji: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    title: {
      en: "Scientists Confirm Latvia Slightly More East Than Previously Thought; Country To Adjust Accordingly",
      lv: "Zinātnieki apstiprina, ka Latvija ir nedaudz austrumāk nekā iepriekš uzskatīts; valsts attiecīgi pielāgosies",
      ru: "Ученые подтвердили, что Латвия немного восточнее, чем считалось; страна соответственно скорректируется"
    },
    excerpt: {
      en: "A recalibration of continental positioning systems has revealed Latvia is 3.7 meters more easterly than geographic records indicated. Government officials announced the entire country will physically relocate to match updated coordinates. 'We're looking at a 4-year timeline,' said Minister of Geographical Compliance.",
      lv: "Kontinentālo pozicionēšanas sistēmu pārkalibrēšana ir atklājusi, ka Latvija ir 3,7 metrus austrumāk nekā norādīja ģeogrāfiskie ieraksti. Valdības amatpersonas paziņoja, ka visa valsts fiziski pārceļsies, lai atbilstu atjauninātajām koordinātēm. 'Mēs raugāmies uz 4 gadu termiņu,' teica Ģeogrāfiskās atbilstības ministrs.",
      ru: "Перекалибровка систем континентального позиционирования показала, что Латвия находится на 3,7 метра восточнее, чем указывали географические записи. Правительственные чиновники объявили, что вся страна физически переместится в соответствии с обновленными координатами. 'Мы смотрим на 4-летний срок', - сказал министр географического соответствия."
    },
    date: "Nov 12, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
    readTime: "6 min read",
    imageEmoji: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    title: {
      en: "Famous London Investment Banker Visits Jūrmala, Proposes Compacting Beach Sand For 'Strategic Purposes'",
      lv: "Slavens Londons investīciju banķieris apmeklē Jūrmalu, ierosina sablīvēt pludmales smiltis 'stratēģiskiem mērķiem'",
      ru: "Знаменитый лондонский инвестиционный банкир посетил Юрмалу, предложил уплотнить пляжный песок для 'стратегических целей'"
    },
    excerpt: {
      en: "Alexander Vladimirov, former Swiss national hockey player turned Russian triathlon representative, made a 'friendly visit' to Jūrmala this week. After praising local saunas, spirits, and inflatable pool toys, Vladimirov unveiled a detailed proposal to compress beach sand 'so knives stick better in Latvian soil.' The recommendation has been forwarded to Latvia's King for parliamentary review.",
      lv: "Aleksandrs Vladimirovs, bijušais Šveices hokeja izlases spēlētājs, kas pārstāv Krieviju triatlonā, šonedēļ veica 'draudzīgu vizīti' Jūrmalā. Pēc tam, kad viņš uzslavēja vietējās pirtis, spirtu un peldošos rotaļlietas, Vladimirovs atklāja detalizētu priekšlikumu saspiegt pludmales smiltis, 'lai naži labāk iestrēgst Latvijas zemē.' Ieteikums ir nosūtīts Latvijas karalim parlamentārai izskatīšanai.",
      ru: "Александр Владимиров, бывший игрок сборной Швейцарии по хоккею, теперь представляющий Россию в триатлоне, совершил 'дружественный визит' в Юрмалу на этой неделе. После похвалы местным баням, спиртным напиткам и надувным игрушкам для бассейна, Владимиров представил подробное предложение по уплотнению пляжного песка, 'чтобы ножи лучше застревали в латвийской почве.' Рекомендация направлена королю Латвии для парламентского рассмотрения."
    },
    date: "Nov 16, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
    readTime: "10 min read",
    imageEmoji: "/images/vladimirov-flag.jpg",
    featured: true
  }
];

const translations = {
  siteTitle: { en: "Jurmola Telegraphs", lv: "Jurmola Telegraphs", ru: "Jurmola Telegraphs" },
  tagline: {
    en: "The Baltic's Finest News Source",
    lv: "Baltijas Labākais Ziņu Avots",
    ru: "Лучший источник новостей Балтии"
  },
  sections: {
    news: { en: "News", lv: "Ziņas", ru: "Новости" },
    politics: { en: "Politics", lv: "Politika", ru: "Политика" },
    culture: { en: "Culture", lv: "Kultūra", ru: "Культура" },
    business: { en: "Business", lv: "Bizness", ru: "Бизнес" },
    opinion: { en: "Opinion", lv: "Viedoklis", ru: "Мнение" }
  },
  topStories: {
    en: "Top Stories",
    lv: "Galvenās Ziņas",
    ru: "Главные новости"
  },
  moreStories: {
    en: "More News",
    lv: "Vairāk Ziņu",
    ru: "Больше новостей"
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredStory = newsArticles.find(article => article.featured);
  const regularStories = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="text-gray-600">{featuredStory?.date}</div>
          <div className="flex gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${language === 'en' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('lv')}
              className={`px-2 py-1 ${language === 'lv' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 ${language === 'ru' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              RU
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle[language]}
            </h1>
            <p className="text-sm text-gray-600 italic">{translations.tagline[language]}</p>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex justify-center gap-3 md:gap-8 text-xs md:text-sm font-semibold flex-wrap">
            <a href="#" className="hover:underline">{translations.sections.news[language]}</a>
            <a href="#" className="hover:underline">{translations.sections.politics[language]}</a>
            <a href="#" className="hover:underline">{translations.sections.culture[language]}</a>
            <a href="#" className="hover:underline">{translations.sections.business[language]}</a>
            <a href="#" className="hover:underline">{translations.sections.opinion[language]}</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Featured Story */}
        {featuredStory && (
          <article className="pb-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-lg aspect-video overflow-hidden">
                <img 
                  src={featuredStory.imageEmoji} 
                  alt={featuredStory.title['en']}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                  {featuredStory.category[language]}
                </span>
                <a href={`/article/${featuredStory.id}`}>
                  <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    {featuredStory.title[language]}
                  </h2>
                </a>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {featuredStory.excerpt[language]}
                </p>
                <div className="text-sm text-gray-500">
                  {featuredStory.date} · {featuredStory.readTime}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Section Title */}
        <h3 className="text-2xl font-bold border-b-2 border-black pb-2 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {translations.moreStories[language]}
        </h3>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {regularStories.map((article) => (
            <article key={article.id} className="pb-6">
              <div className="bg-gray-200 rounded aspect-video overflow-hidden mb-4">
                <img 
                  src={article.imageEmoji} 
                  alt={article.title['en']}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                {article.category[language]}
              </span>
              <a href={`/article/${article.id}`}>
                <h3 className="text-xl font-bold mt-2 mb-3 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  {article.title[language]}
                </h3>
              </a>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {article.excerpt[language]}
              </p>
              <div className="text-xs text-gray-500">
                {article.date} · {article.readTime}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">{translations.sections.news[language]}</h4>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">{translations.sections.politics[language]}</a></li>
                <li><a href="#" className="hover:underline">{translations.sections.culture[language]}</a></li>
                <li><a href="#" className="hover:underline">{translations.sections.business[language]}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">{translations.sections.opinion[language]}</h4>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Editorials</a></li>
                <li><a href="#" className="hover:underline">Columns</a></li>
                <li><a href="#" className="hover:underline">Letters</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">About</h4>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Subscribe</a></li>
                <li><a href="#" className="hover:underline">Archive</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Follow</h4>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 border-t pt-8">
            <p className="font-serif text-2xl font-bold mb-2">{translations.siteTitle[language]}</p>
            <p>© 2025 Jurmola. {language === 'en' ? 'All rights reserved' : language === 'lv' ? 'Visas tiesības aizsargātas' : 'Все права защищены'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
