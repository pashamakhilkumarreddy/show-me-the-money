import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './PageNotFound';

describe('NotFoundPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
  });

  it('renders the 404 header', () => {
    expect(screen.getByText('404')).toBeDefined();
  });

  it('renders the "Page Not Found" text', () => {
    expect(screen.getByText('Page Not Found')).toBeDefined();
  });

  it('renders the error message', () => {
    expect(
      screen.getByText('Sorry, the page you are looking for does not exist.')
    ).toBeDefined();
  });

  it('renders a "Go Home" button', () => {
    const goHomeButton = screen.getByText('Go Home');
    expect(goHomeButton).toBeDefined();
  });
});
