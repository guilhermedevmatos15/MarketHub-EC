import React, { useState, createContext, useEffect, useContext } from 'react';

// * other contexts
import { Context } from './ProductsContext';

// * scripts
export const ContextC = createContext();

const CartContext = ({ children }) => {
   const { products, setProducts } = useContext(Context);

   const key = 'cart';

   const storedCart = localStorage.getItem(key);
   const initialCart = storedCart ? JSON.parse(storedCart) : [];

   const [cart, setCart] = useState(initialCart);

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(cart));
   }, [cart]);

   const addCart = (product, amount) => {
      setCart([...cart, product]);

      setProducts(
         products.map((value) => {
            if (value.id === product.id) {
               value.amount = amount;
            }

            return value;
         })
      );
   };

   const rmCart = (product) => {
      setCart(cart.filter((value) => value.id !== product.id));

      setProducts(
         products.map((value) => {
            if (value.id === product.id) {
               value.amount = 1;
            }

            return value;
         })
      );
   };

   return (
      <ContextC.Provider
         value={{ cart, setCart, addCart, rmCart }}
      >
         {children}
      </ContextC.Provider>
   );
};

export default CartContext;
