const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
module.exports.projectKey = "";
// #region SOLUTION
module.exports.projectKey = "ctp-jvm-sdk-training";
// #endregion

const getClient = function getClient() {
  // TODO 1.2: build and return a commercetools SDK client
  // https://commercetools.github.io/nodejs/sdk/api/sdkClient.html

  // #region SOLUTION
  const projectKey = 'ctp-jvm-sdk-training'

  // TIP: All below can be copied from Merchant Center when creating an API Client
  //    BUT: there is/was a bug that the "scopes" were not wrapped in an array in the generated code.  
  //    BUT: the generated code does not yet pass a "fetch" implementation, you also have to add that. 
  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.commercetools.com',
    projectKey,
    credentials: {
      clientId: 'WQbv9zwvcnMIqTi2XhW8GV5I',
      clientSecret: 'Nn5Yf-kX_llNk2T1fLQMX1VClJbFS54X',
    },
    scopes: [`manage_project:${projectKey}`],
    fetch
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.commercetools.com',
    fetch
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client
  // #endregion

};

module.exports.getClient = getClient;
