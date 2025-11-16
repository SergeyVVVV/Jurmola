'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

type Language = 'en' | 'lv' | 'ru';

interface ArticleContent {
  id: number;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  fullContent: { en: string; lv: string; ru: string };
  date: string;
  category: { en: string; lv: string; ru: string };
  readTime: string;
  imageUrl: string;
  author: { en: string; lv: string; ru: string };
}

const articles: ArticleContent[] = [
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
    fullContent: {
      en: "Full story about the wedding excuse developing over 11 years...",
      lv: "Pilns stāsts par kāzu aizbildinājuma izstrādi 11 gadu laikā...",
      ru: "Полная история о разработке отговорки для свадьбы на протяжении 11 лет..."
    },
    date: "Nov 15, 2025",
    category: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=600&fit=crop",
    author: { en: "By Marina Ozola", lv: "Rakstījusi Marina Ozola", ru: "Автор: Марина Озола" }
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
    fullContent: {
      en: "Full investigation into the mysterious monument...",
      lv: "Pilna izmeklēšana par noslēpumaino pieminekli...",
      ru: "Полное расследование загадочного памятника..."
    },
    date: "Nov 15, 2025",
    category: { en: "Opinion", lv: "Viedoklis", ru: "Мнение" },
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?w=800&h=600&fit=crop",
    author: { en: "By Jānis Liepa", lv: "Rakstījis Jānis Liepa", ru: "Автор: Янис Лиепа" }
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
    fullContent: {
      en: "Full story about the sentient potato...",
      lv: "Pilns stāsts par apzinīgo kartupeļi...",
      ru: "Полная история о разумной картошке..."
    },
    date: "Nov 14, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&h=600&fit=crop",
    author: { en: "By Laura Kalniņa", lv: "Rakstījusi Laura Kalniņa", ru: "Автор: Лаура Калниня" }
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
    fullContent: {
      en: "Full investigation into the Baltic Sea revelation...",
      lv: "Pilna izmeklēšana par Baltijas jūras atklāsmi...",
      ru: "Полное расследование откровения о Балтийском море..."
    },
    date: "Nov 14, 2025",
    category: { en: "Science", lv: "Zinātne", ru: "Наука" },
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
    author: { en: "By Andris Ozoliņš", lv: "Rakstījis Andris Ozoliņš", ru: "Автор: Андрис Озолиньш" }
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
    fullContent: {
      en: "Full story about the river's schedule change...",
      lv: "Pilns stāsts par upes grafika izmaiņām...",
      ru: "Полная история об изменении графика реки..."
    },
    date: "Nov 13, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    author: { en: "By Ilze Bērziņa", lv: "Rakstījusi Ilze Bērziņa", ru: "Автор: Илзе Берзиня" }
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
    fullContent: {
      en: "Full linguistic study report...",
      lv: "Pilns lingvistikas pētījuma ziņojums...",
      ru: "Полный отчет лингвистического исследования..."
    },
    date: "Nov 13, 2025",
    category: { en: "Culture", lv: "Kultūra", ru: "Культура" },
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    author: { en: "By Kristīne Ozoliņa", lv: "Rakstījusi Kristīne Ozoliņa", ru: "Автор: Кристине Озолиня" }
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
    fullContent: {
      en: "Full story about the perfect stone purchase...",
      lv: "Pilns stāsts par perfektā akmens iegādi...",
      ru: "Полная история о покупке идеального камня..."
    },
    date: "Nov 12, 2025",
    category: { en: "Business", lv: "Bizness", ru: "Бизнес" },
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&h=600&fit=crop",
    author: { en: "By Māris Kalniņš", lv: "Rakstījis Māris Kalniņš", ru: "Автор: Марис Калниньш" }
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
    fullContent: {
      en: "Full report on Latvia's geographical adjustment...",
      lv: "Pilns ziņojums par Latvijas ģeogrāfisko pielāgošanu...",
      ru: "Полный отчет о географической корректировке Латвии..."
    },
    date: "Nov 12, 2025",
    category: { en: "Breaking", lv: "Jaunumi", ru: "Срочно" },
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop",
    author: { en: "By Edgars Liepiņš", lv: "Rakstījis Edgars Liepiņš", ru: "Автор: Эдгарс Лиепиньш" }
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
      lv: "Aleksandrs Vladimirovs, bijušais Šveices hokeja izlases spēlētājs, kas pārstāv Krieviju triatlonā, šonedēļ veica 'draudzīgu vizīti' Jūrmalā. Pēc tam, kad viņš uzslavēja vietējās pirtis, spirtu un peldošās rotaļlietas, Vladimirovs atklāja detalizētu priekšlikumu saspiegt pludmales smiltis, 'lai naži labāk iestrēgst Latvijas zemē.' Ieteikums ir nosūtīts Latvijas karalim parlamentārai izskatīšanai.",
      ru: "Александр Владимиров, бывший игрок сборной Швейцарии по хоккею, теперь представляющий Россию в триатлоне, совершил 'дружественный визит' в Юрмалу на этой неделе. После похвалы местным баням, спиртным напиткам и надувным игрушкам для бассейна, Владимиров представил подробное предложение по уплотнению пляжного песка, 'чтобы ножи лучше застревали в латвийской почве.' Рекомендация направлена королю Латвии для парламентского рассмотрения."
    },
    fullContent: {
      en: `JŪRMALA — In what local hospitality workers are calling "the most confusing diplomatic visit in recent memory," London-based investment banker Alexander Vladimirov spent four days touring Jūrmala's beaches, restaurants, and cultural sites before presenting municipal authorities with a 47-page proposal to "optimize beach sand density for improved blade retention."

Vladimirov, 32, whose LinkedIn profile describes him as a "strategic investment consultant" and whose Instagram bio lists him as a "former Swiss national hockey player" and "current Russian triathlon representative," arrived in Jūrmala on Thursday, November 13th, accompanied by six associates he introduced only as "consultants."

The visit began conventionally enough. Vladimirov toured several local saunas, rating them "world-class" and "strategically positioned." He sampled local spirits, which he praised as "stronger than expected and good for morale." Most notably, he spent approximately two hours examining inflatable pool toys at a beachside shop, ultimately purchasing seventeen flotation devices for reasons he described as "personal interest in buoyancy optimization."

"He seemed like a normal tourist at first," said Ieva Kalniņa, manager of the Dzintari Beach Hotel. "He asked about the breakfast menu, the wifi password, the usual things. Then he asked if we'd considered reinforcing the foundation 'for maximum structural integrity during potential future scenarios.'"

The situation took an unusual turn during a Saturday evening meal at Jūrmala's upscale restaurant "Vēsma." After enthusiastically praising the Latvian cuisine: ravioli ("excellent pasta-to-filling ratio"), basturma ("impressively cured"), glazed pear ("unexpected but strategic"), croissants ("flaky, defensible"), and eggs Benedict ("a triumph of hollandaise engineering"), Vladimirov pivoted to what he called "areas of growth opportunity."

"The local food is excellent," Vladimirov announced to the assembled restaurant patrons, standing without invitation. "But I must address the elephant in the room: your beaches."

What followed was a twenty-minute presentation using a tablet, three napkin sketches, and one borrowed bread knife as a visual aid. Vladimirov's central thesis: Jūrmala's beach sand is "dangerously loose" and requires "immediate compaction" to achieve "optimal blade insertion depth and retention."

"Currently, if you throw a knife at Latvian sand, it barely sticks," Vladimirov explained, demonstrating with the bread knife and a decorative potted plant. "This is, from a technical standpoint, embarrassing. With proper compression techniques, we could achieve 40% better penetration and nearly double the stick rate."

When asked why anyone would need to throw knives into beach sand, Vladimirov responded that it was "a theoretical question for theoretical purposes" and "something CSTO experts have been discussing."

The formal proposal, delivered Sunday morning to Jūrmala City Council, includes:

• Detailed schematics for "tactical beach compaction zones"
• Cost estimates for industrial sand compression equipment
• A timeline describing the project as "urgent but achievable if we all work together toward common goals"
• Seventeen pages of footnotes in Russian
• A section titled "Knife Retention: A Policy Priority for Modern Latvia"
• Suggested talking points for addressing "concerns from parties who may not understand the strategic importance of firmly-packed sand"

The document has reportedly been forwarded to Latvia's "King" for review — a title that does not exist, as Latvia is a parliamentary republic with a President. When informed of this, Vladimirov nodded thoughtfully and said, "Right, right. The King-President. Same thing. I'll adjust my memo."

The proposal is scheduled for discussion at next month's Saeima session, where parliamentary members are expected to politely decline while backing slowly toward exits.

Beyond the beach compaction initiative, Vladimirov highlighted another area for improvement. He expressed "pleasant surprise at the local cuisine" but "profound disappointment" at the absence of British and Irish pubs in Jūrmala. A second proposal addressing this "critical infrastructure gap" is being prepared by Vladimirov's legal team and will be presented to Jūrmala Mayor Laims Vaikulevs no later than December 25th, 2025.

When informed that Jūrmala's mayor is actually named Gatis Truksnis and that "Laims Vaikulevs" is not a real person, Vladimirov's assistant replied that they would "update the letterhead accordingly" but that "the pub initiative remains urgent regardless of administrative details."

Vladimirov departed Sunday afternoon, rating his visit "8 out of 10" and noting that "with denser sand and proper pub infrastructure, it could easily be a 12."

Local authorities have requested that the British Embassy in Riga "maybe look into this guy," while Russian officials have stated they "have no knowledge of any Alexander Vladimirov" and "certainly wouldn't endorse beach compaction initiatives."

The Jūrmala Tourism Board, meanwhile, has added "soft, non-compacted beaches" to its promotional materials.`,
      lv: "Pilns raksts latviski...",
      ru: "Полная статья на русском..."
    },
    date: "Nov 16, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
    readTime: "10 min read",
    imageUrl: "/images/vladimirov-flag.jpeg",
    author: { en: "By Marina Ozola", lv: "Rakstījusi Marina Ozola", ru: "Автор: Марина Озола" }
  }
];

