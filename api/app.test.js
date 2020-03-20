const request = require('supertest');
const express = require('./app');

describe('App Tests', () => {
  const app = request(express);
  it('/health - Success', (done) => {
    app.get('/health')
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        done();
      });
  });
});
