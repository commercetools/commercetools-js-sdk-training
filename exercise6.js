const { createCart } = require('./handson/cart.js');

//Complete the createCart function in ./handson/cart.js

const body = {
  currency: 'USD',
};

createCart(body).then(cart => {
  //Make a note of your cartID for future exercises
  console.log(JSON.stringify(cart, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
