import * as Constants from './constants';

const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case Constants.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };

    default:
      return state;
  }
};

export default AppReducer;
