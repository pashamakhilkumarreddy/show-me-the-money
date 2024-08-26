import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';  // ensure 'test' is imported from 'vitest'
import Home from './Home';
import { FetchBalanceSheet } from 'api/services/reports';

vi.mock('api/services/reports', () => ({
  FetchBalanceSheet: vi.fn(() => Promise.resolve({
    Reports: [
      {
        id: 1,
        ReportName: 'Report 1',
        Rows: [
          {
            "RowType": "Section",
            "Title": "Bank",
            "Rows": [
              {
                "RowType": "Row",
                "Cells": [
                  {
                    "Value": "My Bank Account",
                    "Attributes": [
                      {
                        "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                        "Id": "account"
                      }
                    ]
                  },
                ]
              },
            ]
          }
        ]
      },
    ]
  })),
}));

describe('Home', () => {
  test('renders loading state initially', () => {
    render(<Home />);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('fetches balance sheet data on mount', async () => {
    render(<Home />);
    await waitFor(() => expect(FetchBalanceSheet).toHaveBeenCalled());
  });

  test('renders reporting table with fetched data', async () => {
    render(<Home />);
    await waitFor(() => expect(screen.getByRole('table')).toBeInTheDocument());
    expect(screen.getByText('My Bank Account')).toBeInTheDocument();
  });

  test('renders nothing if no data is fetched', async () => {
    vi.mocked(FetchBalanceSheet).mockImplementationOnce(() => Promise.resolve({ Reports: [] }));

    render(<Home />);
    await waitFor(() => expect(screen.queryByRole('table')).not.toBeInTheDocument());
  });
});
