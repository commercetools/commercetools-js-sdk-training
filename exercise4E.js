const { queryProducts } = require('./handson/product.js');
const { personalName, personalKey } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;
// TODO 4.E : Implement a function that queries products by a given attribute name and value
//            Also return the productType inline in the JSON to allow a UI to render it including Attribute Labels

queryProducts(
    // attributeName
    'name',
    // attributeValue
    `ColeHaan Zero Grand 2 (${personalName})`
).then(log)
  .catch(log);
