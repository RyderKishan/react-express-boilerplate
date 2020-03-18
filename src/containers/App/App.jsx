import React, { useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

import Operations from '../../ducks/App/operations';
import Selectors from '../../ducks/App/selectors';

import './App.css';
import Home from '../Home';
import Header from '../../components/Header';
import FallBack from '../../components/FallBack';

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
      <header>
        <Header appName="React Webpack" userDetails={userDetails} />
      </header>
      <article className="body">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" render={() => <div className="Contact">Contact</div>} />
          <Route path="/profile" render={() => <div className="Profile">Profile</div>} />
          <Route component={FallBack} />
        </Switch>
      </article>
    </div>
  );
};

export default withRouter(App);
