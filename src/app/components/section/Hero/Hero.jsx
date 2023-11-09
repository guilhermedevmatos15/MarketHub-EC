import React, { useContext, useEffect, useState } from 'react';

// * components
import HeroSlide from './HeroSlide/HeroSlide';

// * style
import './Hero.scss';
import './Hero_rpsv.scss';

// * scripts

// * contexts
import { Context } from '../../../contexts/ProductsContext';

// * img

// * icons
import { BsCircle, BsFillCircleFill } from 'react-icons/bs';

const Hero = () => {
   const { products } = useContext(Context);

   const productsSlides = products.slice(0, 5);

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const timer = setTimeout(() => {
         if (currentIndex + 1 === productsSlides.length) {
            setCurrentIndex(0);
         } else {
            setCurrentIndex(currentIndex + 1);
         }
      }, 5000);

      return () => {
         // Limpar o temporizador quando o componente for desmontado
         clearTimeout(timer);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentIndex]);

   return (
      <section className="Hero">
         <div className="hero-slider">
            {productsSlides.map((product, index) => (
               <HeroSlide
                  title={product.title}
                  description={product.description}
                  image={<img src={product.image} alt={product.title} />}
                  id={index}
                  currentIndex={currentIndex}
                  key={product.id}
               />
            ))}

            <div className="hero-slider-controls">
               {productsSlides.map((value, index) => (
                  <div
                     className={`hero-slider-controls-control ${
                        currentIndex === index ? 'active' : ''
                     }`}
                     key={index}
                  >
                     {currentIndex === index ? (
                        <BsFillCircleFill className="hero-slider-controls-control-icon" />
                     ) : (
                        <BsCircle
                           className="hero-slider-controls-control-icon"
                           onClick={(e) => setCurrentIndex(index)}
                        />
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Hero;
