import React from 'react';

// * components

// * style
import './PromotionProduct.scss';

// * scripts

// * contexts

// * img

// * icons

const PromotionProduct = ({ type, product, hurryUp }) => {
   console.log(product);

   return (
      <>
         {type === 'small' && (
            <div className={`PromotionProduct ${type}`}>
               <p>{product.title.split(' ').slice(0, 3).join(' ')}</p>
               <h3>
                  just starting at ${product.price} {hurryUp && 'hurry up!'}
               </h3>
               <button className="btn">shop now</button>
               <img src={product.image} alt="product" />
            </div>
         )}
      </>
   );
};

export default PromotionProduct;
