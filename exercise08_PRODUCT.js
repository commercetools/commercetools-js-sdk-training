const { createProductAndMasterVariant } = require('./handson/product.js');
const log = require('./logger.js').log;

createProductAndMasterVariant( {
  name: 'GreenBordeauxNew',
  key: 'green-bordeaux-new',
  description: 'Super tasty wine from France.',
  productTypeKey: 'bottle',
  sku: '11',                   // also used as the variant's key
  priceCentAmount: 9800,
  currency: 'EUR',
  taxCategoryKey: 'vat'
})
  .then(log)
  .catch(log);


