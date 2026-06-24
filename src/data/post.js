export const post = {
  title: 'Building Accessible Editorial Layouts with Modern CSS',
  publishedAt: 'June 24, 2026',
  readingTime: '8 min read',
  cover: {
    src: 'https://picsum.photos/seed/editorial-cover/1200/675',
    alt: 'Minimal desk with notebook and coffee cup in soft morning light',
    width: 1200,
    height: 675,
  },
  author: {
    name: 'Alex Rivera',
    bio: 'Frontend engineer writing about layout, typography, and inclusive design.',
    avatar: 'https://picsum.photos/seed/author-avatar/96/96',
  },
  tags: ['CSS', 'Accessibility', 'React', 'Layout', 'Typography'],
  toc: [
    { id: 'introduction', label: 'Introduction', level: 2 },
    { id: 'mobile-first-structure', label: 'Mobile-first structure', level: 2 },
    { id: 'grid-and-sticky-sidebar', label: 'Grid and sticky sidebar', level: 2 },
    { id: 'scroll-sync-toc', label: 'Scroll-sync TOC', level: 2 },
    { id: 'nested-details', label: 'Nested details', level: 3 },
    { id: 'accessibility-checklist', label: 'Accessibility checklist', level: 2 },
  ],
  sections: [
    {
      type: 'heading',
      id: 'introduction',
      level: 2,
      text: 'Introduction',
    },
    {
      type: 'paragraph',
      text: 'Editorial layouts reward restraint. The reader should notice the words first — typography, spacing, and hierarchy do the heavy lifting. This article walks through a responsive blog pattern: main content first on small screens, a sticky sidebar on desktop, and a table of contents that tracks your scroll position.',
    },
    {
      type: 'paragraph',
      text: 'We will use semantic HTML, hand-written CSS with BEM naming, and a small React hook powered by IntersectionObserver. No utility frameworks — just deliberate choices you can explain in a code review.',
    },
    {
      type: 'heading',
      id: 'mobile-first-structure',
      level: 2,
      text: 'Mobile-first structure',
    },
    {
      type: 'paragraph',
      text: 'Start with a single column. The article comes before the sidebar in the DOM so mobile users reach the content immediately. Sidebars are supplementary; on a phone they belong below the story, not above it.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Header with site title',
        'Main article with title, meta, cover, and body',
        'Aside with author, TOC, and tags',
        'Footer',
      ],
    },
    {
      type: 'blockquote',
      text: 'Good layout is invisible until it breaks. Mobile-first ordering prevents the most common failure: burying the article under navigation chrome.',
    },
    {
      type: 'heading',
      id: 'grid-and-sticky-sidebar',
      level: 2,
      text: 'Grid and sticky sidebar',
    },
    {
      type: 'paragraph',
      text: 'At the desktop breakpoint, CSS Grid places the sidebar in column one and the article in column two while keeping DOM order unchanged. Position sticky on the sidebar inner wrapper keeps author info and the TOC visible during long reads.',
    },
    {
      type: 'code',
      language: 'css',
      text: '.page__grid {\n  display: grid;\n  grid-template-columns: min(17.5rem, 28%) 1fr;\n  gap: var(--space-12);\n}\n\n.sidebar__inner {\n  position: sticky;\n  top: var(--space-6);\n}',
    },
    {
      type: 'heading',
      id: 'scroll-sync-toc',
      level: 2,
      text: 'Scroll-sync TOC',
    },
    {
      type: 'paragraph',
      text: 'IntersectionObserver watches heading elements as they enter a scroll zone. The matching TOC link receives aria-current="location" and an active class. Clicking a link smooth-scrolls to the section unless the user prefers reduced motion.',
    },
    {
      type: 'heading',
      id: 'nested-details',
      level: 3,
      text: 'Nested details',
    },
    {
      type: 'paragraph',
      text: 'Level-three headings appear indented in the TOC. The observer treats h2 and h3 equally — whichever heading is most visible becomes active.',
    },
    {
      type: 'heading',
      id: 'accessibility-checklist',
      level: 2,
      text: 'Accessibility checklist',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'One h1 per page; logical heading order',
        'Skip link to main content',
        'Real anchor links in the TOC',
        'Visible focus styles on interactive elements',
        'Sufficient color contrast for text and active states',
      ],
    },
    {
      type: 'paragraph',
      text: 'Ship the basics well before reaching for clever JavaScript. A sticky sidebar and scroll-sync TOC are enhancements on top of a solid, readable foundation.',
    },
  ],
};
