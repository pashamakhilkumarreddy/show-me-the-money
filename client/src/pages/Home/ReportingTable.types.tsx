export type Cell = {
  Attributes: any[];
  Value: string;
};

export type Row = {
  RowType: 'SummaryRow' | 'DataRow';
  Cells: Cell[];
};

export type MainRow = {
  RowType: string;
  Title: string;
  Rows: Row[];
};

export interface Report {
  Fields: any[];
  ReportDate: string;
  ReportID: string;
  ReportName: string;
  ReportTitles: string[];
  ReportType: string;
  Rows: MainRow[];
  UpdatedDateUTC: string;
}

export type ReportingTableProps = {
  data: Report[];
};
