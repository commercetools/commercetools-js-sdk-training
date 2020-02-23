const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createStateDraft = (key, stateType, initial) => { }

const createState = (key, stateType, initial) => { }

const createStateMachine = async () => { }


createStateMachine()
.then(log)
.catch(log);
