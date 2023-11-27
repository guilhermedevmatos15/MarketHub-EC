import React from 'react';

// * components

// * style
import './Slider.scss';

// * config swiper for Slide
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// * scripts

// * contexts

// * img

// * icons

const Slider = ({ elements, elementsArrData, perView }) => {
   return (
      <div className="Slider">
         <Swiper
            slidesPerView={perView}
            pagination={{ clickable: true }}
            navigation
         >
            {elements &&
               elements.map((element, index) => (
                  <SwiperSlide key={index}>{element}</SwiperSlide>
               ))}
         </Swiper>
      </div>
   );
};

export default Slider;
