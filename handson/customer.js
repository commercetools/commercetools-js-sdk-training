const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');


const createCustomerDraft = (customerData) => {
  const {email, password, firstName, lastName, countryCode} = customerData;
  return {
    email,
      password,
      firstName,
      lastName,
      addresses: [{
        country: countryCode
      }]
  }
}

const createCustomerDraftKeyShipping = (customerData) => {
  const {email, password, firstName, lastName, countryCode} = customerData;
  return {
      key: firstName + '-' + lastName + '-key',
      defaultShippingAddress: 0
  }
}

const createCustomer = (customerData) => 
  getClient().execute({
      uri: createRequestBuilder({projectKey}).customers.build(),
      method: 'POST',
      body: createCustomerDraft(customerData)
  })

const createCustomerKeyVerfiedEmailAndDefaultShippingAddress = (customerData) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).customers.build(),
    method: 'POST',
    body: {
        ...createCustomerDraft(customerData),
        ...createCustomerDraftKeyShipping(customerData),
        isEmailVerified: true
    }
  })




const getCustomerById = (id) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).customers.byId(id).build(),
    method: 'GET'
});

const getCustomerByKey = (key) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).customers.byKey(key).build(),
    method: 'GET'
});


module.exports.createCustomer = createCustomer;
module.exports.createCustomerKeyVerfiedEmailAndDefaultShippingAddress = createCustomerKeyVerfiedEmailAndDefaultShippingAddress;
module.exports.getCustomerByKey = getCustomerByKey;
module.exports.getCustomerById = getCustomerById;
