import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const SlideshowRecom = () => {
 return (
  <Container className='d-inline-block'>
   <Row>
    <Col>
     <Carousel controls={true} fade>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-001.jpeg' alt='First slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-002.jpeg' alt='Second slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-003.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-004.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-005.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-006.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-007.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-008.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-009.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-010.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-011.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-012.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-013.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/recom/recom-014.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
     </Carousel>
    </Col>
   </Row>
  </Container>
 );
};

export default SlideshowRecom;
