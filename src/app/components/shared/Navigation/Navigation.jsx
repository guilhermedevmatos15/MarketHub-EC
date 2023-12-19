import React from 'react';
import { Link } from 'react-router-dom';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons

const Navigation = ({ fontSize, color, direction, gap }) => {
   return (
      <nav className="Navigation">
         <ul
            style={{ gap }}
            className={`${color === 'dark' ? 'color--dark' : 'color--light'} ${
               direction === 'row' ? 'direction--row' : 'direction--column'
            } ${
               fontSize === 'small'
                  ? 'fontSize--small'
                  : fontSize === 'big'
                  ? 'fontSize--big'
                  : ''
            }`}
         >
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/categories'>Categories</Link>
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
            <li>
               <Link to='/faq'>FAQ</Link>
            </li>
            <li>
               <Link to='/favorites'>Favorites</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
