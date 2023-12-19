import React from 'react';
import PropTypes from 'prop-types';

// * components
import CatalogOption from './CatalogOption/CatalogOption';
import CatalogCategories from './CatalogCategories/CatalogCategories';

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
               {choices.map((value, index) => (
                  <div key={index}>{value}</div>
               ))}
            </div>
         )}

         {type === 'products' && (
            <div className="catalog-choices" style={{ maxWidth }}>
               {choices.map((value, index) => (
                  <CatalogOption
                     name={value.title}
                     image={value.image}
                     key={index}
                  />
               ))}
            </div>
         )}

         {type === 'categories' && (
            <CatalogCategories className={className} maxWidth={maxWidth} />
         )}
      </section>
   );
};

Catalog.propTypes = {
   className: PropTypes.string,
   type: PropTypes.string,
   title: PropTypes.string,
   choices: PropTypes.array,
   maxWidth: PropTypes.string,
};

export default Catalog;
