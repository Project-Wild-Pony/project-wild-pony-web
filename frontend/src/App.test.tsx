import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Wild Pony header link', () => {
  render(<App />);


  const linkElement = screen.getByRole('link', { name: /Wild Pony/i });

  expect(linkElement).toBeInTheDocument();
});
