import * as R from 'ramda';

const userDetails = (state) => R.pathOr({}, ['app', 'userDetails'], state);
const userName = (state) => R.pathOr('', ['app', 'userDetails', 'name'], state);

export default {
  userDetails,
  userName,
};
