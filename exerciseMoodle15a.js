const { createCart } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 6.1: Complete the createCart function in ./handson/cart.js


createCart( {
  currency: 'EUR',
  country: 'DE',
  locale: 'de',
  customerId : 'c5852aa6-bee3-4bf9-a603-bb8782d34349'
})
  .then(log)
  .catch(log);
