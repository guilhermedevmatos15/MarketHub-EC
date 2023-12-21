import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// * components
import Loading from './app/components/shared/Loading/Loading';
import Header from './app/components/shared/Header/Header';
import Footer from './app/components/shared/Footer/Footer';

// * style
import './app/styles/index.scss';

// * context
import { Context } from './app/contexts/ProductsContext';

// * slider config
import { register } from 'swiper/element/bundle';
register();

const App = () => {
   const { products } = useContext(Context);

   return (
      <>
         {products.length > 0 ? (
            <div className="App">
               <Header />
               <Outlet />
               <Footer />
            </div>
         ) : (
            <div className='App loading'>
               <Loading />
            </div>
         )}
      </>
   );
};

export default App;
