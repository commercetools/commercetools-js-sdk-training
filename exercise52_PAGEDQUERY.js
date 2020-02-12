const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')


const createRequest = (lastId) => ({
        uri: createRequestBuilder({ projectKey }).products
            // .staged(true) if you use productProjections
            .where('id > "' + lastId + '"')
            .perPage(2)
            .build(),    
        method: 'GET',
    })

getClient().process(createRequest('d0a839da-d879-4d0a-b1fa-b52797a5b07c'), payload => {
        return payload.body.results
    })
    .then(result=> log(result))
    .catch(result=> log(result))


