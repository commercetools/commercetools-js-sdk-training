const sdkRequestBuilder = require('@commercetools/api-request-builder');
const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const createCartDiscount = function createCartDiscount(discountName) {
  // TODO X: Create a cart discount
  // Review all fields in docs https://docs.commercetools.com/http-api-projects-cartDiscounts.html

  // #region SOLUTION
  return getClient().then(client => {
    const cartDiscountDraft = {
      name: discountName,
      value: {
        type: 'relative',
        permyriad: 1000,
      },
      cartPredicate: 'totalPrice > 1.00 USD',
      sortOrder: 0.1,
      requiresDiscountCode: false
    }

    return client.execute({
      uri: createRequestBuilder({ projectKey }).cartDiscounts.build(),
      method: 'POST',
      body: cartDiscountDraft
    })
  });
  // #endregion
};

module.exports.createCartDiscount = createCartDiscount;
