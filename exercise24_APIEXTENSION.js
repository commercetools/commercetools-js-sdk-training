const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createHttpExtensionDraft = {
    key : 'cart-create-test-extension',
    destination : {
      type : 'HTTP',
      url : 'http://www.test.com'
    },
    triggers : [{
      resourceTypeId : 'cart',
      actions : ['Create']
    }]
};

const setCartExtension = () =>
  getClient().execute({     
    uri: createRequestBuilder({ projectKey }).extensions.build(),
    method: 'POST',
    body: createHttpExtensionDraft()
  })


setCartExtension()
.then(log)
.catch(log);
