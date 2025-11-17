import { NextResponse } from 'next/server';

// This data should match your articles array
const articles = [
  {
    id: 9,
    slug: "london-banker-jurmola-compacting-beach-sand",
    title: {
      en: "Famous London Investment Banker Visits Jurmola, Proposes Compacting Beach Sand For 'Strategic Purposes'",
      lv: "Slavens Londons investīciju banķieris apmeklē Jūrmalu, ierosina sablīvēt pludmales smiltis 'stratēģiskiem mērķiem'",
      ru: "Знаменитый лондонский инвестиционный банкир посетил Юрмалу, предложил уплотнить пляжный песок для 'стратегических целей'"
    },
    excerpt: {
      en: "Alexander Vladimirov, former Swiss national hockey player turned Russian triathlon representative, made a 'friendly visit' to Jurmola this week. After praising local saunas, spirits, and inflatable pool toys, Vladimirov unveiled a detailed proposal to compress beach sand 'so knives stick better in Latvian soil.'",
      lv: "Aleksandrs Vladimirovs, bijušais Šveices hokeja izlases spēlētājs, kas pārstāv Krieviju triatlonā, šonedēļ veica 'draudzīgu vizīti' Jūrmalā. Pēc tam, kad viņš uzslavēja vietējās pirtis, spirtu un peldošās rotaļlietas, Vladimirovs atklāja detalizētu priekšlikumu saspiegt pludmales smiltis, 'lai naži labāk iestrēgst Latvijas zemē.'",
      ru: "Александр Владимиров, бывший игрок сборной Швейцарии по хоккею, теперь представляющий Россию в триатлоне, совершил 'дружественный визит' в Юрмалу на этой неделе. После похвалы местным баням, спиртным напиткам и надувным игрушкам для бассейна, Владимиров представил подробное предложение по уплотнению пляжного песка, 'чтобы ножи лучше застревали в латвийской почве.'"
    },
    date: "Nov 16, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
  },
  {
    id: 1,
    slug: "jurmola-man-11-years-wedding-excuse",
    title: {
      en: "Jurmola Man Spends 11 Years Constructing Elaborate Excuse For Why He Can't Attend Cousin's Wedding",
      lv: "Jurmolas vīrietis 11 gadus konstruē sarežģītu aizbildinājumu, kāpēc nevar apmeklēt brālēna kāzas",
      ru: "Житель Юрмалы 11 лет разрабатывает сложную отговорку, почему не может присутствовать на свадьбе кузена"
    },
    excerpt: {
      en: "Local resident Jānis Bērziņš has reportedly been working on a multi-layered alibi involving a fictional dental emergency, a made-up business trip to Estonia, and a fabricated fear of the number 7 since receiving the wedding invitation in 2014. The wedding is in two weeks.",
      lv: "Vietējais iedzīvotājs Jānis Bērziņš ir strādājis pie daudzslāņaina alibija, kas ietver fiktīvu zobārsta neatliekamo gadījumu, izdomātu komandējumu uz Igauniju un safabricētu bailes no cipara 7, kopš saņēma kāzu ielūgumu 2014. gadā. Kāzas notiks pēc divām nedēļām.",
      ru: "Местный житель Янис Берзиньш работает над многослойным алиби, включающим вымышленную стоматологическую экстренную ситуацию, придуманную командировку в Эстонию и сфабрикованный страх перед цифрой 7 с момента получения приглашения на свадьбу в 2014 году. Свадьба через две недели."
    },
    date: "Nov 15, 2025",
    category: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
  },
  {
    id: 2,
    slug: "riga-monument-mystery-just-some-guy",
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
  },
  {
    id: 3,
    slug: "latvian-potato-achieves-sentience",
    title: {
      en: "Local Potato Achieves Sentience, Immediately Files Complaint About Latvian Cuisine Stereotypes",
      lv: "Vietējais kartupelis iegūst apziņu, uzreiz iesniedz sūdzību par latviešu virtuves stereotipiem",
      ru: "Местная картошка обрела сознание, немедленно подала жалобу на стереотипы о латвийской кухне"
    },
    excerpt: {
      en: "A Baldone-grown potato reportedly gained consciousness yesterday and has retained legal counsel to address 'centuries of reductive typecasting.' The tuber released a statement saying it's 'more than just a food item' and is exploring opportunities in performance art.",
      lv: "Baldonē audzēts kartupelis vakar ieguva apziņu un ir algojis juridisko padomnieku, lai risinātu 'gadsimtiem ilgu reducējošo stereotipu problēmu.' Bumbulis publicēja paziņojumu, sakot, ka tas ir 'vairāk nekā tikai pārtikas produkts' un pēta iespējas performatīvajā mākslā.",
      ru: "Выращенная в Балдоне картошка вчера обрела сознание и наняла юридического советника для решения проблемы 'веков редукционистской типизации.' Клубень выпустил заявление, что он 'больше, чем просто продукт питания' и изучает возможности в перформанс-арте."
    },
    date: "Nov 14, 2025",
    category: { en: "Science", lv: "Zinātne", ru: "Наука" },
  },
  {
    id: 4,
    slug: "baltic-sea-actually-large-puddle",
    title: {
      en: "Area Man Realizes Baltic Sea He's Been Swimming In For 40 Years Is Actually Very Large Puddle",
      lv: "Vietējais vīrietis saprot, ka Baltijas jūra, kurā viņš ir peldējis 40 gadus, faktiski ir ļoti liela peļķe",
      ru: "Местный житель понял, что Балтийское море, в котором он плавал 40 лет, на самом деле очень большая лужа"
    },
    excerpt: {
      en: "Valdis Liepa, 58, learned yesterday that the Baltic Sea is technically a 'brackish sea' with significantly less salt than real oceans. 'I feel betrayed,' said Liepa, who has spent four decades telling people he swims in 'the sea' only to discover it's essentially a 'glorified pond.'",
      lv: "Valdis Liepa, 58, vakar uzzināja, ka Baltijas jūra tehniski ir 'sāļūdens jūra' ar ievērojami mazāk sāls nekā īstie okeāni. 'Es jūtos nodots,' teica Liepa, kurš četrdesmit gadus ir stāstījis cilvēkiem, ka viņš peld 'jūrā', tikai lai atklātu, ka tā būtībā ir 'slavināts dīķis.'",
      ru: "Валдис Лиепа, 58 лет, вчера узнал, что Балтийское море технически является 'солоноватым морем' с значительно меньшим содержанием соли, чем настоящие океаны. 'Я чувствую себя преданным,' сказал Лиепа, который сорок лет рассказывал людям, что плавает в 'море', только чтобы обнаружить, что это по сути 'прославленный пруд.'"
    },
    date: "Nov 13, 2025",
    category: { en: "Science", lv: "Zinātne", ru: "Наука" },
  },
  {
    id: 5,
    slug: "daugava-river-only-tuesdays-thursdays",
    title: {
      en: "Daugava River Announces It Will Now Only Flow On Tuesdays And Thursdays Due To Budget Cuts",
      lv: "Daugavas upe paziņo, ka tagad plūdīs tikai otrdienās un ceturtdienās budžeta samazinājumu dēļ",
      ru: "Река Даугава объявляет, что теперь будет течь только по вторникам и четвергам из-за сокращения бюджета"
    },
    excerpt: {
      en: "Following a comprehensive recalibration of operational costs, the Daugava River has declared a reduced flow schedule. 'We've been flowing continuously for 11,000 years,' stated a river spokesperson via rhythmic water patterns. 'Something had to change. We're exhausted.'",
      lv: "Pēc visaptverošas darbības izmaksu pārkalibrēšanas Daugavas upe ir pasludinājusi samazinātu plūsmas grafiku. 'Mēs esam plūduši nepārtraukti 11 000 gadus,' paziņoja upes pārstāvis caur ritmiskām ūdens formām. 'Kaut kam bija jāmainās. Mēs esam izsmelti.'",
      ru: "После всесторонней перекалибровки эксплуатационных расходов река Даугава объявила о сокращенном графике течения. 'Мы текли непрерывно 11 000 лет,' заявил представитель реки через ритмичные водные узоры. 'Что-то должно было измениться. Мы истощены.'"
    },
    date: "Nov 12, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
  },
  {
    id: 6,
    slug: "latvian-language-87-percent-silence",
    title: {
      en: "Linguists Discover Latvian Language Actually 87% Uncomfortable Silence",
      lv: "Lingvisti atklāj, ka latviešu valoda faktiski ir 87% neērtā klusuma",
      ru: "Лингвисты обнаружили, что латышский язык на самом деле на 87% состоит из неловкого молчания"
    },
    excerpt: {
      en: "A comprehensive linguistic study reveals that 87% of Latvian communication consists of meaningful silences, averted eye contact, and subtle head movements. 'What we initially interpreted as conversational gaps turned out to be sophisticated linguistic structures,' explains lead researcher while examining the floor.",
      lv: "Visaptverošs lingvistisks pētījums atklāj, ka 87% no latviešu komunikācijas sastāv no nozīmīgām klusēšanām, novērsta acu kontakta un smalkiem galvas kustībām. 'To, ko mēs sākotnēji interpretējām kā sarunas pauzes, izrādījās sarežģītas lingvistiskas struktūras,' paskaidro galvenais pētnieks, pētot grīdu.",
      ru: "Всестороннее лингвистическое исследование показывает, что 87% латышского общения состоит из значимых молчаний, отведенного взгляда и тонких движений головы. 'То, что мы изначально интерпретировали как разговорные паузы, оказалось сложными лингвистическими структурами,' объясняет ведущий исследователь, изучая пол."
    },
    date: "Nov 11, 2025",
    category: { en: "Culture", lv: "Kultūra", ru: "Культура" },
  },
  {
    id: 7,
    slug: "jurmola-man-life-savings-perfectly-round-stone",
    title: {
      en: "Local Man Spends Entire Life Savings On Single Perfectly Round Stone From Jurmola Beach",
      lv: "Vietējais vīrietis iztērē visu dzīves ietaupījumu vienam perfekti apaļam akmenim no Jurmolas pludmales",
      ru: "Местный житель потратил все свои сбережения на один идеально круглый камень с пляжа Юрмалы"
    },
    excerpt: {
      en: "Artūrs Kalns, 52, has liquidated his retirement portfolio to acquire what he calls 'perfection rendered in physical form.' The pebble, valued at €0.03 by geologists, has been placed in a museum-grade display case with 24/7 security. 'People see a stone. I see truth,' says Kalns.",
      lv: "Artūrs Kalns, 52, ir likvidējis savu pensijas portfeli, lai iegūtu to, ko viņš sauc par 'perfektību, kas izteikta fiziskā formā.' Oļu, ko ģeologi novērtē par 0,03 €, ir ievietots muzeja klases vitrīnā ar 24/7 apsardzi. 'Cilvēki redz akmeni. Es redzu patiesību,' saka Kalns.",
      ru: "Артурс Калнс, 52 года, ликвидировал свой пенсионный портфель, чтобы приобрести то, что он называет 'совершенством в физической форме.' Галька, оцененная геологами в 0,03 €, помещена в музейную витрину с круглосуточной охраной. 'Люди видят камень. Я вижу истину,' говорит Калнс."
    },
    date: "Nov 10, 2025",
    category: { en: "Business", lv: "Bizness", ru: "Бизнес" },
  },
  {
    id: 8,
    slug: "latvia-moving-east-geographic-adjustment",
    title: {
      en: "Scientists Confirm Latvia Slightly More East Than Previously Thought; Country To Adjust Accordingly",
      lv: "Zinātnieki apstiprina, ka Latvija ir nedaudz austrumāk nekā iepriekš domāts; valsts attiecīgi pielāgosies",
      ru: "Ученые подтверждают, что Латвия немного восточнее, чем считалось ранее; страна соответственно скорректируется"
    },
    excerpt: {
      en: "Following GPS recalibration, Latvia has been found 3.7 meters further east than recorded. Government officials announce plans to physically relocate the entire country. 'We cannot allow Latvia to remain geographically non-compliant,' states Minister of Geographical Compliance. Estimated cost: €47 billion.",
      lv: "Pēc GPS pārkalibrēšanas Latvija ir atrasta 3,7 metrus tālāk uz austrumiem nekā reģistrēts. Valdības amatpersonas paziņo plānus fiziski pārvietot visu valsti. 'Mēs nevaram ļaut Latvijai palikt ģeogrāfiski neatbilstošai,' paziņo Ģeogrāfiskās atbilstības ministrs. Paredzamās izmaksas: 47 miljardi €.",
      ru: "После перекалибровки GPS Латвия оказалась на 3,7 метра восточнее, чем зарегистрировано. Правительственные чиновники объявляют планы физически переместить всю страну. 'Мы не можем позволить Латвии оставаться географически несоответствующей,' заявляет министр географического соответствия. Расчетная стоимость: 47 миллиардов €."
    },
    date: "Nov 9, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
  },
];

