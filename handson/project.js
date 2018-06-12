const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProject = function getProject() {
  // TODO: 1.4
  // Complete the getClient function in ./handson/client.js
  return getClient().then((client) => {

    // Use the request builder to execute project request


  });
};

module.exports.getProject = getProject;
