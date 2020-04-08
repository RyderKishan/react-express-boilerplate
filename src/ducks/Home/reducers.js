import * as Constants from './constants';

const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case Constants.GET_POSTS:
      return {
        ...state,
        isPostFetching: true,
      };
    case Constants.SET_POSTS:
      return {
        ...state,
        isPostFetching: false,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default HomeReducer;
