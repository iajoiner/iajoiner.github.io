import type { Lang } from "./languages";

/** The home page's words. English is the original; the other languages are machine translations of it. */

export interface Link {
  href: string;
  label: string;
}

/** The organizations, with their links (the same in every language). */
export const ORGS = [
  { key: "gideon", name: "Gideon Solutions", links: [{ href: "https://gideonsolutions.us", label: "gideonsolutions.us" }] },
  {
    key: "omh",
    name: "Open Mission of Hope (OMH)",
    links: [{ href: "https://github.com/openmissionofhope", label: "github.com/openmissionofhope" }],
  },
  {
    key: "lumenary",
    name: "Lumenary",
    links: [
      { href: "https://lumenary.academy", label: "lumenary.academy" },
      { href: "https://thelumenary.org", label: "thelumenary.org" },
    ],
  },
  { key: "pcg", name: "Peace Cat Games", links: [{ href: "https://peacecatgames.com", label: "peacecatgames.com" }] },
  {
    key: "haapavesi",
    name: "Haapavesi Institute",
    links: [{ href: "https://github.com/haapavesi-institute", label: "github.com/haapavesi-institute" }],
  },
  { key: "coauthored", name: "AI Coauthored", links: [{ href: "https://aicoauthored.dev", label: "aicoauthored.dev" }] },
] as const;

export type OrgKey = (typeof ORGS)[number]["key"];

export interface HomeContent {
  /** A translation of "Christ, Code, Cats", shown under it; empty in English. */
  taglineGloss: string;
  /** What "Usko, toivo, rakkaus" means. */
  mottoGloss: string;
  catBro: string;
  intro: string;
  orgsTitle: string;
  orgs: Record<OrgKey, string>;
  countriesTitle: string;
  countriesIntro: string;
  countries: { name: string; points: string[] }[];
  rootsTitle: string;
  roots: string[];
}

