const config = {
  restapi: process.env.REST_API || 'https://jsonplaceholder.typicode.com',
  serverPort: 7400,
  redisPort: 6379,
  useRedis: false,
  cookieExpireMinutes: 5,
  redisHost: 'localhost',
  authenticationStrategy: 'google',
};

module.exports = config;
