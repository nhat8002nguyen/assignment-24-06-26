export const post = {
  title: 'Slow Mornings in a Loud City',
  publishedAt: 'June 24, 2026',
  publishedAtISO: '2026-06-24',
  readingTime: '6 min read',
  cover: {
    src: 'https://picsum.photos/seed/lisbon-morning/1200/675',
    alt: 'Sunlight falling across a small café table with an open notebook and a cup of coffee',
    width: 1200,
    height: 675,
  },
  author: {
    name: 'Maya Chen',
    bio: 'Essayist and former magazine editor. Writes about cities, habit, and the quiet parts of everyday life.',
    avatar: 'https://picsum.photos/seed/maya-chen/96/96',
  },
  tags: ['Slow living', 'Cities', 'Ritual', 'Reading', 'Notes'],
  toc: [
    { id: 'the-first-hour', label: 'The first hour', level: 2 },
    { id: 'a-table-by-the-window', label: 'A table by the window', level: 2 },
    { id: 'three-small-rules', label: 'Three small rules', level: 2 },
    { id: 'light-before-noise', label: 'Light before noise', level: 3 },
    { id: 'what-stayed', label: 'What stayed', level: 2 },
    { id: 'before-you-leave', label: 'Before you leave', level: 2 },
  ],
  sections: [
    {
      type: 'heading',
      id: 'the-first-hour',
      level: 2,
      text: 'The first hour',
    },
    {
      type: 'paragraph',
      text: 'Cities are built for speed. Alarms, feeds, delivery apps, the pleasant ping of someone needing something now. I moved to one anyway, and for a long time I tried to keep up with it before breakfast. That was a mistake.',
    },
    {
      type: 'paragraph',
      text: 'The mornings that felt best were never the busiest. They were the ones where nothing happened for a while — where I could hear the kettle and not much else. This is a note about protecting that hour, not as a luxury, but as the one part of the day that still belongs to you.',
    },
    {
      type: 'heading',
      id: 'a-table-by-the-window',
      level: 2,
      text: 'A table by the window',
    },
    {
      type: 'paragraph',
      text: 'I started going to the same café on Tuesdays and Thursdays. Same table when I could get it, angled toward the street but not the door. Regulars have a way of lowering the social temperature of a room. You stop performing readiness and simply sit.',
    },
    {
      type: 'blockquote',
      text: 'Routine is not the opposite of spontaneity. Often it is the condition that makes noticing possible.',
    },
    {
      type: 'paragraph',
      text: 'I brought a paper notebook, never the work laptop. The rule was simple: one page of anything. Observations, a sentence I overheard, a list of things I kept meaning to look up. Some entries were useless. A few turned into essays. Most simply made the rest of the day feel less reactive.',
    },
    {
      type: 'heading',
      id: 'three-small-rules',
      level: 2,
      text: 'Three small rules',
    },
    {
      type: 'paragraph',
      text: 'I do not think everyone needs the same ritual. I do think most people can defend a short one. These are the three that survived my various attempts at being a more organized person:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'No phone until the first cup is finished',
        'One physical object on the table — book, notebook, printout',
        'Leave before the room gets loud',
      ],
    },
    {
      type: 'heading',
      id: 'light-before-noise',
      level: 3,
      text: 'Light before noise',
    },
    {
      type: 'paragraph',
      text: 'The h3 in the table of contents is deliberate. Nested sections matter in long reads. On a small screen you want the story first; on a wide one you want a sidebar that helps you orient without shouting over the text.',
    },
    {
      type: 'paragraph',
      text: 'Morning light does something similar. It arrives before the city fully switches on. Pay attention then and you remember that the day has a shape before your calendar assigns one.',
    },
    {
      type: 'heading',
      id: 'what-stayed',
      level: 2,
      text: 'What stayed',
    },
    {
      type: 'paragraph',
      text: 'After a month, the useful part was not the notebook itself. It was the proof that I could begin without checking whether anyone else had begun first. The café helped because it was outside my apartment, where the dishes and the open tabs could pretend to be urgent.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Better focus before noon, even on messy days',
        'Fewer “quick checks” that turned into half an hour',
        'A clearer sense of what actually needed a reply',
      ],
    },
    {
      type: 'code',
      language: 'text',
      text: 'Morning note template\n\nDate:\nOne thing I want to finish:\nOne thing I will ignore until afternoon:\nOne line I do not want to forget:',
    },
    {
      type: 'heading',
      id: 'before-you-leave',
      level: 2,
      text: 'Before you leave',
    },
    {
      type: 'paragraph',
      text: 'If you take one idea from this, let it be small enough to try tomorrow. Pick a window of time, defend it once, and notice how the rest of the day responds. Loud cities do not get quieter because you ask nicely. But you can still choose the first sound you listen to.',
    },
    {
      type: 'paragraph',
      text: 'I still live in the same place. The café changed owners. The table by the window is sometimes taken. The habit remains — not perfectly, not every day, but enough that I trust it again. That is usually what a good routine offers: not control, but a place to start.',
    },
  ],
};
