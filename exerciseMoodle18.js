const { createCart, addProductToCart } = require('./handson/cart.js');
const log = require('./logger.js').log;
const { getClient, projectKey } = require('./handson/client.js')
const { createRequestBuilder } = require('@commercetools/api-request-builder')

const myDiscountTest = async () => { }

myDiscountTest()
  .then(log)
  .catch();
  // .catch(log);        // Use it during development to catch errors first.
