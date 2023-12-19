import React from 'react';

import PropTypes from 'prop-types';

// * components
import FormOrder from './FormOrder/FormOrder';

// * style
import './Form.scss';

// * scripts

// * contexts

// * img

// * icons

const Form = ({ type, className, available, amount, setAmount }) => {
   return (
      <>
         {type === 'order' && (
            <FormOrder
               className={className}
               available={available}
               amount={amount}
               setAmount={setAmount}
            />
         )}
      </>
   );
};

Form.propTypes = {
   className: PropTypes.string,
   type: PropTypes.string.isRequired,
};

export default Form;
