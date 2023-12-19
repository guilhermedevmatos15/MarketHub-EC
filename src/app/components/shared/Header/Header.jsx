import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './Header.scss';

// * scripts

// * contexts

// * img
import Logo from '../../../assets/img/markethub-logo.png';

// * icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
   return (
      <header className="Header">
         <img src={Logo} alt="Logo MarketHub" />

         <Navigation color="dark" direction="row" gap="30px" />

         <div className="header-interations">
            <AiOutlineShoppingCart
               className="header-interations-icon header-interations-icon-shopping"
               title="Cart"
            />
         </div>

         <FiMenu className="header-icon-menu" />
      </header>
   );
};

export default Header;
