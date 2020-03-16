import {
  takeLatest, call, put,
} from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import combinedSaga, { TestExports } from './sagas';
import { GET_USER_DETAILS } from './constants';
import { setUserDetails } from './actions';
import Api from '../../api';
import Mocks from '../../../api/stubs/mocks';

describe('App :: Sagas -> watchGetUserDetails ', () => {
  it('Should trigger getUserDetails worker', () => {
    const saga = cloneableGenerator(TestExports.watchGetUserDetails)();
    expect(saga.next().value)
      .toEqual(takeLatest(GET_USER_DETAILS, TestExports.getUserDetails));
  });
});

describe('App :: Sagas -> getUserDetails', () => {
  const saga = cloneableGenerator(TestExports.getUserDetails)();
  it('Call userDetails api', () => {
    expect(saga.next().value)
      .toEqual(call(Api.get, '/userDetails'));
  });
  it('Api Success Case', () => {
    const gen = saga.clone();
    expect(gen.next(Mocks.userDetails).value)
      .toEqual(put(setUserDetails(Mocks.userDetails)));
    expect(gen.next().done)
      .toEqual(true);
  });
  it('Api Catch Block Case', () => {
    const gen = saga.clone();
    expect(gen.throw(new Error()).value)
      .toEqual(put(setUserDetails({})));
    expect(gen.next().done)
      .toEqual(true);
  });
});

describe('App :: Sagas -> combinedSaga', () => {
  const saga = cloneableGenerator(combinedSaga)();
  it('Export all sagas', () => {
    expect(saga.next().value).not.toBeUndefined();
  });
});
