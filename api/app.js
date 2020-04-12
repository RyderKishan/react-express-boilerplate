const path = require('path');
const os = require('os');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser');
require('dotenv').config();

const Logger = require('./helpers/logger');
const Stubs = require('./stubs');
// const auth = require('./auth');
const routes = require('./routes');

const HTML_FILE = path.join(__dirname, '../build/index.html');
const app = express();

const { MOCK, MOCK_DELAY = '0' } = process.env;
const mock = MOCK === 'true';
const mockDelay = parseInt(MOCK_DELAY, 10);

app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use(session({
  genid: () => uuid(),
  name: 'sessionID',
  secret: 'Can\' tell you',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 5 * 100 * 60,
    secure: true,
  },
}));

app.use(morgan((tokens, req, res) => JSON.stringify({
  method: tokens.method(req, res),
  status: tokens.status(req, res),
  tokens: tokens.url(req, res),
  body: JSON.stringify(req.body),
  time: `${tokens['response-time'](req, res)} ms`,
}), { stream: Logger.stream }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
  const { url } = req;
  if (mock && Stubs[url]) {
    Logger.debug(`Mocking url - ${url}`);
    setTimeout(() => {
      res.json(Stubs[url]);
    }, mockDelay);
  } else {
    next();
  }
});

routes.bind(app);

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Application UP!', containerName: os.hostname(), timeStamp: new Date() });
});

app.get('*', (req, res) => {
  if (HTML_FILE) {
    res.sendFile(HTML_FILE);
  } else {
    res.send('No HTML File');
  }
});

module.exports = app;
