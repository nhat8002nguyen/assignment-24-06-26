import { renderHook, act } from '@testing-library/react';
import { useTableOfContents } from './useTableOfContents';

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

  test('scrollToHeading sets active heading immediately', () => {
    const intro = document.getElementById('intro');
    intro.scrollIntoView = vi.fn();

    const { result } = renderHook(() =>
      useTableOfContents(['intro', 'details']),
    );

    act(() => {
      result.current.scrollToHeading('intro');
    });

    expect(result.current.activeId).toBe('intro');
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
