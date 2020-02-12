const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const createStateDraft = (key, stateType, initial) => ({
    key,
    type : stateType,
    name : {
      en : key
    },
    initial
})

const createState = (key, stateType, initial) =>
  getClient().execute({     
      uri: createRequestBuilder({ projectKey }).states.build(),
      method: 'POST',
      body: createStateDraft(key, stateType, initial)
  })

const createStateMachine = async () => {
  orderPackedState = await createState('OrderPackedNew1', 'OrderState', true);
  orderShippedState = await createState('OrderShippedNew1', 'OrderState', true);

  const updateActions = [{
    action: 'setTransitions',
    transitions: [{
      typeId: 'state',
      id: orderShippedState.body.id
    }]
  }];
  return getClient().execute({     
    uri: createRequestBuilder({ projectKey }).states.byId(orderPackedState.body.id).build(),
    method: 'POST',
    body: {
      version: orderPackedState.body.version,
      actions: updateActions
    }
  })
};

createStateMachine()
.then(log)
.catch(log);
