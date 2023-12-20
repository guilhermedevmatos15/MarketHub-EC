import React from 'react';

// * contexts
import ProductsContext from './ProductsContext';
import FavoritesContext from './FavoritesContext';

const Store = ({ children }) => {
   return (
      <ProductsContext>
         <FavoritesContext>{children}</FavoritesContext>
      </ProductsContext>
   );
};

export default Store;
