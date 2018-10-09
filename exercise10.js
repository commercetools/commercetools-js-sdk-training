const { deleteCurrentCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 10.1: Complete the deleteCurrentCart function in ./handson/cart.js
// TODO 10.2: Run until all your old carts are deleted. 
//            Then run one "clean" round trip of the functionality you built until now.

deleteCurrentCart()
  .then(log)
  .catch(log);
