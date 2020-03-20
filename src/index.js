import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

import App from './components/App';
import './css/output.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
