import React from 'react';
import { ReportingTableProps } from './ReportingTable.types';

/**
 * A functional component that renders a reporting table based on the provided data.
 *
 * @param {ReportingTableProps} data - An array of reports, each containing report metadata and rows.
 * @returns {JSX.Element} The JSX element representing the reporting table.
 */
const ReportingTable: React.FC<ReportingTableProps> = ({ data }) => {
  return (
    <div className="container">
      {data?.map(({ Rows = [], ReportTitles }, i: number) => (
        <div className="overflow-x-auto" key={i.toString()}>
          <h2 className="text-center text-4xl font-bold text-gray-800 mt-3 mb-4">
            {ReportTitles.join(' ')}
          </h2>
          <table
            key={i.toString()}
            className="min-w-full divide-y divide-gray-200"
          >
            <tbody className="bg-white divide-y divide-gray-200">
              {Rows.map(({ Title, Rows = [] }, sectionIndex: number) => {
                if (Title && Rows?.length) {
                  return (
                    <React.Fragment key={sectionIndex}>
                      <tr>
                        <td
                          colSpan={Rows?.length > 0 ? Rows[0].Cells.length : 1}
                          className="px-6 py-3 text-left text-lg font-semibold text-gray-900 bg-gray-100"
                        >
                          {Title}
                        </td>
                      </tr>
                      {Rows.map((row, rowIndex: number) => (
                        <tr
                          key={rowIndex}
                          className={
                            row.RowType === 'SummaryRow'
                              ? 'font-bold bg-gray-100'
                              : ''
                          }
                        >
                          {row.Cells.map((cell, cellIndex: number) => (
                            <td
                              key={cellIndex}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {cell.Value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ReportingTable;
