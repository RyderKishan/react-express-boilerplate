import Constants from './constants';

const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case Constants.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};

export default HomeReducer;
