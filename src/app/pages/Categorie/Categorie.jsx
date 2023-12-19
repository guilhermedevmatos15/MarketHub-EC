/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * components
import Card from '../../components/shared/Card/Card';
import Filter from '../../components/shared/Filter/Filter';
import Catalog from '../../components/section/Catalog/Catalog';

// * style
import './Categorie.scss';

// * scripts

// * contexts
import { Context } from '../../contexts/ProductsContext';

// * img

// * icons

const Categorie = () => {
   const { name } = useParams();
   const { categories } = useContext(Context);
   
   const [categorie, setCategorie] = useState('');
   const [productsByCateg, setProductsByCateg] = useState([]);
   const [productsRender, setProductsRender] = useState([]);
   
   // ? By filter
   const [ratingFilter, setRatingFilter] = useState(5);
   const [priceFilter, setPriceFilter] = useState(1000);

   useEffect(() => {
      const categoriesRename = categories.map((value) => value.replace(' ', '-'));

      setCategorie(categoriesRename.find((value) => value === name));

      (async () => {
         try {
            const URL = `https://fakestoreapi.com/products/category/${name.replace('-', ' ')}`;

            const response = await fetch(URL);
            const data = await response.json();

            setProductsByCateg(data);
         } catch (e) {
            setProductsByCateg(false);
         }
      })();
   }, ['Get Product', name, categories]);

   useEffect(() => {
      if (productsByCateg.length > 0) {
         setProductsRender(
            productsByCateg
               .filter(
                  (product) => Math.round(product.rating.rate) === ratingFilter
               )
               .filter((product) => product.price <= priceFilter)
         );
      }
   }, ['Filter', priceFilter, ratingFilter, productsByCateg]);

   return (
      <>
         {categorie ? (
            <div className="Categorie">
               <h2>{categorie}</h2>

               <hr />

               <div>
                  <Filter
                     className="categorie-filter"
                     price={true}
                     priceState={priceFilter}
                     setPriceState={setPriceFilter}
                     rating={true}
                     ratingState={ratingFilter}
                     setRatingState={setRatingFilter}
                  />
                  <div className="categorie-products">
                     {productsRender
                        ? productsRender.map((product) => (
                             <Card
                                className="card"
                                type="product"
                                product={product}
                                popUpType="free-shipping"
                                key={product.id}
                             />
                          ))
                        : "Sorry, we can't find these products"}
                  </div>
               </div>

               <Catalog
                  type="categories"
                  title="All Categories"
                  maxWidth="800px"
                  className='all-categories'
               />
            </div>
         ) : (
            'Loading...'
         )}
      </>
   );
};

export default Categorie;
