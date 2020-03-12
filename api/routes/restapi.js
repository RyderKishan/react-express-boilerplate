const express = require('express');
const LOG = require('../helpers/logger');

const router = express.Router();

const API = require('../helpers/api');
const config = require('../config');

router.get('/users', (req, res) => {
  const uri = `${config.restapi}/users`;
  LOG.info(`URI : ${uri}`);
  API.get(uri, req.session)
    .then((response) => res.json(response))
    .catch((err) => res.status(err.status).json(err.data));
});

module.exports = router;
