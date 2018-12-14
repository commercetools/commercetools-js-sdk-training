const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getTaxCategoryByKey = function getTaxCategoryByKey(key) {
  // TODO: 3.6
  // Get a specific tax category by its key

  // Now please use the API request builder tool of the SDK to generate the URL path
  // https://commercetools.github.io/nodejs/sdk/api/apiRequestBuilder.html#createrequestbuilderoptions
  // Tip: You don't need custom services, the default CTP services are automatically provided:
  // https://github.com/commercetools/nodejs/blob/master/packages/api-request-builder/src/default-services.js

  // #region SOLUTION
  const requestBuilder = createRequestBuilder({
    projectKey
  })
  return getClient().execute({
    uri: requestBuilder.taxCategories.byKey(key).build(),
    method: 'GET'
  })
  // #endregion

};

module.exports.getTaxCategoryByKey = getTaxCategoryByKey;
