const sdkClient = require('@commercetools/sdk-client');
const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');
const getCredentials = require('@commercetools/get-credentials');
const fetch = require('node-fetch');

// const host = 'https://api.commercetools.co'; // US
const host = 'https://api.commercetools.com'; // EU
// const authHost = 'https://auth.commercetools.co'; // US
const authHost = 'https://auth.commercetools.com'; // EU
// const projectKey = 'sdk-training-project'; // US
const projectKey = 'ctp-jvm-sdk-training';  // EU
const log = require('../logger.js').log;
const scopes = ['manage_project:' + projectKey];

const getClient = function getClient() {
  // TODO: 1.3
  // Use getCredentials
  // then createClient
  
  // getCredentials pulls information from .ct-credentials.env
  // Credentials are stored by key CT_<KEY>

};

module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
