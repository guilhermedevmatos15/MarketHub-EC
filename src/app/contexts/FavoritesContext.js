import React, { useState, createContext, useEffect } from 'react';

// * scripts
export const Context = createContext();

const FavoritesContext = ({ children }) => {
   const key = 'favorites';

   const [favorites, setFavorites] = useState(
      JSON.parse(localStorage.getItem(key)).length > 0
         ? JSON.parse(localStorage.getItem(key))
         : []
   );

   useEffect(() => {
      localStorage.setItem(key, favorites);
   }, [favorites]);

   const addFavorite = (product) => {
      setFavorites(favorites.push(product));
   };

   const rmFavorite = (product) => {
      setFavorites(favorites.filter((favorite) => favorite.id !== product.id));
   };

   return (
      <Context.Provider
         value={{ favorites, setFavorites, addFavorite, rmFavorite }}
      >
         {children}
      </Context.Provider>
   );
};

export default FavoritesContext;
