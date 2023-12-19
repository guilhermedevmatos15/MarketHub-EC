import React from 'react';

// * components

// * style
import './CatalogOption.scss';

// * scripts

// * contexts

// * img

// * icons

const CatalogOption = ({ name, image, imageElement, onClick }) => {
   return (
      <div className="CatalogOption" onClick={onClick ? onClick : undefined}>
         {imageElement ? imageElement : <img src={image} alt="" />}
         <p className="option-name">{name}</p>
      </div>
   );
};

export default CatalogOption;
