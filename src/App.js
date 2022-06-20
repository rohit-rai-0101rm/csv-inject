import  React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Gridloading } from "./Components/Gridloading";

import "./App.css";
import { Typography } from "@mui/material";
import { height } from "@mui/system";
import csvInjectionProtector from "csv-injection-protector";
import axios from "axios";

/*const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}*/


const riskyString = "=Risky string for CSV";
const sanitizedString = csvInjectionProtector(riskyString);
console.log("sanitizedString",sanitizedString);
function App() {
  const [file,setFile]=useState('')
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    console.log(fileObj)
    setFile(fileObj)
   

}
console.log(file)
const handleSend=()=>{
  console.log(file)
  const { data } =  axios.post("API URL",
  {  file },
)
}
  //<Footer/>
  return (
    <div className="App">
     
                <input onChange={fileHandler} type="file" accept=".xlsx, .xls, .csv" />
                <button onClick={handleSend} >SEND</button>
          
     



      <div style={{ height: 60, width: "50%" }}>
        <Typography style={{ color: "white" }}>
          Copyright 2022 Highradius. All Rights Reserved.
        </Typography>
      </div>
   
    </div>
  );
}
export default App;
