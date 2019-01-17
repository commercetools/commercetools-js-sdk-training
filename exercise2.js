const { getProductTypes } = require('./handson/product.js');
const log = require('./logger.js').log;

// TODO 2A: Use Merchant Center to create a product type. 
//          Create a personal one for a domain you know. 
//          Make sure it contains at least a Text attribute named "brand"
// TODO 2B: Complete the getProductTypes function in ./handson/product.js
// https://docs.commercetools.com/http-api-projects-productTypes.html#query-producttypes

getProductTypes()
  .then(log)
  .catch(log);
