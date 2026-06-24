export const post = {
  title: 'JavaScript That Reads Like a Sentence',
  publishedAt: 'June 24, 2026',
  publishedAtISO: '2026-06-24',
  readingTime: '7 min read',
  cover: {
    src: 'https://picsum.photos/seed/js-editorial/1200/675',
    alt: 'Developer workspace with an open laptop showing code and a mug of coffee',
    width: 1200,
    height: 675,
  },
  author: {
    name: 'Jordan Lee',
    bio: 'Staff engineer and technical writer. Cares about JavaScript, API design, and code that the next person can actually follow.',
    avatar: 'https://picsum.photos/seed/jordan-lee/96/96',
  },
  tags: ['JavaScript', 'Async', 'Readability', 'Patterns', 'Web APIs'],
  toc: [
    { id: 'why-readability-wins', label: 'Why readability wins', level: 2 },
    { id: 'promises-in-plain-language', label: 'Promises in plain language', level: 2 },
    { id: 'async-await-in-practice', label: 'async/await in practice', level: 2 },
    { id: 'errors-that-stay-visible', label: 'Errors that stay visible', level: 3 },
    { id: 'small-modules', label: 'Small modules, clear boundaries', level: 2 },
    { id: 'what-to-leave-out', label: 'What to leave out', level: 2 },
  ],
  sections: [
    {
      type: 'heading',
      id: 'why-readability-wins',
      level: 2,
      text: 'Why readability wins',
    },
    {
      type: 'paragraph',
      text: 'JavaScript gives you a lot of rope. You can chain ternaries until the page loads sideways, or you can write something a teammate understands on a Monday morning. Editorial code — the kind you are proud to paste into a review — usually favors the second path.',
    },
    {
      type: 'paragraph',
      text: 'Readable JavaScript is not about dumbing things down. It is about making control flow obvious. Names that describe intent. Functions that do one job. Async code that reads top to bottom instead of bouncing through callbacks. The browser does not care about any of this; people do.',
    },
    {
      type: 'heading',
      id: 'promises-in-plain-language',
      level: 2,
      text: 'Promises in plain language',
    },
    {
      type: 'paragraph',
      text: 'A Promise is a placeholder for a value that might not exist yet. Fetching JSON, reading a file, waiting on user permission — all of these return promises because the answer arrives later. The useful mental model is a receipt: you get the receipt immediately, the meal comes when the kitchen finishes.',
    },
    {
      type: 'blockquote',
      text: 'If you cannot explain what a function returns without saying “eventually,” it probably returns a Promise.',
    },
    {
      type: 'paragraph',
      text: 'Chaining with .then() works, but nested handlers get hard to scan quickly. That is less a failure of Promises and more a signal that the next layer of syntax — async functions — might be the better tool for the job.',
    },
    {
      type: 'heading',
      id: 'async-await-in-practice',
      level: 2,
      text: 'async/await in practice',
    },
    {
      type: 'paragraph',
      text: 'async/await does not replace Promises. It lets you write Promise-based code as if it were synchronous. Each await pauses the function until the value settles, without blocking the main thread. The page stays responsive; your source file stays linear.',
    },
    {
      type: 'code',
      language: 'javascript',
      text: 'async function loadEditorialPost(slug) {\n  const response = await fetch(`/api/posts/${slug}`);\n\n  if (!response.ok) {\n    throw new Error(`Failed to load post: ${response.status}`);\n  }\n\n  const post = await response.json();\n  return post;\n}\n\nloadEditorialPost(\'readable-js\')\n  .then((post) => renderArticle(post))\n  .catch((error) => showError(error.message));',
    },
    {
      type: 'paragraph',
      text: 'Notice the shape: fetch, guard, parse, return. No pyramid of callbacks. Error handling can live in one catch block or bubble to a caller that knows how to display it. That separation is what makes the pattern editorial-friendly — each line earns its place.',
    },
    {
      type: 'heading',
      id: 'errors-that-stay-visible',
      level: 3,
      text: 'Errors that stay visible',
    },
    {
      type: 'paragraph',
      text: 'Nested headings belong in long technical essays too. Here the point is narrow: silent failures are worse than loud ones. An empty catch block is a footnote that says “something went wrong, but we decided not to say what.” Prefer throwing, returning a Result type, or at minimum logging with enough context to debug later.',
    },
    {
      type: 'heading',
      id: 'small-modules',
      level: 2,
      text: 'Small modules, clear boundaries',
    },
    {
      type: 'paragraph',
      text: 'Split by responsibility, not by file size alone. One module fetches data. Another renders HTML or JSX. A third handles scroll behavior or table-of-contents state. When each file answers a single question — “where does the post live?” “who paints the DOM?” — reviews get faster and regressions get easier to spot.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Keep side effects at the edges (fetch, DOM, storage)',
        'Pass plain data structures through the middle',
        'Export one obvious entry point per module',
      ],
    },
    {
      type: 'paragraph',
      text: 'Modern bundlers make splitting cheap. The cost is naming things well enough that imports read like an outline. import { loadEditorialPost } from \'./api/posts.js\' tells a story. import { doStuff } from \'./utils.js\' does not.',
    },
    {
      type: 'heading',
      id: 'what-to-leave-out',
      level: 2,
      text: 'What to leave out',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Clever one-liners that save characters but cost comprehension',
        'Implicit coercion when an explicit comparison reads clearer',
        'Abstractions you only use once',
        'Framework magic you cannot trace in devtools',
      ],
    },
    {
      type: 'paragraph',
      text: 'JavaScript will keep adding features. Optional chaining, nullish coalescing, structured cloning — each one removes a little boilerplate. The editorial test stays the same: can someone who did not write this file follow it with a cup of coffee and no Slack context?',
    },
    {
      type: 'paragraph',
      text: 'Write for that person. The runtime is already on your side; clarity is the part you still have to bring.',
    },
  ],
};
