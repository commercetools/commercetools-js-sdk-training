const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const testGraphlQL = (copiedQuery) => { }

testGraphlQL('{ products { count } }')
.then(log)
.catch(log);
