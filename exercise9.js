const { captureOrder } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 9.1: Complete the captureOrder function in ./handson/cart.js

captureOrder()
  .then(log)
  .catch(log);
