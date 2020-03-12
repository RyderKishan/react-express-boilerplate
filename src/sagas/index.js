import { all } from 'redux-saga/effects';
import appSagas from '../ducks/App/sagas';

export default function* rootSaga() {
  yield all([
    appSagas(),
  ]);
}
