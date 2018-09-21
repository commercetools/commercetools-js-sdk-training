const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
const getCredentials = require('@commercetools/get-credentials').getCredentials

//pass credentials (after creating env)
getCredentials('training-test').then((credentials)=>{
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

     const requestBuilder = createRequestBuilder({
          projectKey: 'training-test'
        })

     const orderUri = requestBuilder.orders.build()

     const orderRequest = {
           uri: orderUri,
           method: 'POST',
           body: {
                    "id":"35a66203-effe-47ff-897d-797f110e6804",
                    "version":11
                 }
     }

     return client.execute(orderRequest)
 })
 .then((cart)=>{
    console.log(JSON.stringify(cart,null,2))})
 .catch((error)=> {
    console.error(error)
})