const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, getMyAPIClient, projectKey } = require('./client.js')


const getShippingMethodById = (id) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).shipping-method.byId(id).build(),
    method: 'GET'
});

const getShippingMethodByIdWithoutBuilder = (id) => 
  getClient().execute({
    uri: `/${projectKey}/shipping-methods?id=${id}`,
    method: 'GET'
});




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

const createCart = (cartData) =>
  getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.build(),
    method: 'POST',
    body: createCartDraft(cartData)
})

const getCartByCustomerId = (customerId) =>
  getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.byCustomerId(customerId).build(),
    method: 'GET'
})


const addProductToCartBySkus = async (cartData) => {
  const {customerId, skus} = cartData;
  cart = await getCartByCustomerId(customerId);
  const updateActions = skus.map(element => {
    return {
      action: 'addLineItem', 
      sku: element, 
      quantity: 1
    }
  });
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

const addDiscountCodeToCart = async ({customerId, code}) => {
  cart = await getCartByCustomerId(customerId);
  const updateActions = [{
    action: 'addDiscountCode',
    code: code
  }];
  return getClient().execute({
    uri: createRequestBuilder({projectKey}).carts.byId(cart.body.id).build(),
    method: 'POST',
    body: {
      version: cart.body.version,
      actions: updateActions,
    }
  })
}


const captureOrderByCustomerId = async ({customerId}) => {
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
module.exports.addProductToCartBySkus = addProductToCartBySkus;
module.exports.addDiscountCodeToCart = addDiscountCodeToCart;
module.exports.captureOrderByCustomerId = captureOrderByCustomerId;
module.exports.deleteCurrentCartByCustomerId = deleteCurrentCartByCustomerId;
module.exports.printMyOrders = printMyOrders;
module.exports.getShippingMethodById = getShippingMethodById;
module.exports.getShippingMethodByIdWithoutBuilder = getShippingMethodByIdWithoutBuilder;

