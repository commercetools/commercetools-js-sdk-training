const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const createCartDiscount = function createCartDiscount(discountName) {
  // TODO: 6
  // Create a cart discount
  // Required fields are being passed in body.
  // Review all fields in docs https://docs.commercetools.com/http-api-projects-cartDiscounts.html

  // #region SOLUTION
  return getClient().then(client => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const cartDiscountUri = requestBuilder.cartDiscounts.build()

    const cartDiscountRequest = {
          uri: cartDiscountUri,
          method: 'POST',
          body: {
            name: discountName,
            value: {
              type: 'relative',
              permyriad: 1000,
            },
            cartPredicate: 'totalPrice > 1.00 USD',
            sortOrder: 0.1,
            requiresDiscountCode: false
          }
    }

    return client.execute(cartDiscountRequest)
  });
  // #endregion
};

module.exports.createCartDiscount = createCartDiscount;
