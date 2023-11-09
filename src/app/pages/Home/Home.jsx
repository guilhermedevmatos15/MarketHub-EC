import React, { useContext, useEffect, useState } from 'react';

// * components
import Hero from '../../components/section/Hero/Hero';
import Options from '../../components/shared/Options/Options';

// * style
import './Home.scss';

// * scripts

// * contexts
import { Context } from '../../contexts/ProductsContext';

// * img

// * icons

const Home = () => {
   const { products, categories } = useContext(Context);

   const [productsByCateg, setProductsByCateg] = useState([]);

   useEffect(() => {
      if (products.length > 0) {
         const newProducts = Array(4).fill(null);

         for (let i in categories) {
            if (categories[i] !== undefined) {
               const category = categories[i];

               for (let product of products) {
                  if (
                     product.category === category &&
                     newProducts[i] === null
                  ) {
                     newProducts[i] = product;
                  }
               }
            }
         }

         setProductsByCateg(newProducts);
      }
   }, [products, categories]);

   return (
      <main className="Home">
         <Hero />
         <Options
            className="TrendingCategories"
            title="Trending Categories"
            choices={productsByCateg}
         />
      </main>
   );
};

export default Home;
