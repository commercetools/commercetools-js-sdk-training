const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createTypeDraft = () => {
  return {
    key: 'customer-shoesize',
    name : {
      en : 'shoe size of the customer',
    },
    resourceTypeIds : ['customer'],
    fieldDefinitions: [{
        name: 'size',
        type: { name: 'String' },
        required: false,
        label: { en: 'shoe size', de: 'Schuhgröße' },
        inputHint: 'SingleLine'
      }]
  };
}

const createCustomerExtension = () => {
    return getClient().execute({     
      uri: createRequestBuilder({ projectKey }).types.build(),
      method: 'POST',
      body: createTypeDraft()
    })
};

createCustomerExtension()
  .then(log)
  .catch(log);

