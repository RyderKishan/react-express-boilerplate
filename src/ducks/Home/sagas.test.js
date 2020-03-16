import {
  takeLatest, call, put,
} from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import combinedSaga, { TestExports } from './sagas';
import { GET_POSTS } from './constants';
import { setPosts } from './actions';
import Api from '../../api';
import Mocks from '../../../api/stubs/mocks';

describe('Home :: Sagas -> watchGetPosts ', () => {
  it('Should trigger getPosts worker', () => {
    const saga = cloneableGenerator(TestExports.watchGetPosts)();
    expect(saga.next().value)
      .toEqual(takeLatest(GET_POSTS, TestExports.getPosts));
  });
});

describe('Home :: Sagas -> getPosts', () => {
  const saga = cloneableGenerator(TestExports.getPosts)();
  it('Call getPosts api', () => {
    expect(saga.next().value)
      .toEqual(call(Api.get, '/posts'));
  });
  it('Api Success Case', () => {
    const gen = saga.clone();
    expect(gen.next(Mocks.posts).value)
      .toEqual(put(setPosts(Mocks.posts)));
    expect(gen.next().done)
      .toEqual(true);
  });
  it('Api Catch Block Case', () => {
    const gen = saga.clone();
    expect(gen.throw(new Error()).value)
      .toEqual(put(setPosts([])));
    expect(gen.next().done)
      .toEqual(true);
  });
});

describe('Home :: Sagas -> combinedSaga', () => {
  const saga = cloneableGenerator(combinedSaga)();
  it('Export all sagas', () => {
    expect(saga.next().value).not.toBeUndefined();
  });
});
