const local = require('./local');
const google = require('./google');

module.exports = {
  local: {
    name: 'Local Strategy',
    id: 'local',
    strategy: local,
  },
  google: {
    name: 'GoogleStrategy',
    id: 'google',
    strategy: google,
  },
};
