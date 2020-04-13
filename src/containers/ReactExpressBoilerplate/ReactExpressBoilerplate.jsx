import React, { useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

import * as Actions from '../../ducks/App/actions';
import * as Selectors from '../../ducks/App/selectors';

import './ReactExpressBoilerplate.css';
import Home from '../Home';
import Header from '../../components/Header';
import FallBack from '../../components/FallBack';

const ReactExpressBoilerplate = () => {
  const dispatch = useDispatch();
  const getUserDetails = () => dispatch(Actions.getUserDetails());
  const {
    userDetails,
  } = useSelector((state) => ({
    userDetails: Selectors.userDetails(state),
  }),
  shallowEqual);
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="ReactExpressBoilerplate">
      <header>
        <Header appName="React Webpack" userDetails={userDetails} />
      </header>
      <article className="body">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" render={() => <div className="Contact">Contact</div>} />
          <Route path="/about" render={() => <div className="About">About</div>} />
          <Route component={FallBack} />
        </Switch>
        <footer>
          C @ Balkishan S
        </footer>
      </article>
    </div>
  );
};

export default withRouter(ReactExpressBoilerplate);
