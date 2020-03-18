import Axios from 'axios';
import Api from '.';

jest.mock('axios');

describe('Api Tests', () => {
  it('Get - Success', async () => {
    Axios.get = jest.fn().mockResolvedValueOnce({ data: 'value' });
    expect(await Api.get('http://localhost:7400/ping')).toEqual('value');
  });
  it('Get - Network Fail', async () => {
    const error = {
      data: null,
      message: '',
      status: 404,
      statusText: '',
      url: '',
    };
    const axiosResponse = { response: { status: 404 } };
    Axios.get = jest.fn().mockRejectedValueOnce(axiosResponse);
    let response;
    try {
      response = await Api.get('http://localhost:7400/ping');
    } catch (e) {
      response = e;
    }
    expect(response).toEqual(error);
  });
  it('Post - Success', async () => {
    Axios.post = jest.fn().mockResolvedValueOnce({ data: 'value' });
    expect(await Api.post('http://localhost:7400/ping', {})).toEqual('value');
  });
  it('Post - Network Fail', async () => {
    const error = {
      data: null,
      message: '',
      status: 404,
      statusText: '',
      url: '',
    };
    const axiosResponse = { response: { status: 404 } };
    Axios.post = jest.fn().mockRejectedValueOnce(axiosResponse);
    let response;
    try {
      response = await Api.post('http://localhost:7400/ping');
    } catch (e) {
      response = e;
    }
    expect(response).toEqual(error);
  });
  it('Put - Success', async () => {
    Axios.put = jest.fn().mockResolvedValueOnce({ data: 'value' });
    expect(await Api.put('http://localhost:7400/ping', {})).toEqual('value');
  });
  it('Put - Network Fail', async () => {
    const error = {
      data: null,
      message: '',
      status: 404,
      statusText: '',
      url: '',
    };
    const axiosResponse = { response: { status: 404 } };
    Axios.put = jest.fn().mockRejectedValueOnce(axiosResponse);
    let response;
    try {
      response = await Api.put('http://localhost:7400/ping');
    } catch (e) {
      response = e;
    }
    expect(response).toEqual(error);
  });
});
