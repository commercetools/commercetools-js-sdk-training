const { printMyOrders } = require('./handson/cart.js');   // MyOrders
const log = require('./logger.js').log;

// TODO 9.1: Complete the printMyOrder function in ./handson/cart.js

printMyOrders()
  .then(log)
  .catch(log);
