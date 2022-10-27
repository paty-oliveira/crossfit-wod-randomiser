import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/are you ready to be challenged?/i);
  expect(linkElement).toBeInTheDocument();
});
