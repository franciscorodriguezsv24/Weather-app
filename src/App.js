import './App.css';
import DashBoard from './componentes/DashBoard/DashBoard';
import NextDays from './componentes/NextDays/NextDays';
import HightLight from './componentes/Hightlights/Hightlights';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [currentWeather  , setCurrentWeather] = useState({})
  const  [nextdays  , setNextdays] = useState([])
  const [city ,  setCity] = useState('10001')
  const [temperaturefromat , setTumperature] = useState('c') 


  const getCurrentWeather  = async (city) => {
    const  url  = 'https://api.weatherapi.com/v1/current.json?key='+API_KEY+'&q='+city

    try{
        const response = await axios.get(url)
        const data = response.data;
        
        setCurrentWeather(data)
console.log(currentWeather);
    }catch{
        console.log('there is  a  problem  fetching  data ')
    }
}

  
const futureWeather = async ()=> {
  const url = 'https://api.weatherapi.com/v1/forecast.json?key='+API_KEY+'&q='+city+'&days=3&aqi=no&alerts=no'
  try{
      const  response = await axios(url) ;
      const data  = await response.data ;
      setNextdays(data.forecast.forecastday)
      
  }catch{
      console.log('there is a  problem with  api ')
  }
}


useEffect(()=> {
    getCurrentWeather(city)
    futureWeather()
} , [city])

console.log(currentWeather)
  return (
    <div className='weather d-flex flex-column row flex-sm-row' >
      <div className='weather-home col-12 col-sm-4 blue-primary'  > 
      <DashBoard currentWeather = {currentWeather} setCity={setCity} temperaturefromat = {temperaturefromat} setTumperature  = {setTumperature}/>
      </div>
      <div className='p-4 weather-highLight blue-second col-12 col-sm-8 d-flex flex-column justify-content-start gap-5'>
      <NextDays nextDay={nextdays} temperaturefromat = {temperaturefromat} setTumperature={setTumperature}/>
      <HightLight weather={currentWeather}/>
      </div>
    </div>
  );
}

export default App;
