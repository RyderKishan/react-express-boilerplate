const app = require('./app');
const config = require('./config');
const Logger = require('./helpers/logger');

const PORT = config.serverPort;

app.listen(PORT, () => Logger.info(`Server UP ==> 🌎 Listening on port ${PORT}`));
