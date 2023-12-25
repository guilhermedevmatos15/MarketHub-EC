import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// * style
import './CartProduct.scss';

// * components

// * scripts

// * contexts
import { Context } from '../../../contexts/ProductsContext';
import { ContextC } from '../../../contexts/CartContext';

// * img

// * icons
import { FaMinus, FaPlus, FaRegCircleXmark } from 'react-icons/fa6';

const CartProduct = ({ className, product }) => {
   const Navigate = useNavigate();

   const { setProducts } = useContext(Context);
   const { rmCart } = useContext(ContextC);

   const [amount, setAmount] = useState(product?.amount);

   useEffect(() => {
      setProducts((prevProducts) =>
         prevProducts.map((value) =>
            value.id === product.id ? { ...value, amount } : value
         )
      );
   }, [product.id, amount, setProducts]);

   const decrementAmount = () => {
      setAmount((prevAmount) => Math.max(0, prevAmount - 1));
   };

   const incrementAmount = () => {
      setAmount((prevAmount) => prevAmount + 1);
   };

   return (
      <tr className={`CartProduct ${className && className}`}>
         <td>
            <div onClick={(e) => Navigate('/product/' + product.id)}>
               <img src={product?.image} alt={product?.title} />
               <div>
                  <h3 className="title">
                     {String(product?.title).split(' ').slice(0, 2).join(' ')}
                  </h3>
                  <span className="category">{product?.category}</span>
               </div>
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
            <span className="total">
               ${(product?.price * product?.amount).toFixed(2)}
            </span>
         </td>
         <td>
            <FaRegCircleXmark
               className="rm-icon"
               onClick={(e) => rmCart(product)}
            />
         </td>
      </tr>
   );
};

CartProduct.propTypes = {
   className: PropTypes.string,
   product: PropTypes.object.isRequired,
};

export default CartProduct;
