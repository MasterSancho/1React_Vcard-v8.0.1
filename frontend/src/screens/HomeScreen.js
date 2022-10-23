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
  <div>
   <Image src='./assets/img/header.jpeg' alt='headerPic' fluid />
   <Links />
   <div className='addBtnBg'>
    <Button className='addBtn btn btn-success' type='button' size='lg'>
     <a href='https://res.cloudinary.com/dwycxe2md/raw/upload/v1653836188/images/%D7%90%D7%A8%D7%99%D7%A7_%D7%9C%D7%91%D7%99%D7%A0%D7%A1%D7%95%D7%9F_Remax_City_a71axa.vcf'></a>
     <FaUserPlus size={25} />{' '}
     <span className='spanAddBtn'> שמור אותי באנשי הקשר</span>
    </Button>
   </div>
   <h2 className='text-white p-3'>שתפו כרטיס ביקור</h2>
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
   {/* <iframe
    frameborder='0'
    scrolling='no'
    marginheight='0'
    marginwidth='0'
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.0704498627974!2d34.9254946155657!3d32.175374921723765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39a2ba469d87%3A0x64f5cb57ece01e1b!2sYohanan%20HaSandlar%20St%206%2C%20Kfar%20Saba!5e0!3m2!1sen!2sil!4v1666433427042!5m2!1sen!2sil'
    title='יוחנן הסנדלר 6 כפר סבא'
    aria-label='יוחנן הסנדלר 6 כפר סבא'></iframe> */}
   {/* <iframe
    frameborder='0'
    scrolling='no'
    marginheight='0'
    marginwidth='0'
    aria-hidden='true'
    tabindex='-1'
    className='iFrame'
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.0704498627974!2d34.9254946155657!3d32.175374921723765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39a2ba469d87%3A0x64f5cb57ece01e1b!2sYohanan%20HaSandlar%20St%206%2C%20Kfar%20Saba!5e0!3m2!1sen!2sil!4v1666433427042!5m2!1sen!2sil'
    title='יוחנן הסנדלר 6 כפר סבא'
    aria-label='יוחנן הסנדלר 6 כפר סבא'></iframe> */}
   <Divider />
  </div>
 );
};

export default HomeScreen;
