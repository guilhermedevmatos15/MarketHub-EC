import React from 'react';

// * components

// * style
import './BannerProduct.scss';
import { Link } from 'react-router-dom';

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
            <Link className='Link no-underline color-white' to={`product/${product.id}`}>
               <button className="btn">buy now</button>
            </Link>
         </div>

         <img src={product.image} alt={product.title} />
      </div>
   );
};

export default BannerProduct;
