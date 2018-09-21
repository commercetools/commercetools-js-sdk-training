const { createDiscount } = require('./handson/cartDiscount.js');

//Complete the createDiscount function in ./handson/cartDiscount.js

// Random string in training module only.
// Two discounts can not have the same key, so this 
// prevents duplicate error with multiple participants.
const random = Math.random().toString(36).substring(5);

const discountName = '10OFF-' + random;

createDiscount(discountName).then(cartDiscount => {
  //Make a note of your discountId for future exercises
  console.log(cartDiscount);
}).catch(error => {
  console.log(error);
});
