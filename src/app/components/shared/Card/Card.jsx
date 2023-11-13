import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Card.scss';

// * scripts

// * contexts

// * img

// * icons

const Card = ({ type, product, hurryUp }) => {
   return (
      <>
         {type === 'product' && (
            <div className={`Card ${type}`}>
               <p>{product.title.split(' ').slice(0, 3).join(' ')}</p>
               <h3>
                  just starting at ${product.price} {hurryUp && 'hurry up!'}
               </h3>
               <button className="btn">shop now</button>
               <img src={product.image} alt="product" />
            </div>
         )}
      </>
   );
};

Card.propTypes = {
   type: PropTypes.string.isRequired,
};

export default Card;
