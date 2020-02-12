const log = require('./logger.js').log;
const { getClient, projectKey, getMyAPIClient } = require('./handson/client.js')
const { createCartDraft } = require('./handson/cart.js')


const createStoreDraft = {
      key : 'berlin-store',
      name : {
        en: 'Berlin-Store',
        de: 'Berlin-Haus'
      }
  };

const createStore = () => 
  getClient().execute({     
        uri: `/${projectKey}` + "/stores",
      method: 'POST',
      body: createStoreDraft
    })

const createInstoreCart = (customerId, storeKey) =>
  getMyAPIClient().execute({     
        uri: `/${projectKey}` + "/in-store/key=" + storeKey + "/me/carts",
        method: 'POST',
        body: createCartDraft({
            currency: 'EUR',
            country: 'DE',
            locale: 'de',
            customerId : customerId
          })
      })

createStoreAndInstoreCart = async (customerId) => {
      store = await createStore();
      cart = await createInstoreCart('a6f9eb52-35bc-4c88-942f-eca50f1058d3', store.body.key);
      return cart;
}


createStoreAndInstoreCart()
    .then(result=> log(result))
    .catch(result=> log(result))
