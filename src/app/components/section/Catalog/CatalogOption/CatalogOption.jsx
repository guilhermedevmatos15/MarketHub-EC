import React from 'react';

// * components

// * style
import './CatalogOption.scss';

// * scripts

// * contexts

// * img

// * icons

const CatalogOption = ({ name, image, imageElement }) => {
   return (
      <div className="CatalogOption">
         {imageElement ? imageElement : <img src={image} alt="" />}
         <p className="option-name">{name}</p>
      </div>
   );
};

export default CatalogOption;
