import type { Lang } from "./languages";

/** Words of the site's frame (navigation, cats page, blog), per language. */
export interface Strings {
  nav: { home: string; blog: string; cats: string; misc: string };
  languages: string;
  siteNav: string;
  skip: string;
  email: string;
  machineTranslated: string;
  description: string;
  cats: {
    title: string;
    intro: string;
    chloe: string;
    margaret: string;
    street: string;
    empty: string;
  };
  blog: {
    title: string;
    intro: string;
    empty: string;
    all: string;
    writtenIn: Record<Lang, string>;
  };
}

export const STRINGS: Record<Lang, Strings> = {
  en: {
    nav: { home: "Home", blog: "Blog", cats: "Cats", misc: "Miscellaneous" },
    languages: "Languages",
    siteNav: "Site",
    email: "Email",
    skip: "Skip to content",
    machineTranslated: "",
    description: "Ian Alexander Joiner: Christ, Code, Cats. Organizations, a blog and cat photos.",
    cats: {
      title: "Cats",
      intro: "Chloe and Margaret, and the cats I meet along the way.",
      chloe: "Chloe",
      margaret: "Margaret",
      street: "Cats I meet",
      empty: "No photos yet.",
    },
    blog: {
      title: "Blog",
      intro: "Personal updates.",
      empty: "No posts yet.",
      all: "All posts",
      writtenIn: { en: "In English", es: "In Spanish", sv: "In Swedish", fi: "In Finnish" },
    },
  },
  es: {
    nav: { home: "Inicio", blog: "Blog", cats: "Gatos", misc: "Miscelánea" },
    languages: "Idiomas",
    siteNav: "Sitio",
    email: "Correo",
    skip: "Ir al contenido",
    machineTranslated: "Traducción automática del inglés hecha por Claude (una IA). Las páginas en inglés son el original.",
    description: "Ian Alexander Joiner: Cristo, código, gatos. Organizaciones, un blog y fotos de gatos.",
    cats: {
      title: "Gatos",
      intro: "Chloe y Margaret, y los gatos que encuentro por el camino.",
      chloe: "Chloe",
      margaret: "Margaret",
      street: "Gatos que encuentro",
      empty: "Todavía no hay fotos.",
    },
    blog: {
      title: "Blog",
      intro: "Novedades personales.",
      empty: "Todavía no hay entradas.",
      all: "Todas las entradas",
      writtenIn: { en: "En inglés", es: "En español", sv: "En sueco", fi: "En finés" },
    },
  },
  sv: {
    nav: { home: "Hem", blog: "Blogg", cats: "Katter", misc: "Övrigt" },
    languages: "Språk",
    siteNav: "Webbplats",
    email: "E-post",
    skip: "Hoppa till innehållet",
    machineTranslated: "Maskinöversatt från engelska av Claude (en AI). De engelska sidorna är originalet.",
    description: "Ian Alexander Joiner: Kristus, kod, katter. Organisationer, en blogg och kattbilder.",
    cats: {
      title: "Katter",
      intro: "Chloe och Margaret, och katterna jag möter på vägen.",
      chloe: "Chloe",
      margaret: "Margaret",
      street: "Katter jag möter",
      empty: "Inga bilder än.",
    },
    blog: {
      title: "Blogg",
      intro: "Personliga uppdateringar.",
      empty: "Inga inlägg än.",
      all: "Alla inlägg",
      writtenIn: { en: "På engelska", es: "På spanska", sv: "På svenska", fi: "På finska" },
    },
  },
  fi: {
    nav: { home: "Etusivu", blog: "Blogi", cats: "Kissat", misc: "Sekalaista" },
    languages: "Kielet",
    siteNav: "Sivusto",
    email: "Sähköposti",
    skip: "Siirry sisältöön",
    machineTranslated: "Claude-tekoälyn konekääntämä englannista. Englanninkieliset sivut ovat alkuperäiset.",
    description: "Ian Alexander Joiner: Kristus, koodi, kissat. Organisaatiot, blogi ja kissakuvia.",
    cats: {
      title: "Kissat",
      intro: "Chloe ja Margaret sekä kissat, joita tapaan matkan varrella.",
      chloe: "Chloe",
      margaret: "Margaret",
      street: "Kissoja, joita tapaan",
      empty: "Ei vielä kuvia.",
    },
    blog: {
      title: "Blogi",
      intro: "Henkilökohtaisia kuulumisia.",
      empty: "Ei vielä kirjoituksia.",
      all: "Kaikki kirjoitukset",
      writtenIn: { en: "Englanniksi", es: "Espanjaksi", sv: "Ruotsiksi", fi: "Suomeksi" },
    },
  },
};
