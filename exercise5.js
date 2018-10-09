const { createCustomer } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 5.1: Complete the createCustomer function in ./handson/customer.js

createCustomer(
  `${personalKey}@example.com`,
  random,
  personalFirstName,
  personalLastName,
  'US'
).then(log)
  .catch(log);
