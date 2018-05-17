const { getProductTypes, createProduct } = require('./handson/product.js');

// TODO: 2.2, 2.3
getProductTypes().then((ptList) => {
  // Use your funcitons getProductTypes and createProduct
  // Get the list of product tyeps and use the first entry
  // to create a new product.
  
  // #region SOLUTION
  const productType = ptList.body.results[0];
  createProduct(
    'ColeHaan Zero Grand 2',
    'zerogrand2.0',
    'Comfy dress shoes that feel like sneakers.',
    productType.id
  ).then((product) => {
    console.log(product);
  });
  // #endregion
});