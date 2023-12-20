import React from 'react';
import { useNavigate } from 'react-router-dom';

// * components

// * style
import './Error.scss';

// * scripts

// * contexts

// * img
import ErrorImage from '../../assets/img/undraw_page_not_found_re_e9o6.svg';

// * icons

const Error = () => {
   const Navigation = useNavigate();

   return (
      <div className="Error">
         <img src={ErrorImage} alt="Error 404" />

         <div className="text">
            <h2>404</h2>
            <p>Oops! Page not Found</p>
            <button className="btn" onClick={(e) => Navigation('/')}>
               go back home
            </button>
         </div>
      </div>
   );
};

export default Error;
