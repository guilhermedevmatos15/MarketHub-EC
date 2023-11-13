import React, { useContext, useEffect, useState } from 'react';

// * components
import Hero from '../../components/section/Hero/Hero';
import Catalog from '../../components/section/Catalog/Catalog';
import Card from '../../components/shared/Card/Card';

// * style
import './Home.scss';

// * scripts
import getRandomProductByCategory from '../../utils/getRandomProductByCategory';

// * contexts
import { Context } from '../../contexts/ProductsContext';

// * img

// * icons

const Home = () => {
   const { products, categories } = useContext(Context);

   const [productsByCateg, setProductsByCateg] = useState([]);
   const [productsPromoteds, setProductsPromoteds] = useState([]);

   useEffect(() => {
      if (products.length > 0) {
         (async () => {
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

            try {
               const randomProductElec = await getRandomProductByCategory(
                  'electronics'
               );
               const randomProductWomanClo = await getRandomProductByCategory(
                  'jewelery'
               );

               setProductsPromoteds([randomProductElec, randomProductWomanClo]);
            } catch (e) {
               console.log(e);
            }
         })();
      }
   }, [products, categories]);

   return (
      <main className="Home">
         <Hero />

         {productsByCateg.length > 0 && (
            <Catalog
               maxWidth='800px'
               className="TrendingCategories"
               title="Trending Categories"
               choices={productsByCateg}
            />
         )}

         {productsPromoteds.length > 0 && (
            <section className="promotions">
               <Card type="product" product={productsPromoteds[0]} />
               <Card
                  type="product"
                  product={productsPromoteds[1]}
                  hurryUp={true}
               />
            </section>
         )}
      </main>
   );
};

export default Home;
