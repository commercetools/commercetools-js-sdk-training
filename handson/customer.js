const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient } = require('./client.js');
const projectKey = 'sdk-training-project';


const createCustomer = function createCustomer(
  email,
  password,
  firstName,
  lastName,
  country
) {
  // TODO: 3
  //Create a customer

  // #region SOLUTION
  return getClient().then((client) => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const customerUri = requestBuilder.customers.build();
    const customerRequest = {
      uri: customerUri,
      method: 'POST',
      body: {
        email,
        password,
        firstName,
        lastName,
        addresses: [
          {
            country
          }
        ]
      }
    };
    return client.execute(customerRequest);
  });
  // #endregion
};

module.exports.createCustomer = createCustomer;