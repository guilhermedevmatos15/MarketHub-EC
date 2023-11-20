import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './Footer.scss';

// * scripts

// * contexts

// * img
import Logo from '../../../assets/img/markethub-icon.png';

// * icons
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
   return (
      <footer className="Footer">
         <img src={Logo} alt="Icon logo MarketHub" />
         
         <Navigation color="light" direction="row" gap="20px" />

         <div className="footer-social">
            <AiOutlineWhatsApp
               className="footer-social-icon"
               title="Whatsapp"
               onClick={(e) => window.open('https://wa.me/+5537999819687')}
            />
            <AiFillGithub
               className="footer-social-icon"
               title="GitHub"
               onClick={(e) =>
                  window.open('https://github.com/guilhermedevmatos15/')
               }
            />
            <AiOutlineMail
               className="footer-social-icon"
               title="Email"
               onClick={(e) =>
                  window.open('mailto:devguilhermeferreira@gmail.com')
               }
            />
         </div>
         <p>
            Development by{' '}
            <a
               href="https://github.com/guilhermedevmatos15/"
               target="_blank"
               rel="noreferrer"
            >
               @Guilherme Ferreira
            </a>
         </p>
      </footer>
   );
};

export default Footer;
