const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
const getCredentials = require('@commercetools/get-credentials').getCredentials

getCredentials('training-test').then(
    (credentials)=>{
        const authConfig = {
            host: 'https://auth.commercetools.com',
            projectKey: 'training-test',
            credentials,
            scopes: ['manage_project:training-test']
        }

    const client = createClient({
      middlewares: [
        createAuthMiddlewareForClientCredentialsFlow(authConfig),
        createHttpMiddleware({ host: 'https://api.sphere.io' }),
      ]
    })

    const requestBuilder = createRequestBuilder({
        projectKey: 'training-test'
    })

    const productService = requestBuilder.products
    const productUri = productService.build()

    const productRequest = {
        uri: productUri,
        method: 'POST',
        body: {
            name: {"en":"my new product"},
	        productType: {
                "id": "3f416ec7-c93f-4d27-bc6a-4e6f0ad9a9a2",
                "typeId": "product-type"
	        },
	        slug: {"en": "my-new-product"}
        }
    }
     return client.execute(productRequest)
})
.then((product)=>{
    console.log(JSON.stringify(product,null,2))
    })
.catch((error)=> {
    console.error(error)
})