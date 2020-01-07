const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, getMyAPIClient, projectKey } = require('./client.js')

const createCartDraft = (cartData) => { }

const createCart = (cartData) => { }

const getCartByCustomerId = (customerId) => { }

const addProductToCart = async (cartData) => { }

const captureOrderByCustomerId = async (customerId) => { }

const deleteCurrentCartByCustomerId = async (customerId) => { }

const printMyOrders = () => { }



module.exports.createCart = createCart;
module.exports.createCartDraft = createCartDraft;
module.exports.getCartByCustomerId = getCartByCustomerId;
module.exports.addProductToCart = addProductToCart;
module.exports.captureOrderByCustomerId = captureOrderByCustomerId;
module.exports.deleteCurrentCartByCustomerId = deleteCurrentCartByCustomerId;
module.exports.printMyOrders = printMyOrders;