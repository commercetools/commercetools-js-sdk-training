// helper values that we only need in trainings because multiple persons
// are trying to create the exact identical data

// Random String to create unique keys and skus that do not collide with others in the training
module.exports.random = Math.random().toString(36).substring(5);

// TODO 4.0: define your personal postfix for keys to not collide with others in the training
//           e.g. 'Firstname-Lastname'.  Must be allowed as a key field. 
// module.exports.personalPostfix = '';
module.exports.personalPostfix = 'Nikolaus-Kuehn';
