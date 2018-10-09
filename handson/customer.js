const sdkRequestBuilder = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const createCustomer = function createCustomer(
  email,
  password,
  firstName,
  lastName,
  country
) {
  // TODO: 5
  // Create a customer

};

module.exports.createCustomer = createCustomer;