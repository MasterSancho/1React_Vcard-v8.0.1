import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaUserPlus } from 'react-icons/fa';
import About from '../components/About';
import Divider from '../components/Divider';
import Links from '../components/Links';
import Map from '../components/Map';
import ShareLinks from '../components/ShareLinks';
import SlideshowGallery from '../components/SlideshowGallery';
import SlideshowRecom from '../components/SlideshowRecom';

const HomeScreen = () => {
 return (
  <>
   <Image src='./assets/img/header.jpeg' alt='headerPic' fluid />
   <div className='backgroundBody'>
    <Links />
    <div className='addBtnBg'>
     <Button className='addBtn btn btn-success' type='button' size='lg'>
      <a href='https://res.cloudinary.com/dwycxe2md/raw/upload/v1653836188/images/%D7%90%D7%A8%D7%99%D7%A7_%D7%9C%D7%91%D7%99%D7%A0%D7%A1%D7%95%D7%9F_Remax_City_a71axa.vcf'></a>
      <FaUserPlus size={25} />{' '}
      <span className='spanAddBtn'> שמור אותי באנשי הקשר</span>
     </Button>
    </div>
    <h2 className='text-white pt-3'>שתפו כרטיס ביקור</h2>
    <ShareLinks />
    <Divider />
    <SlideshowGallery />
    <Divider />
    <About />
    <Divider />
    <h2>לקוחות ממליצים</h2>
    <SlideshowRecom />
    <Divider />
    <Map />
    <Divider />
   </div>
  </>
 );
};

export default HomeScreen;
