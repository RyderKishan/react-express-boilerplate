import * as R from 'ramda';

const userDetails = (state) => R.pathOr({}, ['app', 'userDetails'], state);
const userName = (state) => R.pathOr('', ['app', 'userDetails', 'name'], state);
const userEmail = (state) => R.pathOr('', ['app', 'userDetails', 'email'], state);

export {
  userDetails,
  userName,
  userEmail,
};
