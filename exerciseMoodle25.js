const log = require('./logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder')
const { getClient, projectKey } = require('./handson/client.js')

const testGraphlQL = (copiedQuery) => {

  const queryString = {
      query : 'query' + copiedQuery,
      variables : {}
  };
  return getClient().execute({     
    uri: `/${projectKey}` + '/graphql',
    method: 'POST',
    body: queryString
  })
};

testGraphlQL('{ products { count } }')
.then(log)
.catch(log);
