const { getClient, projectKey } = require('./handson/client.js');
const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

// TODO Get product
// TODO Get category
// TODO TOMORROW Assign product to category

const getProduct = (key) =>
    getClient().execute({
        uri: createRequestBuilder({projectKey}).products.byKey(key).build(),
        method: 'GET'
    })

// Get the category
const getCategory = (key) =>
getClient().execute({
    uri: createRequestBuilder({projectKey}).categories.byKey(key).build(),
    method: 'GET'
})



// Day 2 VERSION 1: Using Promise
const assignProductToCategory = (productKey, categoryKey) => 
    getProduct(productKey)
        .then (
            (currentProduct) => {
                const updateActions = [{
                    action: 'addToCategory',
                    category : {
                        key: categoryKey
                    }
                }];
            return getClient().execute({
                uri: createRequestBuilder({projectKey}).products.byKey(productKey).build(),
                method: 'POST',
                body: {
                    version: currentProduct.body.version,
                    actions: updateActions
                }
            })    
            }
    )
assignProductToCategory('green-bordeaux-product', 'drinks-category').then(log).catch(log);


// Day 2 VERSION 2: Using Await
const assignProductToCategoryAwait = async (productKey, categoryKey) => {
    const product = await getProduct(productKey);
    const updateActions = [{
        action: 'addToCategory',
        category : {
            key: categoryKey
        }
    }];
    return getClient().execute({
                uri: createRequestBuilder({projectKey}).products.byKey(productKey).build(),
                method: 'POST',
                body: {
                    version: product.body.version,
                    actions: updateActions
                }
            })    
}
assignProductToCategoryAwait('green-bordeaux', 'drinks-category').then(log).catch(log);
