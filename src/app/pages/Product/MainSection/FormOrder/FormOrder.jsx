import React, { useContext } from 'react';

// * components

// * style
import './FormOrder.scss';

// * scripts

// * contexts
import { ContextF } from '../../../../contexts/FavoritesContext';
import { ContextC } from '../../../../contexts/CartContext';

// * img

// * icons
import { FaMinus, FaPlus, FaHeart } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';

const FormOrder = ({ className, product, available, amount, setAmount, showModal, setShowModal }) => {
   const { addFavorite, rmFavorite, checkLike } = useContext(ContextF);
   const { addCart } = useContext(ContextC);

   const decrement = () => {
      setAmount((prevCont) => (prevCont - 1 < 1 ? 1 : prevCont - 1));
   };

   const increment = () =>
      setAmount((prevCont) =>
         prevCont + 1 > Number(available) ? Number(available) : prevCont + 1
      );

   return (
      <form
         className={`Form FormOrder ${className}`}
         onSubmit={(e) => e.preventDefault()}
      >
         <div className="cont-control">
            <button className="btn" onClick={(e) => decrement()}>
               <FaMinus className="icon" />
            </button>

            <span>{amount}</span>

            <button className="btn" onClick={(e) => increment()}>
               <FaPlus className="icon" />
            </button>
         </div>

         <button
            className="btn"
            onClick={(e) => {
               addCart(product, amount);
               setShowModal(true);
            }}
         >
            add to cart
         </button>

         {checkLike(product) ? (
            <button
               className="btn btn-heart active"
               onClick={(e) => rmFavorite(product)}
            >
               <FaHeart className="btn-icon" />
            </button>
         ) : (
            <button
               className="btn btn-heart"
               onClick={(e) => addFavorite(product)}
            >
               <FaRegHeart className="btn-icon" />
            </button>
         )}
      </form>
   );
};

export default FormOrder;
