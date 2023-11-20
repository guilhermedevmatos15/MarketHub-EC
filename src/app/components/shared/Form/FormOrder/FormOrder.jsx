import React from 'react';

// * components

// * style
import './FormOrder.scss';

// * scripts

// * contexts

// * img

// * icons

const FormOrder = ({ className }) => {
   return (
      <form
         className={`Form FormOrder ${className}`}
         onSubmit={(e) => e.preventDefault()}
      >
         <p>Form Order</p>
      </form>
   );
};

export default FormOrder;
