const passport = require('passport');
const strategies = require('./strategies');
const { authenticationStrategy } = require('../config');

passport.protected = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
  return null;
};

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((id, done) => done(null, id));

passport.use(strategies[authenticationStrategy].strategy);

module.exports = passport;
