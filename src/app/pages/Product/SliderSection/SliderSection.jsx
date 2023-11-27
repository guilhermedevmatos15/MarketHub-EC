import React, { useEffect, useState } from 'react';

// * components
import Slider from '../../../components/shared/Slider/Slider';
import Card from '../../../components/shared/Card/Card';

// * style
import './SliderSection.scss';

// * scripts

// * contexts

// * img

// * icons

const SliderSection = ({ products }) => {
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
      };

      window.addEventListener('resize', handleWindowSize);
      window.addEventListener('load', handleWindowSize);
   }, []);

   return (
      <div className="SliderSection">
         <h2>You may also like</h2>

         <Slider
            perView={elementsPerView}
            elements={products.slice(0, 8).map(
               (
                  product,
                  index // Agora sim enviando em forma de Card para o Slide
               ) => (
                  <Card type="product" product={product} key={index} />
               )
            )}
         />
      </div>
   );
};

export default SliderSection;
