import React from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function ChartTwo({ statecodesArr, statepopulationArr, statevaccinate2 }) {
  const objArr = [];
  for (let i = 0; i < statecodesArr?.length; i++) {
    if (statepopulationArr[i] > 25) {
      objArr.push({
        x: statecodesArr[i],
        y:
          Math.round((statevaccinate2[i] * 10000) / statepopulationArr[i]) / 100
      });
    }
  }
  const series = [
    {
      data: objArr
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
      }
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
          <Typography variant='h6'>
            Vaccine 2nd Dose Coverage
          </Typography>
        }
        subheader="percent of state population"
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={series}
          type="treemap"
          height={485}
        />
      </CardContent>
    </Card>
  );
}

export default ChartTwo;
