
import reducer from './reducers';
import {
  SET_USER_DETAILS,
} from './constants';

const state = {};


describe('App :: Reducers -> SET_USER_DETAILS', () => {
  const setUserDetails = {
    type: SET_USER_DETAILS,
    userDetails: {},
  };
  it('Action fired -> setUserDetails', () => {
    const expectedState = {
      userDetails: {},
    };
    expect(reducer(state, setUserDetails)).toEqual(expectedState);
  });
});

describe('App :: Reducers -> Empty', () => {
  const defaultAction = {
    type: 'DEFAULT_ACTION',
  };
  it('Action fired -> defaultAction', () => {
    expect(reducer(undefined, defaultAction)).toEqual({});
  });
});
