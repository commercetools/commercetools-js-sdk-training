const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
const getCredentials = require('@commercetools/get-credentials').getCredentials
const log = require('./logger.js').log;

//pass credentials (after creating env)
getCredentials('training-test').then(
    (credentials)=>{
        const authConfig = {
            host: 'https://auth.commercetools.com',
            projectKey: 'training-test',
            credentials,
            scopes: ['manage_project:training-test']
        }

    //create client
    const client = createClient({
      middlewares: [
        createAuthMiddlewareForClientCredentialsFlow(authConfig),
        createHttpMiddleware({ host: 'https://api.sphere.io' }),
      ]
    })

    const service = createRequestBuilder({
        projectKey: 'training-test'
    })

    const productsUri = service.products.byId("e16fc9d7-b92d-4b06-9182-4b381004a0ee").build()

    const productRequest = {
        uri: productsUri,
        method: 'GET',
    }

     return client.execute(productRequest)
 }).then(log).catch(log);