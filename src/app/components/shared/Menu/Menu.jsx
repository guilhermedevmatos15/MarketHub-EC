import React from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './Menu.scss';

// * components
import Navigation from '../Navigation/Navigation';

// * scripts

// * contexts

// * img

// * icons
import { FaXmark } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Menu = ({ status, setStatus }) => {
   const Navigate = useNavigate();

   return (
      <div className={`Menu ${status && 'active'}`}>
         <FaXmark
            className="Menu-close-icon"
            onClick={(e) => setStatus(false)}
         />

         <Navigation
            fontSize="big"
            color="white"
            direction="column"
            gap="30px"
            onClick={(e) => setStatus(false)}
         />

         <AiOutlineShoppingCart
            className="cart-icon"
            title="Cart"
            onClick={(e) => {
               Navigate('cart');
               setStatus(false);
            }}
         />
      </div>
   );
};

export default Menu;
