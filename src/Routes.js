import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * components
import App from './App';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [],
   },
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;
