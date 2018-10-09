const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./client.js')
const { customerId } = require('./trainingHelpers.js');


const createCart = function createCart(currencyCode, countryCode, locale) {
  // TODO 6.1: Create a cart for your customer
  // https://docs.commercetools.com/http-api-projects-carts.html#create-cart 
  // (only the currency is strictly required)


}

const getCart = function getCart() {
  // TODO 7.1: Get the current cart of your customer


}

const addProductToCart = function addProductToCart(SKU) {
  // TODO 8.1: Update the current cart by adding the given product variant


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
module.exports.addProductToCart = addProductToCart;
module.exports.createOrder = createOrder;
module.exports.deleteCart = deleteCart;