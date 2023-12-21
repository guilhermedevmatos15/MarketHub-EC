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

   // Update Cart
   useEffect(() => {
      if (cart?.length > 0) {
         setCart((currentCart) =>
            currentCart.map((cartItem) => {
               const matchingProduct = products.find(
                  (product) => cartItem.id === product.id
               );

               return matchingProduct
                  ? { ...cartItem, amount: matchingProduct.amount }
                  : cartItem;
            })
         );
      }
   }, [products, cart]);

   const addCart = (product, amount) => {
      const already = cart.some((value) => value.id === product.id);

      if (already) {
         const updatedProducts = products.map((value) => {
            if (value.id === product.id) {
               return { ...value, amount: value.amount + amount };
            }
            return value;
         });

         setProducts(updatedProducts);
      } else {
         setCart([...cart, { ...product, amount }]);

         const updatedProducts = products.map((value) => {
            if (value.id === product.id) {
               return { ...value, amount };
            }
            return value;
         });

         setProducts(updatedProducts);
      }
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

   const checkCart = (product) => {};

   return (
      <ContextC.Provider value={{ cart, setCart, addCart, rmCart }}>
         {children}
      </ContextC.Provider>
   );
};

export default CartContext;
