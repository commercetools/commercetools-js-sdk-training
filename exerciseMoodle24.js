const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createHttpExtensionDraft = () => {
  const httpDestination = {
    type : 'HTTP',
    url : 'http://www.test.com'
  };
  const triggers = [{
    resourceTypeId : 'cart',
    actions : ['Create']
  }];
  return {
    key : 'cart-create-test-extension',
    destination : httpDestination,
    triggers : triggers
  };
}

const setCartExtension = () => {
  return getClient().execute({     
    uri: createRequestBuilder({ projectKey }).extensions.build(),
    method: 'POST',
    body: createHttpExtensionDraft()
  })
};


setCartExtension()
.then(log)
.catch(log);
