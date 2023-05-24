import {Button} from "react-bootstrap"
import {TbTemperatureCelsius} from 'react-icons/tb'
import {TbTemperatureFahrenheit} from 'react-icons/tb'
import { getcleandate } from '../DateFormat'



function NextDays({nextDay , temperaturefromat, setTumperature}){

console.log(nextDay);

    return(
        <>
        <div className="container d-flex flex-column gap-5">
            <div className="centigrados d-flex flex-row justify-content-end gap-2">
            <Button onClick={() => { setTumperature('c') }} className={ temperaturefromat === 'c' ? 'rounded-circle px-2 py-1 bg-secondary border border-0' : ''}><TbTemperatureCelsius size={25} color={ temperaturefromat ==='c' ? 'white' :'black' } /></Button>
            <Button onClick={() => { setTumperature('f') }} className={ temperaturefromat === 'f' ? ' rounded-circle px-2 py-1 bg-secondary border border-0' : '' } ><TbTemperatureFahrenheit color={ temperaturefromat ==='f' ? 'white' :'black' }  size={25}/> </Button>
            </div>
            <div className=" row perDay d-flex flex-row gap-3 justify-content-center justify-content-sm-evenly">

            {nextDay.map((future, index)=>(
                <div key={index} className="blue-primary text-center d-flex flex-column col-sm-6" style={{width:"145px", height: "180px"}}>
                <p className="m-0 pt-2">{ index == 0 ? 'Today' : future.date}</p>
                <img src={future.day.condition.icon.replace('64x64' , '128x128')} alt="weather" style={{width:"100px"}}/>
                <p className="degrees d-flex flex-row justify-content-center gap-2">
                    <a>{ future.day[`maxtemp_${temperaturefromat}`]}</a>{ temperaturefromat ==='c' ? <TbTemperatureCelsius/> : <TbTemperatureFahrenheit />}
                    <a>{ future.day[`mintemp_${temperaturefromat}`] }</a> { temperaturefromat ==='c' ? <TbTemperatureCelsius/> : <TbTemperatureFahrenheit />}
                </p>
            </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default NextDays;