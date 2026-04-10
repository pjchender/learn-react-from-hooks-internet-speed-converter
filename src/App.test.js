import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Network Speed Converter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Network Speed Converter/i);
  expect(headingElement).toBeInTheDocument();
});
