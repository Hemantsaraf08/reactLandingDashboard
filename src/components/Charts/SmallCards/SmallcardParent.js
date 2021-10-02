import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SmallcardChild3 from './SmallcardChild3';
import SmallcardChild1 from './SmallcardChild1';
import SmallcardChild2 from './SmallcardChild2';
import SmallcardChild4 from './SmallcardChild4';
import './smallcardstyles.css'
function SmallcardParent() {
  const [carddatastatsObj, setcarddatastatsObj] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let currdate = new Date();
    let reqdate1;
    let reqdate2;
    if (currdate.getDate() - 1) {
      reqdate1 = `${currdate.getMonth() + 1}/${currdate.getDate() - 1}/${currdate.getFullYear().toString().substr(-2)}`
      reqdate2 = `${currdate.getMonth()}/${currdate.getDate() + 1}/${currdate.getFullYear().toString().substr(-2)}`
    } else {
      //date minus 1 gives 0; so go to last date of prev. month
      let correctdate = new Date(currdate.getFullYear(), currdate.getMonth(), 0).getDate()
      reqdate1 = `${currdate.getMonth()}/${correctdate}/${currdate.getFullYear().toString().substr(-2)}`
      reqdate2 = `${currdate.getMonth()}/${currdate.getDate() + 1}/${currdate.getFullYear().toString().substr(-2)}`
    }

    let fetchDate = currdate.toString().split(" ").slice(0, 5).join(' ');

    async function fetchdata(url) {
      let data;
      try {
        let res = await axios.get(url);
        data = res.data;
        return data;
      } catch (e) {
        console.log(e);
      }
      return data;
    }
    async function decodeData() {
      try {
        let data1 = fetchdata("https://disease.sh/v3/covid-19/countries/India?strict=true");
        let data2 = fetchdata("https://disease.sh/v3/covid-19/vaccine/coverage/countries/India?lastdays=30&fullData=false")
        let dataArr = await Promise.all([data1, data2]);
        data1 = dataArr[0];
        data2 = dataArr[1];
        setcarddatastatsObj({
          totalcases: data1.cases,
          todayscases: data1.todayCases,
          totaldeaths: data1.deaths,
          todaysdeaths: data1.todayDeaths,
          recoveryrate: Math.round(data1.recovered * 10000 / data1.cases) / 100,
          recoveredtoday: data1.todayRecovered,
          todaysDate: fetchDate,
          totalvaccinated: data2.timeline[reqdate1],
          vaccinationrateinc: Math.round(((data2.timeline[reqdate1] - data2.timeline[reqdate2]) * 10000 / data2.timeline[reqdate2])) / 100
        })
      } catch (e) {
        console.log(e);
        setError(e.message || e);
      }
    }
    decodeData();
  }, [])
  return (
    <>
      {
        error ? (
          <h2>{error}</h2>
        ) : !carddatastatsObj ? (
          <div style={{width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <CircularProgress />
          </div>
        ) : (<>
          <Grid item xs={12} md={3}>
            <Paper>
              <SmallcardChild1 totalCases={carddatastatsObj.totalcases} todaysCases={carddatastatsObj.todayscases} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>
              <SmallcardChild2 totalDeaths={carddatastatsObj.totaldeaths} todaysDeaths={carddatastatsObj.todaysdeaths} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>
              <SmallcardChild3 totalVaccinated={carddatastatsObj.totalvaccinated} vaccinationrateinc={carddatastatsObj.vaccinationrateinc} />
            </Paper>
          </Grid><Grid item xs={12} md={3}>
            <Paper>
              <SmallcardChild4 recoveryRate={carddatastatsObj.recoveryrate} recoveredToday={carddatastatsObj.recoveredtoday} />
            </Paper>
          </Grid>


        </>)
      }
    </>
  )
}

export default SmallcardParent
