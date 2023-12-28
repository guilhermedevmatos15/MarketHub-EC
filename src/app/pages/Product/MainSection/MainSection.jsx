import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * components
import Rating from '../../../components/shared/Rating/Rating';
import FormOrder from './FormOrder/FormOrder';

// * style
import './MainSection.scss';
import Modal from '../../../components/shared/Modal/Modal';

// * scripts

// * contexts

// * img

// * icons
import { FaRegCircleCheck } from 'react-icons/fa6';

const MainSection = ({ product }) => {
   const Navigate = useNavigate();

   const [amount, setAmount] = useState(1);
   const [showModal, setShowModal] = useState(false);

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

            <FormOrder
               className="form-product"
               product={product}
               available={product?.rating?.cont}
               amount={amount}
               setAmount={setAmount}
               showModal={showModal}
               setShowModal={setShowModal}
            />

            <Modal
               className="modal-product"
               show={showModal}
               setShow={setShowModal}
               title={<FaRegCircleCheck />}
               message={
                  <div>
                     <p className="modal-product-message">Product added!</p>
                     <button className="btn" onClick={(e) => Navigate('/cart')}>
                        Go to Cart
                     </button>
                  </div>
               }
               close={true}
            />
         </div>
      </section>
   );
};

export default MainSection;
