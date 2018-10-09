const { getCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

//Complete the getCart function in ./handson/cart.js

const cartId = 'dae1e8d9-a50e-41c7-926c-6916afa9c0f3';  // From exercise 5

//Make a note of your cartID for future exercises
getCart(cartId)
  .then(log)
  .catch(log);
