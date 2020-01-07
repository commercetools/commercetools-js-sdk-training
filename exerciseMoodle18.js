const { createCart, addProductToCart } = require('./handson/cart.js');
const log = require('./logger.js').log;
const { getClient, projectKey } = require('./handson/client.js')
const { createRequestBuilder } = require('@commercetools/api-request-builder')

const myDiscountTest = async () => {
  cartEmpty = await createCart({
    currency: 'EUR',
    country: 'DE',
    locale: 'de',
    customerId : 'c5852aa6-bee3-4bf9-a603-bb8782d34349'
  });
  cartFilled = await addProductToCart({
    sku: 'bottle-shelf-6125', 
    customerId: 'c5852aa6-bee3-4bf9-a603-bb8782d34349',
    quantity: 5
  });
  const updateActions = [{
    action: 'addDiscountCode',
    code: 'AIRPORT'
  }];
  return getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.byId(cartFilled.body.id).build(),
    method: 'POST',
    body: {
      version: cartFilled.body.version,
      actions: updateActions,
    }
  })
}
myDiscountTest()
  .then(log)
  .catch();
  // .catch(log);        // Use it during development to catch errors first.
