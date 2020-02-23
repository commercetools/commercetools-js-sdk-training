const { getClient, projectKey } = require('./handson/client.js');
const { getProductByKey, 
        getCategoryByKey, 
        assignProductToCategoryPROMISSES,
        assignProductToCategoryAwait } = require('./handson/product.js');
const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

// Day 1
// TODO Get product
// TODO Get category

getProductByKey('green-bordeaux').then(log).catch(log);

getCategoryByKey('wine-category').then(log).catch(log);

// Day 2
// TODO Assign product to category and publish

// VERSION 1: Using Promisses
assignProductToCategoryPROMISSES('green-bordeaux', 'wine-category').then(log).catch(log);

// VERSION 2: Using Await
assignProductToCategoryAwait('green-bordeaux', 'wine-category').then(log).catch(log);
