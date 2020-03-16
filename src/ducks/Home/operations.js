import Actions from './actions';

const dispatchGetPosts = (dispatch) => () => {
  dispatch(Actions.getPosts());
};

export default {
  dispatchGetPosts,
};
