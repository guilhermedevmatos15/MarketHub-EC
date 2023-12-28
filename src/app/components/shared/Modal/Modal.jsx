import React from 'react';

import PropTypes from 'prop-types';

// * style
import './Modal.scss';

// * components

// * scripts

// * contexts

// * img

// * icons
import { FaXmark } from 'react-icons/fa6';

const Modal = ({ className, show, setShow, title, message, close }) => {
   return (
      <div
         className={`modal-bg ${show && 'active'}`}
         onClick={close ? (e) => setShow(false) : (e) => ''}
      >
         <div
            className={`Modal ${className && className}`}
            onClick={(e) => e.stopPropagation()}
         >
            <FaXmark
               className="Modal-close-icon"
               onClick={(e) => setShow(false)}
               style={{
                  display: close ? 'absolute' : 'none',
               }}
            />

            <h3 className="title">{title}</h3>

            <span className="message">{message}</span>
         </div>
      </div>
   );
};

Modal.propTypes = {
   className: PropTypes.string,
};

export default Modal;
