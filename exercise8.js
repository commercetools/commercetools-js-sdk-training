const { updateCart } = require('./handson/cart.js');

//Complete the updateCart function in ./handson/cart.js

const SKU = 'SKU-zerogrand-master-au0d2tup'; // From exercise 3
const customerId = '8ffd6af0-8ae0-422f-8e2c-3d5cfbd5bbae'; // From exercise 4
const cartId = 'dae1e8d9-a50e-41c7-926c-6916afa9c0f3';  // From exercise 5
const cartVersion = 5 // From exercise 5
const Country = 'US';

updateCart(cartId, cartVersion, SKU, customerId, Country).then(cart => {
  // Save cart version for additional updates.
  console.log(JSON.stringify(cart, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
