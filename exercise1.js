const { getProject } = require('./handson/project.js');
const log = require('./logger.js').log;

// TODO 1: Complete the functions in
// ./handson/client.js
// ./handson/project.js
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

getProject()
    .then(log)
    .catch(log);
