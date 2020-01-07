const { getClient, projectKey } = require('./handson/client.js');
const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

// TODO Get product
// TODO Get category
// TODO TOMORROW Assign product to category

const getProduct = (key) => { }


// Get the category
const getCategory = (key) => { }



// Day 2 VERSION 1: Using Promise
const assignProductToCategory = (productKey, categoryKey) => { }

assignProductToCategory('green-bordeaux-product', 'drinks-category').then(log).catch(log);


// Day 2 VERSION 2: Using Await
const assignProductToCategoryAwait = async (productKey, categoryKey) => { }
 
assignProductToCategoryAwait('green-bordeaux', 'drinks-category').then(log).catch(log);
