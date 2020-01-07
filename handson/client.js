const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const { createAuthMiddlewareForPasswordFlow } = require('@commercetools/sdk-middleware-auth')

const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
const projectKey = '';


const getClient = () => { }

const getMLClient = () => { }

const getMyAPIClient = () => { }



module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
module.exports.getMLClient = getMLClient;
module.exports.getMyAPIClient = getMyAPIClient;
