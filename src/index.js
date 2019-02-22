import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import ErrorBoundary from './components/errors/ErrorBoundary';
import store from './stores/configureStore';
//import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../src/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const test = (
  <div>
    <h1>Testing Hot Reload</h1>
  </div>
)

const history = createHistory();
const node1 = document.getElementById('container');
const body = (
  <Provider store={store}>
    <Router history={history}>
      <App store={store} />
    </Router>
  </Provider>
)

if (node1) {
  console.log('Entering application...');
  console.log('Store...', store);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    node1);
}
