import { useCallback, useEffect, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isScrolledToBottom() {
  return (
    window.innerHeight + window.scrollY
    >= document.documentElement.scrollHeight - 1
  );
}

function getActiveHeadingId(headingIds, visibleIds) {
  if (isScrolledToBottom()) {
    return headingIds[headingIds.length - 1] ?? null;
  }

  for (let index = headingIds.length - 1; index >= 0; index -= 1) {
    const id = headingIds[index];
    if (visibleIds.has(id)) {
      return id;
    }
  }

  return null;
}

export function useTableOfContents(headingIds) {
  const [activeId, setActiveId] = useState(headingIds[0] ?? null);

  useEffect(() => {
    if (headingIds.length === 0) {
      return undefined;
    }

    const visibleIds = new Set();

    const syncActiveHeading = () => {
      const nextActive = getActiveHeadingId(headingIds, visibleIds);
      if (nextActive) {
        setActiveId(nextActive);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            visibleIds.add(id);
          } else {
            visibleIds.delete(id);
          }
        });

        syncActiveHeading();
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    headingIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const onScroll = () => syncActiveHeading();

    window.addEventListener('scroll', onScroll, { passive: true });
    syncActiveHeading();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [headingIds]);

  const scrollToHeading = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: prefersReducedMotion() ? 'instant' : 'smooth',
      block: 'start',
    });

    setActiveId(id);
  }, []);

  return { activeId, scrollToHeading };
}

export { getActiveHeadingId, isScrolledToBottom };
