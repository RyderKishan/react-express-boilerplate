import * as R from 'ramda';

const posts = (state) => R.pathOr([], ['home', 'posts'], state);
const feed = (state) => R.pathOr([], ['home', 'feed'], state);

export {
  posts,
  feed,
};
