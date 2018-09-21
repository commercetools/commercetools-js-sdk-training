const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProject = function getProject() {
  // TODO: 1.4
  // Complete the getClient function in ./handson/client.js
  return getClient().then((client) => {

    // Use the request builder to execute project request
    // #region SOLUTION
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const projectUri = requestBuilder.project.build();
    const projectRequest = {
      uri: projectUri,
      method: 'GET'
    };

    return client.execute(projectRequest);
    // #region SOLUTION

  });
};

module.exports.getProject = getProject;
