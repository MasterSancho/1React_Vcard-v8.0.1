import { Container, Row, Col } from 'react-bootstrap';

const Divider = () => {
 return (
  <div className='text-danger p-3'>
   <Container>
    <Row>
     <Col>
      <hr />
     </Col>

     <Col>
      <h3 className='text-danger'>RE/MAX</h3>
     </Col>

     <Col>
      <hr />
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default Divider;
