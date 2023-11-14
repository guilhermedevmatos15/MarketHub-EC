import getRandomNumber from './getRandomNumber';

const ajustingRatingProducts = (products) =>
   products.map((product, index) => {
      return { ...product, rating: { rate: getRandomNumber(3, 5), cont: getRandomNumber(100, 500) } };
   });

export default ajustingRatingProducts;

