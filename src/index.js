import '@babel/polyfill';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import * as reducers from './store/reducers/index';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';


import App from './app';
import './global_css/index.scss';

global.joinName = (...args) => {
    return args.reduce((pre, cur, index) => {
        return !!cur ? pre + ' ' + cur : pre;
    }, '')
};

global.store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

ReactDom.render(<App />, document.getElementById('react-app'));