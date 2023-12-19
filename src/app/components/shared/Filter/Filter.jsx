import React, { useContext} from 'react';

// * components
import Rating from '../Rating/Rating';

// * style
import './Filter.scss';

// * scripts
import getProductMorePrice from '../../../utils/getProductMorePrice';

// * contexts
import { Context } from '../../../contexts/ProductsContext';

// * img

// * icons

const Filter = ({
   className,
   category,
   rating,
   price,
   categoryState,
   setCategoryState,
   ratingState,
   setRatingState,
   priceState,
   setPriceState,
}) => {
   const { products, categories } = useContext(Context);

   return (
      <div className={`Filter ${className}`}>
         <form onSubmit={(e) => e.preventDefault()}>
            {category && (
               <div className="filter-category">
                  <h3 htmlFor="filter-category-i">Category</h3>
                  <div>
                     {categories.map((category, index) => (
                        <label key={index}>
                           <input type="checkbox" name="filter-category" />
                           <span>{category}</span>
                        </label>
                     ))}
                  </div>
               </div>
            )}

            {rating && (
               <div className="filter-rating">
                  <h3>Rating</h3>
                  <div>
                     {[1, 2, 3, 4, 5].reverse().map((number) => (
                        <label key={number}>
                           <input
                              type="radio"
                              name="filter-rating-i"
                              value={ratingState}
                              onChange={(e) => setRatingState(number)}
                              checked={number === ratingState}
                           />
                           <span>
                              <Rating rate={number} sizeStar={'normal'} />
                           </span>
                        </label>
                     ))}
                  </div>
               </div>
            )}

            {price && (
               <div className="filter-price">
                  <h3>Price</h3>
                  <div>
                     <label>
                        <span>Maximum Price: ${priceState}</span>
                        <input
                           type="range"
                           name="filter-price-i"
                           min={0}
                           max={getProductMorePrice(products)}
                           step={100}
                           value={priceState}
                           onInput={(e) => setPriceState(e.target.value)}
                        />
                     </label>
                  </div>
               </div>
            )}
         </form>
      </div>
   );
};

// Filter.propTypes = {
//    prop: PropTypes,
// };

export default Filter;
