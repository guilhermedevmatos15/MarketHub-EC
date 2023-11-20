import React from 'react';

// * components
import Rating from '../../Rating/Rating';

// * style
import './CardProduct.scss';

// * scripts

// * contexts

// * img

// * icons
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CardProduct = ({ className, product, popUpType }) => {
   return (
      <div className={`Card CardProduct ${className && className}`}>
         <img src={product.image} alt="product" />
         <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
         <p className="truncate--2">{product.description}</p>

         <div className="CardProduct-info">
            <span className="CardProduct-info-price">${product.price.toFixed(2)}</span>
            <Rating rate={product.rating.rate} />
         </div>

         <div className="CardProduct-buttons">
            <button className="btn">more details</button>
            <button className="btn">
               <AiOutlineShoppingCart className="btn-icon" />
            </button>
         </div>

         {/* PopUp for Card */}
         {
            (popUpType = 'free-shipping' ? (
               <div className="CardProduct-popUp">
                  <MdOutlineLocalShipping className="Card-popUp-icon" />
                  <span className="Card-popUp-message">Free Shipping</span>
               </div>
            ) : (
               ''
            ))
         }
      </div>
   );
};

export default CardProduct;
