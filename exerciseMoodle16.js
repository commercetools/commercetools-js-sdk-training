const { deleteCurrentCartByCustomerId } = require('./handson/cart.js');
const log = require('./logger.js').log;


deleteCurrentCartByCustomerId('c5852aa6-bee3-4bf9-a603-bb8782d34349')
  .then(log)
  .catch(log);
