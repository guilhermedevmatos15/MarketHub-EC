import React, { useState, createContext, useEffect } from 'react';

// * scripts
import ajustingRatingProducts from '../utils/ajustingRatingProducts';

export const Context = createContext();

const ProductsContext = ({ children }) => {
   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            // documentação: https://fakestoreapi.com/docs
            const URL_all_products = 'https://fakestoreapi.com/products';
            const URL_all_categories =
               'https://fakestoreapi.com/products/categories';

            // get products
            const response = await fetch(URL_all_products);
            const data = await response.json();

            // get categories
            const responseCateg = await fetch(URL_all_categories);
            const dataCateg = await responseCateg.json();

            const productsAjusting = ajustingRatingProducts(data);

            setProducts(productsAjusting);
            setCategories(dataCateg);

            console.log(productsAjusting);
         } catch (e) {
            setProducts(false);
            setCategories(false);

            console.log('Error from API');
         }
      })();
   }, []);

   return (
      <Context.Provider
         value={{ products, setProducts, categories, setCategories }}
      >
         {children}
      </Context.Provider>
   );
};

export default ProductsContext;
