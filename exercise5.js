const { createCustomer } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 5.1: Complete the createCustomer function in ./handson/customer.js
// TODO 5.2: If succeeded, add your customerID to ./handson/trainingHelpers.js  for later exercises

createCustomer(
  `${personalKey}@example.com`, // email
  random, // password
  personalFirstName, // firstName
  personalLastName, // lastName
  'US' // countryCode
).then(log)
  .catch(log);
