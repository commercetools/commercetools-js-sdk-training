const { projectKey, getMLClient } = require('./handson/client.js');
const log = require('./logger.js').log;

// TODO Get a recommendation based on your product name
// TODO Get a recommendation based on the image of your product

const getCategoryRecommendationImage = (imageUrl) => { }

getCategoryRecommendationImage('https%3A%2F%2F6092a3a4dd8dd1feea96-67f46997294c0e674fe62e1e8667c1e2.ssl.cf3.rackcdn.com%2F201110-a-french-wine-X94nNnGQ.jpg')
    .then(log).catch(log);


