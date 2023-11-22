import React from 'react';

// * components

// * style
import './Rating.scss';

// * scripts
import setAccordingly from '../../../utils/setAccordingly';

// * contexts

// * img

// * icons
import { MdOutlineStarBorder, MdOutlineStar } from 'react-icons/md';

const Rating = ({ rate, sizeStar, className }) => {
   const rateCeil = Math.ceil(rate);

   const sizeStarOptions = ['small', 'big'];

   // Fazendo uma gambiarra aqui...
   const arrayStarsFill = Array.from({ length: rateCeil });
   const arrayStartsBorder = Array.from({ length: 5 - rateCeil });

   return (
      <div
         className={`Rating ${setAccordingly(sizeStar, sizeStarOptions)} ${
            className && className
         }`}
      >
         {arrayStarsFill.map((_, index) => (
            <MdOutlineStar
               className="Rating-star Rating-star-fill"
               key={index}
            />
         ))}

         {arrayStartsBorder.map((_, index) => (
            <MdOutlineStarBorder
               className="Rating-star Rating-star-border"
               key={index}
            />
         ))}
      </div>
   );
};

export default Rating;
