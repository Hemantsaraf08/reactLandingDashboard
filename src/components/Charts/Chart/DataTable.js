import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'State Name', width: 150,sortable:false },
  {field: 'population', headerName: 'Population', width: 150, type: 'number', description: 'Population (in Lakhs)'},
  { field: 'v1', headerName: 'Vaccine dose1', width: 150, type: 'number', description: 'Vaccine Dose1 (in Lakhs)'},
  { field: 'v2', headerName: 'Vaccine dose2', width: 150, type: 'number', description: 'Vaccine Dose2 (in Lakhs)'},
  {
    field: 'rate',
    headerName: 'Vaccine rate',
    description: 'Ratio of vaccine 2nd dose & population',
    type: 'number',
    width: 150,
  },
];



export default function DataTable({statecodesArr, statepopulationArr,statevaccinate1,statevaccinate2}) {
  const [tableloading, settableloading]=useState(true);
  let rows=[];
  for(let i=0;i<statecodesArr.length;i++){
    if(statevaccinate2[i]>1&&statecodesArr[i]!=='TT'){
       rows.push({
         id: statecodesArr[i],
         population: statepopulationArr[i],
         v1: statevaccinate1[i],
         v2: statevaccinate2[i],
         rate: Math.round((statevaccinate2[i]*10000/statepopulationArr[i]))/100
       }) 
    }else{
      continue;
    }
  } 
  useEffect(() => {
    settableloading(false);
  }, [])
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant='h6'>
            Tabular Data for Indian States
          </Typography>
        }
      />

      <CardContent style={{ height: 470, width: 800, margin: 'auto'}}>
      <Box width={{xs:'300px',sm:'400px', md:'100%'}} height={'100%'}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        loading={tableloading}
        />
        </Box>
        </CardContent>
    </Card>
  );
}
