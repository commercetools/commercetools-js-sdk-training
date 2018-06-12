const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const createCart = function createCart(body) {
  // TODO: 6
  // Create a cart
  // Required fields are being passed in body.
  // Review all fields in docs https://docs.commercetools.com/http-api-projects-carts.html

};

const getCart = function getCart(cartId) {
  // TODO: 7
  // Get a list of product types

}

const updateCart = function updateCart(cartId, version, SKU, customerId, country) {
  // TODO: 8
  // Update cart

}

const createOrder = function createOrder(cartId, version) {
  // TODO: 9
  // Create an order from the cart

}

const deleteCart = function deleteCart(cartId, version) {
  // TODO: 10
  // Delete a cart

}

module.exports.createCart = createCart;
module.exports.getCart = getCart;
module.exports.updateCart = updateCart;
module.exports.createOrder = createOrder;
module.exports.deleteCart = deleteCart;