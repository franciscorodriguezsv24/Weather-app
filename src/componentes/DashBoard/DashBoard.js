import {MdLocationPin} from 'react-icons/md'
import { getcleandate } from '../DateFormat';
import ButtonCanvas from './SearchForm';
import {useState} from 'react'
import {TbTemperatureFahrenheit, TbTemperatureCelsius} from 'react-icons/tb'
import GeoLocal from '../GeoLocal';

function DashBoard({currentWeather, setCity, temperaturefromat, setTumperature}){
    const [showForm ,  setShowForm] = useState(false)

    return(
    <>
    <div className='d-flex flex-row justify-content-between'>
    <ButtonCanvas setCity={setCity} setShowForm ={setShowForm}/>
    <GeoLocal setCity={setCity}/>
    </div>
        <div className='container text-center d-flex flex-column gap-5'>
        <div>
            <img src={`http:${currentWeather.current ? currentWeather.current.condition.icon.replace('64x64' , '128x128') :'' }`} style={{width:'200px'}} alt="weather"/>
        </div>
        <div className='title-font'>
        <p>{ currentWeather.current ?  currentWeather.current[`temp_${temperaturefromat}`] : "..." } { temperaturefromat ==='c' ? <TbTemperatureCelsius size='4rem' /> : <TbTemperatureFahrenheit  size='2rem'/>}</p>
        </div>
        <div className='primary-font'>
        {currentWeather.current ?  currentWeather.current.condition.text : "..." }
        </div>
        <div className='second-font'>
        Today . {currentWeather.location ?  getcleandate(currentWeather.location.localtime ) : "..." }
        </div>
        <div className='d-flex flex-row gap-2 justify-content-center pb-5'>
        <MdLocationPin size='2rem'/><span className='second-font'>{currentWeather.location ?  currentWeather.location.name : "..." }</span>
        </div>
        </div>
    </> 
    ) 
}

export default DashBoard;