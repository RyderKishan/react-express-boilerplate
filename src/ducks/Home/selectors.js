import * as R from 'ramda';

const posts = (state) => R.pathOr([], ['home', 'posts'], state);

export default {
  posts,
};
