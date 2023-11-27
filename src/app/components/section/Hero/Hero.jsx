import React, { useContext } from 'react';

// * components
import Slider from '../../shared/Slider/Slider';

// * style
import './Hero.scss';

// * scripts

// * contexts
import { Context } from '../../../contexts/ProductsContext';

// * img

// * icons
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
   const { products } = useContext(Context);

   // useEffect(() => {
   //    const timer = setTimeout(() => {}, 5000);

   //    return () => {
   //       // Limpar o temporizador quando o componente for desmontado
   //       clearTimeout(timer);
   //    };
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, []);

   return (
      <section className="Hero">
         <Slider
            perView={1}
            elements={products.slice(0, 4).map((product) => (
               <div className="slider-item">
                  <div className="slider-item-content">
                     <p className="slider-item-message">sale up to 30% off</p>
                     <h2 className="slider-item-title truncate--2">
                        {product.title}
                     </h2>
                     <p className="slider-item-description truncate--3">
                        {product.description}
                     </p>
                     <button className="btn">
                        Shop Now <AiOutlineArrowRight className="btn-icon" />
                     </button>
                  </div>
                  <div className="slider-item-image">
                     <img src={product.image} alt={product.title} />
                  </div>
               </div>
            ))}
         />
      </section>
   );
};

export default Hero;
