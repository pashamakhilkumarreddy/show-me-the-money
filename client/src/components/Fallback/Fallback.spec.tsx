import { render, screen } from '@testing-library/react';
import Fallback from './Fallback';

describe('Fallback', () => {
  test('renders loading message', () => {
    render(<Fallback />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });
});