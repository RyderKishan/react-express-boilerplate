const express = require('express');
const LOG = require('../helpers/logger');

const router = express.Router();

const Api = require('../helpers/api');
const config = require('../config');
const { exceptionHandler } = require('../utils');

router.get('/env', (req, res) => {
  const { value } = req.query;
  res.json(value ? process.env[value] : process.env);
});

router.get('/users', async (req, res) => {
  const uri = `${config.restapi}/users`;
  LOG.info(`URI : ${uri}`);
  try {
    const resp = await Api.get(uri);
    res.json(resp);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

router.get('/posts', async (req, res) => {
  const uri = `${config.restapi}/posts`;
  LOG.info(`URI : ${uri}`);
  try {
    const resp = await Api.get(uri);
    res.json(resp);
  } catch (error) {
    exceptionHandler(error, res);
  }
});

module.exports = router;
