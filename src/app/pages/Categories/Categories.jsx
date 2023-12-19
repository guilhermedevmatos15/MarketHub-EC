import React from 'react';

// * style
import './Categories.scss';

// * components
import Catalog from '../../components/section/Catalog/Catalog';

// * scripts

// * contexts

// * img

// * icons

const Categories = () => {
   return (
      <div className={`Categories`}>
         <Catalog
            className="categories"
            type="categories"
            title="Categories"
            maxWidth="900px"
         />
      </div>
   );
};

export default Categories;
