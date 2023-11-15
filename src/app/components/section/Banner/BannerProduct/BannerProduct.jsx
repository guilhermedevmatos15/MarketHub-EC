import React from 'react';

// * components

// * style
import './BannerProduct.scss';

// * scripts

// * contexts

// * img

// * icons

const BannerProduct = ({ className, product }) => {
   return (
      <div className={`Banner BannerProduct ${className && className}`}>
         <div className="BannerProduct-info">
            <h2 className='truncate--2'>{product.title}</h2>
            <p className="truncate--3">{product.description}</p>
            <button className="btn">buy now</button>
         </div>

         <img src={product.image} alt={product.title} />
      </div>
   );
};

export default BannerProduct;
