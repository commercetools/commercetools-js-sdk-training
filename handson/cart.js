const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./client.js')
const { customerId } = require('./trainingHelpers.js');


const createCart = function createCart(currencyCode, countryCode, locale) {
  // TODO 6.1: Create a cart for your customer
  // https://docs.commercetools.com/http-api-projects-carts.html#create-cart 
  // (only the currency is strictly required)

  // #region SOLUTION
  const cartDraft = {
    currency: currencyCode,
    customerId,
    locale,
    shippingAddress: {
      country: countryCode
    }
  }
  return getClient().execute({
    uri: createRequestBuilder({ projectKey }).carts.build(),
    method: 'POST',
    body: cartDraft
  })
  // #endregion

}

const getCart = function getCart() {
  // TODO 7.1: Get the current cart of your customer

  // #region SOLUTION
  return getClient().execute({
    uri: createRequestBuilder({ projectKey }).carts.byCustomerId(customerId).build(),
    method: 'GET'
  })
  // #endregion

}

const addProductToCart = function addProductToCart(SKU) {
  // TODO 8.1: Update the current cart by adding the given product variant

  // #region SOLUTION
  return getCart().then((currentCartResult) => {
    const updateActions = [
      {
        action: 'addLineItem',
        sku: SKU
      }
    ];
    return getClient().execute({
      uri: createRequestBuilder({ projectKey })
        .carts.byId(currentCartResult.body.id)
        .build(),
      method: 'POST',
      body: {
        version: currentCartResult.body.version,
        actions: updateActions
      }
    })
  })
  // #endregion

}

const captureOrder = function captureOrder() {
  // TODO 9.1: Create an order from your customer's current (=last modified) cart

  // #region SOLUTION
  return getCart().then((currentCartResult) => {
    const orderFromCartDraft = {
      id: currentCartResult.body.id,
      version: currentCartResult.body.version,
    }

    return getClient().execute({
      uri: createRequestBuilder({ projectKey }).orders.build(),
      method: 'POST',
      body: orderFromCartDraft
    })
  })
  // #endregion

}

const deleteCurrentCart = function deleteCurrentCart() {
  // TODO 10.1: Delete the user's current (=last modified) cart

  // #region SOLUTION
  return getCart().then((currentCartResult) => {
    return getClient().execute({
      uri: createRequestBuilder({ projectKey }).carts
        .byId(currentCartResult.body.id)
        .withVersion(currentCartResult.body.version)
        .build(),
      method: 'DELETE'
    })
  })
  // #endregion

}

module.exports.createCart = createCart;
module.exports.getCart = getCart;
module.exports.addProductToCart = addProductToCart;
module.exports.captureOrder = captureOrder;
module.exports.deleteCurrentCart = deleteCurrentCart;