import React from 'react';

import PropTypes from 'prop-types';

// * components
import FormContact from './FormContact/FormContact';
import FormOrder from './FormOrder/FormOrder';

// * style
import './Form.scss';

// * scripts

// * contexts

// * img

// * icons

const Form = ({ type, className, available }) => {
   return (
      <>
         {type === 'contact' && (
            <FormContact className={className} />
         )}

         {type === 'order' && (
            <FormOrder className={className} available={available} />
         )}
      </>
   );
};

Form.propTypes = {
   type: PropTypes.string.isRequired,
};


export default Form;
