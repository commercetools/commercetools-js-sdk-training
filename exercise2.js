const { getProductTypes, createProduct } = require('./handson/product.js');

// TODO: 2.2, 2.3
getProductTypes().then((ptList) => {
  //use first result as only one product type
  //Normally query by ID or KEY
  const productType = ptList.body.results[0];
  createProduct(
    'ColeHaan Zero Grand 2',
    'zerogrand2.0',
    'Comfy dress shoes that feel like sneakers.',
    productType.id
  ).then((product) => {
    console.log(product);
  });
});