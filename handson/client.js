const sdkClient = require('@commercetools/sdk-client');
const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');
const getCredentials = require('@commercetools/get-credentials');
const fetch = require('node-fetch');

const authHost = 'https://auth.commercetools.co';
const projectKey = 'sdk-training-project';
const scopes = ['manage_project:sdk-training-project'];
const host = 'https://api.commercetools.co';

const getClient = function getClient() {
  // TODO: 1.3
  // Use getCredentials
  // then createClient
  
  // getCredentials pulls information from .ct-credentials.env
  // Credentials are stored by key CT_<KEY>

};

module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
