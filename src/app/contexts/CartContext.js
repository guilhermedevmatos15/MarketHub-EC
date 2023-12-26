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
         setCart((currentCart) => {
            const updatedCart = currentCart.map((cartItem) => {
               const matchingProduct = products.find(
                  (product) => cartItem.id === product.id
               );

               return matchingProduct
                  ? { ...cartItem, amount: matchingProduct.amount || 1 }
                  : cartItem;
            });

            // Verificar se houve alteração antes de atualizar o estado
            if (JSON.stringify(updatedCart) !== JSON.stringify(currentCart)) {
               return updatedCart;
            }

            return currentCart;
         });
      }
   }, [products, cart]);

   const addCart = (product, amount) => {
      const already = cart.some((value) => value.id === product.id);

      if (already) {
         setCart((currentCart) =>
            currentCart.map((cartItem) =>
               cartItem.id === product.id
                  ? { ...cartItem, amount: cartItem.amount + amount }
                  : cartItem
            )
         );

         setProducts((currentProducts) =>
            currentProducts.map((value) =>
               value.id === product.id
                  ? { ...value, amount: value.amount + amount }
                  : value
            )
         );
      } else {
         setCart([...cart, { ...product, amount }]);

         setProducts((currentProducts) =>
            currentProducts.map((value) =>
               value.id === product.id ? { ...value, amount } : value
            )
         );
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

   const calculateSubtotal = () => {
      let sum = 0;

      cart.forEach((product) => {
         sum += product?.price * product?.amount;
      });

      return sum.toFixed(2);
   };

   return (
      <ContextC.Provider
         value={{ cart, setCart, addCart, rmCart, calculateSubtotal }}
      >
         {children}
      </ContextC.Provider>
   );
};

export default CartContext;
