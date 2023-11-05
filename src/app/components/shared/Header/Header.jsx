import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './Header.scss';
import './Header_rpsv.scss';

// * scripts

// * contexts

// * img

// * icons
import {
   AiOutlineSearch,
   AiOutlineHeart,
   AiOutlineShoppingCart,
} from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
   return (
      <header className="Header">
         <img src="./img/markethub-logo.png" alt="Logo" />
         <Navigation color="dark" direction="row" gap="30px" />
         <div className="header-interations">
            <AiOutlineSearch
               className="header-interations-icon"
               title="Search"
            />
            <AiOutlineHeart
               className="header-interations-icon"
               title="Favorites"
            />
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
