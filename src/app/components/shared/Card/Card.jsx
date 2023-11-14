import React from 'react';
import PropTypes from 'prop-types';

// * components
import CardProduct from './CardProduct/CardProduct';

// * style

// * scripts

// * contexts

// * img

// * icons

const Card = ({ data }) => {
   return (
      <>
         {data.type === 'product' && (
            <CardProduct
               className={data.className}
               product={data.product}
               popUpType={data.popUpType}
            />
         )}
      </>
   );
};

Card.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Card;
