const sdkRequestBuilder = require('@commercetools/api-request-builder');
const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const createCart = function createCart(body) {
  // TODO: 6
  // Create a cart
  // Required fields are being passed in body.
  // Review all fields in docs https://docs.commercetools.com/http-api-projects-carts.html

  // #region SOLUTION
  return getClient().then(client => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const cartUri = requestBuilder.carts.build()

    const cartRequest = { 
          uri: cartUri,
          method: 'POST',
          body: body
    }

    return client.execute(cartRequest)
  });
  // #endregion
};

const getCart = function getCart(cartId) {
  // TODO: 7
  // Get a list of product types
  // #region SOLUTION
  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const cartUri = requestBuilder.carts.byId(cartId).build();
    const cartRequest = {
      uri: cartUri,
      method: 'GET'
    };
    return client.execute(cartRequest);

  });
  // #region SOLUTION
}

const updateCart = function updateCart(cartId, version, SKU, customerId, country) {
  // TODO: 8
  // Update cart

  // #region SOLUTION
  return getClient().then(client => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });

    const cartUri = requestBuilder.carts.byId(cartId).build();

    const updateCartRequest = {
      uri: cartUri,
      method: 'POST',
      body: {
        "version": version,
        "actions":[
          {
            "action": "addLineItem",
            "sku": SKU,
          },
          {
            "action": "setShippingAddress",
            "address":
            {
              "country": country
            }
          },
          {
            "action": "setCustomerId",
            "customerId": customerId
          }
        ]
      }
    };

    return client.execute(updateCartRequest)
  });
  // #endregion
}

const createOrder = function createOrder(cartId, version) {
  // TODO: 9
  // Create an order from the cart

  // #region SOLUTION
  return getClient().then(client => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const orderUri = requestBuilder.orders.build();

    const orderRequest = {
      uri: orderUri,
      method: 'POST',
      body: {
        "id": cartId,
        "version": version
      }
    };

    return client.execute(orderRequest)
  });
  // #endregion
}

const deleteCart = function deleteCart(cartId, version) {
  // TODO: 10
  // Delete a cart

  // #region SOLUTION
  return getClient().then(client => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const cartUri = requestBuilder.carts
              .byId(cartId).withVersion(version).build();

    const cartRequest = {
          uri: cartUri,
          method: 'DELETE'
    };

    return client.execute(cartRequest);
  });
  // #endregion
}

module.exports.createCart = createCart;
module.exports.getCart = getCart;
module.exports.updateCart = updateCart;
module.exports.createOrder = createOrder;
module.exports.deleteCart = deleteCart;