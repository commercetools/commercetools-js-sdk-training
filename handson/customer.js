const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getCustomerById = (id) => { }

const getCustomerByKey = (key) => { }

const getCustomerByKeyWITHOUTBUILDER = (key) => { }
 
const createCustomerDraft = (customerData) => { }

const createCustomerDraftKeyShipping = (customerData) => { }

const createCustomer = (customerData) => { }

const createCustomerKeyVerfiedEmailAndDefaultShippingAddress = (customerData) =>  { }


module.exports.createCustomer = createCustomer;
module.exports.createCustomerKeyVerfiedEmailAndDefaultShippingAddress = createCustomerKeyVerfiedEmailAndDefaultShippingAddress;
module.exports.getCustomerByKey = getCustomerByKey;
module.exports.getCustomerById = getCustomerById;
module.exports.getCustomerByKeyWITHOUTBUILDER = getCustomerByKeyWITHOUTBUILDER;