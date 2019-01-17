const { getClient, projectKey } = require('./client.js');
const log = require('../logger.js').log;

const getProductTypes = function getProductTypes() {
  // TODO 2: Get a list of product types


};

const getProductTypeByKey = function getProductTypeByKey(key) {
  // TODO 4.C: Implement getting a product type by key
  // Do use the request builder to build the URI


};

const createProduct = function createProduct(name, key, description, productTypeKey, sku, priceCentAmount, taxCategoryKey, brand) {
  // TODO 4.D: Create a product, understand ResourceIdentifier vs. Reference
  // https://docs.commercetools.com/http-api-types#resourceidentifier
  // https://docs.commercetools.com/http-api-projects-products.html#create-a-product


};

const queryProducts = function queryProducts(attributeName, attributeValue) {
  // TODO 4.E: Implement querying products by given attribute name and value
  // Assume a Text attribute (not localized)
  // Use the query builder and log the URI you built for debugging 


};

const searchProducts = function searchProducts(attributeName, attributeValue, locale, userInput) {
  // TODO 4.F: Implement searching for products given the user's free text input. 
  // Optional: Include some facets and try out other search features if you have time. 


};

module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
module.exports.queryProducts = queryProducts;
module.exports.searchProducts = searchProducts;
