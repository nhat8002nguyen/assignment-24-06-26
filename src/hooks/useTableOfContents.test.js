import { renderHook, act } from '@testing-library/react';
import {
  useTableOfContents,
  getActiveHeadingId,
  isScrolledToBottom,
} from './useTableOfContents';

describe('getActiveHeadingId', () => {
  const headingIds = [
    'scroll-sync-toc',
    'nested-details',
    'accessibility-checklist',
  ];

  test('prefers the last visible heading in document order', () => {
    const visibleIds = new Set(['nested-details', 'accessibility-checklist']);

    expect(getActiveHeadingId(headingIds, visibleIds)).toBe(
      'accessibility-checklist',
    );
  });

  test('activates the last heading when scrolled to the bottom', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 800,
    });
    window.scrollY = 200;

    expect(isScrolledToBottom()).toBe(true);
    expect(getActiveHeadingId(headingIds, new Set(['nested-details']))).toBe(
      'accessibility-checklist',
    );
  });
});

describe('useTableOfContents', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <h2 id="intro">Intro</h2>
      <h2 id="details">Details</h2>
    `;
  });

  test('returns scrollToHeading function', () => {
    const { result } = renderHook(() =>
      useTableOfContents(['intro', 'details']),
    );
    expect(typeof result.current.scrollToHeading).toBe('function');
  });

  test('scrollToHeading scrolls element into view', () => {
    const intro = document.getElementById('intro');
    intro.scrollIntoView = vi.fn();

    const { result } = renderHook(() =>
      useTableOfContents(['intro', 'details']),
    );

    act(() => {
      result.current.scrollToHeading('intro');
    });

    expect(intro.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('scrollToHeading uses instant behavior when reduced motion preferred', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    const intro = document.getElementById('intro');
    intro.scrollIntoView = vi.fn();

    const { result } = renderHook(() =>
      useTableOfContents(['intro', 'details']),
    );

    act(() => {
      result.current.scrollToHeading('intro');
    });

    expect(intro.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'instant',
      block: 'start',
    });
  });
});
