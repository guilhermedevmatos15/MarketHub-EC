import React from 'react';

// * components
import Accordion from '../../components/shared/Accordion/Accordion';

// * style
import './Faq.scss';

// * scripts
import faqData from '../../data/faqData';

// * contexts

// * img

// * icons
import { IoMdSearch } from 'react-icons/io';

const Faq = () => {
   return (
      <div className="Faq">
         <div className="presentation">
            <div className="content">
               <h2>FAQ's</h2>
               <IoMdSearch className="faq-icon" title="Search" />
            </div>
            <hr />
         </div>

         <div className="accordions">
            {faqData.map((value, index) => (
               <Accordion
                  title={value.question}
                  message={value.answer}
                  className='faq-accordion'
                  key={index}
               />
            ))}
         </div>
      </div>
   );
};

export default Faq;
