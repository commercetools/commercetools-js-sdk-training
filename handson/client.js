const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const { createAuthMiddlewareForPasswordFlow } = require('@commercetools/sdk-middleware-auth')

const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
const projectKey = 'training-photon-jan2020-default';


const getClient = () => {
  const { createClient } = require('@commercetools/sdk-client')
  const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
  const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
  const fetch = require('node-fetch')

  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: 'kND9yGVubcsb6Uu1nMod0pTM',
      clientSecret: 'vHKUQiv6SIwH2vZdCHthejW__MbCK8aK',
    },
    // scopes: ['manage_project:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;  
};

const getMLClient = () => {
  const { createClient } = require('@commercetools/sdk-client')
  const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
  const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
  const fetch = require('node-fetch')

  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: 'kND9yGVubcsb6Uu1nMod0pTM',
      clientSecret: 'vHKUQiv6SIwH2vZdCHthejW__MbCK8aK',
    },
    // scopes: ['manage_project:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://ml-eu.europe-west1.gcp.commercetools.com',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;
};

const getMyAPIClient = () => {
  const { createClient } = require('@commercetools/sdk-client')
  const { createAuthMiddlewareForPasswordFlow } = require('@commercetools/sdk-middleware-auth')
  const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
  const fetch = require('node-fetch')

  const authMiddleware = createAuthMiddlewareForPasswordFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: 'kND9yGVubcsb6Uu1nMod0pTM',
      clientSecret: 'vHKUQiv6SIwH2vZdCHthejW__MbCK8aK',
      user: {
				username: 'persona3@example.com',
				password: 'password',
			},
    },
    // scopes: ['manage_my_shopping_lists:training-20191024-def create_anonymous_token:training-20191024-def view_published_products:training-20191024-def manage_my_payments:training-20191024-def manage_my_profile:training-20191024-def manage_my_orders:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;
}

const getImportClient = () => {
  const { createClient } = require('@commercetools/sdk-client')
  const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
  const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
  const fetch = require('node-fetch')

  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: 'kND9yGVubcsb6Uu1nMod0pTM',
      clientSecret: 'vHKUQiv6SIwH2vZdCHthejW__MbCK8aK',
    },
    // scopes: ['manage_project:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://import-eu.europe-west1.gcp.commercetools.com',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;  
};



module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
module.exports.getMLClient = getMLClient;
module.exports.getMyAPIClient = getMyAPIClient;
module.exports.getImportClient = getImportClient;

