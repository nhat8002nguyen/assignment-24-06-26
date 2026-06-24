# Editorial Blog Layout

Responsive blog post page for a frontend take-home. One long article, sticky sidebar on desktop, TOC that tracks scroll.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 (Vite may pick another port if 5173 is busy).

Build for production:

```bash
npm run build
npm run preview
```

Tests:

```bash
npm test
```

## Deploy to Vercel

This is a static Vite app. Vercel detects it automatically — no extra config needed.

**From the Vercel dashboard**

1. Import this repo at [vercel.com/new](https://vercel.com/new).
2. Keep the defaults (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
3. Deploy. Each push to the connected branch redeploys.

**From the CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts for the first deploy; use `vercel --prod` for production.

## What I used

React + Vite for components and dev tooling. All styling is hand-written CSS with BEM-style class names — no Tailwind, no UI kit. I wanted the layout and typography to be easy to read in review without digging through a framework.

TOC scroll-sync is a small `useTableOfContents` hook built on `IntersectionObserver`. Click a link and it smooth-scrolls to the section (respects `prefers-reduced-motion`).

## How it's put together

Post content is in `src/data/post.js` as plain data. Keeps the JSX components thin and makes it simple to swap in real content later.

Components are split by area:

- `src/components/layout/` — header, footer, page grid, skip link
- `src/components/post-article/` — article shell and body renderer
- `src/components/post-sidebar/` — author card, TOC, tags

Styles live in `src/styles/` (variables, base, typography, layout, components).

On mobile, the article comes first in the DOM and the sidebar stacks underneath. On desktop, CSS Grid puts the sidebar on the left without changing that order. Sticky positioning is on `.sidebar__inner` — had to stretch the aside to the full grid row height or sticky stopped working partway through the scroll.

## Notes

I went with global CSS files instead of CSS Modules since it's a single page and everything is in one place. IntersectionObserver felt like the right fit for TOC highlighting vs. a scroll listener firing on every frame.

If I had more time: dark mode with CSS variables and a print stylesheet.
