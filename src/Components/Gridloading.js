import {Grid,Box,CssBaseline} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useEffect, useState } from 'react';
import * as React from 'react';

import { getData} from '../Services/dataloading';

export function Gridloading () {
    const[data,setData]= useState([]);
    useEffect(async ()=>
    {
        setData(await getData())
    },[]);
 
    const columns=[{field:"sl_no",headerName:"Sl no",width: 70},{field:"business_code",headerName:"Business Code",width: 150},{field:"cust_number",headerName:"Customer Number",width: 150},{field:"clear_date",headerName:"Clear Date",width: 150},{field:"buisness_year",headerName:"Bussiness Year",width: 150},{field:"doc_id",headerName:"Document Id",width: 150},{field:"posting_date",headerName:"Posting Date",width: 150},{field:"document_create_date",headerName:"Document Create Date",width: 170},{field:"due_in_date",headerName:"Due In Date",width: 150},{field:"invoice_currency",headerName:"Invoice Curency",width: 150},{field:"document_type",headerName:"Document Type",width: 150},{field:"posting_id",headerName:"Posting Id",width: 150},{field:"total_open_amount",headerName:"Total Open amount",width: 150},{field:"baseline_create_date",headerName:"Baseline Create Date",width: 160},{field:"cust_payment_terms",headerName:"Customer Payment Terms",width: 180},{field:"invoice_id",headerName:"Invoice Id",width: 150}];
    
    return <>
     
  
     <div style={{ height: 650, width: '100%',color:'white',background:"transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box "}}
     >
        <DataGrid style={{color:'white'}}
          rows={data}
          columns={columns}
          getRowId ={(row) => row.sl_no}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection 
          />
      </div>
       
        
        
    
    </>
}
//export default Gridloading;