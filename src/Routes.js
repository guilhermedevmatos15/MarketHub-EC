import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * components
import App from './App';
import Error from './app/pages/Error/Error';
import Home from './app/pages/Home/Home';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />
         }
      ],
   },
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;
