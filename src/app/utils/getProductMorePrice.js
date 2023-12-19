const getProductMorePrice = (products) => {
   let morePrice = 0;

   products.forEach((value, index) => {
      if (Number(value.price) > morePrice) {
         morePrice = value.price;
      }
   });

   return Math.ceil(morePrice);
};

export default getProductMorePrice;
