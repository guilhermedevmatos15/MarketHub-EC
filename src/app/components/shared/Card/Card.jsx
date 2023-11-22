import React from 'react';
import PropTypes from 'prop-types';

// * components
import CardProduct from './CardProduct/CardProduct';
import CardProductPill from './CardProductPill/CardProductPill';

// * style

// * scripts

// * contexts

// * img

// * icons

const Card = ({ type, className, product, popUpType }) => {
   return (
      <>
         {type === 'product' && (
            <CardProduct
               product={product}
               className={className || ''}
               popUpType={popUpType || ''}
            />
         )}

         {type === 'productPill' && (
            <CardProductPill
               product={product}
               className={className || ''}
               popUpType={popUpType || ''}
            />
         )}
      </>
   );
};

Card.propTypes = {
   type: PropTypes.string.isRequired,
};

export default Card;
