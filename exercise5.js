const { createCustomer } = require('./handson/customer.js');

//Complete the createCustomer function in ./handson/customer.js

// TODO: 5.1
// Update data to be unique

createCustomer(
  'email@domain.com',
  'password-asdf',
  'John',
  'Smith',
  'US'
).then(customer => {
  console.log(customer);
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
