import { render, screen } from '@testing-library/react';
import {DeliveryService} from '../../components/DeliveryService';

test('renders the title', () => {
  render(<DeliveryService />);
  const title = screen.getByText(/Drone Delivery Service/i);
  expect(title).toBeInTheDocument();
});
