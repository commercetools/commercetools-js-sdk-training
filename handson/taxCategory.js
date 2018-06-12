const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getTaxCategories = function getTaxCategories() {
  // TODO: 2
  // Get a list of product types
  return getClient().then((client) => {

    // #region SOLUTION
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const taxCategoryUri = requestBuilder.taxCategories.build();
    const taxCategoryRequest = {
      uri: taxCategoryUri,
      method: 'GET'
    };
    return client.execute(taxCategoryRequest);
    // #region SOLUTION

  });
};

module.exports.getTaxCategories = getTaxCategories;
