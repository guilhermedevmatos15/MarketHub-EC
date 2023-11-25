import React, { useEffect, useState } from 'react';

// * components

// * style
import './FormOrder.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaMinus, FaPlus } from 'react-icons/fa6';

const FormOrder = ({ className, available, amount, setAmount }) => {
   const decrement = () => {
      setAmount((prevCont) => (prevCont - 1 < 1 ? 1 : prevCont - 1));
   };

   const increment = () => {
      setAmount((prevCont) =>
         prevCont + 1 > Number(available) ? Number(available) : prevCont + 1
      );
   };

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

         <button className="btn">add to cart</button>
      </form>
   );
};

export default FormOrder;
