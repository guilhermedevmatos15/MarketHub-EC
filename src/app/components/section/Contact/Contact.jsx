import React from 'react';

// * components

// * style
import './Contact.scss';

// * scripts
import companyData from '../../../data/companyData';

// * contexts

// * img

// * icons
import { MdOutlineMail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

const Contact = ({ className }) => {
   const Info = () => {
      return (
         <div className="Form-infos">
            <h3>Info</h3>

            <div className="Form-info">
               <MdOutlineMail className="Form-info-icon" />
               <span>{companyData.email}</span>
            </div>
            <div className="Form-info">
               <BsTelephone className="Form-info-icon" />
               <span>{companyData.telephone}</span>
            </div>
            <div className="Form-info">
               <IoMdTime className="Form-info-icon" />
               <span>
                  {companyData.timeOpening} : {companyData.timeClosing}
               </span>
            </div>
            <div className="Form-info">
               <FaRegBuilding className="Form-info-icon" />
               <span>{companyData.location}</span>
            </div>
         </div>
      );
   };

   return (
      <section className={`Contact ${className}`}>
         <form onSubmit={(e) => e.preventDefault()}>
            <h2>Contact Us</h2>
            <label>
               <span>Name</span>
               <input className="input" type="text" required={true} />
            </label>
            <label>
               <span>Email</span>
               <input className="input" type="email" required={true} />
            </label>
            <label>
               <span>Message</span>
               <textarea className="input" />
            </label>

            <button className="btn">Send</button>

            <Info />
         </form>

         <Info />
      </section>
   );
};

export default Contact;
