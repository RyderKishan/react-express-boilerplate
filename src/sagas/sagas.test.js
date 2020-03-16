import {
  all,
} from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import appSagas from '../ducks/App/sagas';
import homeSagas from '../ducks/Home/sagas';

import rootSaga from '.';

describe('Sagas -> rootSaga', () => {
  const saga = cloneableGenerator(rootSaga)();
  it('Export all sagas', () => {
    expect(saga.next().value)
      .toEqual(all([appSagas(), homeSagas()]));
  });
});
