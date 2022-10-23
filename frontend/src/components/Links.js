import { Col, Container, Row } from 'react-bootstrap';
import {
 FaPhone,
 FaWhatsapp,
 FaWaze,
 FaFacebook,
 FaHome,
 FaEnvelope,
 FaChrome,
 FaListUl,
 FaBlackTie,
} from 'react-icons/fa';

const Links = () => {
 return (
  <Container className='lh-1'>
   <Row className='pt-4'>
    <Col>
     <a href='https://waze.com/ul/hsv8z4c0xq'>
      <FaWaze className='text-danger' size={30} />
     </a>
     <p>נווט</p>
    </Col>

    <Col>
     <a href='mailto:arieli.shai@remax.co.il'>
      <FaEnvelope className='text-danger' size={30} />
     </a>
     <p>מייל</p>
    </Col>

    <Col>
     <a href='https://api.whatsapp.com/send?phone=9720547537573'>
      <FaWhatsapp className='text-danger' size={30} />
     </a>
     <p>וואטסאפ</p>
    </Col>

    <Col>
     <a href='tel:0547537573'>
      <FaPhone className='text-danger' size={30} />
     </a>
     <p>חייג אלי</p>
    </Col>
   </Row>

   <Row className='pt-1'>
    <Col>
     <FaChrome className='text-danger' size={30} />
     <p>אתרי עזר</p>
    </Col>

    <Col>
     <a href='https://www.remax-israel.com/arielis'>
      <FaHome className='text-danger' size={30} />
     </a>
     <p>מעגר נכסים</p>
    </Col>

    <Col>
     <a href='https://www.madlan.co.il/agent/re_agent_823uQZTpL2'>
      <FaHome className='text-danger' size={30} />
     </a>
     <p>מדלן</p>
    </Col>

    <Col>
     <a href='https://www.facebook.com/shaiarieliremax'>
      <FaFacebook className='text-danger' size={30} />
     </a>
     <p>פייסבוק</p>
    </Col>
   </Row>

   <Row className='pt-1'>
    <Col>
     <a href='http://online.flipbuilder.com/hckf/bjuu/mobile/index.html#p=1'>
      <FaListUl className='text-danger' size={30} />
     </a>
     <p className='lh-1'>המדריך למכירת נכס</p>
    </Col>

    <Col>
     <a href='https://www.remax-one.info/'>
      <FaChrome className='text-danger' size={30} />
     </a>
     <p>דף נחיתה</p>
    </Col>

    <Col>
     <a href='https://theselected.walla.co.il/item/3405214'>
      <FaChrome className='text-danger' size={30} />
     </a>
     <p>מן העיתונות</p>
    </Col>

    <Col>
     <a href='https://www.tivuch1.co.il/%D7%A1%D7%95%D7%9B%D7%9F/%D7%A9%D7%99-%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99/'>
      <FaBlackTie className='text-danger' size={30} />
     </a>
     <p>אתר המקצוענים</p>
    </Col>
   </Row>
  </Container>
 );
};

export default Links;
