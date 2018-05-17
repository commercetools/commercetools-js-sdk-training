const sdkClient = require('@commercetools/sdk-client');
const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');
const getCredentials = require('@commercetools/get-credentials');

const authHost = 'https://auth.commercetools.co';
const projectKey = 'sdk-training-project';
const scopes = ['manage_project:sdk-training-project'];
const host = 'https://api.commercetools.co';

const getClient = function getClient() {
  // TODO: 1.3
  // Use getCredentials
  // then createClient

  // #region SOLUTION
  // getCredentials pulls information from .ct-credentials.env
  // Credentials are stored by key CT_<KEY>
  return getCredentials.getCredentials('adminkey').then((credentials) => {
    const authConfig = {
      host: authHost,
      projectKey,
      credentials,
      scopes,
    };

    // create client
    return sdkClient.createClient({
      middlewares: [
        middlewareAuth.createAuthMiddlewareForClientCredentialsFlow(authConfig),
        httpMiddleware.createHttpMiddleware({ host }),
      ]
    });
  });
  // #endregion
};

module.exports.getClient = getClient;
