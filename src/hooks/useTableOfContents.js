import { useCallback, useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useTableOfContents(headingIds) {
  const [activeId, setActiveId] = useState(headingIds[0] ?? null);
  const clickLockIdRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef(null);

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

        if (clickLockIdRef.current) {
          return;
        }

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

    const endProgrammaticScroll = () => {
      isProgrammaticScrollRef.current = false;
    };

    const onScroll = () => {
      if (!isProgrammaticScrollRef.current && clickLockIdRef.current) {
        clickLockIdRef.current = null;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const supportsScrollEnd = 'onscrollend' in window;
    if (supportsScrollEnd) {
      window.addEventListener('scrollend', endProgrammaticScroll);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (supportsScrollEnd) {
        window.removeEventListener('scrollend', endProgrammaticScroll);
      }
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [headingIds]);

  const scrollToHeading = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    clickLockIdRef.current = id;
    isProgrammaticScrollRef.current = true;
    setActiveId(id);

    const reducedMotion = prefersReducedMotion();

    element.scrollIntoView({
      behavior: reducedMotion ? 'instant' : 'smooth',
      block: 'start',
    });

    if (scrollEndTimerRef.current) {
      clearTimeout(scrollEndTimerRef.current);
    }

    if (reducedMotion) {
      isProgrammaticScrollRef.current = false;
      return;
    }

    const finishProgrammaticScroll = () => {
      isProgrammaticScrollRef.current = false;
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = null;
      }
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', finishProgrammaticScroll, { once: true });
    }

    scrollEndTimerRef.current = setTimeout(finishProgrammaticScroll, 1000);
  }, []);

  return { activeId, scrollToHeading };
}
