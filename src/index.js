import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const initialState = {};

const store = createStore(reducer, initialState, applyMiddleware(reduxThunk))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
