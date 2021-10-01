import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ChartThree({ objofDistrictdata }) {
  const [selectedState, setselectedState] = useState('Karnataka');
  const [open, setOpen] = useState(false);
  // console.log(objofDistrictdata)

  const series = [
    {
      data: objofDistrictdata[selectedState]
    }
  ];
  const options = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " %";
        }
      }
    }
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography sx={{ typography: { xs: "body1", sm: "h6" } }}>
            District vaccination rate(2nd dose)
          </Typography>
        }
        subheader="As percent of its population"
        action={
          <FormControl fullWidth>
            <InputLabel id="state-select-label">Select State</InputLabel>
            <Select
              labelId="state-select-label"
              value={selectedState}
              label="Select State"
            onChange={(e) => setselectedState(e.target.value)} 
            >
              {
                Object.keys(objofDistrictdata).map((keyname, index) => (
                  <MenuItem key={index} value={keyname}>{keyname}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={series}
          type="treemap"
          height={460}
        />
      </CardContent>
    </Card>
  );
}

export default ChartThree;
