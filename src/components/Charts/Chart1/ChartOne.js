import "./chart1styles.css";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  fetchdata,
  getStatecodes,
  getStatePopulation,
  getStateVaccinated1,
  getStateVaccinated2
} from "./chartdatafunctions";
export default function ChartOne() {
  const [statecodesArr, setstatecodesArr] = useState(null);
  const [statepopulationArr, setstatepopulationArr] = useState(null);
  const [statevaccinate1, setstatevaccinate1] = useState(null);
  const [statevaccinate2, setstatevaccinate2] = useState(null);
  const [error, setError] = useState(null);
  const limit = 5;
  const [startingPoint, setstartingPoint] = useState(0);
  const [chartReady, setchartReady] = useState(false);
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
  useEffect(() => {
    async function dataProcessing() {
      try {
        let data = await fetchdata(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        let codes = getStatecodes(data);
        let statePopulationArr = getStatePopulation(data);
        let vaccinated1Arr = getStateVaccinated1(data);
        let vaccinated2Arr = getStateVaccinated2(data);
        setstatecodesArr(codes);
        setstatepopulationArr(statePopulationArr);
        setstatevaccinate1(vaccinated1Arr);
        setstatevaccinate2(vaccinated2Arr);
        setchartReady(true);
        console.log({ chartReady });
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    }
    dataProcessing();
  }, [chartReady]);
  return (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : !chartReady ? (
        <LinearProgress />
      ) : (
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
                <Typography sx={{ typography: { xs: "body1", sm: "h6" } }}>
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
      )}
    </>
  );
}
