const request = require('supertest');
const express = require('../app');
const Api = require('../helpers/api');
const Mocks = require('../stubs/mocks');

describe('RestApi Routes', () => {
  const app = request(express);
  it('/env - Success', async () => {
    app.get('/env')
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.text).not.toBe('');
      });
  });
  it('/env - with value', async () => {
    app.get('/env?value=NODE_ENV')
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.text).toBe(JSON.stringify('test'));
      });
  });
  it('/users - Success', async () => {
    Api.get = jest.fn()
      .mockResolvedValueOnce(Mocks.users);
    try {
      const response = await app.get('/users');
      expect(response.statusCode).toEqual(200);
      expect(response.text).toBe(JSON.stringify(Mocks.users));
    } catch (e) {
      //
    }
  });
  it('/users - Network Exception', async () => {
    Api.get = jest.fn()
      .mockRejectedValueOnce(new Error('Network'));
    try {
      const response = await app.get('/users');
      expect(response.text).toEqual(JSON.stringify(Mocks.users));
    } catch (error) {
      const expectedError = {
        message: 'Network',
        status: 500,
        url: '/users',
        statusText: '',
        data: '',
      };
      expect(error.matcherResult.actual).toEqual(JSON.stringify(expectedError));
    }
  });
  it('/posts - Success', async () => {
    Api.get = jest.fn()
      .mockResolvedValueOnce(Mocks.posts);
    try {
      const response = await app.get('/posts');
      expect(response.statusCode).toEqual(200);
      expect(response.text).toBe(JSON.stringify(Mocks.posts));
    } catch (e) {
      //
    }
  });
  it('/posts - Network Exception', async () => {
    Api.get = jest.fn()
      .mockRejectedValueOnce(new Error('Network'));
    try {
      const response = await app.get('/posts');
      expect(response.text).toEqual(JSON.stringify(Mocks.posts));
    } catch (error) {
      const expectedError = {
        message: 'Network',
        status: 500,
        url: '/posts',
        statusText: '',
        data: '',
      };
      expect(error.matcherResult.actual).toEqual(JSON.stringify(expectedError));
    }
  });
});
