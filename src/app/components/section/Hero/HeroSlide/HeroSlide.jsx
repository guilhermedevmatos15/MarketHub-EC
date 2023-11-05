import React from 'react';

// * components

// * style
import './HeroSlide.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSlide = ({ message, title, description, image }) => {
   return (
      <div className="HeroSlide">
         <div className="hero-slide-content">
            <p className="hero-slide-message">{message}</p>
            <h2 className="hero-slide-title">{title}</h2>
            <p className="hero-slide-description">{description}</p>
            <button className="btn">
               Shop Now <AiOutlineArrowRight className="btn-icon" />
            </button>
         </div>
         <div className="hero-slide-image">
            {image}
         </div>
      </div>
   );
};

export default HeroSlide;
