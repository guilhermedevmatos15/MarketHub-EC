import React from 'react';

import { Outlet } from 'react-router-dom';

// * components
import Header from './app/components/shared/Header/Header';
import Footer from './app/components/shared/Footer/Footer';

// * style
import './app/styles/index.scss';

const App = () => {
   return (
      <div className="App">
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default App;
