import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const SlideshowGallery = () => {
 return (
  <Container className='d-inline-block'>
   <Row>
    <Col>
     <Carousel controls={true} fade>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_001.jpeg' alt='First slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image
        src='./assets/gallery/gallery_002.jpeg'
        alt='Second slide'
        fluid
       />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_003.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_004.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_005.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_006.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_007.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_008.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_009.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_010.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_011.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <Image src='./assets/gallery/gallery_012.jpeg' alt='Third slide' fluid />
      </Carousel.Item>
     </Carousel>
    </Col>
   </Row>
  </Container>
 );
};

export default SlideshowGallery;
