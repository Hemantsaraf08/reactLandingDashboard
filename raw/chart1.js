import React, {useState, useEffect} from 'react'
import ReactApexChart from 'react-apexcharts'
import LinearProgress from '@mui/material/LinearProgress'
import {fetchdata, getStatecodes, getStatePopulation, getStateVaccinated1, getStateVaccinated2} from './chartdatafunctions'
export default function App() {
  const [statecodesArr, setstatecodesArr]=useState(null);
  const [statepopulationArr, setstatepopulationArr]=useState(null);
  const [statevaccinate1, setstatevaccinate1]=useState(null);
  const [statevaccinate2, setstatevaccinate2]=useState(null);
  const [error, setError]=useState(null);
  const limit=5;
  const [startingPoint, setstartingPoint]=useState(0);
  const [chartReady, setchartReady]=useState(false);
  const handleNextClick=()=>{
    console.log("handlenext ",startingPoint+limit)
    setstartingPoint(startingPoint+limit)
    setchartReady(false);
  }
  const handlePreviousClick=()=>{
    setstartingPoint(startingPoint-limit)
    setchartReady(false);
  }
  const options={
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: statecodesArr,
    },
    yaxis: {
      title: {
        text: 'Population Log Scale (Lakhs)'
      },
      logarithmic: true
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
  const series=[{
    name: 'Population',
    data: statepopulationArr
  }, {
    name: 'Vaccinated 1st dose',
    data: statevaccinate1
  }, {
    name: 'Vaccinated 2nd dose',
    data: statevaccinate2
  }]
  useEffect(()=>{
    async function dataProcessing(){
      try{
        let data=await fetchdata("https://data.covid19india.org/v4/min/data.min.json");
        let codes=getStatecodes(data);
        let statePopulationArr=getStatePopulation(data);
        let vaccinated1Arr=getStateVaccinated1(data);
        let vaccinated2Arr=getStateVaccinated2(data);
        setstatecodesArr(codes.slice(startingPoint, limit+startingPoint));
        console.log(codes.slice(startingPoint, limit+startingPoint))
        setstatepopulationArr(statePopulationArr.slice(startingPoint, limit+startingPoint));
        console.log(statePopulationArr.slice(startingPoint, limit+startingPoint))
        setstatevaccinate1(vaccinated1Arr.slice(startingPoint, limit+startingPoint))
        setstatevaccinate2(vaccinated2Arr.slice(startingPoint, limit+startingPoint))
        console.log(vaccinated2Arr.slice(startingPoint, limit+startingPoint))
        setchartReady(true)
        console.log({chartReady})
      }catch(e){
        console.log(e);
        setError(e.message);
      }
    }
    dataProcessing();
  },[startingPoint, chartReady]) 
    return (
      <>
    {
      error?<h2>{error}</h2>:
      !chartReady?<LinearProgress/>:<><div className="App">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    <button disabled={startingPoint>=32} onClick={handleNextClick}>NEXT</button>
    <button disabled={startingPoint<=4} onClick={handlePreviousClick}>PREV</button>
    </>
    }
    
    </>
  );
}
