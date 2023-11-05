import React from 'react';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons

const Navigation = ({ color, direction, gap }) => {
   return (
      <nav className="Navigation">
         <ul
            style={{ gap }}
            className={`${color === 'dark' ? 'color--dark' : 'color--light'} ${
               direction === 'row' ? 'direction--row' : 'direction--column'
            }`}
         >
            <li>
               <a href="#">Home</a>
            </li>
            <li>
               <a href="#">Categorias</a>
            </li>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">FAQ</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
