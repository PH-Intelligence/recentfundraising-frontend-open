import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { supabase } from './supabaseClient';

function DataGridForCompanies () {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCompanyData();
  }, []);

  async function getCompanyData() {
    const { data } = await supabase
    .from('FundingRoundsDemo')
    .select()
    .order('earliest_date', { ascending: false })
    setData(data)
    console.log("data: ", data);
  }

  const [pageSize, setPageSize] = React.useState(10);

  const columns = [
    // { field: "id", headerName: "id", width: 90 },
    { field: "earliest_date", headerName: "Date", width: 150 },
    { field: "funding_amount", headerName: "Amount", width: 250 },
    { field: "funding_round", headerName: "Round", width: 200 },
    { field: "company_name", headerName: "Company", width: 250 },
  ]

  const rows = data.map((row) => ({
    id: row.id,
    earliest_date: row.earliest_date,
    funding_amount: ('$' + row.funding_amount),
    funding_round: row.funding_round,
    company_name: row.company_name,
  }))

  return (
    <div style={{ height: 600, width: "100%", display: 'flex' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50]}
        pagination
      />
    </div>
  );

}

export default DataGridForCompanies;