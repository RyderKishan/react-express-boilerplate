const restapi = require('./restapi');
// const auth = require('./auth');

exports.bind = (app) => {
  app.use(restapi);
  // app.use('/api', auth);
};
