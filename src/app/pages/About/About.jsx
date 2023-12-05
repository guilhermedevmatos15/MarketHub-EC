import React, { useState } from 'react';

// * components

// * style
import './About.scss';

// * scripts

// * contexts

// * img
import BrazilFlag from '../../assets/img/flags/flag-brazil.png';
import UsaFlag from '../../assets/img/flags/flag-usa.png';

// * icons

const About = () => {
   const [language, setLanguage] = useState('usa');

   return (
      <div className="About">
         <div className="select-language">
            <h3>Select language:</h3>

            <div className="options">
               <button
                  className="btn btn-usa"
                  onClick={(e) => setLanguage('usa')}
               >
                  USA
               </button>
               <button
                  className="btn btn-brazil"
                  onClick={(e) => setLanguage('brazil')}
               >
                  Brazil
               </button>
            </div>
         </div>

         {language === 'usa' ? (
            <section>
               <h2>About</h2>
               <img src={UsaFlag} alt="flag USA" />
               <div className="text">
                  <p>
                     Hello, I'm Guilherme Ferreira, a young teaching student
                     medium, currently living in Brazil, Minas Gerais...
                  </p>
                  <p>
                     I have been wanting to develop this project for a while, an
                     ecommerce to train React skills. This one It will probably
                     be the last project before moving on forward in programming
                     studies...
                  </p>
                  <p>
                     Visit my gitHub:{' '}
                     <a
                        href="https://github.com/guilhermedevmatos15"
                        target="_blank"
                        rel="noreferrer"
                     >
                        @Guilherme Ferreira
                     </a>
                  </p>
               </div>
            </section>
         ) : language === 'brazil' ? (
            <section>
               <h2>Sobre</h2>
               <img src={BrazilFlag} alt="flag Brazil" />

               <div className="text">
                  <p>
                     Olá, sou o Guilherme Ferreira, um jovem estudante do ensino
                     médio, atualmente morando no Brasil, Minas Gerais...
                  </p>
                  <p>
                     Este projeto eu tenho desejado desenvolve-lo faz um tempo,
                     um ecommerce para treinar as habilidades de React. Este
                     provavelmente será o último projeto antes de seguir em
                     frente nos estudos em programação...
                  </p>
                  <p>
                     Visite meu gitHub:{' '}
                     <a
                        href="https://github.com/guilhermedevmatos15"
                        target="_blank"
                        rel="noreferrer"
                     >
                        @Guilherme Ferreira
                     </a>
                  </p>
               </div>
            </section>
         ) : (
            ''
         )}
      </div>
   );
};

export default About;
