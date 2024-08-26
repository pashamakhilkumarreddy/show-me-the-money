import { render, screen } from '@testing-library/react';
import ReportingTable from './ReportingTable';

describe('ReportingTable', () => {
    const data = [
        {
            ReportTitles: ['Report 1'],
            Rows: [
                {
                    Title: 'Section 1',
                    Rows: [
                        {
                            Cells: [
                                { Value: 'Cell 1' },
                                { Value: 'Cell 2' },
                            ],
                        },
                        {
                            Cells: [
                                { Value: 'Cell 3' },
                                { Value: 'Cell 4' },
                            ],
                        },
                    ],
                },
                {
                    Title: 'Section 2',
                    Rows: [
                        {
                            Cells: [
                                { Value: 'Cell 5' },
                                { Value: 'Cell 6' },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            ReportTitles: ['Report 2'],
            Rows: [
                {
                    Title: 'Section 3',
                    Rows: [
                        {
                            Cells: [
                                { Value: 'Cell 7' },
                                { Value: 'Cell 8' },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    test('renders report titles', () => {
        render(<ReportingTable data={data} />);
        expect(screen.getByText('Report 1')).toBeInTheDocument();
        expect(screen.getByText('Report 2')).toBeInTheDocument();
    });

    test('renders section titles', () => {
        render(<ReportingTable data={data} />);
        expect(screen.getByText('Section 1')).toBeInTheDocument();
        expect(screen.getByText('Section 2')).toBeInTheDocument();
        expect(screen.getByText('Section 3')).toBeInTheDocument();
    });

    test('renders table rows and cells', () => {
        render(<ReportingTable data={data} />);
        expect(screen.getByText('Cell 1')).toBeInTheDocument();
        expect(screen.getByText('Cell 2')).toBeInTheDocument();
        expect(screen.getByText('Cell 3')).toBeInTheDocument();
        expect(screen.getByText('Cell 4')).toBeInTheDocument();
        expect(screen.getByText('Cell 5')).toBeInTheDocument();
        expect(screen.getByText('Cell 6')).toBeInTheDocument();
        expect(screen.getByText('Cell 7')).toBeInTheDocument();
        expect(screen.getByText('Cell 8')).toBeInTheDocument();
    });

    test('does not render empty sections', () => {
        const dataWithEmptySection = [
            {
                ReportTitles: [],
                Rows: [
                    {
                        Title: '',
                        Rows: [],
                    },
                ],
            },
        ];
        render(<ReportingTable data={dataWithEmptySection} />);
        expect(screen.queryByText('Report 1')).not.toBeInTheDocument();
    });
});