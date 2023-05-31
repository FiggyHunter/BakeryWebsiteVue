export const findProductById = function (productID: Number, productsArray: Array) {
  if (productsArray.length === 0) return;
  for (const product of productsArray) {
    if (product.id === productID) {
      console.log(productID);
      return product;
    }
  }
  return null;
};
