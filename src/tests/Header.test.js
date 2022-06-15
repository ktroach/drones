import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders Home title', () => {
  render(<Home />);
  const homeTitle = screen.getByText(/Home/i);
  expect(homeTitle).toBeInTheDocument();
});
