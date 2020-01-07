const { createCustomer } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

createCustomer(
  'persona1@example.com', // email
  'password',             // password
  'peter',                // firstName
  'miller',               // lastName
  'DE'                    // countryCode
).then(log)
  .catch(log);
