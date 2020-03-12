const express = require('express');

const router = express.Router();
const redisClient = require('../helpers/redisClient');
const LOG = require('../helpers/logger');

router.get('/get/:key', (req, res) => {
  LOG.debug(`Redis :: ${req.params.key}`);
  redisClient.get(req.params.key, (err, response) => {
    if (err) res.statusCode(404);
    res.json(JSON.parse(response));
  });
});

module.exports = router;
