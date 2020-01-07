const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, getMyAPIClient, projectKey } = require('./client.js')

const createCartDraft = (cartData) => {
  const {currency, country, locale,  customerId} = cartData;
  return {
    currency,
    customerId,
    country,
    shippingAddress: {
    country: country
    },
    locale,
    deleteDaysAfterLastModification: 90
  }
}

const createCart = (cartData) => {
  return getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.build(),
    method: 'POST',
    body: createCartDraft(cartData)
  })
}

const getCartByCustomerId = (customerId) =>
  getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.byCustomerId(customerId).build(),
    method: 'GET'
})


const addProductToCart = async (cartData) => {
  const {sku, customerId, quantity} = cartData;
  cart = await getCartByCustomerId(customerId);
  const updateActions = [{
    action: 'addLineItem',
    sku,
    quantity
  }];
  const uri = createRequestBuilder({projectKey}).carts.byId(cart.body.id).withVersion(cart.body.version).build();
  console.log(uri);  
  return getClient().execute({
    uri,
    method: 'POST',
    body: {
      version: cart.body.version,
      actions: updateActions
    }
  })
}


const captureOrderByCustomerId = async (customerId) => {
  cart = await getCartByCustomerId(customerId);
  const orderDraft = {
    id: cart.body.id,
    version: cart.body.version
  }
  return getClient().execute({
    uri : createRequestBuilder({projectKey}).orders.build(),
    method: 'POST',
    body: orderDraft
  })
}


const deleteCurrentCartByCustomerId = async (customerId) => {
  cart = await getCartByCustomerId(customerId);
  const uri = createRequestBuilder({projectKey}).carts.byId(cart.body.id).withVersion(cart.body.version).build();
  return getClient().execute({
    uri,
    method: 'DELETE',
  })
}


const printMyOrders = () => 
  getMyAPIClient().execute({
    uri: `/${projectKey}/me/orders`,
    method: 'GET'
})

module.exports.createCart = createCart;
module.exports.createCartDraft = createCartDraft;
module.exports.getCartByCustomerId = getCartByCustomerId;
module.exports.addProductToCart = addProductToCart;
module.exports.captureOrderByCustomerId = captureOrderByCustomerId;
module.exports.deleteCurrentCartByCustomerId = deleteCurrentCartByCustomerId;
module.exports.printMyOrders = printMyOrders;