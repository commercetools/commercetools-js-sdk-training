const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {
  // TODO: 2.4
  // Get a list of product types

};

const createProduct = function createProduct(name, key, description, productTypeId, sku, priceCentAmount, taxCategoryId) {
  // TODO: 4
  //Create a product

};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
