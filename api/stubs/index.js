const { posts, userDetails, users } = require('./mocks');

const stubs = {
  '/users': users,
  '/posts': posts,
  '/userDetails': userDetails,
};

module.exports = stubs;
