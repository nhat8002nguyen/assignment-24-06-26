import '@testing-library/jest-dom';

class IntersectionObserverMock {
  observe() {}

  unobserve() {}

  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});
