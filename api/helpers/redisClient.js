const redis = require('redis');
const LOG = require('../helpers/logger');
const config = require('../config');

const REDIS_PORT = config.redisPort;
const REDIS_HOST = config.redisHost;

const onRedisError = (err) => {
  LOG.error(`Redis Error -- ****  ${err}`);
};

const onRedisReady = () => {
  LOG.info('Redis Ready -- ****  ');
};

const onRedisConnect = () => {
  LOG.info('Redis Connected -- ****  ');
};

const redisClientOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  prefix: 'EXPRESS-SESS-',
  db: 0,
};

const client = redis.createClient(redisClientOptions);

client.on('error', onRedisError);
client.on('ready', onRedisReady);
client.on('connect', onRedisConnect);

module.exports = client;
