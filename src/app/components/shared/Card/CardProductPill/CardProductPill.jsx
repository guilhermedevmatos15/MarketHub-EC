import React from 'react';

// * components
import Rating from '../../Rating/Rating';

// * style
import './CardProductPill.scss';

// * scripts

// * contexts

// * img

// * icons

const CardProductPill = ({ className, product }) => {
   return (
      <div className={`CardProductPill ${className && className}`}>
         <img src={product.image} alt={product.title} />

         <div className="info">
            <span className="info-title">
               {product.title.split(' ').slice(0, 3)}
            </span>

            <span className="info-price">
               {Number(product.price).toFixed(2)}
            </span>
         </div>

         <Rating rate={product.rating.rate} sizeStar="small" />
      </div>
   );
};

export default CardProductPill;
