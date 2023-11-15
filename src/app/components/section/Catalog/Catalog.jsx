import React from 'react';

// * components
import CatalogOption from './CatalogOption/CatalogOption';

// * style
import './Catalog.scss';

// * scripts

// * contexts

// * img

// * icons

const Catalog = ({ type, className, title, choices, maxWidth }) => {
   return (
      <section className={`Catalog ${className}`}>
         <h2 className="catalog-title">{title}</h2>

         {!type && (
            <div className="catalog-choices" style={{ maxWidth }}>
               {choices.map((value, index) => value)}
            </div>
         )}

         {type === 'product' && (
            <div className="catalog-choices" style={{ maxWidth }}>
               {choices.map((value, index) => (
                  <CatalogOption
                     name={value.category}
                     image={value.image}
                     key={index}
                  />
               ))}
            </div>
         )}
      </section>
   );
};

export default Catalog;
