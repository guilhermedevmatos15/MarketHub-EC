import React from 'react';

// * components

// * style
import './AboutSection.scss';

// * scripts

// * contexts

// * img

// * icons

const AboutSection = ({ product }) => {
   return (
      <section className="AboutSection">
         <h3>Description</h3>

         <p className="description">{product?.description}</p>
      </section>
   );
};

export default AboutSection;
