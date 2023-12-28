import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

// * components
import Loading from './app/components/shared/Loading/Loading';
import Header from './app/components/shared/Header/Header';
import Footer from './app/components/shared/Footer/Footer';
import Menu from './app/components/shared/Menu/Menu';

// * style
import './app/styles/index.scss';

// * context
import { Context } from './app/contexts/ProductsContext';

// * slider config
import { register } from 'swiper/element/bundle';
register();

const App = () => {
   const { products } = useContext(Context);

   const [showMenu, setShowMenu] = useState(false);

   return (
      <>
         {products.length > 0 ? (
            <div className="App">
               <Header showMenu={showMenu} setShowMenu={setShowMenu} />
               <Outlet />
               <Footer />

               <Menu status={showMenu} setStatus={setShowMenu} />
            </div>
         ) : (
            <div className="App loading">
               <Loading />
            </div>
         )}
      </>
   );
};

export default App;
