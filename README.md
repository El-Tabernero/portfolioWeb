# Portfolio

Personal developer portfolio: single page, bilingual (ES/EN), built with Vite + React.
No router, no state library, no UI framework — plain components and plain CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run lint     # oxlint
npm run preview  # serve the production build
```

## Where to edit

| What                     | File                                        |
| ------------------------ | ------------------------------------------- |
| Your name, bio, email, links | `src/data/profile.js`                    |
| Projects                 | `src/data/projects.js`                       |
| Skills                   | `src/data/skills.js`                         |
| Every UI label (ES/EN)   | `src/data/strings.js`                        |
| Colours, spacing, fonts  | `src/index.css` (`tokens` at the top)         |
| One section's styles     | `src/components/<Component>.css`             |

Everything marked `TODO` in those files is meant for you to fill in.

## Adding a project

Append one object to the `PROJECTS` array in `src/data/projects.js`:

```js
{
  id: 'mi-app-android',
  title: { es: 'Mi App Android', en: 'My Android App' },
  tagline: { es: 'Corta descripción', en: 'Short description' },
  description: { es: ['Un párrafo...'], en: ['One paragraph...'] },
  type: 'android',              // web | android | desktop | other
  status: 'wip',                // completed | wip | planned
  year: 2026,
  stack: ['Kotlin', 'Jetpack Compose'],
  image: null,                  // 'images/projects/mi-app.png', null = free placeholder
  links: { repo: 'https://github.com/...', demo: null, app: null },
  highlights: { es: ['...'], en: ['...'] },
  featured: false,
}
```

That is the whole workflow. The card, the modal, the filters and the counts update on their
own. A new `type` makes a new filter button appear as soon as one project uses it.
There is a commented-out Android template at the bottom of the file.

## Images

Drop files in `public/images/projects/` and reference them as `images/projects/<file>`
(leading `/` is added automatically in `getProjectImage`). While `image` is `null` you get
the free placeholder for the project type.

## Languages

`LanguageProvider` keeps the language in `localStorage`, updates `<html lang>`, the page
title and the meta description. Add a language by extending `src/i18n/languageContext.js`
(`LANGUAGES`, `DEFAULT_LANGUAGE`) and the matching block in `strings.js`.

## Deploying

`netlify.toml` is included (build `npm run build`, publish `dist`, SPA fallback).
Vercel detects Vite on its own and needs no config.
