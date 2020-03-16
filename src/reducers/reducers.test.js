
import { createStore } from 'redux';
import rootReducer from '.';

const AppReducer = {
  userDetails: {
    name: 'name',
    email: 'email',
  },
};

const HomeReducer = {
  posts: [],
};

const preloadedState = {
  app: AppReducer,
  home: HomeReducer,
};

const store = createStore(rootReducer, preloadedState);

describe('Reducers Test', () => {
  it('AppReducer', () => {
    expect(store.getState().app).toBe(AppReducer);
  });
  it('HomeReducer', () => {
    expect(store.getState().home).toBe(HomeReducer);
  });
});
