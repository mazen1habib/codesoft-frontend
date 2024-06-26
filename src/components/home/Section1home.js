import React, { Fragment} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './css/section1home.css'
// import { Link } from 'react-router-dom';
import banner1 from '../../asset/images/main-slider-1-background.jpg'
import banner2 from '../../asset/images/main-slider-2-background.jpg'
import banner3 from '../../asset/images/main-slider-3-background.jpg'
import imagelogo from '../../asset/images/main-home-separator-img-1.png'
const Section1home = () => {
  return (
    <Fragment>
    <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 1700,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper">
           <SwiperSlide className='banner1'> 
           <div className='consec1' >
           <img src={imagelogo} alt=''/>
           <h2> ESTELLE FASHION STYLE</h2>
           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti <br/> atque somos notros corrupti quos et quas molestias sint occaecati summ.</p>
           </div> 
           <img src={banner1} alt='banner1'/>
      
           </SwiperSlide>
           <SwiperSlide className='banner2'>
           <div className='consec1' >
           <img src={imagelogo} alt=''/>
           <h2> A LOOK THAT STANDS OUT</h2>
           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti <br/> atque somos notros corrupti quos et quas molestias sint occaecati summ.</p>
           </div> 
           <img src={banner2} alt='banner2'/> 
           </SwiperSlide>
           <SwiperSlide className='banner3'> 
           <div className='consec1' >
           <img src={imagelogo} alt=''/>
           <h2> A STELLAR NEW COLLECTION</h2>
           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti <br/> atque somos notros corrupti quos et quas molestias sint occaecati summ.</p>
           </div> 
           <img src={banner3} alt='banner3'/>
           </SwiperSlide>
         </Swiper>
       </Fragment>
  )
}

export default Section1home