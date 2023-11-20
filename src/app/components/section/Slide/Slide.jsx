import React from 'react';

import PropTypes from 'prop-types';

// * components

// * style
import './Slide.scss';

// * scripts

// * contexts

// * img

// * icons
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Slide = ({ type, title, elements, elementsArrData }) => {
   return (
      <section className="Slide">
         <h3 className="Slide-title">{title}</h3>

         <div className='Slide-slider'>
            {elements && elements.map((element) => element)}
         </div>

         <div className="Slide-controls">
         <MdOutlineKeyboardArrowLeft className='icon' />
         <MdOutlineKeyboardArrowRight className='icon' />
         </div>
      </section>
   );
};

Slide.propTypes = {
   type: PropTypes.string.isRequired,
};

export default Slide;
