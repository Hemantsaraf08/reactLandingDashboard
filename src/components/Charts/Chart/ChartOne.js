import "./chart1styles.css";
import React, { useState} from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ChartOne({statecodesArr, statepopulationArr, statevaccinate1,statevaccinate2}) {
  const limit = 5;
  const [startingPoint, setstartingPoint] = useState(0);

  const handleNextClick = () => {
    setstartingPoint(startingPoint + limit);
  };
  const handlePreviousClick = () => {
    setstartingPoint(startingPoint - limit);
  };
  const options = {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: statecodesArr?.slice(startingPoint, limit + startingPoint)
    },
    yaxis: {
      title: {
        text: "Population Log Scale (Lakhs)",
        style: {
          fontFamily: "sans-serif",
          fontWeight: 500
        }
      },
      logarithmic: true
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Lakhs";
        }
      }
    }
  };
  const series = [
    {
      name: "Population",
      data: statepopulationArr?.slice(startingPoint, limit + startingPoint)
    },
    {
      name: "Vaccinated 1st dose",
      data: statevaccinate1?.slice(startingPoint, limit + startingPoint)
    },
    {
      name: "Vaccinated 2nd dose",
      data: statevaccinate2?.slice(startingPoint, limit + startingPoint)
    }
  ];

  return (
    <>
        <>
          <Card>
            <CardHeader
              action={
                <>
                  <Button
                    size="small"
                    style={{ marginRight: "0px" }}
                    disabled={startingPoint <= 4}
                    onClick={handlePreviousClick}
                    variant="text"
                    startIcon={<ArrowBackIosIcon />}
                  >
                    PREV
                  </Button>
                  <Button
                    size="small"
                    style={{ marginLeft: "0px" }}
                    disabled={startingPoint >= 32}
                    onClick={handleNextClick}
                    variant="text"
                    endIcon={<ArrowForwardIosIcon />}
                  >
                    NEXT
                  </Button>
                </>
              }
              title={
                <Typography variant='h6'>
                  Population vs Vaccine Coverage
                </Typography>
              }
              subheader="Indian States"
            />
            <Divider />
            <CardContent>
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={450}
              />
              <Divider />
              <Typography style={{ paddingTop: "8px" }} variant="subtitle1">
              Source: <a href="https://data.covid19india.org/documentation/v4_data.html">covid19india.org</a>
              </Typography>
            </CardContent>
          </Card>
        </>

    </>
  );
}
