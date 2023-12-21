import React from 'react';

// * contexts
import ProductsContext from './ProductsContext';
import FavoritesContext from './FavoritesContext';
import CartContext from './CartContext';

const Store = ({ children }) => {
   return (
      <ProductsContext>
         <FavoritesContext>
            <CartContext>{children}</CartContext>
         </FavoritesContext>
      </ProductsContext>
   );
};

export default Store;
