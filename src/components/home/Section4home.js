import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../asset/images/testimonials-img-1.jpg";
import img2 from "../../asset/images/testimonials-img-2.jpg";
import img3 from "../../asset/images/testimonials-img-3.jpg";
import "./css/section4home.css";
const Section4home = () => {
  return (
    <Fragment>
      <div className="consec6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide className="sec6slide">
            <h1>VALUABLE LIFESTYLE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adi piscing elit. Aenean
              commodo ligula eget dolor.
              <br /> Aenean massa. Cum sociis natoque pena tibus et magnis dis
              parturient.
            </p>
            <div className="conimge">
              <img src={img1} alt="" />
              <div className="condatasec6">
                <h5>Lassa Castro</h5>
                <p>Model</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sec6slide">
            <h1>VALUABLE LIFESTYLE</h1>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut <br /> metus varius laoreet. Quisque
              rutrum. Aenean imperdiet. Etiam ultricis.
            </p>
            <div className="conimge">
              <img src={img2} alt="" />
              <div className="condatasec6">
                <h5>Andrew Smith</h5>
                <p>Hairstylist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sec6slide">
            <h1>VALUABLE LIFESTYLE</h1>
            <p>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa <br /> quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <div className="conimge">
              <img src={img3} alt="" />
              <div className="condatasec6">
                <h5> Daisy Lana</h5>
                <p>Make Up Artist</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Section4home;
