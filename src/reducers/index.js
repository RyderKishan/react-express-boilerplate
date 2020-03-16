import { combineReducers } from 'redux';
import AppReducer from '../ducks/App/reducers';
import HomeReducer from '../ducks/Home/reducers';

const rootReducer = combineReducers({
  app: AppReducer,
  home: HomeReducer,
});

export default rootReducer;
