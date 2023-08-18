import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="flex" className='hurry'>
      <Row>
        <Col>
        <Container className='left block'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <div className='label'>
        <Col   className='label1'><h1>KTM RC 390</h1>
        </Col>
        <Col className='label2'><h1></h1>
        </Col>
       < div className='right'>
       </div>
        
        
      </div>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <div  className='contant' >
        <Col className='contant1' >
         <h4>Starting from ₹ 3,16,163/-</h4>
        </Col>
        <Col  className='contant2' >
       
        <ul>
             <li><h5>Engine Capacity - 373.27 cc</h5></li>
             <li><h4> Mileage - 29 kmpl</h4></li>
             <li><h3>Fuel Tank Capacity-13.7 litres</h3></li>
        </ul> 
     
        </Col>
        <Col className='contant3'  >
        <h4>Add to Cart</h4>
        </Col>
      </div>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <div className='tabs'>
        <Col className='tabs1'> 
        <pre>
        <h4>Engine </h4>
        <h5>373.27 cc</h5>
       </pre>
        </Col>
        <Col className='tabs2'>
          <pre>
          <h4>BHP</h4>
          <h5> 42.9 bhp</h5>
          </pre>
          </Col>
        <Col className='tabs3'>
        <pre>
        <h4>TORQUE </h4>
        <h5>37 Nm </h5>
        </pre>
         </Col>
        <Col className='tabs4'>
        <pre>
        <h4>MAX SPEED </h4>
        <h5>200 km/h </h5>
        </pre>
         </Col>
      </div>
      
    </Container>
        
        
        
        
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;