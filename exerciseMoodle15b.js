const { getCartByCustomerId } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 7.1: Implement the getCart function in ./handson/cart.js

getCartByCustomerId('c5852aa6-bee3-4bf9-a603-bb8782d34349')
  .then(log)
  .catch(log);
