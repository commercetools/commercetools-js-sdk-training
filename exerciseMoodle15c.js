const { addProductToCart } = require('./handson/cart.js');
const log = require('./logger.js').log;
const { personalKey } = require('./handson/trainingHelpers.js');


addProductToCart({
    sku: 'bottle-shelf-6125', 
    customerId: 'c5852aa6-bee3-4bf9-a603-bb8782d34349',
    quantity: 2
  })
  .then(log)
  .catch();
