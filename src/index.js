import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



import fetchReducer from './reducers/fetchReducer'

import './index.css';
import App from './App';

const store = createStore(fetchReducer, applyMiddleware(thunk,logger));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const stores = createStore(fetchReducer,/* preloadedState, */ composeEnhancers(  applyMiddleware(thunk,logger)
 ));

ReactDOM.render(
    <Provider store={stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);


