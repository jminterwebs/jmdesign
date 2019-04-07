import 'index.css';

// React imports
import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

// Component, reducer, actions import
import App from 'components/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// http://extension.remotedev.io/
const reduxDevtoolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

render(
  <Provider store={createStoreWithMiddleware(reduxDevtoolsExtension)}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// registerServiceWorker()
