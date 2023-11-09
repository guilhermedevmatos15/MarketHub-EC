import React from 'react';

// * components
import Option from '../Option/Option';

// * style
import './Options.scss';

// * scripts

// * contexts

// * img

// * icons

const Options = ({ className, title, choices }) => {
   return (
      <section className={`Options ${className}`}>
         <h2 className="options-title">{title}</h2>

         <div className="choices">
            {choices.map((value, index) => (
               <Option name={value.category} image={value.image} key={index} />
            ))}
         </div>
      </section>
   );
};

export default Options;
