import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * components
import App from './App';
import Error from './app/pages/Error/Error';
import Home from './app/pages/Home/Home';
import Product from './app/pages/Product/Product';
import About from './app/pages/About/About';
import Faq from './app/pages/Faq/Faq';
import Categorie from './app/pages/Categorie/Categorie';
import Categories from './app/pages/Categories/Categories';
import Favorites from './app/pages/Favorites/Favorites';
import Cart from './app/pages/Cart/Cart';
import Checkout from './app/pages/Checkout/Checkout';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/product/:id',
            element: <Product />,
         },
         {
            path: 'about',
            element: <About />,
         },
         {
            path: 'faq',
            element: <Faq />,
         },
         {
            path: 'categories',
            element: <Categories />,
         },
         {
            path: 'categories/:name',
            element: <Categorie />,
         },
         {
            path: 'favorites',
            element: <Favorites />,
         },
         {
            path: 'cart',
            element: <Cart />,
         },
         {
            path: 'checkout',
            element: <Checkout />,
         },
      ],
   },
]);

const Routes = () => <RouterProvider router={Router} />;

export default Routes;
