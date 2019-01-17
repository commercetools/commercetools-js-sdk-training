const { createProduct } = require('./handson/product.js');
const { personalName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 4.A : Expose a unique personal string in ./handson/trainingHelpers.js to not collide with other participants
// TODO 4.B : Use Merchant Center to make sure that the project has a product type with key "shoe"
// TODO 4.C : Complete the function getProductTypeByKey in ./handson/product.js
// TODO 4.D : Complete the function createProduct in ./handson/product.js

// Uses your functions getProductTypes and getTaxCategoryByKey to create a new product
createProduct(
  // name:
  `ColeHaan Zero Grand 2 (${personalName})`,
  // key, change to random to create more products:
  `zerogrand2-${personalKey}`,
  // description:
  'Comfy dress shoes that feel like sneakers.',
  // productTypeKey:
  'shoe',
  // sku:
  `zerogrand-variant-X-${personalKey}`,
  // priceCentAmount ($150.00 or €150.00):
  15000,
  // taxCategoryKey
  'standard',
  // brand (product type attribute. optional, but assumed by following search and query exercises)
  'ColeHaan'
).then(log)
  .catch(log);

