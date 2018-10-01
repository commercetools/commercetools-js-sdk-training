const { createCustomer } = require('./handson/customer.js');
const log = require('./logger.js').log;

//Complete the createCustomer function in ./handson/customer.js

// TODO: 5.1
// Update data to be unique

createCustomer(
  'email@domain.com',
  'password-asdf',
  'John',
  'Smith',
  'US'
).then(log).catch(log);