import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * components
import Rating from '../../components/shared/Rating/Rating';
import Form from '../../components/shared/Form/Form';
import Slide from '../../components/section/Slide/Slide';
import Card from '../../components/shared/Card/Card';

// * style
import './Product.scss';

// * scripts
import getProductById from '../../utils/getProductById';

// * contexts
import { Context } from '../../contexts/ProductsContext';

// * img

// * icons

const Product = () => {
   const { id } = useParams();
   const { products } = useContext(Context);
   const [product, setProduct] = useState({});

   useEffect(() => {
      const result = getProductById(Number(id), products);

      result ? setProduct(result) : setProduct(false);
   }, [products, id]);

   return (
      <>
         {products.length > 0 && ( // Primeiro teste, se deu certo a requisição da API
            <>
               {product?.title ? ( // Segunto teste, ver se o produto no qual ID está na URL existe.
                  <div className="Product">
                     <section className="Product-main">
                        <div className="Product-container-image">
                           <img src={product?.image} alt={product?.title} />
                        </div>

                        <div className="Product-interations">
                           <div className="Product-info">
                              <p className="Product-category">
                                 {product?.category}
                              </p>
                              <h2 className="Product-title truncate--2">
                                 {product?.title}
                              </h2>
                              <Rating rate={product?.rating?.rate} />
                           </div>

                           <div className="Product-buy">
                              <p>${Number(product?.price).toFixed(2)}</p>
                              <p>
                                 <strong>Available:</strong>{' '}
                                 {product?.rating?.cont}
                              </p>
                              {/* Simulando produtos disponíveis */}
                              <div className="Product-order">
                                 <Form type="order" />
                              </div>
                           </div>
                        </div>
                     </section>

                     <section className="Product-about">
                        <h3>Description</h3>

                        <p className="Product-description">
                           {product?.description}
                        </p>
                     </section>

                     <Slide
                        type="scroll"
                        title="You may also like"
                        elements={products
                           .filter((product) => product.id !== id) // Removendo dessa lista o produto que já está sendo principal na página
                           .map((product) => (
                              <Card type="productPill" product={product} /> // Agora sim, pegando cada produto e renderizando em forma de <Card />
                           ))}
                     />
                  </div>
               ) : (
                  <div className="Product error">
                     <span>Product not found!</span>
                  </div>
               )}
            </>
         )}
      </>
   );
};

export default Product;
