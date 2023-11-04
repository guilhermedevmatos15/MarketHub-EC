import React from 'react';

import { Outlet } from 'react-router-dom';

// * style
import './app/styles/index.scss';

const App = () => {
   return (
      <div className="App">
         <Outlet />
      </div>
   );
};

export default App;
