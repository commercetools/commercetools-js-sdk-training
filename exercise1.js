const client = require('./handson/client.js');
const sdkRequestBuilder = require('@commercetools/api-request-builder');
const projectKey = 'sdk-training-project';

// Complete the getClient function in ./handson/client.js
client.getClient().then((client) => {
  // TODO: 1.4s
  // Use the request builder to execute project request

  // #region SOLUTION

  const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
  const projectUri = requestBuilder.project.build();
  const projectRequest = {
    uri: projectUri,
    method: 'GET'
  };

  client.execute(projectRequest).then(result => {
    console.log(result);
  });

  // API Calls can be made without request builder.
  // You can Specify the uri manually
  // Best practice is to use request 
  /*
  const request = {
    uri: `/${projectKey}`,
    method: 'GET'
  }

  client.execute(request)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  */

  // #endregion

});
