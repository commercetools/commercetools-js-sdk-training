const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')


const createRequest = (lastId) => {
    return {
        uri: createRequestBuilder({ projectKey }).products
            // .staged(true) if you use productProjections
            .where('id > "' + lastId + '"')
            .perPage(2)
            .build(),    
        method: 'GET',
    }
}

getClient().process(createRequest('1157068c-6812-400a-b60e-2c678effb729'), payload => {
        return payload.body.results
    })
    .then(result=> log(result))
    .catch(result=> log(result))


