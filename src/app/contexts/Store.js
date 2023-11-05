import React from 'react';

// * contexts
import ProductsContext from './ProductsContext';

const Store = ({ children }) => {
   return <ProductsContext>{children}</ProductsContext>;
};

export default Store;
