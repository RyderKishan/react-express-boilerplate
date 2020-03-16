import {
  put,
  call,
  takeLatest,
  all,
} from 'redux-saga/effects';
import Actions from './actions';
import Constants from './constants';
import API from '../../api';

function* getPosts() {
  try {
    const posts = yield call(API.get, 'https://jsonplaceholder.typicode.com/posts');
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
