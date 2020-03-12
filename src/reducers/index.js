import { combineReducers } from 'redux';
import AppReducer from '../ducks/App/reducers';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;