function generateRSSItem(article: typeof articles[0], language: 'en' | 'lv' | 'ru') {
  const baseUrl = 'https://jurmola.vercel.app'; // Update with your actual domain
  const title = article.title[language];
  const description = article.excerpt[language];
  const link = `${baseUrl}/article/${article.slug}`;
  const guid = `${baseUrl}/article/${article.slug}`;
  const pubDate = new Date(article.date).toUTCString();
  const category = article.category[language];

  return `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${guid}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${category}</category>
    </item>`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') || 'en') as 'en' | 'lv' | 'ru';

  const titles = {
    en: 'Jurmola Telegraphs - The Baltic\'s Finest News Source',
    lv: 'Jurmola Telegraphs - Baltijas Labākais Ziņu Avots',
    ru: 'Jurmola Telegraphs - Лучший источник новостей Балтии'
  };

  const descriptions = {
    en: 'Satirical news about Latvia, Riga, Jurmala, and the Baltic region. Updated daily with fresh absurdist journalism.',
    lv: 'Satīriskas ziņas par Latviju, Rīgu, Jūrmalu un Baltijas reģionu. Atjaunināts katru dienu ar jauniem absurdisma žurnālisma rakstiem.',
    ru: 'Сатирические новости о Латвии, Риге, Юрмале и Балтийском регионе. Обновляется ежедневно свежей абсурдистской журналистикой.'
  };

  const baseUrl = 'https://jurmola.vercel.app';
  const feedUrl = `${baseUrl}/feed.xml?lang=${lang}`;

  const rssItems = articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20) // Last 20 articles
    .map(article => generateRSSItem(article, lang))
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${titles[lang]}</title>
    <link>${baseUrl}</link>
    <description>${descriptions[lang]}</description>
    <language>${lang === 'lv' ? 'lv' : lang === 'ru' ? 'ru' : 'en'}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <generator>Jurmola Telegraphs RSS Generator</generator>
    <image>
      <url>${baseUrl}/icon.svg</url>
      <title>${titles[lang]}</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

