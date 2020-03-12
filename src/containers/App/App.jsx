import React, { useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import Operations from '../../ducks/App/operations';
import Selectors from '../../ducks/App/selectors';

import './App.css';
import Home from '../Home';
import Header from '../../components/Header';

const App = () => {
  const dispatch = useDispatch();
  const getUserDetails = Operations.dispatchGetUserDetails(dispatch);
  const {
    userDetails,
  } = useSelector(
    (state) => ({
      userDetails: Selectors.userDetails(state),
    }),
    shallowEqual,
  );
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route path="/" render={() => <Home userDetails={userDetails} />} />
      <Route path="/contact" render={() => <div>Contact</div>} />
      <Route path="/profile" render={() => <div>Profile</div>} />
    </div>
  );
};

export default withRouter(App);
