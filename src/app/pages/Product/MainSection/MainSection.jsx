import React, { useState } from 'react';

// * components
import Rating from '../../../components/shared/Rating/Rating';
import Form from '../../../components/shared/Form/Form';

// * style
import './MainSection.scss';

// * scripts

// * contexts

// * img

// * icons

const MainSection = ({ product }) => {
   const [amount, setAmount] = useState(1);

   return (
      <section className="MainSection">
         <div className="container-image">
            <img src={product?.image} alt={product?.title} />
         </div>

         <div className="info">
            <p className="category">{product?.category}</p>

            <h2 className="title truncate--2">{product?.title}</h2>

            <Rating className="product-rating" rate={product?.rating?.rate} />

            <p className="price">
               ${(Number(product?.price) * amount).toFixed(2)}
            </p>

            <p>
               {/* Simulando produtos disponíveis */}
               <strong>Available:</strong> {product?.rating?.cont}
            </p>

            <Form
               type="order"
               className="form-product"
               available={product?.rating?.cont}
               amount={amount}
               setAmount={setAmount}
            />
         </div>
      </section>
   );
};

export default MainSection;
