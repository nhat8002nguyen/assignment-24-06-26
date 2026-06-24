# Editorial Blog Layout

A responsive blog post layout built for a frontend technical test.

## Stack

- **React + Vite** — component structure and dev tooling
- **Hand-written CSS (BEM)** — no Tailwind or UI kits; all layout and typography in `src/styles/`
- **IntersectionObserver** — TOC scroll-sync via `useTableOfContents` hook

## Architecture

- Content lives in `src/data/post.js` as structured data
- Components grouped by domain under `src/components/`:
  - `layout/` — Header, Footer, BlogLayout, SkipLink
  - `post-article/` — Article, ArticleBody
  - `post-sidebar/` — Sidebar, AuthorCard, TableOfContents, Tags
- Hooks in `src/hooks/`; styles in `src/styles/`
- Mobile DOM order: main article first, sidebar second
- Desktop: CSS Grid repositions sidebar left; `position: sticky` on `.sidebar__inner`
- TOC highlights active section with `aria-current="location"`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Test

```bash
npm test
```

## Trade-offs

- Plain CSS over CSS Modules: single page, evaluators can read all styles in one place
- IntersectionObserver over scroll listeners: better performance, less layout thrashing
- Structured post data over MDX: keeps scope small for a 2–4 hour exercise

## Next priorities

- Dark mode toggle with CSS variables
- Print stylesheet
- Deploy to Vercel/Netlify
