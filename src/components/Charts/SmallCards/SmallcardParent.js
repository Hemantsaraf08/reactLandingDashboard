import React,{useState, useEffect} from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
function SmallcardParent() {
  const [carddatastatsObj, setcarddatastatsObj]=useState(null);
  const [error, setError]=useState(null);

  useEffect(()=>{
    let currdate=new Date();
    let reqdate1=`${currdate.getMonth()+1}/${currdate.getDate()-1}/${currdate.getFullYear().toString().substr(-2)}`
    let reqdate2=`${currdate.getMonth()}/${currdate.getDate()+1}/${currdate.getFullYear().toString().substr(-2)}`
    let fetchDate=currdate.toString().split(" ").slice(0,5).join(' ');
    async function fetchdata(url){
        let data;
        try{
          let res=await axios.get(url);
          data=res.data;
          return data;
        }catch(e){
          console.log(e);
        }
        return data;
    }
    async function decodeData(){
      try{
        let data1=fetchdata("https://disease.sh/v3/covid-19/countries/India?strict=true");
        let data2=fetchdata("https://disease.sh/v3/covid-19/vaccine/coverage/countries/India?lastdays=30&fullData=false")
        let dataArr=await Promise.all([data1, data2]);
        data1=dataArr[0];
        data2=dataArr[1];
        setcarddatastatsObj({
          totalcases:data1.cases,
          todayscases:data1.todayCases,
          totaldeaths:data1.deaths,
          todaysdeaths:data1.todayDeaths,
          recoveryrate:Math.round(data1.cases*100/data1.deaths)/100,
          recoveredtoday:data1.todayRecovered,
          todaysDate: fetchDate,
          totalvaccinated:data2.timeline[reqdate1],
          vaccinationrateinc: Math.round(((data2.timeline[reqdate1]-data2.timeline[reqdate2])*10000/data2.timeline[reqdate2]))/100
        })
      }catch(e){
          console.log(e);
          setError(e.message||e);
      }
    }
    decodeData();
  },[])
    return (
        <>
            {
                error?(
                    <h2>{error}</h2>
                  ) : !carddatastatsObj ? (
                    <CircularProgress/>
                  ) : (<>
                    <Typography variant='subtitle1'>Last data fetched on: {carddatastatsObj.todaysDate}</Typography>
                    <SmallcardChild1 totalCases={carddatastatsObj.totalcases} todaysCases={carddatastatsObj.todayscases}/>
                    <SmallcardChild2 totalDeaths={carddatastatsObj.totaldeaths} todaysDeaths={carddatastatsObj.todaysdeaths}/>
                    <SmallcardChild3 totalVaccinated={carddatastatsObj.totalvaccinated} vaccinationrateinc={carddatastatsObj.vaccinationrateinc}/>
                    <SmallcardChild4 recoveryRate={carddatastatsObj.recoveryrate} recoveredToday={carddatastatsObj.recoveredtoday}/>
                  </>)
            }
        </>
    )
}

export default SmallcardParent
