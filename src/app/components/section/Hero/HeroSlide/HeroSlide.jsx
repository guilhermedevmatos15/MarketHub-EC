import React from 'react';

// * components

// * style
import './HeroSlide.scss';
import './HeroSlide_rpsv.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSlide = ({ title, description, image, id, currentIndex }) => {
   return (
      <div className={`HeroSlide ${currentIndex === id ? 'active' : ''}`}>
         <div className="hero-slide-content">
            <p className="hero-slide-message">sale up to 30% off</p>
            <h2 className="hero-slide-title truncate--2">{title}</h2>
            <p className="hero-slide-description truncate--3">{description}</p>
            <button className="btn">
               Shop Now <AiOutlineArrowRight className="btn-icon" />
            </button>
         </div>
         <div className="hero-slide-image">{image}</div>
      </div>
   );
};

export default HeroSlide;
