import React from 'react';

// * components

// * style
import './Option.scss';

// * scripts

// * contexts

// * img

// * icons

const Option = ({ name, image, imageElement }) => {
   return (
      <div className="Option">
         {imageElement ? imageElement : <img src={image} alt="" />}
         <p className="option-name">{name}</p>
      </div>
   );
};

export default Option;
