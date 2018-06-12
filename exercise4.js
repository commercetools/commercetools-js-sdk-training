const { getProductTypes, createProduct } = require('./handson/product.js');
const { getTaxCategories } = require('./handson/taxCategory.js');


//Complete the function createProduct in ./handson/product.js

//Use your functions getProductTypes and getTaxCategories
// and use the first entry to create a new product
var ptPromise = getProductTypes();
var taxPromise = getTaxCategories();

Promise.all([ptPromise, taxPromise]).then(function(values) {
  const productType = values[0].body.results[0];
  const taxCategory = values[1].body.results[0];

  // Random string in training module only.
  // Key and SKU must be unique, so this 
  // prevents duplicate error with multiple participants.
  const random = Math.random().toString(36).substring(5);

  createProduct(
    'ColeHaan Zero Grand 2',
    'zerogrand2-' + random,
    'Comfy dress shoes that feel like sneakers.',
    productType.id,
    'SKU-zerogrand-master-' + random,
    15000, //$150.00 assumed USD
    taxCategory.id
  ).then(product => {
    // Save SKU for use later.
    console.log(JSON.stringify(product, null, 4));
  }).catch(err => {
    console.log(JSON.stringify(err, null, 4));
  });

}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
