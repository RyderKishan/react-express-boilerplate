
import reducer from './reducers';
import {
  SET_POSTS, GET_POSTS,
} from './constants';

const state = {};

describe('Home :: Reducers -> GET_POSTS', () => {
  const getPosts = {
    type: GET_POSTS,
  };
  it('Action fired -> getPosts', () => {
    const expectedState = {
      isPostFetching: true,
    };
    expect(reducer(state, getPosts)).toEqual(expectedState);
  });
});

describe('Home :: Reducers -> SET_POSTS', () => {
  const setPosts = {
    type: SET_POSTS,
    posts: [],
  };
  it('Action fired -> setPosts', () => {
    const expectedState = {
      isPostFetching: false,
      posts: [],
    };
    expect(reducer(state, setPosts)).toEqual(expectedState);
  });
});

describe('Home :: Reducers -> Empty', () => {
  const defaultAction = {
    type: 'DEFAULT_ACTION',
  };
  it('Action fired -> defaultAction', () => {
    expect(reducer(undefined, defaultAction)).toEqual({});
  });
});
