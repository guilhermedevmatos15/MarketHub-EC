import React from 'react';

import PropTypes from 'prop-types';

// * components
import BannerProduct from './BannerProduct/BannerProduct';

// * style
import './Banner.scss';

// * scripts

// * contexts

// * img

// * icons

const Banner = ({ className, type, product }) => {
   return (
      <>
         {type === 'product' && (
            <BannerProduct className={className} product={product} />
         )}
      </>
   );
};

Banner.propTypes = {
   className: PropTypes.string,
   type: PropTypes.string,
   product: PropTypes.object,
};

export default Banner;
