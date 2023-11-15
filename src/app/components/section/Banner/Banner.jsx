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

const Banner = ({ data }) => {
   return (
      <>
         {data.type === 'product' && (
            <BannerProduct className={data.className} product={data.product} />
         )}
      </>
   );
};

Banner.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Banner;
