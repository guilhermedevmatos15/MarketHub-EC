import React, { useState } from 'react';

import PropTypes from 'prop-types';

// * components

// * style
import './Accordion.scss';

// * scripts

// * contexts

// * img

// * icons
import { IoIosArrowDown } from 'react-icons/io';

const Accordion = ({ title, message, className }) => {
   const [open, setOpen] = useState(false);

   const handleClick = () => {
      setOpen((e) => !e);
   };

   return (
      <div className={`Accordion ${className}`}>
         <div className="title" onClick={(e) => handleClick()}>
            <h3>{title}</h3>
            <IoIosArrowDown className={`icon ${open && 'active'}`} />
         </div>

         {open && (
            <div className="text">
               <p>{message}</p>
            </div>
         )}
      </div>
   );
};

Accordion.propTypes = {
   title: PropTypes.string.isRequired,
   message: PropTypes.string.isRequired,
};

export default Accordion;
