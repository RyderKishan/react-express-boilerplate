const uuid = require('uuid');

const config = require('../config');

const COOKIE_EXPIRE = config.cookieExpireMinutes * 1000 * 60;

const options = {
  tokenFn: (tokens, req, res) => JSON.stringify({
    method: tokens.method(req, res),
    status: tokens.status(req, res),
    tokens: tokens.url(req, res),
    body: JSON.stringify(req.body),
    time: `${tokens['response-time'](req, res)} ms`,
  }),
  falseSessionHandler: (req, res, next) => {
    if (!req.session) {
      return next(new Error('No Session'));
    }
    return next();
  },
  SESSION: {
    genid: () => uuid(),
    secret: 'I cant tell you',
    cookie: { secure: true, maxAge: COOKIE_EXPIRE },
    resave: false,
    saveUninitialized: true,
  },
};

module.exports = options;
