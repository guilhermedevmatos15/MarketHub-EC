import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * components
import App from './App';
import Home from './app/pages/Home/Home';
import Product from './app/pages/Product/Product';
import About from './app/pages/About/About';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/product/:id',
            element: <Product />
         },
         {
            path: 'about',
            element: <About />,
         }
      ],
   },
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;
