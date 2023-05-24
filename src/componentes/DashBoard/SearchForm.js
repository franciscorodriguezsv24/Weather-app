
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {AiOutlineSearch} from 'react-icons/ai' 
import {TbMathGreater} from 'react-icons/tb'
import axios from 'axios';

function ButtonCanvas({setCity, setShowForm}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const API_KEY = process.env.REACT_APP_API_KEY

    const [ searchValue , setSearchValue] = useState('')
    const  [ results , setResults] = useState([])
    const [warning  , setWarning] = useState('')


    const  searchResult = async () => {
        const url = 'https://api.weatherapi.com/v1/search.json?key='+API_KEY+'&q='+searchValue
        try{
            if(searchValue.trim() === ''){
            return setWarning('Search input can not be empty')
            }
            const  response = await axios(url)
            const  data = response.data;
            setResults(data)
            setSearchValue('')
            
            }catch{
            console.log('no search')
        }
    }
    const  handleSelectedLocation = (x) => {
        setCity(x)
        setShowForm(false)
    }

    return (
    <>
        <Button variant="primary" onClick={handleShow} className="bg-secondary m-4 w-35 fs-6 fw-lighter border border-dark-subtle" >
        Search for places
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" className="blue-primary">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title> Search your city</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <AiOutlineSearch className='position-absolute z-1' style={{left: "32px", top:"90px" }}/>
        <InputGroup className="mb-3 position-relative'">
        <Form.Control 
            placeholder= 'search location'
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className='ps-5 blue-primary'
            value={searchValue} 
            onChange={(e)=> {setSearchValue(e.target.value)}}
        />

        <Button variant="outline-secondary" id="button-addon2" className='bg-primary text-white' onClick={searchResult}>
            Search
        </Button>
        </InputGroup>
    <div className='d-flex flex-column gap-4 mt-5'>

    {
                
                results.map((result , index) => {
                    return (
                        <Button key={index} onClick={()=> {handleSelectedLocation(result.url)}} className='d-flex flex-row w-100 justify-content-between align-items-center p-3 blue-primary border border-light-subtle '>
                        <p className='m-0'>{result.name}</p>
                        <p className='text-gray-400 m-0'>{result.country}</p>
                        <TbMathGreater/>
                        </Button>
                    )
                })
            }
    </div>
        </Offcanvas.Body>
        </Offcanvas>
    </>
    );
}

export default ButtonCanvas;