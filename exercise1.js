const { getProject } = require('./handson/project.js');
const log = require('./logger.js').log;

// Complete the functions in
// ./handson/client.js
// ./handson/project.js

// So this code displays the project information.
getProject()
    .then(log).catch(log);
