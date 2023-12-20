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

const Form = ({ className, type, product, available, amount, setAmount }) => {
   return (
      <>
         {type === 'order' && (
            <FormOrder
               className={className}
               product={product}
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
