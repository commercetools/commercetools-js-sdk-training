const { createCustomer, createCustomerKeyVerfiedEmailAndDefaultShippingAddress } = require('./handson/customer.js');
const { random, personalFirstName, personalLastName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;


createCustomer({
  email: 'persona1@example.com',
  password: 'password',
  firstName: 'Persona1_first',
  lastName: 'Person1_last',
  countryCode: 'DE'
})
  .then(log)
  .catch(log);

createCustomerKeyVerfiedEmailAndDefaultShippingAddress ({
  email: 'persona3@example.com',
  password: 'password',
  firstName: 'Persona3_first',
  lastName: 'Person3_last',
  countryCode: 'DE'
})
  .then(log)
  .catch(log);
  