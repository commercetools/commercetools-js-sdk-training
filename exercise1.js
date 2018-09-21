const { getProject } = require('./handson/project.js');


// Complete the functions in
// ./handson/client.js
// ./handson/project.js
// So this code displays the project information.
getProject().then(result => {
  console.log(result);
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
