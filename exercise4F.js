const { searchProducts } = require('./handson/product.js');
const log = require('./logger.js').log;
// TODO 4.E : Implement a function that searches products by a given user search text
//            inside the products remaining after filtering out by attribute name and value 

searchProducts(
    // attributeName
    'brand',
    // attributeValue
    'ColeHaan',
    // locale of user input
    'en',
    // userInput
    'Zero Grand')
    .then(log)
    .catch(log);
