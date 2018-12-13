const { searchProducts } = require('./handson/product.js');
const log = require('./logger.js').log;
// TODO 4.E : Implement a function that searches products by a given user search text

searchProducts('colehan')
    .then(log)
    .catch(log);
