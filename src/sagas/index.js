import { all } from 'redux-saga/effects';
import appSagas from '../ducks/App/sagas';
import homeSagas from '../ducks/Home/sagas';

export default function* rootSaga() {
  yield all([
    appSagas(),
    homeSagas(),
  ]);
}
