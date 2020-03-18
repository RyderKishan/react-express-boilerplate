import * as R from 'ramda';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

function CustomException(error) {
  return {
    message: R.pathOr('', ['message'], error),
    status: R.pathOr(500, ['response', 'status'], error),
    url: R.pathOr('', ['response', 'config', 'url'], error),
    statusText: R.pathOr('', ['response', 'statusText'], error),
    data: R.pathOr(null, ['response', 'data'], error),
  };
}

const get = (endpoint, headers, options = {}) => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'GET',
    responseType: 'json',
    ...options,
  };
  return axios.get(endpoint,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new CustomException(error);
    });
};

const post = (endpoint, body, headers, options = {}) => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'POST',
    responseType: 'json',
    ...options,
  };
  return axios.post(endpoint, body,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new CustomException(error);
    });
};

const put = (endpoint, body, headers, options = {}) => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'x-correlation-id': uuid(),
  };
  const commonOptions = {
    method: 'POST',
    responseType: 'json',
    ...options,
  };
  return axios.put(endpoint, body,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new CustomException(error);
    });
};

export default {
  get,
  post,
  put,
};
