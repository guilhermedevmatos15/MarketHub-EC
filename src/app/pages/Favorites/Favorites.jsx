import React, { useContext } from 'react';

// * style
import './Favorites.scss';

// * components
import Card from '../../components/shared/Card/Card';

// * scripts

// * contexts
import { ContextF } from '../../contexts/FavoritesContext';

// * img

// * icons

const Favorites = () => {
   const { favorites } = useContext(ContextF);

   return (
      <div className={`Favorites`}>
         <h2>Favorites</h2>

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
      </div>
   );
};

export default Favorites;
