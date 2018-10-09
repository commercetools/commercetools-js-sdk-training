const { getProductTypes } = require('./handson/product.js');
const log = require('./logger.js').log;

// Complete getProductTypes function in ./handson/product.js

getProductTypes()
  .then(log)
  .catch(log);
