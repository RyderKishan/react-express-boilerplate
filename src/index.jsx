import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ReactExpressBoilerplate from './containers/ReactExpressBoilerplate';
import configureStore from './stores';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <ReactExpressBoilerplate />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
