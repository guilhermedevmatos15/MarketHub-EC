import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const Header = ({ showMenu, setShowMenu }) => {
   const Navigate = useNavigate();

   return (
      <header className="Header">
         <img src={Logo} alt="Logo MarketHub" />

         <Navigation color="dark" direction="row" gap="30px" />

         <div className="header-interations">
            <AiOutlineShoppingCart
               className="header-interations-icon"
               title="Cart"
               onClick={(e) => Navigate('cart')}
            />
         </div>

         <FiMenu className="header-icon-menu" onClick={(e) => setShowMenu(true)} />
      </header>
   );
};

export default Header;
