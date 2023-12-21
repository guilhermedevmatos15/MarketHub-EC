import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './Cart.scss';

// * components

// * scripts

// * contexts
import { ContextC } from '../../contexts/CartContext';

// * img

// * icons
import { MdCategory } from 'react-icons/md';

const Cart = () => {
   const Navigate = useNavigate();

   const { cart, addCart, rmCart } = useContext(ContextC);

   return (
      <div className={`Cart`}>
         <h2>Your Cart</h2>

         {cart?.length > 0 ? (
            <div className="container">
               
            </div>
         ) : (
            <div className="no-cart">
               <p className="no-cart-inform">No products in cart</p>
               <p className="cta">Visit our categories</p>
               <button className="btn" onClick={(e) => Navigate('/categories')}>
                  <MdCategory className="btn-icon" /> Categories
               </button>
            </div>
         )}
      </div>
   );
};

export default Cart;
