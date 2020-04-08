import * as R from 'ramda';

const posts = (state) => R.pathOr([], ['home', 'posts'], state);
const isPostFetching = (state) => R.pathOr(false, ['home', 'isPostFetching'], state);

export {
  posts,
  isPostFetching,
};
