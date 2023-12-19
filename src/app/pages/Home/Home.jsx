import React, { useContext, useEffect, useState } from 'react';

// * components
import Hero from '../../components/section/Hero/Hero';
import Catalog from '../../components/section/Catalog/Catalog';
import Card from '../../components/shared/Card/Card';
import Banner from '../../components/shared/Banner/Banner';
import Contact from '../../components/section/Contact/Contact';

// * style
import './Home.scss';

// * scripts
import getRandomProductByCategory from '../../utils/getRandomProductByCategory';
import getRandomNumber from '../../utils/getRandomNumber';

// * contexts
import { Context } from '../../contexts/ProductsContext';

// * img

// * icons

const Home = () => {
   const { products, categories } = useContext(Context);

   const [productsPromoteds, setProductsPromoteds] = useState([]);
   const [productBanner, setProductBanner] = useState(0);

   useEffect(() => {
      if (products.length > 0) {
         (async () => {
            try {
               const randomProductElec = await getRandomProductByCategory(
                  'electronics'
               );
               const randomProductWomanClo = await getRandomProductByCategory(
                  "women's clothing"
               );
               const randomProductManClo = await getRandomProductByCategory(
                  "men's clothing"
               );

               setProductsPromoteds([
                  randomProductElec,
                  randomProductWomanClo,
                  randomProductManClo,
               ]);
            } catch (e) {
               console.log(e);
            }
         })();

         // get random product by banner
         setProductBanner(getRandomNumber(0, products.length - 1));
      }
   }, [products, categories]);

   return (
      <main className="Home">
         <Hero />

         <Catalog
            className="TrendingCategories"
            type="categories"
            title="Trending Categories"
            maxWidth="800px"
         />

         <Banner type="product" product={products[productBanner]} />

         {productsPromoteds.length > 0 && (
            <Catalog
               type={undefined}
               className="TopProducts"
               maxWidth="100%"
               title="Top Products"
               choices={[
                  <Card
                     type="product"
                     product={productsPromoteds[0]}
                     popUpType="free-shipping"
                  />,
                  <Card
                     type="product"
                     product={productsPromoteds[1]}
                     popUpType="free-shipping"
                  />,
                  <Card
                     type="product"
                     product={productsPromoteds[2]}
                     popUpType="free-shipping"
                  />,
               ]}
            />
         )}

         <Contact />
      </main>
   );
};

export default Home;
