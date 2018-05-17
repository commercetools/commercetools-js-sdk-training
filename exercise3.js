const { createCustomer } = require('./handson/customer.js');

createCustomer(
  'email@domain.com',
  'password-asdf',
  'John',
  'Smith',
  'US'
).then((customer) => {
  console.log(customer);
});