const client = require('./handson/client.js');
const projectKey = 'sdk-training-project';

client.getClient().then((client) => {
  console.log(client);

  const request = {
    uri: `/${projectKey}`,
    method: 'GET'
  }

  client.execute(request)
  .then(result => console.log(result))
  .catch(error => console.log(error));

});
