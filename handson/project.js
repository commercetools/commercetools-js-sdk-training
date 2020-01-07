const { getClient, projectKey } = require('./client.js');

const getProject = () => {

  return getClient().execute({
    uri: `/${projectKey}`,               
    method: 'GET'                        
  })
  
};

module.exports.getProject = getProject;