import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './CartSection.scss';

// * components

// * scripts

// * contexts
import { ContextC } from '../../../contexts/CartContext';

// * img

// * icons
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CartSection = ({ setStage }) => {
   const Navigate = useNavigate();

   const { cart, calculateSubtotal } = useContext(ContextC);

   return (
      <section className="CartSection">
         {cart.length > 0 ? (
            <>
               <h2>Shopping Cart</h2>
               <p>Cart Summary</p>

               <div className="cart-products">
                  {cart.map((value, index) => (
                     <div key={index}>
                        <img
                           src={value.image}
                           alt={value.title
                              .split(' ')
                              .slice(0, 1)
                              .join(' ')
                              .replace('-', '')}
                        />
                        <div>
                           <h3>
                              {value.title
                                 .split(' ')
                                 .slice(0, 2)
                                 .join(' ')
                                 .replace('-', '')}
                           </h3>
                           <p>{value.category}</p>
                        </div>
                        <span className="amount">{value.amount}</span>
                        <span className="coust">
                           $
                           {(
                              Number(value.amount) * Number(value.price)
                           ).toFixed(2)}
                        </span>
                     </div>
                  ))}
               </div>

               <div className="cart-interactions">
                  <button className="btn" onClick={(e) => Navigate('/cart')}>
                     <FaArrowLeft className="btn-icon" /> Edit Cart
                  </button>

                  <div className="total-value">
                     <p>Subtotal: {calculateSubtotal()}</p>
                     <p>Shipping: $0</p>
                  </div>

                  <button className="btn" onClick={(e) => setStage('delivery')}>
                     Confirm <FaArrowRight className="btn-icon" />
                  </button>
               </div>
            </>
         ) : (
            <div className='no-cart'>
               <p>Sorry, there are no items in the cart</p>

               <button className="btn" onClick={(e) => Navigate('/')}>
                  Go to Home
               </button>
            </div>
         )}
      </section>
   );
};

export default CartSection;
