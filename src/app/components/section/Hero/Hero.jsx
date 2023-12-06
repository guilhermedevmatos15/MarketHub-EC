import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

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
                     <Link className='Link no-underline color-black' to={`product/${product.id}`}>
                        <button className="btn">
                           Shop Now <AiOutlineArrowRight className="btn-icon" />
                        </button>
                     </Link>
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
