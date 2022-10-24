import SwiperCore, { Navigation, Pagination, Scrollbar, Ally } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import images from '../data/images';

const Slider = () => {
 return (
  <div>
   <Swiper slidesPerView={1} pagination={{ clickable: true }}>
    {images.image.map((img, index) => (
     <SwiperSlide key={index}>
      <div
       style={{
        background: `img(${images.image[index]}) center no-repeat`,
       }}
       className='swiperSlideDiv'></div>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
};

export default Slider;
