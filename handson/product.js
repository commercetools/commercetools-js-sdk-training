const { getClient, projectKey } = require('./client.js');
const log = require('../logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

const getProductTypes = () => { }

const getProductTypeByKey = (key) => { }
 
const createProductDraft = (productData) => { }

const createProductAndMasterVariant = (productData) =>  { }

const getProductByKey = (key) => { }

const getCategoryByKey = (key) => { }


const assignProductToCategoryPROMISSES = (productKey, categoryKey) => { }

const assignProductToCategoryAwait = async (productKey, categoryKey) => { }

// Prepare query string in api playground
//
const queryProducts = (attributeName, attributeValue) => { }


const searchProducts = (attributeName, attributeValue, locale, userInput) => { }

  


module.exports.getProductTypes = getProductTypes;
module.exports.getProductByKey = getProductByKey;
module.exports.getCategoryByKey = getCategoryByKey;
module.exports.assignProductToCategoryPROMISSES = assignProductToCategoryPROMISSES;
module.exports.assignProductToCategoryAwait = assignProductToCategoryAwait;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProductAndMasterVariant = createProductAndMasterVariant;
module.exports.queryProducts = queryProducts;
module.exports.searchProducts = searchProducts;
