import React, { useEffect, useState } from 'react';

// * components

// * style
import './Slide.scss';

// * config swiper for Slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

// * scripts

// * contexts

// * img

// * icons

const Slide = ({ title, elements, elementsArrData }) => {
   const [elementsPerView, setElementsPerView] = useState(3);

   useEffect(() => {
      const handleWindowSize = () => {
         if (window.innerWidth < 1300 && window.innerWidth >= 800) {
            setElementsPerView(2);
         } else if (window.innerWidth < 800) {
            setElementsPerView(1);
         } else {
            setElementsPerView(3);
         }
      }

      window.addEventListener('resize', handleWindowSize);
      window.addEventListener('load', handleWindowSize);
   }, []);

   return (
      <section className="Slide">
         <h3 className="Slide-title">{title}</h3>

         <Swiper
            slidesPerView={elementsPerView}
            pagination={{ clickable: true }}
            navigation
         >
            {elements &&
               elements.map((element, index) => (
                  <SwiperSlide key={index}>{element}</SwiperSlide>
               ))}
         </Swiper>
      </section>
   );
};

export default Slide;
