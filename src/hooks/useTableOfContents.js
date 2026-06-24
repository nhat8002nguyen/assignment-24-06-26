import { useCallback, useEffect, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useTableOfContents(headingIds) {
  const [activeId, setActiveId] = useState(headingIds[0] ?? null);

  useEffect(() => {
    if (headingIds.length === 0) {
      return undefined;
    }

    const visibleIds = new Set();

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

        const nextActive = headingIds.find((id) => visibleIds.has(id));
        if (nextActive) {
          setActiveId(nextActive);
        }
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

    return () => observer.disconnect();
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
