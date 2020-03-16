import * as Constants from './constants';

const getUserDetails = () => ({
  type: Constants.GET_USER_DETAILS,
});

const setUserDetails = (userDetails) => ({
  type: Constants.SET_USER_DETAILS,
  userDetails,
});

export {
  getUserDetails,
  setUserDetails,
};
