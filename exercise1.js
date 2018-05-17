const client = require('./handson/client.js');
const projectKey = 'sdk-training-project';
const sdkRequestBuilder = require('@commercetools/api-request-builder');

client.getClient().then((client) => {
  console.log(client);

  const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
  const projectUri = requestBuilder.project.build();
  const projectRequest = {
    uri: projectUri,
    method: 'GET'
  };

  client.execute(projectRequest).then(result => {
    console.log(result);
  });

  //API Calls can be made without request builder.
  //Specify the uri manually
  /*
  const request = {
    uri: `/${projectKey}`,
    method: 'GET'
  }

  client.execute(request)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  */

});
