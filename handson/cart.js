const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, getMyAPIClient, projectKey } = require('./client.js')


const getShippingMethodById = (id) => { }

const getShippingMethodByIdWithoutBuilder = (id) => { }

const createCartDraft = (cartData) => { }

const createCart = (cartData) => { }

const getCartByCustomerId = (customerId) => { }

const addProductToCartBySkus = async (cartData) => { }

const addDiscountCodeToCart = async ({customerId, code}) => { }

const captureOrderByCustomerId = async (customerId) => { }

const deleteCurrentCartByCustomerId = async (customerId) => { }

const printMyOrders = () => { }

module.exports.createCart = createCart;
module.exports.createCartDraft = createCartDraft;
module.exports.getCartByCustomerId = getCartByCustomerId;
module.exports.addProductToCartBySkus = addProductToCartBySkus;
module.exports.captureOrderByCustomerId = captureOrderByCustomerId;
module.exports.addDiscountCodeToCart = addDiscountCodeToCart;
module.exports.deleteCurrentCartByCustomerId = deleteCurrentCartByCustomerId;
module.exports.printMyOrders = printMyOrders;
module.exports.getShippingMethodById = getShippingMethodById;
module.exports.getShippingMethodByIdWithoutBuilder = getShippingMethodByIdWithoutBuilder;