const translations = {
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumlapu", ru: "← Назад на главную" },
  siteTitle: { en: "Jurmola Telegraphs", lv: "Jurmola Telegraphs", ru: "Jurmola Telegraphs" },
  share: { en: "Share this story", lv: "Dalīties ar šo stāstu", ru: "Поделиться этой историей" }
};

export default function ArticlePage() {
  const params = useParams();
  const articleId = parseInt(params.id as string);
  const [language, setLanguage] = useState<Language>('en');

  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-gray-600 hover:text-black">{translations.backToHome[language]}</a>
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
        <div className="max-w-5xl mx-auto px-4 py-4">
          <a href="/">
            <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle[language]}
            </h1>
          </a>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-semibold uppercase tracking-wide">
            {article.category[language]}
          </span>
          <span className="text-gray-500">{article.date}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {article.title[language]}
        </h1>

        {/* Author */}
        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title[language]}
            className="w-full h-auto"
          />
        </div>

        {/* Excerpt */}
        <div className="text-xl leading-relaxed mb-8 font-semibold text-gray-800 border-l-4 border-black pl-6">
          {article.excerpt[language]}
        </div>

        {/* Full Content */}
        <div className="prose prose-lg max-w-none">
          {article.fullContent[language].split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">{translations.share[language]}</p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = article.title[language];
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Twitter
            </button>
            <button 
              onClick={() => {
                const url = window.location.href;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Facebook
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition"
            >
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <a href="/">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              {translations.siteTitle[language]}
            </h3>
          </a>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Jurmola Telegraphs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

