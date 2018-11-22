const { getCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 7.1: Implement the getCart function in ./handson/cart.js

getCart()
  .then(log)
  .catch(log);
