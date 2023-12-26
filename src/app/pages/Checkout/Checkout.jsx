import React, { useState } from 'react';

// * style

// * components
import CartSection from './CartSection/CartSection';
import DeliverySection from './DeliverySection/DeliverySection';
import ConfirmSection from './ConfirmSection/ConfirmSection';

// * scripts

// * contexts

// * img

// * icons
// import { FaShoppingCart, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
// import { MdLocalShipping } from 'react-icons/md';

const Checkout = () => {
   const [stage, setStage] = useState('cart');

   return (
      <div className={`Checkout`}>
         {stage === 'cart' && (
            <CartSection setStage={setStage} />
         )}
         {stage === 'delivery' && (
            <DeliverySection setStage={setStage} />
         )}
         {stage === 'confirm' && (
            <ConfirmSection setStage={setStage} />
         )}
      </div>
   );
};

export default Checkout;
