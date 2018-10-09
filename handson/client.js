const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
module.exports.projectKey = "";

const getClient = function getClient() {
  // TODO 1.2: build and return a commercetools SDK client
  // https://commercetools.github.io/nodejs/sdk/api/sdkClient.html

};

module.exports.getClient = getClient;
