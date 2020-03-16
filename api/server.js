const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const Logger = require('./helpers/logger');
const config = require('./config');
// const auth = require('./auth');
// const options = require('./config/options');
const routes = require('./routes');

const PORT = config.serverPort;
const HTML_FILE = path.join(__dirname, '../build/index.html');
const app = express();

// app.set('trust proxy', 1);

app.use(morgan('tiny'));
// app.use(bodyParser.json());
// app.use(session(options.SESSION));
// app.use(options.falseSessionHandler);
app.use(express.static(path.join(__dirname, '../build')));

routes.bind(app);

app.get('/health', (req, res) => res.send('Server is up and running'));
app.get('*', (req, res) => {
  console.log('reach');
  if (HTML_FILE) {
    res.sendFile(HTML_FILE);
  } else {
    res.send('No HTML File');
  }
});

app.listen(PORT, () => console.log(`Server UP ==> 🌎  Listening on port ${PORT}`));
