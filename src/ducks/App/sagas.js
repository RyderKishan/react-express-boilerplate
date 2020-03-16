import {
  put,
  call,
  takeLatest,
  all,
} from 'redux-saga/effects';
import * as Actions from './actions';
import * as Constants from './constants';
import API from '../../api';

function* getUserDetails() {
  try {
    const userDetails = yield call(API.get, '/userDetails');
    // const userDetails = {
    //   name: 'Login User',
    //   email: 'Login.User@email.com',
    // };
    yield put(Actions.setUserDetails(userDetails));
  } catch (error) {
    yield put(Actions.setUserDetails({}));
  }
}

function* watchGetUserDetails() {
  yield takeLatest(Constants.GET_USER_DETAILS, getUserDetails);
}

export default function* appSagas() {
  yield all([
    watchGetUserDetails(),
  ]);
}

export const TestExports = {
  watchGetUserDetails,
  getUserDetails,
}