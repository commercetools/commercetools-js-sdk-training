const { createCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

//Complete the createCart function in ./handson/cart.js

const body = {
  currency: 'USD',
};

//Make a note of your cartID for future exercises
createCart(body)
  .then(log)
  .catch(log);
