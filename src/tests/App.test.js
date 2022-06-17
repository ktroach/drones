import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders deliveries link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deliveries/i);
  expect(linkElement).toBeInTheDocument();
});
