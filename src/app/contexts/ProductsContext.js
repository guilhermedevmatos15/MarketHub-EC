import React, { useState, createContext, useEffect } from 'react';

const Context = createContext();

const ProductsContext = ({ children }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            // documentação: https://fakestoreapi.com/docs
            const URL = 'https://fakestoreapi.com/products';

            const response = await fetch(URL);
            const data = await response.json();

            console.log(data);
            setProducts(data);
         } catch (e) {
            console.log('Error in API');
            setProducts('Error in API');
         }
      })();
   });

   return (
      <Context.Provider value={{ products, setProducts }}>
         {children}
      </Context.Provider>
   );
};

export default ProductsContext;