export const HOME: Record<Lang, HomeContent> = {
  en: {
    taglineGloss: "",
    mottoGloss: "Faith, hope, love: 1 Corinthians 13:13, in Finnish.",
    catBro: "Known to my friends, and to every cat on the street, as Cat Bro.",
    intro:
      "I follow Christ, write code and look after cats. Below are the organizations I work on, the countries close to my heart and my roots. There is also a blog for personal updates and a page of cat photos.",
    orgsTitle: "Organizations",
    orgs: {
      gideon:
        "Honest software for taxes and money: IRS e-filing and more, with prices stated up front and a person behind every product.",
      omh: "A Christian, open-source humanitarian initiative: prayer, knowledge and transparent mercy.",
      lumenary:
        "Free, open-source, Christian-inspired education, starting with mathematics from counting to graduate level. Its sister project, The Lumenary, studies meaning, consciousness, spirituality and time.",
      pcg: "Games about peace, starring cats: Nexus, Enhanced Go, Cat Chess, Complex Hearts and the mathematics game Quiver Quest.",
      haapavesi: "AI-assisted research in mathematics and science. Its first result: 3×3 Nexus is a win for the first player.",
      coauthored:
        "Coauthored, an open preprint server for papers written with AI co-authors, each with a human author who takes responsibility.",
    },
    countriesTitle: "Countries close to my heart",
    countriesIntro: "I have a deep love for the Nordic countries, Estonia and Poland. Here is some of why.",
    countries: [
      {
        name: "The Nordic countries",
        points: [
          "Sweden's Riksdag gave peasants an estate of their own for over four hundred years, when most of Europe gave farmers no voice at all.",
          "No Nordic country ever chose Nazism or communism for itself, and in 1943 Danes ferried nearly all of Denmark's Jews across the sea to safety in Sweden.",
          "Some of the least corrupt and most peaceful societies on earth.",
          "Housing First in Helsinki: a home first, then help, and homelessness keeps falling.",
        ],
      },
      {
        name: "Estonia",
        points: [
          "Skype was built by Estonian engineers, and Bolt was founded in Tallinn.",
          "A truly digital state: one ID card to sign, vote and file taxes online, and e-Residency open to the world.",
        ],
      },
      {
        name: "Poland",
        points: [
          "Poles kept their faith in Christ through decades of communist rule imposed from outside.",
          "Modern Warsaw, crowned by Varso Tower, the tallest building in the European Union.",
          "The quiet, beautiful countryside of Galicia in southern Poland.",
        ],
      },
    ],
    rootsTitle: "Roots",
    roots: [
      "My Y-chromosome haplogroup is N-L665, a branch of N-P43. I identify as Uralic American: an American with a kinship to the Uralic peoples, the Finns, Estonians, Hungarians, Sámi and their many relatives.",
      "A haplogroup follows only one line among many ancestors, so for me it is a thread of heritage and kinship, not a measure of anyone.",
    ],
  },

  es: {
    taglineGloss: "Cristo, código, gatos.",
    mottoGloss: "Fe, esperanza, amor: 1 Corintios 13:13, en finés.",
    catBro: "Mis amigos, y todos los gatos de la calle, me conocen como Cat Bro.",
    intro:
      "Sigo a Cristo, escribo código y cuido gatos. Abajo están las organizaciones en las que trabajo, los países que llevo en el corazón y mis raíces. También hay un blog con novedades personales y una página de fotos de gatos.",
    orgsTitle: "Organizaciones",
    orgs: {
      gideon:
        "Software honesto para impuestos y dinero: presentación electrónica ante el IRS y más, con precios claros desde el principio y una persona detrás de cada producto.",
      omh: "Una iniciativa humanitaria cristiana y de código abierto: oración, conocimiento y misericordia transparente.",
      lumenary:
        "Educación gratuita, de código abierto y de inspiración cristiana, empezando por las matemáticas, desde contar hasta el nivel de posgrado. Su proyecto hermano, The Lumenary, estudia el sentido, la conciencia, la espiritualidad y el tiempo.",
      pcg: "Juegos sobre la paz, protagonizados por gatos: Nexus, Enhanced Go, Cat Chess, Complex Hearts y el juego matemático Quiver Quest.",
      haapavesi: "Investigación en matemáticas y ciencias asistida por IA. Su primer resultado: en Nexus 3×3 gana el primer jugador.",
      coauthored:
        "Coauthored, un servidor abierto de preprints para artículos escritos con coautores de IA, cada uno con un autor humano que asume la responsabilidad.",
    },
    countriesTitle: "Países que llevo en el corazón",
    countriesIntro: "Siento un profundo cariño por los países nórdicos, Estonia y Polonia. Estas son algunas razones.",
    countries: [
      {
        name: "Los países nórdicos",
        points: [
          "El Riksdag sueco dio a los campesinos su propio estamento durante más de cuatrocientos años, cuando en casi toda Europa los agricultores no tenían voz.",
          "Ningún país nórdico eligió nunca por sí mismo el nazismo ni el comunismo, y en 1943 los daneses llevaron por mar a casi todos los judíos de Dinamarca a un lugar seguro en Suecia.",
          "Algunas de las sociedades menos corruptas y más pacíficas del mundo.",
          "Housing First en Helsinki: primero una vivienda, después la ayuda, y el número de personas sin hogar sigue bajando.",
        ],
      },
      {
        name: "Estonia",
        points: [
          "Skype lo construyeron ingenieros estonios, y Bolt nació en Tallin.",
          "Un Estado verdaderamente digital: una sola tarjeta de identidad para firmar, votar y declarar impuestos por internet, y la e-Residency abierta a todo el mundo.",
        ],
      },
      {
        name: "Polonia",
        points: [
          "Los polacos conservaron su fe en Cristo durante décadas de un régimen comunista impuesto desde fuera.",
          "La Varsovia moderna, coronada por la torre Varso, el edificio más alto de la Unión Europea.",
          "El campo tranquilo y hermoso de Galitzia, en el sur de Polonia.",
        ],
      },
    ],
    rootsTitle: "Raíces",
    roots: [
      "Mi haplogrupo del cromosoma Y es N-L665, una rama de N-P43. Me identifico como estadounidense urálico (Uralic American): un estadounidense que siente parentesco con los pueblos urálicos, los finlandeses, los estonios, los húngaros, los sami y sus muchos parientes.",
      "Un haplogrupo sigue una sola línea entre muchos antepasados, así que para mí es un hilo de herencia y parentesco, no una medida de nadie.",
    ],
  },

  sv: {
    taglineGloss: "Kristus, kod, katter.",
    mottoGloss: "Tro, hopp, kärlek: 1 Kor 13:13, på finska.",
    catBro: "Mina vänner, och varenda katt på gatan, känner mig som Cat Bro.",
    intro:
      "Jag följer Kristus, skriver kod och tar hand om katter. Här nedanför finns organisationerna jag arbetar med, länderna som ligger mitt hjärta nära och mina rötter. Det finns också en blogg med personliga uppdateringar och en sida med kattbilder.",
    orgsTitle: "Organisationer",
    orgs: {
      gideon:
        "Ärlig programvara för skatter och pengar: e-deklaration till IRS med mera, med priser som anges från början och en människa bakom varje produkt.",
      omh: "Ett kristet humanitärt initiativ med öppen källkod: bön, kunskap och öppen barmhärtighet.",
      lumenary:
        "Fri utbildning med öppen källkod och kristen inspiration, med början i matematik från att räkna till forskarnivå. Systerprojektet The Lumenary utforskar mening, medvetande, andlighet och tid.",
      pcg: "Spel om fred, med katter i huvudrollerna: Nexus, Enhanced Go, Cat Chess, Complex Hearts och matematikspelet Quiver Quest.",
      haapavesi: "AI-assisterad forskning i matematik och naturvetenskap. Första resultatet: i 3×3-Nexus vinner den som börjar.",
      coauthored:
        "Coauthored, en öppen preprintserver för artiklar skrivna med AI-medförfattare, var och en med en mänsklig författare som tar ansvaret.",
    },
    countriesTitle: "Länder nära mitt hjärta",
    countriesIntro: "Jag har en djup kärlek till de nordiska länderna, Estland och Polen. Här är något av varför.",
    countries: [
      {
        name: "Norden",
        points: [
          "Sveriges riksdag gav bönderna ett eget stånd i över fyrahundra år, när bönder i större delen av Europa saknade röst.",
          "Inget nordiskt land valde någonsin nazism eller kommunism av egen vilja, och 1943 förde danskarna nästan alla Danmarks judar över havet i säkerhet till Sverige.",
          "Några av världens minst korrumperade och mest fredliga samhällen.",
          "Bostad först i Helsingfors: först ett hem, sedan hjälp, och hemlösheten fortsätter att minska.",
        ],
      },
      {
        name: "Estland",
        points: [
          "Skype byggdes av estniska ingenjörer, och Bolt grundades i Tallinn.",
          "En verkligt digital stat: ett id-kort för att signera, rösta och deklarera på nätet, och e-residens öppen för hela världen.",
        ],
      },
      {
        name: "Polen",
        points: [
          "Polackerna höll fast vid sin tro på Kristus genom årtionden av kommunistiskt styre som tvingats på dem utifrån.",
          "Det moderna Warszawa, krönt av Varso Tower, Europeiska unionens högsta byggnad.",
          "Den lugna, vackra landsbygden i Galizien i södra Polen.",
        ],
      },
    ],
    rootsTitle: "Rötter",
    roots: [
      "Min Y-kromosomhaplogrupp är N-L665, en gren av N-P43. Jag identifierar mig som uralisk amerikan (Uralic American): en amerikan med släktskap med de uraliska folken, finnar, ester, ungrare, samer och deras många släktingar.",
      "En haplogrupp följer bara en linje bland många förfäder, så för mig är den en tråd av arv och släktskap, inte ett mått på någon.",
    ],
  },

  fi: {
    taglineGloss: "Kristus, koodi, kissat.",
    mottoGloss: "1. Kor. 13:13.",
    catBro: "Ystäväni, ja jokainen kadun kissa, tuntevat minut nimellä Cat Bro.",
    intro:
      "Seuraan Kristusta, kirjoitan koodia ja pidän huolta kissoista. Alla ovat organisaatiot, joiden parissa työskentelen, sydäntäni lähellä olevat maat ja juureni. Sivustolla on myös blogi henkilökohtaisille kuulumisille ja sivu kissakuville.",
    orgsTitle: "Organisaatiot",
    orgs: {
      gideon:
        "Rehellisiä ohjelmistoja veroihin ja raha-asioihin: sähköinen veroilmoitus Yhdysvaltain verovirastolle (IRS) ja paljon muuta. Hinnat kerrotaan heti alussa, ja jokaisen tuotteen takana on ihminen.",
      omh: "Kristillinen avoimen lähdekoodin humanitaarinen hanke: rukousta, tietoa ja läpinäkyvää laupeutta.",
      lumenary:
        "Maksutonta, avoimen lähdekoodin ja kristillisen inspiraation opetusta, alkaen matematiikasta laskemisen alkeista jatko-opintotasolle. Sisarhanke The Lumenary tutkii merkitystä, tietoisuutta, hengellisyyttä ja aikaa.",
      pcg: "Pelejä rauhasta, pääosissa kissat: Nexus, Enhanced Go, Cat Chess, Complex Hearts ja matematiikkapeli Quiver Quest.",
      haapavesi: "Tekoälyavusteista matematiikan ja luonnontieteiden tutkimusta. Ensimmäinen tulos: 3×3-Nexuksessa aloittaja voittaa.",
      coauthored:
        "Coauthored, avoin preprint-palvelin artikkeleille, joiden kirjoittajina on myös tekoälyjä. Jokaisella artikkelilla on ihmiskirjoittaja, joka kantaa vastuun.",
    },
    countriesTitle: "Sydäntäni lähellä olevat maat",
    countriesIntro: "Rakastan syvästi Pohjoismaita, Viroa ja Puolaa. Tässä joitakin syitä.",
    countries: [
      {
        name: "Pohjoismaat",
        points: [
          "Ruotsin valtiopäivillä talonpojilla oli oma säätynsä yli neljänsadan vuoden ajan, kun suurimmassa osassa Eurooppaa talonpojilla ei ollut lainkaan ääntä.",
          "Yksikään Pohjoismaa ei koskaan itse valinnut natsismia eikä kommunismia, ja vuonna 1943 tanskalaiset veivät lähes kaikki Tanskan juutalaiset meren yli turvaan Ruotsiin.",
          "Joitakin maailman vähiten korruptoituneita ja rauhallisimpia yhteiskuntia.",
          "Asunto ensin Helsingissä: ensin koti, sitten apu, ja asunnottomuus vähenee yhä.",
        ],
      },
      {
        name: "Viro",
        points: [
          "Skypen rakensivat virolaiset insinöörit, ja Bolt perustettiin Tallinnassa.",
          "Todella digitaalinen valtio: yhdellä henkilökortilla allekirjoitetaan, äänestetään ja tehdään veroilmoitus verkossa, ja e-residenssi on avoin koko maailmalle.",
        ],
      },
      {
        name: "Puola",
        points: [
          "Puolalaiset säilyttivät uskonsa Kristukseen vuosikymmenten ajan ulkoa pakotetun kommunistisen vallan alla.",
          "Moderni Varsova, jonka kruunaa Varso Tower, Euroopan unionin korkein rakennus.",
          "Galitsian hiljainen ja kaunis maaseutu Etelä-Puolassa.",
        ],
      },
    ],
    rootsTitle: "Juuret",
    roots: [
      "Y-kromosomihaploryhmäni on N-L665, joka on N-P43:n haara. Koen olevani uralilainen amerikkalainen (Uralic American): amerikkalainen, joka tuntee sukulaisuutta uralilaisiin kansoihin, suomalaisiin, virolaisiin, unkarilaisiin, saamelaisiin ja heidän moniin sukulaiskansoihinsa.",
      "Haploryhmä seuraa vain yhtä linjaa monien esivanhempien joukossa, joten minulle se on perinnön ja sukulaisuuden lanka, ei kenenkään mittapuu.",
    ],
  },
};
