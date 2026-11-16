/** The site's languages. English is the original; the others are machine translations. */
export const LANGS = ["en", "es", "sv", "fi"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  es: "Español",
  sv: "Svenska",
  fi: "Suomi",
};

export const TRANSLATED: readonly Lang[] = ["es", "sv", "fi"];

export type Page = "home" | "blog" | "cats" | "misc";

/** The path of a page in a language: English at the root, the others under /es/, /sv/, /fi/. */
export function pathFor(lang: Lang, page: Page): string {
  const prefix = lang === "en" ? "/" : `/${lang}/`;
  return page === "home" ? prefix : `${prefix}${page}/`;
}

export function isLang(v: unknown): v is Lang {
  return typeof v === "string" && (LANGS as readonly string[]).includes(v);
}
