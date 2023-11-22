import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// * components
import MainSection from './MainSection/MainSection';
import AboutSection from './AboutSection/AboutSection';
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
                     <MainSection product={product} />

                     <AboutSection product={product} />

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
