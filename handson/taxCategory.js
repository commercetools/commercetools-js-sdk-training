const sdkRequestBuilder = require('@commercetools/api-request-builder');
const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const getTaxCategories = function getTaxCategories() {
  // TODO: 3.6
  // Get a list of product types
  
  // #region SOLUTION
  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const taxCategoryUri = requestBuilder.taxCategories.build();
    const taxCategoryRequest = {
      uri: taxCategoryUri,
      method: 'GET'
    };
    return client.execute(taxCategoryRequest);

  });
  // #region SOLUTION
};

module.exports.getTaxCategories = getTaxCategories;
