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

const captureOrder = function captureOrder() {
  // TODO 9.1: Create an order from your customer's current (=last modified) cart


}

const deleteCurrentCart = function deleteCurrentCart() {
  // TODO 10.1: Delete the user's current (=last modified) cart

}

module.exports.createCart = createCart;
module.exports.getCart = getCart;
module.exports.addProductToCart = addProductToCart;
module.exports.captureOrder = captureOrder;
module.exports.deleteCurrentCart = deleteCurrentCart;