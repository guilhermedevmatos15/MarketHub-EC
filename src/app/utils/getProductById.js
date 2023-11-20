const getProductById = (id, products) => {
   const result = products.find((product) => {
      return product.id === id;
   });

   if (result?.title) {
      return result;
   }

   return false;
};

export default getProductById;
