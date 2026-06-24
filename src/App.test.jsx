import { render, screen } from '@testing-library/react';
import App from './App';

test('renders skip link and site title', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
  expect(screen.getByRole('banner')).toHaveTextContent('The Editorial');
});

test('renders article with single h1', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /on this page/i })).toBeInTheDocument();
});
