import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders deliveries link', () => {
  render(<App />);
  const linkElement = screen.getByText(/deliveries/i);
  expect(linkElement).toBeInTheDocument();
});
