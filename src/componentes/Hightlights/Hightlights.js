import { Button, Col, Container, Row } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';
import {TbLocationFilled} from "react-icons/tb";

function HightLight({weather}){
    const now = weather.current ? weather.current.humidity : '';
return(
    <>
    <div className="container">
        <h4>Today's Hightlights</h4>
    </div> 
    <Container>
        <Row xs={{ cols:1, span: 1 }} sm={{ cols: 2, span: 2}} className="g-3 d-flex flex-row align-items-stretch">
            <Col>
            <div className="p-3 border blue-primary border-0 text-center" style={{height:"240px"}}>
                <p>wind status</p>
                <div className="d-flex flex-row justify-content-center align-item-center gap-2 ">
                <h1 className="hightlight-font">{weather.current ? weather.current.wind_mph : ''}</h1>
                <span className = 'align-self-center'>mph</span>
                </div>
                <div className="d-flex flex-row justify-content-center gap-3">
                <Button className="border rounded-circle px-2 py-1 bg-secondary text-center"><TbLocationFilled/></Button>
                <p className="align-self-center m-0">{weather.current ? weather.current.wind_dir : ''}</p>
                </div>
            </div>
            </Col>
            <Col>
            <div className="p-3 border blue-primary border-0 text-center">
                <p>Humidity</p>
                <h2 className="hightlight-font">{now}%</h2>
                <div className="d-flex flex-row justify-content-between">
                    <a>0</a>
                    <a>50</a>
                    <a>100</a>
                </div>
                <ProgressBar variant="warning" className="bg-white" now={now}/>
                <p className="d-flex justify-content-end m-0">%</p>
            </div>
            </Col>
            <Col>
            <div className="p-3 border blue-primary border-0 text-center"> 
                <p className="">Visibility</p>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="hightlight-font">{weather.current ? weather.current.vis_miles : ''}  </h2>
                <h2>miles</h2>
                </div>
            
            </div>
            </Col>
            <Col>
            <div className="p-3 border blue-primary border-0 text-center ">
                <p>Air Pressure</p>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h2 className="hightlight-font">{weather.current ? weather.current.pressure_in : ''} </h2> 
                <h2>mb</h2>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
    </>
)
}

export default HightLight