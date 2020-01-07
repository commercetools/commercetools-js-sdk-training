const { getCustomerById } = require('./handson/customer.js');
const { getCustomerByKey } = require('./handson/customer.js');
const log = require('./logger.js').log;

// Get both customers

getCustomerById("c5852aa6-bee3-4bf9-a603-bb8782d34349")
    .then(log)
    .catch(log);
getCustomerByKey("petermiller02")
     .then(log)
    .catch(log);