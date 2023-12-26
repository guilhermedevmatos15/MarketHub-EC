import React, { useState } from 'react';

// * style
import './DeliverySection.scss';

// * components

// * scripts

// * data
import states from '../../../data/BrazilState';

// * contexts

// * img

// * icons
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const DeliverySection = ({ setStage }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [state, setState] = useState('-');
   const [city, setCity] = useState('');
   const [adress, setAdress] = useState('');
   const [number, setNumber] = useState(0);

   const [error, setError] = useState(false);

   const resetInputs = () => {
      setName('');
      setEmail('');
      setState('-');
      setCity('');
      setAdress('');
      setNumber('');
   }

   const handleNext = () => {
      if (
         name === '' ||
         email === '' ||
         state === '-' ||
         city === '' ||
         adress === '' ||
         number === 0
      ) {
         setError(true);
         return;
      }

      setError(false);
      resetInputs();
      setStage('confirm');
   };


   return (
      <div className={`DeliverySection`}>
         <h2>Delivery</h2>

         <div className="delivery-options">
            <button className="btn">Free</button>
         </div>

         <form onSubmit={(e) => e.preventDefault()}>
            <div>
               <label>
                  <span>Full Name</span>
                  <input
                     className="input"
                     type="text"
                     minLength={3}
                     maxLength={15}
                     required={true}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </label>
               <label>
                  <span>Email</span>
                  <input
                     className="input"
                     type="email"
                     required={true}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </label>
               <label>
                  <span>State</span>
                  <select
                     className="input"
                     required={true}
                     value={state}
                     onChange={(e) => setState(e.target.value)}
                  >
                     <option value="-">-</option>
                     {states.map((state, index) => (
                        <option key={index} value={state}>
                           {state}
                        </option>
                     ))}
                  </select>
               </label>
            </div>

            <div>
               <label>
                  <span>City</span>
                  <input
                     className="input"
                     type="text"
                     required={true}
                     value={city}
                     onChange={(e) => setCity(e.target.value)}
                  />
               </label>
               <label>
                  <span>Adress</span>
                  <input
                     className="input"
                     type="text"
                     required={true}
                     value={adress}
                     onChange={(e) => setAdress(e.target.value)}
                  />
               </label>
               <label>
                  <span>Number</span>
                  <input
                     className="input"
                     type="number"
                     min={0}
                     max={10000}
                     required={true}
                     value={number}
                     onChange={(e) => setNumber(e.target.value)}
                  />
               </label>
            </div>
         </form>

         <div className="delivery-interactions">
            <button className="btn" onClick={(e) => setStage('cart')}>
               <FaArrowLeft className="btn-icon" /> Back
            </button>

            <button className="btn" onClick={(e) => handleNext()}>
               Confirm <FaArrowRight className="btn-icon" />
            </button>
         </div>

         {error && (
            <p className="error">
               <AiOutlineExclamationCircle /> Please fill in all inputs
            </p>
         )}
      </div>
   );
};

export default DeliverySection;
