const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getCustomerById = (id) => { }

const getCustomerByKey = (key) => { }

const getCustomerByKeyWITHOUTBUILDER = (key) => { }
 
const createCustomerKeyVerfiedEmail = (email, password, firstName, lastName, countryCode) => { }

const createCustomer = (email, password, firstName, lastName, countryCode) => { }



module.exports.createCustomer = createCustomer;
module.exports.createCustomerKeyVerfiedEmail = createCustomerKeyVerfiedEmail;
module.exports.getCustomerByKey = getCustomerByKey;
module.exports.getCustomerById = getCustomerById;
module.exports.getCustomerByKeyWITHOUTBUILDER = getCustomerByKeyWITHOUTBUILDER;