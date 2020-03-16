const { posts, userDetails } = require('./mocks');

const stubs = {
  '/posts': posts,
  '/userDetails': userDetails,
};

module.exports = stubs;
