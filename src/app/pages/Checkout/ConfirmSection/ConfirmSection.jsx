import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './ConfirmSection.scss';

// * components
import Modal from '../../../components/shared/Modal/Modal';

// * scripts

// * contexts
import { ContextC } from '../../../contexts/CartContext';

// * img

// * icons
import { FaArrowLeft, FaArrowRight, FaRegCheckCircle } from 'react-icons/fa';

const ConfirmSection = ({ setStage }) => {
   const Navigate = useNavigate();

   const { setCart } = useContext(ContextC);

   const [showModal, setShowModal] = useState(false);
   const [time, setTime] = useState(5);

   const handleConfirm = () => {
      setShowModal(true);
      setCart([]);

      setInterval(() => {
         setTime((prevTime) => prevTime - 1);
      }, 1000);
   };

   return (
      <div className={`ConfirmSection`}>
         <h2>Confirmation</h2>

         <p>All very well...</p>

         <div className="confirm-interactions">
            <button className="btn" onClick={(e) => setStage('delivery')}>
               <FaArrowLeft className="btn-icon" /> Back
            </button>

            <button className="btn" onClick={(e) => handleConfirm()}>
               Confirm <FaArrowRight className="btn-icon" />
            </button>
         </div>

         {showModal && (
            <Modal
               className="confirm-modal"
               title={<FaRegCheckCircle className="confirm-modal-icon" />}
               message={
                  <div className="confirm-modal-message">
                     <p>Congratulations! You have completed your purchase...</p>
                     <p>Redirect in {time < 0 ? Navigate('/') : time}...</p>
                  </div>
               }
               show={showModal}
               setShow={setShowModal}
               close={false}
            />
         )}
      </div>
   );
};

export default ConfirmSection;
