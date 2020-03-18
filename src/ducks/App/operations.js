import * as Actions from './actions';

const dispatchGetUserDetails = (dispatch) => () => {
  dispatch(Actions.getUserDetails());
};

const dispatchSetUserDetails = (dispatch) => (userDetails) => {
  dispatch(Actions.setUserDetails(userDetails));
};

export default {
  dispatchGetUserDetails,
  dispatchSetUserDetails,
};
