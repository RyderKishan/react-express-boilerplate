const router = require('express').Router();
const passport = require('passport');
const { authenticationStrategy } = require('../config');
const strategies = require('../auth/strategies');

router.get('/login',
  (req, res, next) => {
    passport.authenticate(strategies[authenticationStrategy].id,
      {
        response: res,
        prompt: 'login',
        failureRedirect: '/loginfailed',
        failureFlash: true,
        successRedirect: '/',
      })(req, res, next);
  });

router.post('/token',
  (req, res, next) => {
    passport.authenticate(strategies[authenticationStrategy].id,
      {
        response: res,
        failureRedirect: '/tokenfailed',
        failureFlash: true,
        successRedirect: '/',
      })(req, res, next);
  });

router.get('/token',
  (req, res, next) => {
    passport.authenticate(strategies[authenticationStrategy].id,
      {
        response: res,
        failureRedirect: '/tokenfailed',
        failureFlash: true,
        successRedirect: '/',
      })(req, res, next);
  });

router.get('/logOut',
  (req, res) => {
    req.session.destroy(() => {
      req.logout();
      res.redirect('/');
    });
  });

router.get('/tokenfailed', (req, res) => {
  res.json('Token failed');
});

router.get('/loginfailed', (req, res) => {
  res.json('Login failed');
});

module.exports = router;
