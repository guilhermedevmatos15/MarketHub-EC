import React from 'react';
import ReactDOM from 'react-dom/client';

// * routes
import Routes from './Routes';

// * store (contexts)
import Store from './app/contexts/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Store>
         <Routes />
      </Store>
   </React.StrictMode>
);
