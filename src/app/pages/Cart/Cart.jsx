import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './Cart.scss';

// * components
import CartProduct from './CartProduct/CartProduct';

// * scripts

// * contexts
import { ContextC } from '../../contexts/CartContext';

// * img

// * icons
import { MdCategory } from 'react-icons/md';

const Cart = () => {
   const Navigate = useNavigate();

   const { cart, calculateSubtotal } = useContext(ContextC);

   return (
      <div className={`Cart`}>
         <h2>Your Cart</h2>

         {cart?.length > 0 ? (
            <div className="container">
               <table>
                  <thead>
                     <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>{''}</th>
                     </tr>
                  </thead>
                  <tbody>
                     {cart.map((product, index) => (
                        <CartProduct key={index} className='tableRow' product={product} />
                     ))}
                  </tbody>
               </table>

               <div className="summary">
                  <h3>Order Summary</h3>
                  <hr />
                  <p>
                     <span>Subtotal</span> <span>${calculateSubtotal()}</span>
                  </p>
                  <p>
                     <span>Shipping</span> <span>$0</span>
                  </p>
                  <hr />
                  <p className="total">
                     <span>Total</span> <span>${calculateSubtotal()}</span>
                  </p>
                  <button className="btn" onClick={(e) => Navigate('/checkout')}>Checkout</button>
               </div>
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
