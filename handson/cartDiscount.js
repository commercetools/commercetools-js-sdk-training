const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const createCartDiscount = function createCartDiscount(discountName) {
  // TODO: 6
  // Create a cart discount
  // Required fields are being passed in body.
  // Review all fields in docs https://docs.commercetools.com/http-api-projects-cartDiscounts.html

};

module.exports.createCartDiscount = createCartDiscount;
