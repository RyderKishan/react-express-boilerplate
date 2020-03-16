import configureStore from '.';

const preloadedState = {
  app: {
    userDetails: {
      name: 'name',
      email: 'email',
    },
  },
  home: {
    posts: [],
  },
};

describe('Stores Test', () => {
  const store = configureStore(preloadedState);
  it('Check Reducers', () => {
    expect(store.getState().app)
      .toEqual(preloadedState.app);
    expect(store.getState().home)
      .toEqual(preloadedState.home);
  });
});
