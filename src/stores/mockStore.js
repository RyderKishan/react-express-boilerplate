import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const createMockStore = configureMockStore(middlewares);
const createState = (initialState) => (actions) => actions.reduce(rootReducer, initialState);


const initialState = createState({});
const store = createMockStore(initialState);

export default store;
