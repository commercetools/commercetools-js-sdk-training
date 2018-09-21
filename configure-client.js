const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const createRequestBuilder = require('@commercetools/api-request-builder').createRequestBuilder
const getCredentials = require('@commercetools/get-credentials').getCredentials

// create .env
// then pass credentials
getCredentials('training-test').then( // returns a promise
    (credentials)=>{
        const authConfig = {
            host: 'https://auth.commercetools.com',
            projectKey: 'training-test',
            credentials,
            scopes: ['manage_project:training-test']
        }

        //create client
        const client = createClient(
            {
                middlewares: [
                    createAuthMiddlewareForClientCredentialsFlow(authConfig),
                    createHttpMiddleware({ host: 'https://api.sphere.io' }),
                ]
            }
        )
    }
)