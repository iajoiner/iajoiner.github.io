import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** An RSS feed of the blog, for feed readers. */
export const GET: APIRoute = async ({ site }) => {
  // One item per post, in its original language.
  const posts = (await getCollection("blog", (p) => !p.data.draft && !p.data.translationOf)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const base = site?.toString().replace(/\/$/, "") ?? "";
  const items = posts
    .map((p) => {
      const url = `${base}/blog/${p.id}/`;
      return `<item><title>${escape(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate>${
        p.data.summary ? `<description>${escape(p.data.summary)}</description>` : ""
      }</item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ian Alexander Joiner</title><link>${base}/blog/</link><description>Personal updates.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
