const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {
  // TODO 2: Get a list of product types


};

const getProductTypeByKey = function getProductTypeByKey(key) {
  // TODO 4.2: Implement getting a product type by key


};

const createProduct = function createProduct(name, key, description, productType, sku, priceCentAmount, taxCategory) {
  // TODO 4.3: Create a product
  // https://docs.commercetools.com/http-api-projects-products.html#create-a-product


};

module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
