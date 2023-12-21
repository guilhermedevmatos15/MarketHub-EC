import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

// * style
import './CartProduct.scss';

// * components

// * scripts

// * contexts
import { Context } from '../../../contexts/ProductsContext';

// * img

// * icons
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CartProduct = ({ className, product }) => {
   const { setProducts } = useContext(Context);

   const [amount, setAmount] = useState(product?.amount);

   const decrementAmount = () => {
      setAmount((prevAmount) => {
         const newAmount = prevAmount - 1;

         setProducts((prevProducts) =>
            prevProducts.map((value) =>
               value.id === product.id ? { ...value, amount: newAmount } : value
            )
         );

         return newAmount;
      });
   };

   const incrementAmount = () => {
      setAmount((prevAmount) => {
         const newAmount = prevAmount + 1;

         setProducts((prevProducts) =>
            prevProducts.map((value) =>
               value.id === product.id ? { ...value, amount: newAmount } : value
            )
         );

         return newAmount;
      });
   };

   return (
      <tr className={`CartProduct ${className}`}>
         <td>
            <img src={product?.image} alt={product?.title} />
            <div>
               <h3 className="title">
                  {String(product?.title).split(' ').slice(0, 2).join(' ')}
               </h3>
               <span className="category">{product?.category}</span>
            </div>
         </td>
         <td>
            <span className="price">${(product?.price).toFixed(2)}</span>
         </td>
         <td>
            <div className="amount-control">
               <button className="btn" onClick={(e) => decrementAmount()}>
                  <FaMinus className="btn-icon" />
               </button>
               <span className="amount">{amount}</span>
               <button className="btn" onClick={(e) => incrementAmount()}>
                  <FaPlus className="btn-icon" />
               </button>
            </div>
         </td>
         <td>
            <span className="total">${(product?.price * product?.amount).toFixed(2)}</span>
         </td>
      </tr>
   );
};

CartProduct.propTypes = {
   className: PropTypes.string,
   product: PropTypes.object.isRequired,
};

export default CartProduct;
