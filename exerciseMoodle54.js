const log = require('./logger.js').log;
const { getClient, projectKey, getMyAPIClient } = require('./handson/client.js')
const { createCartDraft } = require('./handson/cart.js')


const createStoreDraft = () => {
    return {
      key : 'berlin-store',
      name : {
        en: 'Berlin-Store',
        de: 'Berlin-Haus'
      }
    };
}

const createStore = () => {
    return getClient().execute({     
        uri: `/${projectKey}` + "/stores",
      method: 'POST',
      body: createStoreDraft()
    })
};

const createInstoreCart = (customerId, storeKey) => {
    return getMyAPIClient().execute({     
        uri: `/${projectKey}` + "/in-store/key=" + storeKey + "/me/carts",
        method: 'POST',
        body: createCartDraft({
            currency: 'EUR',
            country: 'DE',
            locale: 'de',
            customerId : customerId
          })
      })
}

createStoreAndInstoreCart = async (customerId) => {
      store = await createStore();
      cart = await createInstoreCart('c5852aa6-bee3-4bf9-a603-bb8782d34349', store.body.key);
      return cart;
}


createStoreAndInstoreCart()
    .then(result=> log(result))
    .catch(result=> log(result))
