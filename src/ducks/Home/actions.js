import Constants from './constants';

const getPosts = () => ({
  type: Constants.GET_POSTS,
});

const setPosts = (posts) => ({
  type: Constants.SET_POSTS,
  posts,
});

export default {
  getPosts,
  setPosts,
};
