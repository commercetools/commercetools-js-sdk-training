const { createCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 6.1: Complete the createCart function in ./handson/cart.js

createCart("USD", "US", "en")
  .then(log)
  .catch(log);
