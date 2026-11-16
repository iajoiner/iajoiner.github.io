import type { Lang } from "./languages";

export type FlagCode = "dk" | "fi" | "is" | "no" | "se" | "ee" | "pl" | "us";

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
    links: [{ href: "https://www.openmissionofhope.org", label: "openmissionofhope.org" }],
  },
  {
    key: "lumenary",
    name: "Lumenary Academy",
    links: [
      { href: "https://lumenary.academy", label: "lumenary.academy" },
      { href: "https://prep.lumenary.academy", label: "prep.lumenary.academy" },
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

/** The flags shown with each country section, in the order of `countries` below. */
export const COUNTRY_FLAGS: FlagCode[][] = [["dk", "fi", "is", "no", "se"], ["ee"], ["pl"]];

export const FLAG_NAMES: Record<Lang, Record<FlagCode, string>> = {
  en: { dk: "Flag of Denmark", fi: "Flag of Finland", is: "Flag of Iceland", no: "Flag of Norway", se: "Flag of Sweden", ee: "Flag of Estonia", pl: "Flag of Poland", us: "Flag of the United States" },
  es: { dk: "Bandera de Dinamarca", fi: "Bandera de Finlandia", is: "Bandera de Islandia", no: "Bandera de Noruega", se: "Bandera de Suecia", ee: "Bandera de Estonia", pl: "Bandera de Polonia", us: "Bandera de Estados Unidos" },
  sv: { dk: "Danmarks flagga", fi: "Finlands flagga", is: "Islands flagga", no: "Norges flagga", se: "Sveriges flagga", ee: "Estlands flagga", pl: "Polens flagga", us: "USA:s flagga" },
  fi: { dk: "Tanskan lippu", fi: "Suomen lippu", is: "Islannin lippu", no: "Norjan lippu", se: "Ruotsin lippu", ee: "Viron lippu", pl: "Puolan lippu", us: "Yhdysvaltain lippu" },
};

export interface HomeContent {
  /** A translation of "Christ, Code, Cats", shown under it; empty in English. */
  taglineGloss: string;
  /** What "Usko, toivo, rakkaus" means. */
  mottoGloss: string;
  catBro: string;
  /** Labels for the favourites line: "Rust" and "Linux" are the same in every language. */
  favLanguage: string;
  favOs: string;
  intro: string;
  /** Education and work, with [links](…) and `code` (see RichText.astro). */
  bio: string;
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
    favLanguage: "Favorite programming language",
    favOs: "Favorite operating system",
    intro: "I follow Christ, write code and look after cats.",
    bio: "I earned my Ph.D. in mathematics at Brandeis University in 2019. I worked at Lowe's as a data scientist and then senior data scientist, and from 2022 to 2026 at MakeInfinite as a lead and then staff software engineer, mostly on [Space and Time](https://www.spaceandtime.io), especially [Proof of SQL](https://github.com/spaceandtimefdn/sxt-proof-of-sql) and blockchain indexing. In open source, I added the ORC writer to [Apache Arrow](https://arrow.apache.org/docs/python/generated/pyarrow.orc.write_table.html) (C++ and Python) and [`to_orc`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_orc.html) to pandas. I'm an enrolled agent, licensed by the IRS to represent taxpayers, and I run the organizations below.",
    orgsTitle: "Organizations",
    orgs: {
      gideon:
        "Honest software for taxes and money: IRS e-filing and more, with prices stated up front and a person behind every product.",
      omh: "A Christian, open-source humanitarian initiative: prayer, knowledge and transparent mercy.",
      lumenary:
        "A Christian-inspired school. Scientia teaches the sciences, free and open source for ever, starting with mathematics. Prep is paid exam preparation. Lingua, for languages, is coming.",
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
          "Sweden never had serfdom, and neither did most of Finland. The exception was Old Finland, the southeast Russia took in the 1700s, where peasants on lands granted to Russian nobles were pushed close to serfdom.",
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
      "My Y-chromosome haplogroup is [N-L665](https://www.yfull.com/tree/N-L665/), a branch of N-P43. I identify as Uralic American: an American with a kinship to the Uralic peoples: the Udmurts, Mari, Khanty, Mansi and Nenets, the Finns, Estonians and Sámi, and their many relatives.",
      "A haplogroup follows only one line among many ancestors, so for me it is a thread of heritage and kinship, not a measure of anyone.",
    ],
  },

  es: {
    taglineGloss: "Cristo, código, gatos.",
    mottoGloss: "Fe, esperanza, amor: 1 Corintios 13:13, en finés.",
    catBro: "Mis amigos, y todos los gatos de la calle, me conocen como Cat Bro.",
    favLanguage: "Lenguaje de programación favorito",
    favOs: "Sistema operativo favorito",
    intro: "Sigo a Cristo, escribo código y cuido gatos.",
    bio: "Me doctoré en Matemáticas en la Universidad Brandeis en 2019. Trabajé en Lowe's como científico de datos y después científico de datos sénior, y de 2022 a 2026 en MakeInfinite como ingeniero de software líder y después staff, sobre todo en [Space and Time](https://www.spaceandtime.io), en particular en [Proof of SQL](https://github.com/spaceandtimefdn/sxt-proof-of-sql) y en la indexación de blockchains. En código abierto, añadí el escritor ORC a [Apache Arrow](https://arrow.apache.org/docs/python/generated/pyarrow.orc.write_table.html) (C++ y Python) y [`to_orc`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_orc.html) a pandas. Soy enrolled agent, habilitado por el IRS para representar a contribuyentes, y dirijo las organizaciones de abajo.",
    orgsTitle: "Organizaciones",
    orgs: {
      gideon:
        "Software honesto para impuestos y dinero: presentación electrónica ante el IRS y más, con precios claros desde el principio y una persona detrás de cada producto.",
      omh: "Una iniciativa humanitaria cristiana y de código abierto: oración, conocimiento y misericordia transparente.",
      lumenary:
        "Una escuela de inspiración cristiana. Scientia enseña las ciencias, gratis y de código abierto para siempre, empezando por las matemáticas. Prep es preparación de exámenes de pago. Lingua, para idiomas, está en camino.",
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
          "Suecia nunca tuvo servidumbre, y tampoco la mayor parte de Finlandia. La excepción fue la Vieja Finlandia, el sureste que Rusia tomó en el siglo XVIII, donde los campesinos de las tierras concedidas a nobles rusos quedaron muy cerca de la servidumbre.",
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
      "Mi haplogrupo del cromosoma Y es [N-L665](https://www.yfull.com/tree/N-L665/), una rama de N-P43. Me identifico como estadounidense urálico (Uralic American): un estadounidense que siente parentesco con los pueblos urálicos: los udmurtos, los maris, los jantis, los mansis y los nénets, los finlandeses, los estonios y los sami, y sus muchos parientes.",
      "Un haplogrupo sigue una sola línea entre muchos antepasados, así que para mí es un hilo de herencia y parentesco, no una medida de nadie.",
    ],
  },

  sv: {
    taglineGloss: "Kristus, kod, katter.",
    mottoGloss: "Tro, hopp, kärlek: 1 Kor 13:13, på finska.",
    catBro: "Mina vänner, och varenda katt på gatan, känner mig som Cat Bro.",
    favLanguage: "Favoritprogrammeringsspråk",
    favOs: "Favoritoperativsystem",
    intro: "Jag följer Kristus, skriver kod och tar hand om katter.",
    bio: "Jag tog doktorsexamen i matematik vid Brandeis University 2019. Jag arbetade på Lowe's som data scientist och sedan senior data scientist, och 2022–2026 på MakeInfinite som lead och sedan staff software engineer, mest med [Space and Time](https://www.spaceandtime.io), särskilt [Proof of SQL](https://github.com/spaceandtimefdn/sxt-proof-of-sql) och indexering av blockkedjor. Inom öppen källkod lade jag till ORC-skrivaren i [Apache Arrow](https://arrow.apache.org/docs/python/generated/pyarrow.orc.write_table.html) (C++ och Python) och [`to_orc`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_orc.html) i pandas. Jag är enrolled agent, auktoriserad av IRS att företräda skattebetalare, och jag driver organisationerna nedan.",
    orgsTitle: "Organisationer",
    orgs: {
      gideon:
        "Ärlig programvara för skatter och pengar: e-deklaration till IRS med mera, med priser som anges från början och en människa bakom varje produkt.",
      omh: "Ett kristet humanitärt initiativ med öppen källkod: bön, kunskap och öppen barmhärtighet.",
      lumenary:
        "En kristet inspirerad skola. Scientia lär ut naturvetenskap, gratis och med öppen källkod för alltid, med början i matematik. Prep är betald provförberedelse. Lingua, för språk, är på väg.",
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
          "Sverige hade aldrig livegenskap, och inte heller större delen av Finland. Undantaget var Gamla Finland, den sydöstra del som Ryssland tog på 1700-talet, där bönderna på jord som skänkts till ryska adelsmän trycktes ned nära livegenskap.",
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
      "Min Y-kromosomhaplogrupp är [N-L665](https://www.yfull.com/tree/N-L665/), en gren av N-P43. Jag identifierar mig som uralisk amerikan (Uralic American): en amerikan med släktskap med de uraliska folken: udmurter, marier, chanter, mansier och nentser, finnar, ester och samer, och deras många släktingar.",
      "En haplogrupp följer bara en linje bland många förfäder, så för mig är den en tråd av arv och släktskap, inte ett mått på någon.",
    ],
  },

  fi: {
    taglineGloss: "Kristus, koodi, kissat.",
    mottoGloss: "1. Kor. 13:13.",
    catBro: "Ystäväni, ja jokainen kadun kissa, tuntevat minut nimellä Cat Bro.",
    favLanguage: "Lempiohjelmointikieli",
    favOs: "Lempikäyttöjärjestelmä",
    intro: "Seuraan Kristusta, kirjoitan koodia ja pidän huolta kissoista.",
    bio: "Valmistuin matematiikan tohtoriksi Brandeisin yliopistosta vuonna 2019. Työskentelin Lowe'silla data scientistina ja sitten senior data scientistina sekä vuosina 2022–2026 MakeInfinitellä lead- ja sitten staff-ohjelmistoinsinöörinä, enimmäkseen [Space and Time](https://www.spaceandtime.io) -projektissa, erityisesti [Proof of SQL](https://github.com/spaceandtimefdn/sxt-proof-of-sql):n ja lohkoketjujen indeksoinnin parissa. Avoimessa lähdekoodissa lisäsin ORC-kirjoittimen [Apache Arrow](https://arrow.apache.org/docs/python/generated/pyarrow.orc.write_table.html)'hun (C++ ja Python) ja [`to_orc`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_orc.html)-funktion pandasiin. Olen enrolled agent eli IRS:n valtuuttama veroasiamies, joka voi edustaa veronmaksajia, ja johdan alla olevia organisaatioita.",
    orgsTitle: "Organisaatiot",
    orgs: {
      gideon:
        "Rehellisiä ohjelmistoja veroihin ja raha-asioihin: sähköinen veroilmoitus Yhdysvaltain verovirastolle (IRS) ja paljon muuta. Hinnat kerrotaan heti alussa, ja jokaisen tuotteen takana on ihminen.",
      omh: "Kristillinen avoimen lähdekoodin humanitaarinen hanke: rukousta, tietoa ja läpinäkyvää laupeutta.",
      lumenary:
        "Kristillisen inspiraation koulu. Scientia opettaa luonnontieteitä maksutta ja avoimena lähdekoodina ikuisesti, alkaen matematiikasta. Prep on maksullista koevalmennusta. Kielten Lingua on tulossa.",
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
          "Ruotsissa ei koskaan ollut maaorjuutta, eikä myöskään suurimmassa osassa Suomea. Poikkeus oli Vanha Suomi, Venäjän 1700-luvulla valtaama kaakkoinen alue, jossa venäläisille aatelisille lahjoitettujen maiden talonpojat painettiin lähelle maaorjuutta.",
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
      "Y-kromosomihaploryhmäni on [N-L665](https://www.yfull.com/tree/N-L665/), joka on N-P43:n haara. Koen olevani uralilainen amerikkalainen (Uralic American): amerikkalainen, joka tuntee sukulaisuutta uralilaisiin kansoihin: udmurtteihin, mareihin, hanteihin, manseihin ja nenetseihin, suomalaisiin, virolaisiin ja saamelaisiin sekä heidän moniin sukulaiskansoihinsa.",
      "Haploryhmä seuraa vain yhtä linjaa monien esivanhempien joukossa, joten minulle se on perinnön ja sukulaisuuden lanka, ei kenenkään mittapuu.",
    ],
  },
};
