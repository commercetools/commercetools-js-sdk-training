const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createHttpExtensionDraft = () => { }

const setCartExtension = () => { }



setCartExtension()
.then(log)
.catch(log);
