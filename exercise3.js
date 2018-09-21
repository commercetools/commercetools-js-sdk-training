const { getTaxCategories } = require('./handson/taxCategory.js');

// Complete getTaxCategories function in ./handson/taxCategory.js

getTaxCategories().then(taxList => {
  console.log(JSON.stringify(taxList, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
