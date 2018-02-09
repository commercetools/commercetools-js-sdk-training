const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
const getCredentials = require('@commercetools/get-credentials').getCredentials

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

    const productsUri = service.products.build()

    const productsRequest = {
        uri: productsUri,
        method: 'GET',
        body: {}
    }

     return client.execute(productsRequest)
 })
.then((products)=>{
    console.log(JSON.stringify(products,null,2))
    })
.catch((error)=> {
    console.error(error)
})