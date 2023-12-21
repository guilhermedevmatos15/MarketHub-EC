import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './Favorites.scss';

// * components
import Card from '../../components/shared/Card/Card';

// * scripts

// * contexts
import { ContextF } from '../../contexts/FavoritesContext';

// * img

// * icons
import { MdCategory } from 'react-icons/md';

const Favorites = () => {
   const Navigate = useNavigate();

   const { favorites } = useContext(ContextF);

   return (
      <div className={`Favorites`}>
         <h2>Favorites</h2>

         {favorites?.length > 0 ? (
            <div className="products">
               {favorites.map((favorite, index) => (
                  <Card
                     key={index}
                     type="product"
                     product={favorite}
                     popUpType="free-shipping"
                  />
               ))}
            </div>
         ) : (
            <div className="no-favorites">
               <p className="no-favorites-inform">No favorites</p>
               <p className="cta">Visit our categories</p>
               <button className="btn" onClick={(e) => Navigate('/categories')}>
                  <MdCategory className="btn-icon" /> Categories
               </button>
            </div>
         )}
      </div>
   );
};

export default Favorites;
