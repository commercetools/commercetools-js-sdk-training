const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

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

const getCustomerByKeyWITHOUTBUILDER = (key) => 
  getClient().execute({
    uri: `/${projectKey}/customers?key=${key}`,
    method: 'GET'
});

const createCustomerKeyVerfiedEmail = (email, password, firstName, lastName, countryCode) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).customers.build(),
    method: 'POST',
    body: {
      email,
      password,
      firstName,
      lastName,
      addresses: [{
        country: countryCode
      }],
      key: firstName + lastName + '02',
      isEmailVerified: true
    }
})

const createCustomer = (email, password, firstName, lastName, countryCode) => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).customers.build(),
    method: 'POST',
    body: {
        email,
        password,
        firstName,
        lastName,
        addresses: [{
          country: countryCode
        }]
    }
})


module.exports.createCustomer = createCustomer;
module.exports.createCustomerKeyVerfiedEmail = createCustomerKeyVerfiedEmail;
module.exports.getCustomerByKey = getCustomerByKey;
module.exports.getCustomerById = getCustomerById;
module.exports.getCustomerByKeyWITHOUTBUILDER = getCustomerByKeyWITHOUTBUILDER;