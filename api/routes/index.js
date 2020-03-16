// const restapi = require('./restapi');
// const redis = require('./redis');
const auth = require('./auth');

exports.bind = (app) => {
  app.use('/api', auth);
  // app.use('/api/restapi', restapi);
  // app.use('/api/redis', redis);
};
