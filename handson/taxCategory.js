const { createRequestBuilder } = require('@commercetools/api-request-builder');
const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const getTaxCategories = function getTaxCategories() {
  // TODO: 3.6
  // Get a list of all the tax categories
  
  // Now please use the API request builder tool of the SDK to generate the URL path
  // https://commercetools.github.io/nodejs/sdk/api/apiRequestBuilder.html#createrequestbuilderoptions
  // Tip: You don't need custom services, the default CTP services are automatically provided:
  // https://github.com/commercetools/nodejs/blob/master/packages/api-request-builder/src/default-services.js

};

module.exports.getTaxCategories = getTaxCategories;
