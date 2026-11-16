import { getCollection, type CollectionEntry } from "astro:content";

import type { Lang } from "./languages";

export type Post = CollectionEntry<"blog">;

/** The original's id for a translation, or the post's own id: what the versions of one post share. */
export const groupOf = (p: Post): string => p.data.translationOf ?? p.id;

export async function publishedPosts(): Promise<Post[]> {
  return (await getCollection("blog", (p) => !p.data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** One entry per post: the version in `lang` if there is one, otherwise the original. */
export function forLanguage(posts: Post[], lang: Lang): Post[] {
  const groups = new Map<string, Post[]>();
  for (const p of posts) groups.set(groupOf(p), [...(groups.get(groupOf(p)) ?? []), p]);
  return [...groups.values()]
    .map((g) => g.find((p) => p.data.lang === lang) ?? g.find((p) => !p.data.translationOf) ?? g[0]!)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The other language versions of a post, by language. */
export function versionsOf(post: Post, posts: Post[]): Partial<Record<Lang, Post>> {
  const out: Partial<Record<Lang, Post>> = {};
  for (const p of posts) if (groupOf(p) === groupOf(post)) out[p.data.lang] = p;
  return out;
}
