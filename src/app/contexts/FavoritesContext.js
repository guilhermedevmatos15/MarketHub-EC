import React, { useState, createContext, useEffect, useContext } from 'react';

import { Context } from './ProductsContext';

// * scripts
export const ContextF = createContext();

const FavoritesContext = ({ children }) => {
   const { products, setProducts } = useContext(Context);

   const key = 'favorites';

   const storedFavorites = localStorage.getItem(key);
   const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

   const [favorites, setFavorites] = useState(initialFavorites);

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(favorites));
   }, [favorites]);

   const addFavorite = (product) => {
      console.log(product);
      setFavorites([...favorites, product]);

      setProducts(
         products.map((value) => {
            if (value.id === product.id) {
               value.liked = true;
            }

            return value;
         })
      );
   };

   const rmFavorite = (product) => {
      setFavorites(favorites.filter((favorite) => favorite.id !== product.id));

      setProducts(
         products.map((value) => {
            if (value.id === product.id) {
               value.liked = false;
            }

            return value;
         })
      );
   };

   const checkLike = (product) =>
      favorites.some((favorite) => favorite.id === product.id);

   return (
      <ContextF.Provider
         value={{ favorites, setFavorites, addFavorite, rmFavorite, checkLike }}
      >
         {children}
      </ContextF.Provider>
   );
};

export default FavoritesContext;
