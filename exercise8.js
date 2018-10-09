const { addProductToCart } = require('./handson/cart.js');
const log = require('./logger.js').log;
const { personalKey } = require('./handson/trainingHelpers.js');


// TODO 8.1: Complete the updateCart function in ./handson/cart.js
const SKU = `zerogrand-variant-X-${personalKey}`; // must match exercise4.js

// Save cart version for additional updates.
addProductToCart(SKU)
  .then(log)
  .catch();
