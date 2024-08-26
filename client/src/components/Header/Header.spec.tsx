import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { HeaderLinks } from 'config';

describe('Header', () => {
  test('renders header with correct class', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-blue-600');
  });

  test('renders app title', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const title = screen.getByText('Reporting App');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-2xl');
    expect(title).toHaveClass('font-bold');
  });

  test('renders navigation links', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(HeaderLinks.length);
    HeaderLinks.forEach((link, i) => {
      expect(links[i]).toHaveAttribute('href', link.href);
      expect(links[i]).toHaveTextContent(link.name);
    });
  });
});