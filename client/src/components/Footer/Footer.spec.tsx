import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders copyright message', () => {
    render(<Footer />);
    const copyrightMessage = screen.getByText(/© \d{4} Reporting App./);
    expect(copyrightMessage).toBeInTheDocument();
  });

  test('renders footer with correct class', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-blue-600');
  });
});