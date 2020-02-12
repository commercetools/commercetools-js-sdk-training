const { getProject } = require('./handson/project.js');
const { getShippingMethodById, getShippingMethodByIdWithoutBuilder } = require('./handson/cart.js');
const { getTaxCategoryByKey } = require('./handson/taxCategory.js');
const log = require('./logger.js').log;

// TODO 1: Complete the functions in
// ./handson/client.js
// ./handson/project.js
// ./handson/taxCategory.js
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project


// getProject().then(log).catch(log);

// getShippingMethodByIdWithoutBuilder("f1006fd9-a0d4-46b1-9304-797d9c3a461e").then(log).catch(log);

// TODO
//getShippingMethodById("f1006fd9-a0d4-46b1-9304-797d9c3a461e").then(log).catch(log);

getTaxCategoryByKey("vat").then(log).catch(log);

