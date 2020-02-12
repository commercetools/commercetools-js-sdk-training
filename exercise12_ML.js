const { projectKey, getMLClient } = require('./handson/client.js');
const log = require('./logger.js').log;

// TODO Get a recommendation based on your product name
// TODO Get a recommendation based on the image of your product

const getCategoryRecommendationImage = (imageUrl) => 
    getMLClient().execute({
        uri: `/${projectKey}` + "/recommendations/general-categories?productImageUrl="
            + imageUrl,
        method: 'GET'
    })
getCategoryRecommendationImage('https%3A%2F%2Fcd187e7c6476e08608d8-d4aa998336568b97270285b27d1df4e5.ssl.cf3.rackcdn.com%2Fdownload-5kBYKfgz.jpg')
    .then(log).catch(log);


