const { searchProducts } = require('./handson/product.js');
const log = require('./logger.js').log;
// TODO 4.E : Implement a function that searches products by a given user search text
//            inside the products remaining after filtering out by attribute name and value 

searchProducts(
    // attributeName
    'authors',
    // attributeValue
    'JK. Rowling',
    // locale of user input
    'en',
    // userInput
    'JK. Rowling')
    .then(log)
    .catch(log);
