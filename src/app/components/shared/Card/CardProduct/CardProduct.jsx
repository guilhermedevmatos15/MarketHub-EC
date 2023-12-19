import React from 'react';
import { Link } from 'react-router-dom';

// * components
import Rating from '../../Rating/Rating';

// * style
import './CardProduct.scss';

// * scripts
import scrollToTop from '../../../../utils/scrollToTop';

// * contexts

// * img

// * icons
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const CardProduct = ({ className, product, popUpType }) => {
   return (
      <div className={`Card CardProduct ${className && className}`}>
         <img src={product.image} alt="product" />
         <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
         <p className="truncate--2">{product.description}</p>

         <div className="CardProduct-info">
            <span className="CardProduct-info-price">
               ${product.price.toFixed(2)}
            </span>
            <Rating rate={product.rating.rate} />
         </div>

         <div className="CardProduct-buttons">
            <Link
               to={`/product/${product.id}`}
               className="Link no-underline"
               onClick={(e) => {
                  scrollToTop();
               }}
            >
               <button className="btn">more details</button>
            </Link>

            <button className="btn">
               <FaRegHeart className="btn-icon" />
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
