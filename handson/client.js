const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const { createAuthMiddlewareForPasswordFlow } = require('@commercetools/sdk-middleware-auth')

const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
const projectKey = 'training-20191024-def';


const getClient = () => {
  const { createClient } = require('@commercetools/sdk-client')
  const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
  const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
  const fetch = require('node-fetch')

  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.sphere.io',
    projectKey,
    credentials: {
      clientId: 'fgyRS5AEwnepwiGqrLSu_OuE',
      clientSecret: 'ZjdhiG0863sVtVoUyOzZ_6UfOxFebTka',
    },
    // scopes: ['manage_project:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.sphere.io',
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
    host: 'https://auth.sphere.io',
    projectKey,
    credentials: {
      clientId: 'pml8B7GrtDWLlbH3ssqc4uu1',
      clientSecret: '2F1l80t6IbqiYL0YvJTwN6x-gTrbEWE7',
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
    host: 'https://auth.sphere.io',
    projectKey,
    credentials: {
      clientId: 'cM8PvlG-3tFC6ixJBEkqDOt8',
      clientSecret: '8JxY8tm5hR7E8-5f6fZb6kwI4DJ85exg',
      user: {
				username: 'persona2@example.com',
				password: 'password',
			},
    },
    // scopes: ['manage_my_shopping_lists:training-20191024-def create_anonymous_token:training-20191024-def view_published_products:training-20191024-def manage_my_payments:training-20191024-def manage_my_profile:training-20191024-def manage_my_orders:training-20191024-def'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.sphere.io',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;
}



module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
module.exports.getMLClient = getMLClient;
module.exports.getMyAPIClient = getMyAPIClient;
