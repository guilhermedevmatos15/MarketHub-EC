import React, { useContext, useEffect, useState } from 'react';

// * style

// * components
import CatalogOption from '../CatalogOption/CatalogOption';

// * scripts

// * contexts
import { Context } from '../../../../contexts/ProductsContext';

// * img

// * icons

const CatalogCategories = ({ className, maxWidth }) => {
   const { products, categories } = useContext(Context);

   // ? Categories
   const [productsForCategories, setProductsForCategories] = useState([]);

   useEffect(() => {
      const newProducts = Array(4).fill(null);

      for (let i in categories) {
         if (categories[i] !== undefined) {
            const category = categories[i];

            for (let product of products) {
               if (product.category === category && newProducts[i] === null) {
                  newProducts[i] = product;
               }
            }
         }
      }

      setProductsForCategories(newProducts);
   }, [products, categories]);

   return (
      <div className="catalog-choices" style={{ maxWidth }}>
         {productsForCategories.map((value, index) => (
            <CatalogOption
               name={value.category}
               image={value.image}
               key={index}
            />
         ))}
      </div>
   );
};

export default CatalogCategories;
