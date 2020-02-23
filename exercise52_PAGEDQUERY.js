const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')


const createRequest = (lastId) => { }


getClient().process(createRequest('1157068c-6812-400a-b60e-2c678effb729'), payload => {
        return payload.body.results
    })
    .then(result=> log(result))
    .catch(result=> log(result))


