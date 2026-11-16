import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Blog posts: one Markdown file each in src/content/blog (see README.md). */
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** The language the post is written in. */
    lang: z.enum(["en", "es", "sv", "fi"]).default("en"),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
    /** For a translation: the id (file name) of the original post. */
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog };
