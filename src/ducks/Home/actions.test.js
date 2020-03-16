import { getPosts, setPosts } from './actions';
import { GET_POSTS, SET_POSTS } from './constants';

describe('Home :: Actions -> getPosts', () => {
  it('GET_POSTS', () => {
    const expectedAction = {
      type: GET_POSTS,
    };
    const action = getPosts();
    expect(action).toEqual(expectedAction);
  });
});

describe('Home :: Actions -> setPosts', () => {
  it('SET_POSTS', () => {
    const expectedAction = {
      type: SET_POSTS,
      posts: [],
    };
    const action = setPosts([]);
    expect(action).toEqual(expectedAction);
  });
});
