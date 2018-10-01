const { getTaxCategories } = require('./handson/taxCategory.js');
const log = require('./logger.js').log;

// Complete getTaxCategories function in ./handson/taxCategory.js

getTaxCategories()
  .then(log).catch(log);
