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

     const cartUri = requestBuilder.carts
            .byId('35a66203-effe-47ff-897d-797f110e6804').build()

     const cartRequest = {
           uri: cartUri,
           method: 'POST',
           body: {
                    "version": 5,
                    "actions":[{
                        "action":"addLineItem",
                        "sku":"M0E20000000EEFA",
                    },
                    {
                        "action":"setShippingAddress",
                         "address":{
                            "country":"DE"
                         }
                    }

                    ]
                 }
     }

     return client.execute(cartRequest)
 })
 .then((cart)=>{
    console.log(JSON.stringify(cart,null,2))})
 .catch((error)=> {
    console.error(error)
})