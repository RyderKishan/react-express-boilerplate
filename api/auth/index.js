const passport = require('passport');

const strategies = require('./strategies');
const config = require('../config');

const strategy = config.authenticationStrategy;

const localUser = {
  name: 'Loacl User',
  email: 'localuser@dev.com',
  id: 'AW123',
};

passport.protected = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/health');
  }
};

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  if (localUser.id === id) {
    return cb(null, localUser);
  }
  return cb(null, false);
});

passport.use(strategies[strategy]);

module.exports = passport;
