const { createOrder } = require('./handson/cart.js');

//Complete the createOrder function in ./handson/cart.js

const cartId = 'dae1e8d9-a50e-41c7-926c-6916afa9c0f3';
const cartVersion = 12;

createOrder(cartId, cartVersion).then(order => {
  console.log(JSON.stringify(order, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
