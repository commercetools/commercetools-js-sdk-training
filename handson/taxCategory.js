const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getTaxCategoryByKey = (key) => {
  return getClient().execute({
    uri: createRequestBuilder({projectKey}).taxCategories.byKey(key).build(),
    method: 'GET'
  })

};

module.exports.getTaxCategoryByKey = getTaxCategoryByKey;
