import { getUserDetails, setUserDetails } from './actions';
import { GET_USER_DETAILS, SET_USER_DETAILS } from './constants';

describe('App :: Actions -> getUserDetails', () => {
  it('GET_USER_DETAILS', () => {
    const expectedAction = {
      type: GET_USER_DETAILS,
    };
    const action = getUserDetails();
    expect(action).toEqual(expectedAction);
  });
});

describe('App :: Actions -> setUserDetails', () => {
  it('SET_USER_DETAILS', () => {
    const expectedAction = {
      type: SET_USER_DETAILS,
      userDetails: {},
    };
    const action = setUserDetails({});
    expect(action).toEqual(expectedAction);
  });
});
