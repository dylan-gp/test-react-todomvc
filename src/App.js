import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import AppContainer from './containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
