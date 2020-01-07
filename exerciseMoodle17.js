const { captureOrderByCustomerId } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 9.1: Complete the captureOrder function in ./handson/cart.js

captureOrderByCustomerId('c5852aa6-bee3-4bf9-a603-bb8782d34349')
  .then(log)
  .catch(log);
