import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import Constants from '../constants';

export default function configureStore(preloadedState) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();

  // Push all the middlewares here
  middlewares.push(sagaMiddleware);
  middlewares.push(logger);
  const enhancers = [applyMiddleware(...middlewares)];

  // composeWithDevTools is only for the Development environment
  let composedEnhancers = {};
  if (Constants.PROD_ENVS.includes(process.env.NODE_ENV)) {
    composedEnhancers = compose(...enhancers);
  } else {
    composedEnhancers = composeWithDevTools(...enhancers);
  }

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
