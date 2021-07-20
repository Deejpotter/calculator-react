import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react calculator text', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
