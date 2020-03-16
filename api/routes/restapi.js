const express = require('express');
const LOG = require('../helpers/logger');

const router = express.Router();

const API = require('../helpers/api');
const config = require('../config');
const { exceptionHandler } = require('../utils');

router.get('/users', (req, res) => {
  const uri = `${config.restapi}/users`;
  LOG.info(`URI : ${uri}`);
  API.get(uri, req.session)
    .then((response) => res.json(response))
    .catch((err) => res.status(err.status).json(err.data));
});

router.get('/posts', async (req, res) => {
  const uri = `${config.restapi}/posts`;
  LOG.info(`URI : ${uri}`);
  try {
    const resp = await API.get(uri);
    res.json(resp);
  } catch (error) {
    res.status(500).json([]);
  }
});

router.get('/fail', (req, res) => {
  const uri = `${config.restapi}/postsa`;
  LOG.info(`URI : ${uri}`);
  try {
    const aa = [];
    aa.push(2);
    const resp = aa[4].toLocaleString();
    res.json(resp);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

module.exports = router;
