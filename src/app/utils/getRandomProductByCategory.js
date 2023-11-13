// Pega um produto aleatório apenas recebendo a categoria como parâmetro.

import getRandomNumber from './getRandomNumber.js';

const getRandomProductByCategory = async (category) => {
   try {
      const URL = `https://fakestoreapi.com/products/category/${category}`;

      const response = await fetch(URL);
      const data = await response.json();

      const index = getRandomNumber(0, data.length - 1);

      return data[index];
   } catch (e) {
      return false;
   }
};

export default getRandomProductByCategory;
