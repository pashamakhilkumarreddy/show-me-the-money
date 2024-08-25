import React, { useEffect, useState } from 'react';
import { FetchBalanceSheet } from 'api/services/reports';
import ReportingTable from './ReportingTable';

/**
 * A functional component that renders the home page of the application.
 * It fetches the balance sheet data and displays it in a table.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */
const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchBalanceSheet = async () => {
      const { Reports = [] } = await FetchBalanceSheet();
      setData(Reports);
    };
    fetchBalanceSheet();
  }, []);

  return (
    <div className="overflow-x-auto">
      {!!data.length && <ReportingTable data={data} />}
    </div>
  );
};

export default Home;
