const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {
  // TODO 2: Get a list of product types

};

const createProduct = function createProduct(name, key, description, productTypeId, sku, priceCentAmount, taxCategoryId) {

};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
