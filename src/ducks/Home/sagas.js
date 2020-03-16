import {
  put,
  call,
  takeLatest,
  all,
} from 'redux-saga/effects';
import * as Actions from './actions';
import * as Constants from './constants';
import Api from '../../api';

function* getPosts() {
  try {
    const posts = yield call(Api.get, '/posts');
    yield put(Actions.setPosts(posts));
  } catch (error) {
    yield put(Actions.setPosts([]));
  }
}

function* watchGetPosts() {
  yield takeLatest(Constants.GET_POSTS, getPosts);
}

export default function* homeSagas() {
  yield all([
    watchGetPosts(),
  ]);
}

export const TestExports = {
  homeSagas,
  watchGetPosts,
  getPosts,
};
