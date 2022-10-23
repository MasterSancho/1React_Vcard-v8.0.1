import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaSms, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ShareLinks = () => {
 return (
  <Container>
   <Row>
    <Col>
     <a href='mailto:?subject=%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%9E%D7%A0%D7%94%D7%9C%20%D7%9E%D7%9B%D7%99%D7%A8%D7%94&amp;body=https%3A%2F%2Fremax.your-app.website%2Farieli-shai'>
      <FaEnvelope size={40} />
     </a>
    </Col>

    <Col>
     <a href='sms://?&amp;body=%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%9E%D7%A0%D7%94%D7%9C%20%D7%9E%D7%9B%D7%99%D7%A8%D7%94%20https%3A%2F%2Fremax.your-app.website%2Farieli-shai'>
      <FaSms size={40} />
     </a>
    </Col>

    <Col>
     <a href='https://api.whatsapp.com/send?text=*%D7%A9%D7%99%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99%20-%20%D7%9E%D7%A0%D7%94%D7%9C%20%D7%9E%D7%9B%D7%99%D7%A8%D7%94*%20https%3A%2F%2Fremax.your-app.website%2Farieli-shai'>
      <FaWhatsapp size={40} />
     </a>
    </Col>

    <Col>
     <a href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fremax.your-app.website%2Farieli-shai'>
      <FaFacebook size={40} />
     </a>
    </Col>
   </Row>
  </Container>
 );
};

export default ShareLinks;
