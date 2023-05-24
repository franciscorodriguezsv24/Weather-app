import { Button } from 'react-bootstrap';
import {BiCurrentLocation} from 'react-icons/bi';

function GeoLocal({setCity}){
    const  getuserlocation = ()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {setCity(`${position.coords.latitude},${position.coords.longitude}`)});
                }
        }
return(
    <>
        <Button variant="secondary" onClick={getuserlocation} className='m-4 w-35 fs-6 p-0 border rounded-circle d-flex justify-content-center align-items-center' style={{width:'35px', height:'35px'}}>
            <BiCurrentLocation size='1.5rem'/>
        </Button>
    </>
);
}

export default GeoLocal