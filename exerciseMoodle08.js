const { createCustomerKeyVerfiedEmail } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

// TODO 08.1: Create a second customer but with key and verified email
// TODO 08.2: Get both customers and see whether the email is verified

createCustomerKeyVerfiedEmail (
  'persona2@example.com', // email
  'password',             // password
  'peter',                // firstName
  'miller',               // lastName
  'DE'                    // countryCode
).then(log)
  .catch(log);
