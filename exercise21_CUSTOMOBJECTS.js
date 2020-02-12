const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')


const createHighestCartDraft = {
    container : 'Business-Analysis',
    key : 'highest-cart',
    value : {
      bestCustomer : 'peter-miller-02',
      highestCart : {
        value : 6345334,
        orderID : 142342
        }
      }
    }

const createCustomObject = () =>
    getClient().execute({     
      uri: createRequestBuilder({ projectKey }).customObjects.build(),
      method: 'POST',
      body: createHighestCartDraft
    })

createCustomObject()
  .then(log)
  .catch(log);

