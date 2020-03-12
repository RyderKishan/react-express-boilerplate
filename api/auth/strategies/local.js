const LocalStrategy = require('passport-local').Strategy;

const localUser = {
  name: 'Loacl User',
  email: 'localuser@dev.com',
  id: 'AW123',
};

const local = new LocalStrategy(
  (username, password, cb) => {
    if (username === 'admin' && password === 'admin') {
      return cb(null, localUser);
    }
    return cb(null, false);
  },
);

module.exports = local;
