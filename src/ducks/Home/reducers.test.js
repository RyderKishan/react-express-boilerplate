
import reducer from './reducers';
import {
  SET_POSTS,
} from './constants';

const state = {};


describe('Home :: Reducers -> SET_POSTS', () => {
  const setPosts = {
    type: SET_POSTS,
    posts: [],
  };
  it('Action fired -> setPosts', () => {
    const expectedState = {
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
