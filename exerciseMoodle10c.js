const { createProduct } = require('./handson/product.js');
const { personalName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

createProduct( {
  name: `GreenBordeaux`,
  key: `green-bordeaux`,
  description: 'Super tasty wine from France.',
  productTypeKey: 'wine-product-type',
  sku: `bottle-shelf-6125`,
  priceCentAmount: 9800,
  currency: 'EUR',
  taxCategoryKey: 'vat'
})
  .then(log)
  .catch(log);


