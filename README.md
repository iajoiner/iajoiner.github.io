# iajoiner.github.io

Ian Alexander Joiner's personal site: Christ, Code, Cats. Built with
[Astro](https://astro.build) and published to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

English is the original. The Spanish, Swedish and Finnish pages are machine
translations (by Claude) and say so at the bottom of every page.

## Post to the blog

1. Copy `src/content/blog/_example-post.md` to a new file in the same folder,
   named for the post, e.g. `src/content/blog/2026-11-20-first-snow.md`.
   The file name (without `.md`) becomes the address: `/blog/2026-11-20-first-snow/`.
2. Edit the top of the file:
   ```
   ---
   title: First snow
   date: 2026-11-20
   lang: en          # en, es, sv or fi: the language you wrote it in
   summary: Chloe meets snow.   # optional
   ---
   ```
   and write the post below it in Markdown.
3. Commit it (the GitHub website's "Add file" button works too). The site
   rebuilds in a minute or two. Add `draft: true` to keep a post unpublished.

Posts appear in the blog in all four languages, marked with the language they
are written in. Posts are not translated automatically.

## Add cat photos

Put photos in one of these folders:

- `src/assets/cats/chloe/`
- `src/assets/cats/margaret/`
- `src/assets/cats/street/` (cats I meet)

The file name becomes the caption, so name them like
`2026-11-16-chloe-on-the-sofa.jpg` (shown as "chloe on the sofa"; the date is
left out of the caption but sorts the newest first). JPEG, PNG, WebP and AVIF
work. The build makes small copies for the gallery and a larger one for
clicking, so phone photos are fine as they are. Check photos for location
data you don't want public: GitHub stores the originals in the repository.

## Change the words

- Home page, all four languages: `src/i18n/home.ts`
- Menus, the cats page and the blog's words: `src/i18n/strings.ts`

Change the English first, then the translations.

## Run it locally

Needs Node 24 (`.nvmrc`; Astro 7 needs Node 22.23.4 or newer).

```
nvm use
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks and builds into dist/
```
