import React, { useState, useEffect} from 'react'
import LinearProgress from "@mui/material/LinearProgress";
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';
import DataTable from './DataTable';
import {
    fetchdata,
    getStatecodes,
    getStatePopulation,
    getStateVaccinated1,
    getStateVaccinated2,
    getDistrictsvaccinationdata
  } from "./chartdatafunctions";


function ChartParent() {
    const [statecodesArr, setstatecodesArr] = useState(null);
  const [statepopulationArr, setstatepopulationArr] = useState(null);
  const [statevaccinate1, setstatevaccinate1] = useState(null);
  const [statevaccinate2, setstatevaccinate2] = useState(null);
  const [objofDistrictdata, setobjofDistrictdata]=useState(null);
  const [error, setError] = useState(null);
  console.log('district data',objofDistrictdata);
  const [chartReady, setchartReady] = useState(false);
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
        let objofdistrictdata=getDistrictsvaccinationdata(data);
        setstatecodesArr(codes);
        setstatepopulationArr(statePopulationArr);
        setstatevaccinate1(vaccinated1Arr);
        setstatevaccinate2(vaccinated2Arr);
        setobjofDistrictdata(objofdistrictdata);
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
            <ChartOne statecodesArr={statecodesArr} statepopulationArr={statepopulationArr} statevaccinate1={statevaccinate1} statevaccinate2={statevaccinate2}/>
            <ChartTwo statecodesArr={statecodesArr} statepopulationArr={statepopulationArr} statevaccinate2={statevaccinate2}/>
            <ChartThree objofDistrictdata={objofDistrictdata}/>
            <DataTable statecodesArr={statecodesArr} statepopulationArr={statepopulationArr} statevaccinate1={statevaccinate1} statevaccinate2={statevaccinate2}/>
          </>
        )}
        </>
    )
}

export default ChartParent
