import axios from 'axios'
let ans={
  AN: 'Andaman islands',
  AP: 'AndhraPradesh',
  AR: 'ArunachalPrad..',
  AS: 'Assam',
  BR: 'Bihar',
  CH: 'Chandigarh',
  CT: 'Chhattisgarh',
  DN: 'D&N Haveli',
  DD: 'Daman and Diu',
  DL: 'Delhi',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'HimachalPradesh',
  JK: 'Jammu&Kashmir',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PY: 'Puducherry',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  TT: 'TT',
  UP: 'Uttar Pradesh',
  UT: 'Uttarakhand',
  WB: 'West Bengal'
}
export const fetchdata=async (url)=>{
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
export const getStatecodes=(data)=>{
  let codesArr=[];
  let noOfStates=0;
  for(let key in data){
    let topush=ans[key]!==undefined?ans[key]:"couldn't find";
    codesArr.push(topush)
    noOfStates+=1;
  }
  // console.log({noOfStates});
  return codesArr;
}
export const getStatePopulation=(data)=>{
  let populationArr=[];
  for(let key in data){
    let topush=Math.round(data[key].meta?.population/100000)||1;
    populationArr.push(topush);
  }
  return populationArr
}
export const getStateVaccinated1=(data)=>{
  let vaccinated1Arr=[];
  for(let key in data){
    let topush=Math.round(data[key].total?.vaccinated1/100000)||1;
    vaccinated1Arr.push(topush);
  }
  return vaccinated1Arr;
}

export const getStateVaccinated2=(data)=>{
  let vaccinated2Arr=[];
  for(let key in data){
    let topush=Math.round(data[key].total?.vaccinated2/100000)||1;
    vaccinated2Arr.push(topush);
  }
  return vaccinated2Arr;
}