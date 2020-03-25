const express = require('express');
const LOG = require('../helpers/logger');

const router = express.Router();

const Api = require('../helpers/api');
const Mocks = require('../stubs/mocks');
const config = require('../config');
const { exceptionHandler } = require('../utils');

router.get('/env', (req, res) => {
  const { value } = req.query;
  res.json(value ? process.env[value] : process.env);
});

router.get('/userDetails', async (req, res) => {
  LOG.info('URI : Local');
  try {
    res.json(Mocks.userDetails);
  } catch (error) {
    exceptionHandler(error, res);
  }
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

router.get('/counts', async (req, res) => {
  const uri = 'https://api.covid19india.org/data.json';
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
