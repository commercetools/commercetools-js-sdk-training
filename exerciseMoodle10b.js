const { getTaxCategoryByKey } = require('./handson/taxCategory.js');
const log = require('./logger.js').log;

// TODO 3.1: Use Merchant Center to make sure the project is configured to have a 
//         tax category with key "standard"
// TODO 3.2: Complete the getTaxCategories function in ./handson/taxCategory.js

getTaxCategoryByKey("vat")
  .then(log)
  .catch(log);
