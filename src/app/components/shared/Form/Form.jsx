import React from 'react';

import PropTypes from 'prop-types';

// * components
import FormContact from './FormContact/FormContact';

// * style
import './Form.scss';

// * scripts

// * contexts

// * img

// * icons

const Form = ({ type, className }) => {
   return (
      <>
         {type === 'contact' && (
            <FormContact className={className} />
         )}
      </>
   );
};

Form.propTypes = {
   type: PropTypes.string.isRequired,
};


export default Form;
