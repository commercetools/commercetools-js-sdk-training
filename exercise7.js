const { getCart } = require('./handson/cart.js');

//Complete the getCart function in ./handson/cart.js

const cartId = 'dae1e8d9-a50e-41c7-926c-6916afa9c0f3';  // From exercise 5

getCart(cartId).then(cart => {
  //Make a note of your cartID for future exercises
  console.log(JSON.stringify(cart, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
