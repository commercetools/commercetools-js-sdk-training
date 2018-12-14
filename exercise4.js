const { getProductTypeByKey, createProduct } = require('./handson/product.js');
const { getTaxCategoryByKey } = require('./handson/taxCategory.js');
const { random, personalName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 4.0 : Expose a unique personal string in ./handson/trainingHelpers.js to not collide with other participants
// TODO 4.1 : Use Merchant Center to make sure that the project has a product type with key "shoe"
// TODO 4.2 : Complete the function getProductTypeByKey in ./handson/product.js 
// TODO 4.3 : Complete the function createProduct in ./handson/product.js

// Uses your functions getProductTypes and getTaxCategoryByKey to create a new product
Promise.all([getProductTypeByKey("shoe"), getTaxCategoryByKey("standard")])
  .then(function (values) {
    [productTypeResponse, taxCategoryResponse] = values;
    createProduct(
      // name:
      `ColeHaan Zero Grand 2 (${personalName})`, 
      // key, change to random to create more products:
      `zerogrand2-${personalKey}`, 
      // description:
      'Comfy dress shoes that feel like sneakers.', 
      // productType:
      productTypeResponse.body, 
       // sku:
      `zerogrand-variant-X-${personalKey}`,
      // priceCentAmount ($150.00 or €150.00):
      15000, 
      // taxCategory
      taxCategoryResponse.body 
    ).then(log)
      .catch(log);

  }).catch(log);
